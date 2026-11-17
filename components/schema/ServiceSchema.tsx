import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export function ServiceSchema(props: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return <JsonLd data={serviceSchema(props)} />;
}
