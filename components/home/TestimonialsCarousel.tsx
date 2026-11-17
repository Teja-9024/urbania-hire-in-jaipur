"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = ["bg-orange-600", "bg-amber-600", "bg-rose-600", "bg-teal-600", "bg-sky-600", "bg-violet-600"];

function avatarColor(name: string) {
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i < rating ? "fill-accent text-accent" : "text-muted-foreground/30")}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel({ items, reviewUrl }: { items: Testimonial[]; reviewUrl: string }) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (step: number) => setActive((a) => (a + step + count) % count);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      <div className="relative mx-auto h-[380px] max-w-5xl overflow-hidden sm:h-[340px]">
        {items.map((t, i) => {
          // Shortest signed distance from the active card, so the ring wraps around.
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <article
              key={t.name}
              aria-hidden={!isActive}
              className={cn(
                "absolute left-1/2 top-1/2 flex w-[86%] flex-col gap-4 rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-500 ease-out sm:w-[420px]",
                isActive ? "border-2 border-primary/60 shadow-xl hover:border-primary hover:shadow-2xl" : "border-border shadow-md hover:shadow-lg",
                distance > 2 && "pointer-events-none",
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 74}%) scale(${1 - distance * 0.1}) rotate(${offset * 2.5}deg)`,
                opacity: distance === 0 ? 1 : distance === 1 ? 0.5 : distance === 2 ? 0.2 : 0,
                zIndex: 10 - distance,
              }}
            >
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isActive ? 0 : -1}
                aria-label={`Read ${t.name}'s review on Google (opens in a new tab)`}
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Stars rating={t.rating} />
              <p className="text-[15px] leading-relaxed text-foreground/85">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white ring-2 ring-white",
                    avatarColor(t.name),
                  )}
                  aria-hidden="true"
                >
                  {t.name.charAt(0).toUpperCase()}
                </span>
                <div className="text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted-foreground">
                    {t.badge ? `${t.badge} · ` : ""}
                    {t.source}
                  </p>
                </div>
              </div>
            </article>
          );
        })}

        {/* Side arrows, overlaid on the card edges at every breakpoint */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="absolute left-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition hover:bg-primary sm:left-4 sm:h-11 sm:w-11"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="absolute right-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition hover:bg-primary sm:right-4 sm:h-11 sm:w-11"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show review ${i + 1} of ${count}`}
            aria-current={i === active}
            className={cn(
              "h-2 rounded-full transition-all",
              i === active ? "w-6 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
