import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Us | Urbania Hire Jodhpur",
  description:
    "Get in touch with Urbania Hire Jodhpur for Force Urbania bookings — call, WhatsApp, or fill our enquiry form for a same-day quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="text-3xl md:text-4xl">Contact Us</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Share your trip details and we&apos;ll respond with a transparent quote, usually within a few hours.
              For urgent bookings, call or WhatsApp us directly.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {siteConfig.addressDisplay}
              </li>
            </ul>

            <div className="mt-6">
              <WhatsAppButton label="Chat on WhatsApp" />
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border shadow-sm">
              <iframe
                title={`Map showing ${siteConfig.name} at ${siteConfig.addressDisplay}`}
                src={`https://www.google.com/maps?q=${siteConfig.geo.lat},${siteConfig.geo.lng}(${encodeURIComponent(siteConfig.geo.label)})&z=17&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
