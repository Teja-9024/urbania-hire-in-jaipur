import type { Metadata } from "next";
import { hireServices } from "@/data/hire-services";
import { createMetadata } from "@/lib/seo";
import { HireHubPage } from "@/components/pages/HireHubPage";

const config = hireServices.tempo;

export const metadata: Metadata = createMetadata({
  title: `${config.hubTitle} | Urbania Hire`,
  absolute: true,
  description: config.hubDescription,
  path: config.basePath,
  keywords: config.hubKeywords,
});

export default function Page() {
  return <HireHubPage kind="tempo" />;
}
