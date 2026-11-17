export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RouteSummary {
  slug: string;
  fromCity: string;
  toCity: string;
  distanceKm: number;
  durationHrs: string;
}

export interface NearbyDestination {
  name: string;
  distanceKm: number;
  description: string;
}

export interface City {
  slug: string;
  name: string;
  region: string;
  /** Defaults to "Rajasthan"; set for hubs outside the state (Delhi, Agra). */
  state?: string;
  heroImage: string;
  shortDescription: string;
  intro: string[];
  localPickupInfo: string;
  useCases: string[];
  attractions: { name: string; description: string }[];
  nearbyDestinations: NearbyDestination[];
  popularRouteSlugs: string[];
  faqs: FAQItem[];
  seo: SeoMeta;
  lat: number;
  lng: number;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  heroImage: string;
  shortDescription: string;
  intro: string[];
  highlights: string[];
  idealFor: string[];
  faqs: FAQItem[];
  seo: SeoMeta;
}

export interface RouteEntry {
  slug: string;
  fromSlug: string;
  fromCity: string;
  toSlug: string;
  toCity: string;
  distanceKm: number;
  durationHrs: string;
  description: string;
  highlights: string[];
  stops: string[];
  faqs: FAQItem[];
  seo: SeoMeta;
}

export type VehicleCategory = "van" | "bus" | "car";

export interface Vehicle {
  slug: string;
  name: string;
  category: VehicleCategory;
  seatingCapacity: number;
  /** Exterior photo shown as the card cover. */
  image: string;
  /** CSS object-position for the cover, to keep the vehicle framed when cropped. */
  imagePosition?: string;
  /** Interior photos shown as thumbnails under the cover. */
  gallery: string[];
  description: string;
  features: string[];
  /** Optional rate shown on the card, in rupees per km. Hidden when not set. */
  pricePerKm?: number;
  /** Optional minimum billable km per day, shown beside the rate. */
  minKmPerDay?: number;
}

export interface Testimonial {
  name: string;
  /** Where the review was left, e.g. "Google review". */
  source: string;
  /** Optional reviewer badge, e.g. "Local Guide". */
  badge?: string;
  quote: string;
  rating: number;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  featuredImage: string;
  categories: string[];
  tags: string[];
  relatedSlugs?: string[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export type TripType =
  | "outstation"
  | "wedding"
  | "corporate"
  | "airport"
  | "sightseeing"
  | "school-college"
  | "other";
