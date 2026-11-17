import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { City } from "@/types";

interface CityCardProps {
  city: City;
  /** Shows the orange "Popular" badge in the top-right corner. */
  popular?: boolean;
  /** Overrides the link target (defaults to the city's Urbania hire page). */
  href?: string;
  /** Overrides the card title (defaults to the city name). */
  heading?: string;
  /** Overrides the two-line description (defaults to the city's short description). */
  description?: string;
}

export function CityCard({ city, popular = false, href, heading, description }: CityCardProps) {
  return (
    <Link
      href={href ?? `/urbania-hire/${city.slug}`}
      prefetch={false}
      className="group relative flex aspect-[5/4] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-secondary to-primary shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {/* text-transparent hides the alt text (and keeps the gradient visible) if a photo is missing */}
      <Image
        src={city.heroImage}
        alt={`Force Urbania hire in ${city.name}, Rajasthan`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover text-transparent transition-transform duration-500 group-hover:scale-110"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10"
      />

      {popular && (
        <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-[#EA580C] to-[#FB923C] px-3 py-1 text-xs font-bold text-white shadow-md">
          Popular
        </span>
      )}

      <div className="relative p-4 text-white sm:p-5">
        <h3 className="font-display text-xl font-bold leading-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
          {heading ?? city.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/85">
          {description ?? city.shortDescription}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:gap-2.5 group-hover:bg-primary group-hover:ring-primary">
          View Details
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
