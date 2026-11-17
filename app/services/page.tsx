import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Urbania Hire Services in Rajasthan | Wedding, Corporate & Group Travel",
  description:
    "Explore Force Urbania hire services across Rajasthan — wedding transport, corporate travel, airport transfer, outstation travel and group travel.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl">Urbania Hire Services</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Whichever occasion brings your group together, our Urbania fleet and drivers are set up to handle it.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
