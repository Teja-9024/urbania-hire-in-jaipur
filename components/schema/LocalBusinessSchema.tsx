import { localBusinessSchema, organizationSchema, siteNavigationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

/** Rendered once in the root layout — represents the business itself. */
export function LocalBusinessSchema() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={siteNavigationSchema()} />
    </>
  );
}
