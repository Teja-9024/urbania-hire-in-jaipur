import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface CreateMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
  /** Use the title as-is, without the sitewide " | Site name" suffix (for titles that already carry the brand). */
  absolute?: boolean;
}

/**
 * Single source of truth for page <head> metadata. Every important page
 * should call this instead of hand-rolling a metadata object, so title
 * templates, canonical URLs and OG/Twitter defaults stay consistent.
 */
export function createMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
  keywords,
  absolute = false,
}: CreateMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: siteConfig.twitterHandle,
    },
  };
}

/** Formats a page title against the sitewide title template. */
export function pageTitle(title: string): string {
  return `${title} | ${siteConfig.name}`;
}
