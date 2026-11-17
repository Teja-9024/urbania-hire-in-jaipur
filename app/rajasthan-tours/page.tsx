import type { Metadata } from "next";
import { tourHub } from "@/data/tours";
import { createMetadata } from "@/lib/seo";
import { TourHubPage } from "@/components/pages/TourHubPage";

export const metadata: Metadata = createMetadata({
  title: `${tourHub.title} | Urbania Hire`,
  absolute: true,
  description: tourHub.description,
  path: tourHub.basePath,
  keywords: tourHub.keywords,
});

export default function Page() {
  return <TourHubPage />;
}
