import { faqSchema } from "@/lib/schema";
import { FAQItem } from "@/types";
import { JsonLd } from "./JsonLd";

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  return <JsonLd data={faqSchema(faqs)} />;
}
