import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Route as RouteIcon } from "lucide-react";
import { routes, getRouteBySlug } from "@/data/routes";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};

  return createMetadata({
    title: route.seo.title,
    description: route.seo.description,
    path: `/routes/${route.slug}`,
    keywords: route.seo.keywords,
  });
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Routes", href: "/routes" },
          { label: `${route.fromCity} to ${route.toCity}`, href: `/routes/${route.slug}` },
        ]}
      />

      <section className="border-b bg-muted/30">
        <div className="container py-14">
          <h1 className="flex flex-wrap items-center gap-3 text-3xl font-bold sm:text-4xl">
            {route.fromCity}
            <ArrowRight className="h-7 w-7 text-primary" aria-hidden="true" />
            {route.toCity}
            <span className="text-lg font-normal text-muted-foreground">Urbania Hire</span>
          </h1>
          <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <RouteIcon className="h-4 w-4" aria-hidden="true" />
              {route.distanceKm} km
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {route.durationHrs}
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <p className="text-muted-foreground leading-relaxed">{route.description}</p>

            <div>
              <h2 className="text-2xl">Route Highlights</h2>
              <ul className="mt-4 space-y-2">
                {route.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-md border bg-muted/40 px-3 py-2 text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {route.stops.length > 0 && (
              <div>
                <h2 className="text-2xl">Common Stops Along the Way</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {route.stops.map((stop) => (
                    <span key={stop} className="rounded-full border px-3 py-1.5 text-sm">
                      {stop}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="rounded-xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">
              Get a Quote for {route.fromCity} → {route.toCity}
            </h2>
            <div className="mt-4">
              <EnquiryForm defaultPickupCity={route.fromCity} defaultDropCity={route.toCity} />
            </div>
          </aside>
        </div>
      </section>

      <FAQAccordion faqs={route.faqs} title={`${route.fromCity} to ${route.toCity} FAQs`} />
      <CTASection />

      <ServiceSchema
        name={`Urbania Hire ${route.fromCity} to ${route.toCity}`}
        description={route.seo.description}
        url={`${siteConfig.url}/routes/${route.slug}`}
        areaServed={[route.fromCity, route.toCity]}
      />
    </>
  );
}
