import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { FriezeMarquee } from "@/components/home/FriezeMarquee";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FleetSection } from "@/components/home/FleetSection";
import { JaipurPackages } from "@/components/home/JaipurPackages";
import { CoverageMapSection } from "@/components/home/CoverageMapSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CitiesGrid } from "@/components/home/CitiesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { globalFaqs } from "@/data/faqs";

export const metadata: Metadata = createMetadata({
  title: "Force Urbania on Rent in Jaipur | Innova, Mini Bus & Tempo Traveller Hire",
  description:
    "Urbania Hire Jaipur: rent Force Urbania (9 to 17 seater), Toyota Innova, mini bus and Tempo Traveller in Jaipur with verified drivers for weddings, airport transfers, corporate travel and Rajasthan tours. Transparent pricing.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FriezeMarquee />
      <FleetSection />
      <JaipurPackages />
      <CoverageMapSection />
      <WhyChooseUs />
      <CitiesGrid />
      <ServicesGrid />
      <Testimonials />
      <FAQAccordion faqs={globalFaqs} />
      <CTASection />
    </>
  );
}
