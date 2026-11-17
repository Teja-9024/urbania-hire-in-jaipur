const DEFAULT_SITE_URL = "https://urbaniahirejodhpur.com";

// Vercel env vars can be set to an empty string or without a protocol; both
// would make `new URL(siteConfig.url)` throw at build time, so normalise here.
function resolveSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Urbania Hire Jodhpur",
  legalName: "Urbania Hire Jodhpur Travels",
  shortName: "Urbania Hire Jodhpur",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    "Force Urbania on rent in Jodhpur for weddings, corporate travel, airport transfers, Mehrangarh and Jaisalmer tours and outstation trips across Rajasthan. Verified drivers, transparent pricing, 24/7 booking support.",
  // Contact details — single source of truth for the whole site.
  phone: "+918949304824",
  phoneDisplay: "+91 89493 04824",
  whatsappNumber: "918949304824",
  email: "ckptours@gmail.com",
  address: {
    streetAddress: "Old Gajner Rd, opp. SBI bank, Antyodaya Nagar",
    addressLocality: "Bikaner",
    addressRegion: "Rajasthan",
    postalCode: "334001",
    addressCountry: "IN",
  },
  // Exact pin of the office (used for the map embed, directions link and schema).
  geo: { lat: 28.024152764475318, lng: 73.29002959692885, label: "CK Parihar Tour & Travels" },
  addressDisplay: "Old Gajner Rd, opp. SBI bank, Antyodaya Nagar, Bikaner, Rajasthan 334001",
  // Google Business profile — reviews on the homepage link here.
  googleReviewUrl: "https://g.page/r/CT-8_U2MdTNPEAE/review",
  social: {
    instagram: {
      username: "ckp_tours",
      url: "https://www.instagram.com/ckp_tours",
    },
    facebook: {
      name: "CK Parihar Tour & Travels",
      // TODO: replace with the page's real URL (facebook.com/<page-username>).
      url: "https://www.facebook.com/search/pages?q=CK%20Parihar%20Tour%20%26%20Travels",
    },
  },
  // Profile URLs for schema.org — add the Facebook page URL here once it is known.
  sameAs: ["https://www.instagram.com/ckp_tours"],
  foundingYear: 2016,
  ogImage: "/images/og/default.jpg",
  twitterHandle: "@urbaniahirerj",
} as const;
