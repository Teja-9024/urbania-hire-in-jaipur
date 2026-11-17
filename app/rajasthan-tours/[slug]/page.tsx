import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTourBySlug, tourHub, tours } from "@/data/tours";
import { createMetadata } from "@/lib/seo";
import { TourPage } from "@/components/pages/TourPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return createMetadata({
    title: `${tour.seo.title} | Urbania Hire`,
    absolute: true,
    description: tour.seo.description,
    path: `${tourHub.basePath}/${tour.slug}`,
    keywords: tour.seo.keywords,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return <TourPage tour={tour} />;
}
