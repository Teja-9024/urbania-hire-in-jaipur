import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { HIRE_CITY_SLUGS, citySlugFromHireSlug, hirePath, hireServices } from "@/data/hire-services";
import { createMetadata } from "@/lib/seo";
import { HireCityPage } from "@/components/pages/HireCityPage";

const KIND = "bus" as const;
const config = hireServices[KIND];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return HIRE_CITY_SLUGS.map((citySlug) => ({ slug: config.slugFor(citySlug) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = citySlugFromHireSlug(KIND, slug);
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  if (!city) return {};

  return createMetadata({
    title: `${config.title(city.name)} | Urbania Hire`,
    absolute: true,
    description: config.description(city),
    path: hirePath(KIND, city.slug),
    keywords: config.keywords(city.name),
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const citySlug = citySlugFromHireSlug(KIND, slug);
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  if (!city) notFound();

  return <HireCityPage kind={KIND} city={city} />;
}
