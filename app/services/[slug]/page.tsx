import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { CityCard } from "@/components/shared/CityCard";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    keywords: service.seo.keywords,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.shortName, href: `/services/${service.slug}` },
        ]}
      />

      <section className="border-b">
        <div className="container grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{service.name}</h1>
            <p className="mt-4 text-muted-foreground">{service.shortDescription}</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
            <Image
              src={service.heroImage}
              alt={service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              {service.intro.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl">What&apos;s Included</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">Ideal For</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.idealFor.map((item) => (
                  <li key={item} className="rounded-md border bg-muted/40 px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-xl border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Enquire About {service.shortName}</h2>
            <div className="mt-4">
              <EnquiryForm />
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl">Available in These Cities</h2>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {cities.slice(0, 8).map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={service.faqs} title={`${service.shortName} FAQs`} />
      <CTASection />

      <ServiceSchema
        name={service.name}
        description={service.seo.description}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
    </>
  );
}
