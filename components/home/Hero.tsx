import { getImageProps } from "next/image";
import { Clock, ShieldCheck, Tag } from "lucide-react";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const trustBadges = [
  { label: "Verified Drivers", icon: ShieldCheck },
  { label: "Transparent Pricing", icon: Tag },
  { label: "24×7 Support", icon: Clock },
];

// Shared look for the two hero CTAs: pill shape, soft shadow and a lift on hover.
const ctaClass =
  "rounded-full px-7 font-semibold shadow-lg shadow-black/30 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-xl";

const HERO_ALT = "Force Urbania van with a group of travellers at sunset in Jaipur, Rajasthan";

export function Hero() {
  // Art direction: a wide photo for desktop and a tall crop for phones, served
  // through a single <picture> so only the matching file is downloaded.
  const common = { alt: HERO_ALT, fill: true, sizes: "100vw", quality: 80 } as const;
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/images/hero/desktop.png" });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: "/images/hero/mobile.png", priority: true });

  return (
    <section className="relative isolate flex h-[78svh] min-h-[600px] max-h-[760px] flex-col justify-between overflow-hidden border-b bg-secondary text-white md:h-[clamp(560px,52vw,860px)] md:max-h-none">
      <picture className="absolute inset-0 -z-20 block">
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
        { }
        <img
          {...imgProps}
          srcSet={mobileSrcSet}
          alt={HERO_ALT}
          className="object-cover object-[50%_88%] md:object-[50%_60%]"
        />
      </picture>

      {/* Darkens only the sky (behind the headline) and the ground (behind the buttons)
          so the van and travellers in the middle of the photo stay fully visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.4)_28%,rgba(0,0,0,0)_48%,rgba(0,0,0,0)_72%,rgba(0,0,0,0.6)_100%)]"
      />

      <div className="container pt-8 text-center md:pt-12">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
          Premium Rental Services
        </p>
        <h1 className="mt-3 font-serif text-[2.4rem] font-bold leading-[1.1] [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
          <span className="text-gold">Force Urbania</span> Hire in Jaipur
        </h1>
        <p className="mt-2 font-serif text-lg italic font-semibold text-balance text-gold [text-shadow:0_2px_10px_rgba(0,0,0,0.7)] sm:text-2xl">
          For Weddings, Corporate Travel &amp; Family Tours
        </p>
        <p className="mx-auto mt-3 hidden max-w-2xl text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] xl:block">
          Book a 17-seater Force Urbania with an experienced driver for group travel in Jaipur and across
          Jodhpur, Udaipur, Jaisalmer and every major city in Rajasthan.
        </p>
      </div>

      <div className="container pb-7 text-center md:pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <CallButton
            size="lg"
            variant="default"
            className={`${ctaClass} bg-gradient-to-r from-[#FFD98A] to-[#F59E0B] text-secondary hover:from-[#FFE2A3] hover:to-[#FBAF2C]`}
          />
          <WhatsAppButton
            size="lg"
            label="WhatsApp"
            variant="default"
            className={ctaClass}
          />
        </div>
        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold">
          {trustBadges.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
