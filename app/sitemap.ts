import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { routes } from "@/data/routes";
import { HIRE_CITY_SLUGS, hireKinds, hirePath } from "@/data/hire-services";
import { tourHub, tours } from "@/data/tours";
import { blogPosts } from "@/lib/blogData";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/urbania-hire", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/bus-services", priority: 0.85, changeFrequency: "monthly" },
  { path: "/taxi-services", priority: 0.85, changeFrequency: "monthly" },
  { path: "/tempo-traveller", priority: 0.85, changeFrequency: "monthly" },
  { path: tourHub.basePath, priority: 0.85, changeFrequency: "monthly" },
  { path: "/routes", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
];

// lastModified is set only for blog posts, where a real date exists. A build-time "now" on every URL
// tells Google nothing and teaches it to ignore the field.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: new URL(`/urbania-hire/${city.slug}`, siteConfig.url).toString(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const routeEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: new URL(`/routes/${route.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const hireEntries: MetadataRoute.Sitemap = hireKinds.flatMap((kind) =>
    HIRE_CITY_SLUGS.map((citySlug) => ({
      url: new URL(hirePath(kind, citySlug), siteConfig.url).toString(),
        changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  const tourEntries: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: new URL(`${tourHub.basePath}/${tour.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.filter((post) => !post.noindex).map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries, ...serviceEntries, ...routeEntries, ...hireEntries, ...tourEntries, ...blogEntries];
}
