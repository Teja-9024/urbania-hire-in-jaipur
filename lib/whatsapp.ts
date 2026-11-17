import { siteConfig } from "@/data/site";

interface EnquiryMessageInput {
  pickupCity?: string;
  dropCity?: string;
  travelDate?: string;
  passengers?: string | number;
  tripType?: string;
  name?: string;
  phone?: string;
  message?: string;
}

/**
 * Builds the WhatsApp text for a filled enquiry form: one labelled line per
 * detail, so the business can read it at a glance. Empty fields are skipped.
 */
export function buildEnquiryMessage({
  pickupCity,
  dropCity,
  travelDate,
  passengers,
  tripType,
  name,
  phone,
  message,
}: EnquiryMessageInput): string {
  const lines = ["Hello, I would like a quote for a vehicle booking.", ""];
  const add = (label: string, value?: string | number) => {
    const text = value === undefined ? "" : String(value).trim();
    if (text) lines.push(`${label}: ${text}`);
  };

  add("Name", name);
  add("Phone", phone);
  add("Pickup city", pickupCity);
  add("Drop city", dropCity);
  add("Travel date", travelDate);
  add("Passengers", passengers);
  add("Trip type", tripType);
  add("Message", message);

  return lines.join("\n");
}

/**
 * Builds a pre-filled WhatsApp deep link. No phone numbers or personal
 * data are hardcoded here — the business number comes from siteConfig,
 * and enquiry details come from whatever the caller passes in (e.g. a
 * filled booking form or a page-level default message).
 */
export function buildWhatsAppLink(message: string, phone: string = siteConfig.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/** Simple default CTA link used in headers/footers with no form context. */
export function defaultWhatsAppLink(context?: string): string {
  const message = context
    ? `Hello, I want to enquire about Force Urbania hire for ${context}.`
    : "Hello, I want to enquire about Force Urbania hire in Rajasthan.";
  return buildWhatsAppLink(message);
}

export function telHref(phone: string = siteConfig.phone): string {
  return `tel:${phone}`;
}
