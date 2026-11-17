import { breadcrumbSchema } from "@/lib/schema";
import { BreadcrumbItem } from "@/types";
import { JsonLd } from "./JsonLd";

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={breadcrumbSchema(items)} />;
}
