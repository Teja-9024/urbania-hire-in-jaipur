import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { ClickTracker } from "./ClickTracker";

/**
 * GA4 loader for the root layout. Renders nothing unless NEXT_PUBLIC_GA_MEASUREMENT_ID
 * is set, so local dev and preview builds send no data. `afterInteractive` keeps the
 * script off the critical path (no LCP/INP cost).
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
      <ClickTracker />
    </>
  );
}
