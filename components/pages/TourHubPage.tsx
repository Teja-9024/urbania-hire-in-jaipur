import { getCityBySlug } from "@/data/cities";
import { tourHub, tours } from "@/data/tours";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { CityCard } from "@/components/shared/CityCard";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { vehicles } from "@/data/vehicles";
import { PageHero } from "./PageHero";
import { BookingSteps, FleetGrid, RelatedLinks } from "./sections";

export function TourHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Private tours with driver"
        h1={tourHub.h1}
        description="Private sightseeing tours by car, Urbania or bus, planned around your dates."
        image="/images/hero/desktop.png"
        imageAlt="Force Urbania van on a Rajasthan tour at sunset"
      />
      <Breadcrumbs items={[{ label: "Rajasthan Tours", href: tourHub.basePath }]} />

      <FleetGrid
        heading="Vehicles for Your Rajasthan Tour"
        intro="Force Urbania and Tempo Traveller vans for groups of 12 to 17, and an Innova for families. Larger groups can move up to a 25 to 50 seater bus."
        vehicles={vehicles.filter((v) => v.category === "van" || v.category === "car")}
      />

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl">Choose Your Destination</h2>
            <p className="leading-relaxed text-muted-foreground">{tourHub.intro[1]}</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => {
              const city = getCityBySlug(tour.citySlug);
              if (!city) return null;
              return (
                <CityCard
                  key={tour.slug}
                  city={city}
                  href={`${tourHub.basePath}/${tour.slug}`}
                  heading={tour.name}
                  description={`${tour.tagline} — ${tour.duration}.`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingSteps title="How Your Tour Is Planned" />
          </div>
          <aside className="space-y-4">
            <RelatedLinks
              title="Explore More"
              links={[
                { label: "Force Urbania Hire", href: "/urbania-hire" },
                { label: "Tempo Traveller", href: "/tempo-traveller" },
                { label: "Taxi Services", href: "/taxi-services" },
                { label: "Bus Services", href: "/bus-services" },
              ]}
            />
          </aside>
        </div>
      </section>

      <FAQAccordion faqs={tourHub.faqs} title="Rajasthan Tour FAQs" />
      <CTASection />

      <ServiceSchema
        name={tourHub.title}
        description={tourHub.description}
        url={`${siteConfig.url}${tourHub.basePath}`}
        areaServed={["Rajasthan", "Delhi", "Agra"]}
      />
    </>
  );
}
