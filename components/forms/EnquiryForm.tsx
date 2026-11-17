"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { enquirySchema, tripTypeOptions, type EnquiryFormValues } from "@/lib/validations/enquiry";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { buildEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface EnquiryFormProps {
  defaultPickupCity?: string;
  defaultDropCity?: string;
  defaultTripType?: EnquiryFormValues["tripType"];
}

export function EnquiryForm({ defaultPickupCity, defaultDropCity, defaultTripType }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sent" | "blocked">("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      pickupCity: defaultPickupCity ?? "",
      dropCity: defaultDropCity ?? "",
      tripType: defaultTripType ?? "outstation",
      passengers: 10,
    },
  });

  /**
   * Opens WhatsApp with the filled details pre-typed (the customer just taps send) and, in
   * parallel, emails a copy to the business so the lead is not lost if they never do.
   */
  function onSubmit(values: EnquiryFormValues) {
    const tripLabel = tripTypeOptions.find((opt) => opt.value === values.tripType)?.label ?? values.tripType;
    const url = buildWhatsAppLink(buildEnquiryMessage({ ...values, tripType: tripLabel }));
    setWhatsAppUrl(url);

    // Not using the "noopener" feature: it makes window.open always return null, so a blocked
    // pop-up could not be told apart from a successful one. Detach the opener manually instead.
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    // Pop-up blockers (mainly Safari) can refuse window.open after async validation.
    setStatus(opened ? "sent" : "blocked");

    // GA4 recommended lead event: no name or phone is sent, only trip context.
    trackEvent("generate_lead", { trip_type: values.tripType, pickup_city: values.pickupCity, passengers: values.passengers });

    // Fire-and-forget backup copy. It must never block or fail the WhatsApp flow above,
    // and window.open has to stay synchronous inside the click handler.
    void fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      keepalive: true,
    }).catch(() => undefined);
  }

  if (status !== "idle") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold">
          {status === "sent" ? "Opening WhatsApp…" : "One more tap to send"}
        </h3>
        <p className="text-sm text-muted-foreground">
          Your details are ready in WhatsApp. Just press send and we will reply with a quote.
        </p>
        <Button asChild variant="whatsapp">
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            {status === "sent" ? "Open WhatsApp again" : "Continue on WhatsApp"}
          </a>
        </Button>
        <button type="button" onClick={() => setStatus("idle")} className="text-sm text-primary hover:underline">
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4" noValidate>
      {/* Honeypot — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="98765 43210" inputMode="numeric" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="pickupCity">Pickup City</Label>
          <Input id="pickupCity" placeholder="e.g. Jaipur" {...register("pickupCity")} aria-invalid={!!errors.pickupCity} />
          {errors.pickupCity && <p className="text-xs text-destructive">{errors.pickupCity.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dropCity">Drop City (optional)</Label>
          <Input id="dropCity" placeholder="e.g. Udaipur" {...register("dropCity")} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="travelDate">Travel Date</Label>
          <Input id="travelDate" type="date" {...register("travelDate")} aria-invalid={!!errors.travelDate} />
          {errors.travelDate && <p className="text-xs text-destructive">{errors.travelDate.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="passengers">Number of Passengers</Label>
          <Input id="passengers" type="number" min={1} max={60} {...register("passengers")} aria-invalid={!!errors.passengers} />
          {errors.passengers && <p className="text-xs text-destructive">{errors.passengers.message}</p>}
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="tripType">Trip Type</Label>
        <Select id="tripType" {...register("tripType")}>
          {tripTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" placeholder="Any additional details about your trip" {...register("message")} />
      </div>

      <Button type="submit" size="lg" variant="whatsapp" className="w-full">
        <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
        Send Enquiry on WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Your details open in WhatsApp — you just press send.
      </p>
    </form>
  );
}
