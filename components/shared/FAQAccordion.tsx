import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQItem } from "@/types";
import { FAQSchema } from "@/components/schema/FAQSchema";

export function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[]; title?: string }) {
  if (faqs.length === 0) return null;

  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container-narrow">
        {title && <SectionHeading id="faq-heading" eyebrow="FAQs" title={title} />}
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <FAQSchema faqs={faqs} />
    </section>
  );
}
