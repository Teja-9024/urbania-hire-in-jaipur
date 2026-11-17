import Link from "next/link";
import { Check } from "lucide-react";
import { FleetCard } from "@/components/shared/FleetCard";
import type { Vehicle } from "@/types";
import type { ServiceLink } from "@/lib/service-links";

export function FleetGrid({ heading, intro, vehicles }: { heading: string; intro: string; vehicles: Vehicle[] }) {
  if (vehicles.length === 0) return null;
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl md:text-3xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{intro}</p>
        </div>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <FleetCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsGrid({ title, items }: { title: string; items: { title: string; text: string }[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl">{title}</h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5 shadow-sm">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { title: "Share your plan", text: "Send your pickup point, destination, dates and group size by call, WhatsApp or the quote form." },
  { title: "Get a clear quote", text: "We recommend the right vehicle and send a transparent quote, usually within a few hours." },
  { title: "Confirm your booking", text: "Confirm the details and your vehicle and driver are reserved for your dates." },
  { title: "Travel with a verified driver", text: "Your driver arrives on time at the pickup point and stays with you for the whole trip." },
];

export function BookingSteps({ title = "How Booking Works" }: { title?: string }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <ol className="mt-4 space-y-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-3 rounded-lg border p-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CheckList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 rounded-md border bg-muted/40 px-3 py-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RelatedLinks({ title, links }: { title: string; links: ServiceLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="rounded-lg border bg-muted/40 p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} prefetch={false} className="text-primary hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
