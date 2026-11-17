import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import { getRouteBySlug } from "@/data/routes";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/pages/PageHero";
import { FleetGrid } from "@/components/pages/sections";
import { vehicles } from "@/data/vehicles";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { RouteCard } from "@/components/shared/RouteCard";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return createMetadata({
    title: city.seo.title,
    absolute: true,
    description: city.seo.description,
    path: `/urbania-hire/${city.slug}`,
    keywords: city.seo.keywords,
  });
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const popularRoutes = city.popularRouteSlugs
    .map((slug) => getRouteBySlug(slug))
    .filter((route): route is NonNullable<typeof route> => Boolean(route));

  return (
    <>
      <PageHero
        eyebrow={`${city.region}${city.state ? "" : ", Rajasthan"}`}
        h1={`Urbania Hire in ${city.name}`}
        description={city.shortDescription}
        image={city.heroImage}
        imageAlt={`Force Urbania hire in ${city.name}`}
        formCity={city.name}
      />

      <Breadcrumbs
        items={[
          { label: "Urbania Hire", href: "/urbania-hire" },
          { label: city.name, href: `/urbania-hire/${city.slug}` },
        ]}
      />

      <FleetGrid
        heading={`Force Urbania Available in ${city.name}`}
        intro="12, 15 and 17 seater Force Urbania vans with pushback seats and air conditioning, each with an experienced driver."
        vehicles={vehicles.filter((v) => v.category === "van")}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl">Force Urbania Rental in {city.name}</h2>
              {city.intro.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl">Local Pickup in {city.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{city.localPickupInfo}</p>
            </div>

            <div>
              <h2 className="text-2xl">Popular Use Cases in {city.name}</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {city.useCases.map((useCase) => (
                  <li key={useCase} className="rounded-md border bg-muted/40 px-3 py-2 text-sm">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">Top Attractions Near {city.name}</h2>
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
                <h2 className="text-2xl">Nearby Destinations from {city.name}</h2>
                <div className="mt-4 space-y-3">
                  {city.nearbyDestinations.map((dest) => (
                    <div key={dest.name} className="flex items-start justify-between gap-4 rounded-lg border p-4">
                      <div>
                        <h3 className="font-semibold">{dest.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{dest.description}</p>
                      </div>
                      <span className="whitespace-nowrap text-sm font-medium text-primary">
                        {dest.distanceKm} km
                      </span>
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
          </div>

          <aside className="space-y-4">
            <div className="rounded-lg border bg-muted/40 p-5">
              <h3 className="font-semibold">Explore More</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-primary hover:underline">
                    Browse all services
                  </Link>
                </li>
                <li>
                  <Link href="/routes" className="text-primary hover:underline">
                    Browse all routes
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-primary hover:underline">
                    Pricing guide
                  </Link>
                </li>
                <li>
                  <Link href="/urbania-hire" className="text-primary hover:underline">
                    All cities we serve
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQAccordion faqs={city.faqs} title={`${city.name} Urbania Hire FAQs`} />
      <CTASection
        title={`Book Your Urbania in ${city.name} Today`}
        description="Get a same-day quote for your route, dates and group size."
      />

      <ServiceSchema
        name={`Force Urbania Hire in ${city.name}`}
        description={city.seo.description}
        url={`${siteConfig.url}/urbania-hire/${city.slug}`}
        areaServed={[city.name, city.state ?? "Rajasthan"]}
      />
    </>
  );
}
