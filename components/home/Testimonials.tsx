import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/site";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function Testimonials() {
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our"
          highlight="Customers Say"
          description="Real reviews from our customers on Google."
        />
        <div className="mt-10">
          <TestimonialsCarousel items={testimonials} reviewUrl={siteConfig.googleReviewUrl} />
        </div>
      </div>
    </section>
  );
}
