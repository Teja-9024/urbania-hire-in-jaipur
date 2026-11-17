import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { globalFaqs } from "@/data/faqs";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions | Urbania Hire Jaipur",
  description:
    "Answers to common questions about Force Urbania hire in Rajasthan — vehicle capacity, pricing, booking process, coverage cities and more.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      <div className="section pb-0">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl">Frequently Asked Questions</h1>
        </div>
      </div>
      <FAQAccordion faqs={globalFaqs} title="" />
      <CTASection />
    </>
  );
}
