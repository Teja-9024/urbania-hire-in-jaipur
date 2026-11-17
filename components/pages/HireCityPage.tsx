import { getRouteBySlug } from "@/data/routes";
import { vehicles } from "@/data/vehicles";
import { getHireAngle, hirePath, hireServices, type HireKind } from "@/data/hire-services";
import { getCityServiceLinks } from "@/lib/service-links";
import { siteConfig } from "@/data/site";
import type { City } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { RouteCard } from "@/components/shared/RouteCard";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { PageHero } from "./PageHero";
import { BenefitsGrid, BookingSteps, CheckList, FleetGrid, RelatedLinks } from "./sections";

/** City page for the bus / taxi / tempo traveller services (e.g. "Mini Bus Service in Jaipur"). */
export function HireCityPage({ kind, city }: { kind: HireKind; city: City }) {
  const config = hireServices[kind];
  const pageName = config.pageName(city.name);
  const path = hirePath(kind, city.slug);
  const angle = getHireAngle(kind, city.slug);
  const popularRoutes = city.popularRouteSlugs
    .map((slug) => getRouteBySlug(slug))
    .filter((route): route is NonNullable<typeof route> => Boolean(route));

  return (
    <>
      <PageHero
        eyebrow={`${city.name}, ${city.state ?? "Rajasthan"}`}
        h1={config.h1(city.name)}
        description={config.heroText}
        image={city.heroImage}
        imageAlt={`${pageName} — ${city.name}`}
        formCity={city.name}
      />
      <Breadcrumbs
        items={[
          { label: config.hubLabel, href: config.basePath },
          { label: pageName, href: path },
        ]}
      />

      <FleetGrid
        heading={`${config.fleetHeading} in ${city.name}`}
        intro={config.fleetIntro}
        vehicles={vehicles.filter(config.fleet)}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="space-y-4">
              <h2 className="text-2xl">{pageName}: What You Need to Know</h2>
              {angle && <p className="leading-relaxed text-muted-foreground">{angle}</p>}
              <p className="leading-relaxed text-muted-foreground">{city.localPickupInfo}</p>
            </div>

            <CheckList title={`Popular Trips from ${city.name}`} items={city.useCases} />

            <div>
              <h2 className="text-2xl">Places to Visit in and Around {city.name}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {city.attractions.map((attraction) => (
                  <div key={attraction.name} className="rounded-lg border p-4">
                    <h3 className="font-semibold">{attraction.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{attraction.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {city.nearbyDestinations.length > 0 && (
              <div>
                <h2 className="text-2xl">Day Trips and Outstation Drives from {city.name}</h2>
                <div className="mt-4 space-y-3">
                  {city.nearbyDestinations.map((dest) => (
                    <div key={dest.name} className="flex items-start justify-between gap-4 rounded-lg border p-4">
                      <div>
                        <h3 className="font-semibold">{dest.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{dest.description}</p>
                      </div>
                      <span className="whitespace-nowrap text-sm font-medium text-primary">{dest.distanceKm} km</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {popularRoutes.length > 0 && (
              <div>
                <h2 className="text-2xl">Popular Routes from {city.name}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {popularRoutes.map((route) => (
                    <RouteCard key={route.slug} route={route} />
                  ))}
                </div>
              </div>
            )}

            <CheckList title="What Affects the Price" items={config.priceFactors} />
            <BookingSteps />
          </div>

          <aside className="space-y-4">
            <RelatedLinks title={`Other Services in ${city.name}`} links={getCityServiceLinks(city.slug, kind)} />
            <RelatedLinks
              title="Explore More"
              links={[
                { label: config.hubLabel, href: config.basePath },
                { label: "Rajasthan Tour Packages", href: "/rajasthan-tours" },
                { label: "Pricing guide", href: "/pricing" },
                { label: "Contact us", href: "/contact" },
              ]}
            />
          </aside>
        </div>
      </section>

      <BenefitsGrid title={`Why Book ${pageName} with Us`} items={config.benefits} />
      <FAQAccordion faqs={config.faqs(city)} title={`${pageName} FAQs`} />
      <CTASection
        title={`Book ${pageName} Today`}
        description="Share your route, dates and group size for a clear, same-day quote."
      />

      <ServiceSchema
        name={pageName}
        description={config.description(city)}
        url={`${siteConfig.url}${path}`}
        areaServed={[city.name, city.state ?? "Rajasthan"]}
      />
    </>
  );
}
