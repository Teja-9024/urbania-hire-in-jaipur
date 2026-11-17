import { siteConfig } from "@/data/site";
import { primaryNav } from "@/lib/nav";
import { BreadcrumbItem, FAQItem } from "@/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: ["Urbania Hire", "Urbania Hire Jaipur", "Force Urbania on Rent in Jaipur"],
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** Top-level menu as SiteNavigationElement — a hint to Google for the sitelinks under the homepage result. */
export function siteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": primaryNav
      .filter((item) => item.href !== "/")
      .map((item) => ({
        "@type": "SiteNavigationElement",
        name: item.label,
        url: new URL(item.href, siteConfig.url).toString(),
      })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "City", name: "Jodhpur" },
      { "@type": "State", name: "Rajasthan" },
    ],
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: (params.areaServed ?? ["Rajasthan"]).map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    image: [params.image],
    datePublished: params.publishedAt,
    dateModified: params.updatedAt ?? params.publishedAt,
    author: {
      "@type": "Person",
      name: params.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}
