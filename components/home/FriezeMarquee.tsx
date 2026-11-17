import Image from "next/image";

// Each group holds enough copies to span the widest screens, and the track is two identical
// groups: the animation slides by exactly one group (-50%), so the strip is always full and
// the loop has no visible jump or empty space.
const COPIES_PER_GROUP = 4;

/**
 * Decorative Rajasthani frieze that scrolls continuously just below the hero.
 * Purely visual (hidden from assistive tech); motion stops for users who prefer reduced motion.
 */
export function FriezeMarquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-b bg-background">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0">
            {Array.from({ length: COPIES_PER_GROUP }, (_, i) => (
              <Image
                key={i}
                src="/images/hero/rajasthan-frieze.avif"
                alt=""
                width={2172}
                height={247}
                // Every copy is the same 177 KB file, so it downloads once. Eager + unoptimized keeps
                // the off-screen copies ready before they slide in (lazy ones would show blank gaps).
                loading="eager"
                unoptimized
                className="h-16 w-auto max-w-none shrink-0 md:h-24"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
