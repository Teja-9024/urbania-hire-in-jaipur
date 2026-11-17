import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // WebP only: listing both avif and webp can double the transformations and cache writes per image.
    formats: ["image/webp"],
    // Keep optimized images cached for 31 days (default is 60s), so they are not re-transformed.
    minimumCacheTTL: 2678400,
    // Fewer allowed widths means fewer distinct transformations per source image.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Old MDX blog URL, now covered by the longer comparison post.
      {
        source: "/blog/force-urbania-vs-tempo-traveller",
        destination: "/blog/force-urbania-vs-tempo-traveller-which-is-better",
        permanent: true,
      },
      // Example legacy-URL redirects. Add real 301s here as old URLs are discovered
      // in Search Console so link equity is preserved instead of 404ing.
      {
        source: "/urbania-rental-jaipur",
        destination: "/urbania-hire/jaipur",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
