import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Urbania Hire"
          highlight="for Every Occasion"
          description="From destination weddings to corporate offsites, our Urbania fleet is set up for group travel across Rajasthan."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
