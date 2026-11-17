import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { CityCard } from "@/components/shared/CityCard";
import type { City } from "@/types";

// Cities shown on the homepage, in order; the first few carry the "Popular" badge.
const FEATURED_SLUGS = ["jaipur", "udaipur", "jodhpur", "jaisalmer", "mount-abu", "pushkar", "bikaner", "ajmer"];
const POPULAR_SLUGS = new Set(["jaipur", "udaipur", "jodhpur", "jaisalmer"]);

export function CitiesGrid() {
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <SectionHeading
          eyebrow="Cities We Serve"
          title="Urbania Hire"
          highlight="Across Rajasthan"
          description="We serve every major Rajasthan city and tourist circuit — pick a city to see local pricing, popular routes and pickup details."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_SLUGS.map((slug) => cities.find((c) => c.slug === slug))
            .filter((city): city is City => Boolean(city))
            .map((city) => (
              <CityCard key={city.slug} city={city} popular={POPULAR_SLUGS.has(city.slug)} />
            ))}
        </div>
        <div className="mt-7 text-center">
          <Link
            href="/urbania-hire"
            prefetch={false}
            className="group inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all cities we serve
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
