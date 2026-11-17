import { SectionHeading } from "@/components/shared/SectionHeading";
import { BadgeIndianRupee, Clock, ShieldCheck, UserCheck } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Verified, Experienced Drivers",
    description: "Every driver is background-verified and experienced on Rajasthan's highway and city routes.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges — fuel, toll and driver allowance are disclosed upfront in every quote.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "Flight and train tracking, punctual pickups, and a dedicated coordinator for multi-day trips.",
  },
  {
    icon: UserCheck,
    title: "Built for Groups",
    description: "17-seat Urbania vehicles designed for families, weddings, corporate teams and tour groups.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Why Choose Us" title="Why Choose" highlight="Urbania Hire Jaipur" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title} className="relative overflow-hidden rounded-2xl p-[1.5px]">
              {/* Oversized conic-gradient rotating behind the card; only the p-[1.5px] sliver
                  around the edge peeks through, so a comet of light visibly travels the border. */}
              <div
                className="animate-border-spin absolute inset-[-150%]"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, transparent 0%, transparent 70%, hsl(var(--primary)) 85%, #E6C789 93%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              <div className="relative h-full rounded-2xl border border-primary/20 bg-background p-5">
                <point.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{point.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
