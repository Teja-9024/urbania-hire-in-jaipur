import { NextRequest, NextResponse } from "next/server";
import { enquirySchema, tripTypeOptions, type EnquiryFormValues } from "@/lib/validations/enquiry";

/**
 * Enquiry intake endpoint. Validates with the shared Zod schema, drops
 * honeypot hits, rate-limits per IP, then emails the enquiry to the owner
 * through Resend (plain REST call, no SDK).
 *
 * The enquiry form also opens WhatsApp for the customer, so this email is the
 * business's own copy of every lead, including customers who never tap send.
 *
 * Env (server only, see .env.example):
 *   RESEND_API_KEY, ENQUIRY_NOTIFICATION_EMAIL, ENQUIRY_FROM_EMAIL (optional),
 *   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN (optional shared rate limit).
 */
const RATE_LIMIT_WINDOW_SECONDS = 60;
const RATE_LIMIT_MAX_REQUESTS = 5;

// Fallback when Upstash is not configured. Serverless instances do not share
// memory, so this only slows down casual abuse on a single instance.
const requestLog = new Map<string, number[]>();

function isRateLimitedInMemory(ip: string): boolean {
  const now = Date.now();
  const windowMs = RATE_LIMIT_WINDOW_SECONDS * 1000;
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

async function isRateLimited(ip: string): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return isRateLimitedInMemory(ip);

  try {
    const key = `enquiry:${ip}`;
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, String(RATE_LIMIT_WINDOW_SECONDS), "NX"],
      ]),
    });
    if (!res.ok) return isRateLimitedInMemory(ip);
    const [incr] = (await res.json()) as { result?: number }[];
    return (incr?.result ?? 0) > RATE_LIMIT_MAX_REQUESTS;
  } catch {
    // Never block a real customer because the rate-limit store is down.
    return isRateLimitedInMemory(ip);
  }
}

/** Strips control characters and collapses whitespace so values are safe in a subject line. */
function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

type Enquiry = Omit<EnquiryFormValues, "website">;

function enquiryRows(enquiry: Enquiry, ip: string): [string, string][] {
  const tripLabel = tripTypeOptions.find((o) => o.value === enquiry.tripType)?.label ?? enquiry.tripType;
  return [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["WhatsApp", `https://wa.me/91${enquiry.phone}`],
    ["Pickup city", enquiry.pickupCity],
    ["Drop city", enquiry.dropCity || "-"],
    ["Travel date", enquiry.travelDate],
    ["Passengers", String(enquiry.passengers)],
    ["Trip type", tripLabel],
    ["Message", enquiry.message || "-"],
    ["IP", ip],
  ];
}

async function sendEnquiryEmail(enquiry: Enquiry, ip: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_NOTIFICATION_EMAIL;
  if (!apiKey || !to) return false;

  const rows = enquiryRows(enquiry, ip);
  const subject = singleLine(
    `New enquiry: ${enquiry.pickupCity}${enquiry.dropCity ? ` to ${enquiry.dropCity}` : ""}, ${enquiry.passengers} pax (${enquiry.name})`,
  );
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html =
    `<h2>New enquiry from the website</h2><table cellpadding="6" style="border-collapse:collapse">` +
    rows
      .map(
        ([label, value]) =>
          `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("") +
    `</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL ?? "Urbania Hire Enquiries <onboarding@resend.dev>",
      to: to.split(",").map((address) => address.trim()),
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[enquiry] Resend rejected the email", res.status, await res.text());
    return false;
  }
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (await isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid enquiry data.", issues: parsed.error.flatten() }, { status: 400 });
  }

  // Honeypot: real users never populate this field.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const { website, ...enquiry } = parsed.data;
  void website;

  const emailConfigured = Boolean(process.env.RESEND_API_KEY && process.env.ENQUIRY_NOTIFICATION_EMAIL);

  if (!emailConfigured) {
    // Local development: no email provider yet, so just show the lead in the terminal.
    if (process.env.NODE_ENV !== "production") {
      console.log("[enquiry]", { ...enquiry, ip });
      return NextResponse.json({ success: true });
    }
    // Production without email configured must be loud, otherwise leads vanish silently.
    console.error("[enquiry] RESEND_API_KEY / ENQUIRY_NOTIFICATION_EMAIL are not set; lead not delivered", enquiry);
    return NextResponse.json({ error: "Enquiry email is not configured." }, { status: 503 });
  }

  try {
    const sent = await sendEnquiryEmail(enquiry, ip);
    if (!sent) return NextResponse.json({ error: "Could not deliver the enquiry." }, { status: 502 });
  } catch (error) {
    console.error("[enquiry] email send failed", error);
    return NextResponse.json({ error: "Could not deliver the enquiry." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
