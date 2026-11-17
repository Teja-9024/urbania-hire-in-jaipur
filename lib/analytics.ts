/** Site's GA4 property. Measurement IDs are public (they ship in the page HTML), so it is safe to keep here. */
const DEFAULT_GA_MEASUREMENT_ID = "G-4RYVX2JHDH";

/**
 * GA4 measurement ID. Set NEXT_PUBLIC_GA_MEASUREMENT_ID to override it, or to a non-empty
 * invalid value (e.g. "off") to switch analytics off explicitly. Leaving it unset OR blank
 * both fall back to the default — a blank value is a common accidental hosting-dashboard
 * state (e.g. copied from .env.example), and it should not silently kill analytics.
 * Without an override the default applies to production builds only, so local development
 * never sends data.
 */
const rawId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const configuredId = rawId || (process.env.NODE_ENV === "production" ? DEFAULT_GA_MEASUREMENT_ID : "");

export const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : undefined;

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event. A no-op when analytics is not loaded (dev, ad blockers, missing ID). */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
