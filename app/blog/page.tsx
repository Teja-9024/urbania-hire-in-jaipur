import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Travel Blog | Force Urbania Rental Tips & India Tour Guides",
  description:
    "Expert travel guides, vehicle comparisons, road trip tips, and group travel advice for India. Plan your next trip with Urbania Hire Jaipur blog.",
  keywords: [
    "travel blog india",
    "force urbania blog",
    "group travel tips",
    "rajasthan travel guide",
    "india road trip blog",
    "vehicle rental guide",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Travel Blog | Urbania Hire Jaipur",
    description:
      "Expert travel guides, vehicle comparisons, and group travel tips for India.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <>
      {/* JSON-LD Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${siteConfig.name} Travel Blog`,
            description: "Expert travel guides and group travel tips for India",
            url: `${siteConfig.url}/blog`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            blogPost: blogPosts.slice(0, 10).map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `${siteConfig.url}/blog/${post.slug}`,
              datePublished: post.publishedAt,
              author: {
                "@type": "Organization",
                name: siteConfig.name,
              },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative isolate text-white pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <Image
            src="/images/destinations/jaisalmer-hero.jpg"
            alt="Travel Blog & Guides"
            fill
            priority
            className="object-cover object-center -z-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-700/90 via-orange-600/85 to-yellow-600/80 -z-10" />

          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
              Travel Blog & Guides
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Expert tips on group travel, vehicle guides, road trip planning,
              and India&apos;s best destinations.
            </p>
          </div>

          {/* Curved bottom edge */}
          <svg
            className="absolute bottom-0 left-0 w-full h-12 md:h-20"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path fill="#f9fafb" d="M0,100 C 360,0 1080,0 1440,100 Z" />
          </svg>
        </section>

        {/* Category Filter */}
        <section className="border-b bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-medium whitespace-nowrap"
              >
                All Posts
              </Link>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium whitespace-nowrap hover:border-orange-300 transition-colors cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-4 py-12 pb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8">
            Latest Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative bg-gray-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={800}
                      height={1000}
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-IN",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Plan Your Trip?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Get personalized quotes for Force Urbania, Tempo Traveller, and
              Innova rentals across Rajasthan, with clear, itemised pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%2C%20I%20need%20a%20quote%20for%20vehicle%20rental`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.386 0-4.592-.842-6.312-2.244l-.44-.362-3.09 1.036 1.036-3.09-.362-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
