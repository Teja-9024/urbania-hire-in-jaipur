import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { siteConfig } from "@/data/site";
import { telHref, defaultWhatsAppLink } from "@/lib/whatsapp";

/** Fixed call + WhatsApp shortcuts, visible over the page content on every screen. */
export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <Link
        href={telHref()}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 hover:bg-primary/90"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </Link>
      <Link
        href={defaultWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5b]"
      >
        <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
      </Link>
    </div>
  );
}
