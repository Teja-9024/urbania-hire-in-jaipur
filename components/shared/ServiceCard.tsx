import Link from "next/link";
import * as Icons from "lucide-react";
import { Service } from "@/types";
import { Card } from "@/components/ui/card";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Bus;

  return (
    <div className="relative overflow-hidden rounded-2xl p-[1.5px]">
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
      <Card className="relative h-full rounded-2xl border-primary/20 p-6 transition-shadow hover:shadow-md">
        <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold">{service.shortName}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{service.shortDescription}</p>
        <Link
          href={`/services/${service.slug}`}
          prefetch={false}
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
        >
          Learn more →
        </Link>
      </Card>
    </div>
  );
}
