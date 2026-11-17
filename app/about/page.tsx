import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Users, MapPin } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "About Us | Urbania Hire Jodhpur",
  description:
    "Urbania Hire Jodhpur supplies Force Urbania vehicles with verified drivers for weddings, corporate travel and group tours across Rajasthan since 2016.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <section className="section">
        <div className="container-narrow space-y-6">
          <h1 className="text-3xl md:text-4xl">About {siteConfig.name}</h1>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.name} has been supplying Force Urbania vehicles for group travel across Rajasthan since{" "}
            {siteConfig.foundingYear}. We work with families, wedding planners, corporate travel desks, schools
            and travel agencies who need reliable, driver-led transport for groups of up to 17 passengers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our office is in Bikaner with drivers and vehicles positioned across our operating cities —
            Jaipur, Jodhpur, Udaipur, Jaisalmer and the wider Rajasthan circuit — so we can respond quickly to
            local bookings as well as multi-city outstation trips.
          </p>

          <div className="grid gap-5 pt-4 sm:grid-cols-3">
            <div className="rounded-lg border p-5">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-base font-semibold">Verified Drivers</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Background-checked, experienced drivers familiar with Rajasthan&apos;s city and highway routes.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <Users className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-base font-semibold">Group-First Fleet</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Every vehicle in our fleet is configured for group travel — up to 17 seats with real luggage space.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-base font-semibold">Rajasthan-Wide Coverage</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Operating across 13+ Rajasthan cities and tourist circuits, with more added regularly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
