import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { Card } from "@/components/ui/card";

const factors = [
  {
    title: "Trip type",
    description: "Local (within-city), outstation one-way, outstation round-trip, and multi-day packages are priced differently.",
  },
  {
    title: "Distance & duration",
    description: "Outstation fares are typically calculated on distance covered plus number of travel days.",
  },
  {
    title: "Vehicle configuration",
    description: "A 12-seat, 13-seat or full 17-seat Urbania carries a different base rate depending on capacity and fit-out.",
  },
  {
    title: "Season & availability",
    description: "Wedding season (Oct-Feb) and festival periods like the Pushkar Camel Fair see higher demand and should be booked early.",
  },
  {
    title: "Toll, parking & driver allowance",
    description: "These are included transparently in outstation quotes rather than added as surprise charges later.",
  },
];

const pricingFaqs = [
  {
    question: "Why don't you list fixed prices on the website?",
    answer:
      "Urbania hire pricing depends on trip type, distance, dates and vehicle configuration, so a single listed price would be misleading. We provide a specific, transparent quote for your exact requirements within minutes of your enquiry.",
  },
  {
    question: "Is the quoted price all-inclusive?",
    answer:
      "Yes. Every quote we send clearly states what is included — vehicle, driver allowance, fuel/toll for outstation trips — so there are no hidden charges at the end of your trip.",
  },
  {
    question: "Do you charge differently for one-way vs round-trip outstation hire?",
    answer:
      "Yes, a one-way outstation trip may include a return empty-run charge since the vehicle has to return to its base city. This is always explained clearly in your quote.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Urbania Rental Price in Rajasthan | Get a Transparent Quote",
  description:
    "Understand what drives Force Urbania rental pricing in Rajasthan — trip type, distance, vehicle configuration and season — then get a transparent, no-surprises quote.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
      <section className="section">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl">Urbania Rental Price in Rajasthan</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Force Urbania rental pricing varies by trip type, distance, vehicle configuration and season, so we
            don&apos;t publish a single fixed rate card. Instead, share your route and dates and we&apos;ll send a
            transparent, itemised quote — usually within a few hours.
          </p>
        </div>

        <div className="container mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => (
            <Card key={factor.title} className="p-5">
              <h2 className="font-semibold">{factor.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{factor.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <FAQAccordion faqs={pricingFaqs} title="Pricing FAQs" />
      <CTASection
        title="Get Your Custom Urbania Quote"
        description="Tell us your pickup city, drop city, dates and group size for an itemised quote."
      />
    </>
  );
}
