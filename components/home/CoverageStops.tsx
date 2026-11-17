"use client";

import { useEffect, useRef, useState } from "react";

type Stop = {
  city: string;
  blurb: string;
  color: string;
  tint: string;
  top: string;
  left: string;
};

// Positions are percentages of a fixed 600x520 box (see the aspect-[...] wrapper below) so
// the dots and the dashed connector line stay aligned and proportional at every screen size.
const stops: Stop[] = [
  { city: "Jodhpur", blurb: "Blue City & Mehrangarh circuit", color: "#E8A020", tint: "#FBF1DC", top: "7%", left: "46%" },
  { city: "Jaipur", blurb: "Head office & fleet hub", color: "#C1440E", tint: "#FBEAE3", top: "29%", left: "4%" },
  { city: "Udaipur", blurb: "Lakeside tours & events", color: "#1B2A4A", tint: "#E9EDF5", top: "47%", left: "50%" },
  { city: "Jaisalmer", blurb: "Desert safaris & camps", color: "#1C6FC9", tint: "#E6F0FB", top: "62%", left: "4%" },
  { city: "Bikaner", blurb: "Northern-desert circuit", color: "#1F8F57", tint: "#E5F5EC", top: "86%", left: "50%" },
];

const coords = stops.map((s) => [(parseFloat(s.left) / 100) * 600, (parseFloat(s.top) / 100) * 520] as const);
const points = coords.map(([x, y]) => `${x},${y}`).join(" ");
const pathD = `M ${coords.map(([x, y]) => `${x},${y}`).join(" L ")}`;

function StopMarker({ stop, index, visible }: { stop: Stop; index: number; visible: boolean }) {
  return (
    <>
      <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center md:h-4 md:w-4">
        <span
          className={`absolute h-3.5 w-3.5 rounded-full md:h-4 md:w-4 ${visible ? "animate-marker-ping" : "opacity-0"}`}
          style={{ backgroundColor: stop.color, animationDelay: `${index * 150 + 500}ms` }}
          aria-hidden="true"
        />
        <span
          className="relative h-3.5 w-3.5 rounded-full shadow-[0_0_0_3px_white] md:h-4 md:w-4 md:shadow-[0_0_0_4px_white]"
          style={{ backgroundColor: stop.color }}
          aria-hidden="true"
        />
      </span>
      <span
        className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 rounded-full px-3 py-1.5 text-xs shadow-sm transition-shadow hover:shadow-md md:flex-nowrap md:whitespace-nowrap md:px-4 md:py-2 md:text-sm"
        style={{ backgroundColor: stop.tint }}
      >
        <span className="font-serif font-bold text-secondary">{stop.city}</span>
        <span className="text-muted-foreground">{stop.blurb}</span>
      </span>
    </>
  );
}

export function CoverageStops() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Same zigzag layout at every width: taller aspect + wrapping pill text on small
          screens for breathing room, reverting to the wide one-line layout from md up. */}
      <div className="relative mx-auto aspect-[600/580] w-full max-w-md md:aspect-[600/520]">
        <svg
          viewBox="0 0 600 520"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Faint static base line so the route reads clearly even before the flow animation kicks in. */}
          <polyline points={points} fill="none" stroke="#d8cdb0" strokeWidth="1.5" />
          <polyline
            points={points}
            fill="none"
            stroke="#a3946a"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
            className={visible ? "animate-dash-flow" : ""}
          />
          {/* Car drives the same route as the dashed line, nose aligned to the direction of travel. */}
          <image
            href="/images/car-progress.avif"
            x="-27"
            y="-13.5"
            width="54"
            height="27"
            className="transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "1.2s" }}
          >
            {visible && (
              <animateMotion dur="13s" repeatCount="indefinite" rotate="auto-reverse" path={pathD} begin="1.2s" />
            )}
          </image>
        </svg>
        {stops.map((stop, i) => (
          <div
            key={stop.city}
            className={`absolute flex -translate-y-1/2 items-center gap-2 transition-all duration-700 ease-out md:gap-2.5 ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
            style={{
              top: stop.top,
              left: stop.left,
              maxWidth: `calc(100% - ${stop.left})`,
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <StopMarker stop={stop} index={i} visible={visible} />
          </div>
        ))}
      </div>
    </div>
  );
}
