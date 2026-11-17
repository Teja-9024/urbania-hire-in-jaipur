import { getCityBySlug } from "@/data/cities";
import { vehicles } from "@/data/vehicles";
import { HIRE_CITY_SLUGS, hirePath, hireServices, type HireKind } from "@/data/hire-services";
import { siteConfig } from "@/data/site";
import type { City } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { CityCard } from "@/components/shared/CityCard";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { PageHero } from "./PageHero";
import { BenefitsGrid, BookingSteps, CheckList, FleetGrid, RelatedLinks } from "./sections";

const HERO_IMAGE: Record<HireKind, string> = {
  bus: "/images/fleet/45-seater/main.jpeg",
  taxi: "/images/fleet/innova/main.jpeg",
  tempo: "/images/fleet/12-seater/main.jpeg",
};

/** Overview page for a service ("Bus Services"), linking to each city page. */
export function HireHubPage({ kind }: { kind: HireKind }) {
  const config = hireServices[kind];
  const cities = HIRE_CITY_SLUGS.map((slug) => getCityBySlug(slug)).filter((c): c is City => Boolean(c));

  return (
    <>
      <PageHero
        eyebrow={config.hubEyebrow}
        h1={config.hubH1}
        description={config.heroText}
        image={HERO_IMAGE[kind]}
        imageAlt={config.hubH1}
      />
      <Breadcrumbs items={[{ label: config.hubLabel, href: config.basePath }]} />

      <FleetGrid heading={config.fleetHeading} intro={config.fleetIntro} vehicles={vehicles.filter(config.fleet)} />

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl">{config.hubTitle}</h2>
            {config.hubIntro.map((para) => (
              <p key={para} className="leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>

          <h2 className="mt-10 text-center text-2xl">Choose Your City</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard
                key={city.slug}
                city={city}
                href={hirePath(kind, city.slug)}
                heading={config.pageName(city.name)}
                description={config.intro(city)}
              />
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <CheckList title="What Affects the Price" items={config.priceFactors} />
            <BookingSteps />
          </div>
          <aside className="space-y-4">
            <RelatedLinks
              title="Explore More"
              links={[
                { label: "Bus Services", href: "/bus-services" },
                { label: "Taxi Services", href: "/taxi-services" },
                { label: "Tempo Traveller", href: "/tempo-traveller" },
                { label: "Force Urbania Hire", href: "/urbania-hire" },
                { label: "Rajasthan Tour Packages", href: "/rajasthan-tours" },
              ].filter((link) => link.href !== config.basePath)}
            />
          </aside>
        </div>
      </section>

      <BenefitsGrid title={`Why Choose Us for ${config.hubLabel}`} items={config.benefits} />
      <FAQAccordion faqs={config.hubFaqs} title={`${config.hubLabel} FAQs`} />
      <CTASection />

      <ServiceSchema
        name={config.hubTitle}
        description={config.hubDescription}
        url={`${siteConfig.url}${config.basePath}`}
        areaServed={["Rajasthan"]}
      />
    </>
  );
}
