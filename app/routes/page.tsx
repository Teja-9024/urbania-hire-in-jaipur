import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { routes } from "@/data/routes";
import { RouteCard } from "@/components/shared/RouteCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Rajasthan Outstation Routes | Urbania Hire Distance & Pricing Guide",
  description:
    "Browse popular Rajasthan intercity routes for Force Urbania hire — distance, drive time and pricing guidance for Jaipur, Jodhpur, Udaipur, Jaisalmer and Bikaner.",
  path: "/routes",
});

export default function RoutesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Routes", href: "/routes" }]} />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl">Popular Rajasthan Outstation Routes</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Fixed intercity routes with distance and duration to help you plan your Urbania outstation trip.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
