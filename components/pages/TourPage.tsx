import Link from "next/link";
import { CalendarDays, Clock, Users } from "lucide-react";
import { getCityBySlug } from "@/data/cities";
import { HIRE_CITY_SLUGS, hirePath } from "@/data/hire-services";
import { tourHub, type TourPackage } from "@/data/tours";
import { getCityServiceLinks } from "@/lib/service-links";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { vehicles } from "@/data/vehicles";
import { PageHero } from "./PageHero";
import { BookingSteps, FleetGrid, RelatedLinks } from "./sections";

export function TourPage({ tour }: { tour: TourPackage }) {
  const city = getCityBySlug(tour.citySlug);
  if (!city) return null;

  const path = `${tourHub.basePath}/${tour.slug}`;
  const hasHirePages = (HIRE_CITY_SLUGS as readonly string[]).includes(city.slug);
  const facts = [
    { icon: Clock, label: "Duration", value: tour.duration },
    { icon: CalendarDays, label: "Best time", value: tour.bestTime },
    { icon: Users, label: "Ideal for", value: tour.idealFor.join(", ") },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${city.name}, ${city.state ?? "Rajasthan"}`}
        h1={`${tour.name} with Car & Driver`}
        description={tour.tagline}
        image={city.heroImage}
        imageAlt={`${tour.name} — ${city.name}`}
        formCity={city.name}
      />
      <Breadcrumbs
        items={[
          { label: "Rajasthan Tours", href: tourHub.basePath },
          { label: tour.name, href: path },
        ]}
      />

      <FleetGrid
        heading={`Choose Your Vehicle for the ${tour.name}`}
        intro="Force Urbania and Tempo Traveller vans for groups of 12 to 17, and an Innova for families. Larger groups can move up to a 25 to 50 seater bus."
        vehicles={vehicles.filter((v) => v.category === "van" || v.category === "car")}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg border bg-muted/40 p-4">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                  <p className="mt-0.5 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl">{tour.name} Overview</h2>
              {tour.overview.map((para) => (
                <p key={para} className="leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl">{tour.name} Highlights</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tour.highlights.map((item) => (
                  <li key={item} className="rounded-full border bg-card px-3.5 py-1.5 text-sm shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">Suggested {tour.name} Itinerary</h2>
              <ol className="mt-4 space-y-4">
                {tour.itinerary.map((day) => (
                  <li key={day.day + day.title} className="rounded-lg border p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{day.day}</p>
                    <h3 className="mt-1 text-lg font-semibold">{day.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{day.details}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-sm text-muted-foreground">
                This is a starting plan. We adjust the timings and stops to your group, season and interests.
              </p>
            </div>

            {city.nearbyDestinations.length > 0 && (
              <div>
                <h2 className="text-2xl">Add-On Trips from {city.name}</h2>
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

            <div>
              <h2 className="text-2xl">Choose Your Vehicle for the {tour.name}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Couples and families of up to seven usually take an Innova. For groups of 8 to 17, a Tempo Traveller or Force
                Urbania keeps everyone in one vehicle, and for larger groups we run 25 to 50 seater buses. Vehicle and driver
                are quoted together; hotels, monument tickets and meals are usually booked separately.
              </p>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {hasHirePages ? (
                  <>
                    <li><Link className="text-primary hover:underline" href={hirePath("taxi", city.slug)}>Taxi in {city.name}</Link></li>
                    <li><Link className="text-primary hover:underline" href={hirePath("tempo", city.slug)}>Tempo Traveller in {city.name}</Link></li>
                    <li><Link className="text-primary hover:underline" href={hirePath("bus", city.slug)}>Mini Bus in {city.name}</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link className="text-primary hover:underline" href="/taxi-services">Taxi services</Link></li>
                    <li><Link className="text-primary hover:underline" href="/tempo-traveller">Tempo Traveller</Link></li>
                    <li><Link className="text-primary hover:underline" href="/bus-services">Bus services</Link></li>
                  </>
                )}
                <li><Link className="text-primary hover:underline" href={`/urbania-hire/${city.slug}`}>Force Urbania in {city.name}</Link></li>
              </ul>
            </div>

            <BookingSteps />
          </div>

          <aside className="space-y-4">
            <RelatedLinks title={`More for ${city.name}`} links={getCityServiceLinks(city.slug, "tour")} />
            <RelatedLinks
              title="Explore More"
              links={[
                { label: "All Rajasthan tours", href: tourHub.basePath },
                { label: "Pricing guide", href: "/pricing" },
                { label: "Contact us", href: "/contact" },
              ]}
            />
          </aside>
        </div>
      </section>

      <FAQAccordion faqs={tour.faqs} title={`${tour.name} FAQs`} />
      <CTASection
        title={`Plan Your ${tour.name} Today`}
        description="Tell us your dates and group size and we will send a clear quote for the vehicle and driver."
      />

      <ServiceSchema
        name={`${tour.name} with Car & Driver`}
        description={tour.seo.description}
        url={`${siteConfig.url}${path}`}
        areaServed={[city.name, city.state ?? "Rajasthan"]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: tour.name,
          description: tour.seo.description,
          url: `${siteConfig.url}${path}`,
          touristType: tour.idealFor,
          itinerary: {
            "@type": "ItemList",
            itemListElement: tour.itinerary.map((day, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `${day.day}: ${day.title}`,
              description: day.details,
            })),
          },
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }}
      />
    </>
  );
}
