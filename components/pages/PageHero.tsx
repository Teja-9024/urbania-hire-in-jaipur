import Image from "next/image";
import { MapPin } from "lucide-react";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

interface PageHeroProps {
  eyebrow?: string;
  h1: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Kept for callers that pass the city; used to pre-fill the WhatsApp message. */
  formCity?: string;
}

/** Shared hero for the service / tour pages: photo backdrop, headline and call / WhatsApp buttons. */
export function PageHero({ eyebrow, h1, description, image, imageAlt, formCity }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b bg-secondary text-secondary-foreground">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
      <div className="container flex min-h-[320px] items-center py-12 md:min-h-[440px] md:py-16">
        <div className="max-w-xl">
          {eyebrow && (
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">{h1}</h1>
          <p className="mt-3 text-sm text-secondary-foreground/85 md:text-base">{description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CallButton
              size="lg"
              variant="default"
              className="rounded-full bg-gradient-to-r from-[#FFD98A] to-[#F59E0B] px-7 font-semibold text-secondary shadow-lg shadow-black/30 hover:from-[#FFE2A3] hover:to-[#FBAF2C]"
            />
            <WhatsAppButton
              size="lg"
              label="WhatsApp"
              context={formCity}
              className="rounded-full bg-gradient-to-r from-[#2EE07A] to-[#12A150] px-7 font-semibold shadow-lg shadow-black/30 hover:from-[#3BEB86] hover:to-[#16B85B]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
