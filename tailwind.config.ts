import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        gold: "#E6C789",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1280px" },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Slides one full group left; the identical second group takes its place, so the loop never shows a gap.
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Marches the dash pattern along the path, so a static dashed line reads as a flowing route.
        "dash-flow": {
          to: { strokeDashoffset: "-24" },
        },
        // One-shot radar ping used behind a map marker dot.
        "marker-ping": {
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        // Spins an oversized conic-gradient behind a card so a comet of light travels its border.
        "border-spin": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
        "dash-flow": "dash-flow 1s linear infinite",
        "marker-ping": "marker-ping 1.4s cubic-bezier(0.4,0,0.2,1) 1 both",
        "border-spin": "border-spin 3.5s linear infinite",
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
