import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/shared/FloatingContactButtons";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Force Urbania, Innova, Bus & Tempo Traveller on Rent in Jodhpur`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: "Next.js",
  keywords: [
    "urbania hire jodhpur",
    "force urbania on rent in jodhpur",
    "urbania rental jodhpur",
    "tempo traveller hire jodhpur",
    "mini bus on rent jodhpur",
    "innova taxi service jodhpur",
    "urbania hire rajasthan",
  ],
  // Set NEXT_PUBLIC_GSC_VERIFICATION to the Search Console token; omitted when unset.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions often add classes/attributes (e.g. "hydrated")
    // to <html> before React hydrates, which would otherwise log a false hydration error in dev.
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButtons />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
