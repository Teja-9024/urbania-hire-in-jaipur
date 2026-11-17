import { getCityBySlug } from "@/data/cities";
import { HIRE_CITY_SLUGS, hireKinds, hirePath, hireServices, type HireKind } from "@/data/hire-services";
import { getTourForCity } from "@/data/tours";

export interface ServiceLink {
  label: string;
  href: string;
}

/**
 * Internal links to every other service page that exists for a city, so each
 * page links sideways to its siblings (good for both users and crawlers).
 */
export function getCityServiceLinks(citySlug: string, exclude?: HireKind | "tour" | "urbania"): ServiceLink[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];

  const links: ServiceLink[] = [];

  if (exclude !== "urbania") {
    links.push({ label: `Force Urbania Hire in ${city.name}`, href: `/urbania-hire/${city.slug}` });
  }

  if ((HIRE_CITY_SLUGS as readonly string[]).includes(citySlug)) {
    for (const kind of hireKinds) {
      if (kind === exclude) continue;
      links.push({ label: hireServices[kind].pageName(city.name), href: hirePath(kind, citySlug) });
    }
  }

  const tour = getTourForCity(citySlug);
  if (tour && exclude !== "tour") {
    links.push({ label: `${tour.name} Package`, href: `/rajasthan-tours/${tour.slug}` });
  }

  return links;
}
