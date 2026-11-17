import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { cities } from "@/data/cities";
import { CityCard } from "@/components/shared/CityCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Force Urbania on Rent in Rajasthan | Luxury 9 to 17 Seater Urbania Hire",
  description:
    "Force Urbania hire across Rajasthan — browse city pages for Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner and more, with local pricing and pickup details.",
  path: "/urbania-hire",
});

export default function UrbaniaHireIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Urbania Hire", href: "/urbania-hire" }]} />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl">Urbania Hire Jaipur — Choose Your City</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We operate Force Urbania rentals across {cities.length} cities and tourist hubs across Rajasthan, plus Delhi and Agra for Golden Triangle trips.
            Select your city for local pricing, pickup points and popular routes.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
