"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * One delegated click listener that records phone and WhatsApp taps from any link
 * on the site, so individual buttons need no tracking code of their own.
 */
export function ClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;

      const location = window.location.pathname;
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, page_path: location });
      } else if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        trackEvent("whatsapp_click", { page_path: location });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
