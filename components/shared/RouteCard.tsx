import Link from "next/link";
import { ArrowRight, Clock, Route as RouteIcon } from "lucide-react";
import { RouteEntry } from "@/types";
import { Card } from "@/components/ui/card";

export function RouteCard({ route }: { route: RouteEntry }) {
  return (
    <Card className="p-5 transition-shadow hover:shadow-md">
      <Link href={`/routes/${route.slug}`} prefetch={false} className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-semibold">
          {route.fromCity}
          <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
          {route.toCity}
        </h3>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <RouteIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {route.distanceKm} km
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {route.durationHrs}
          </span>
        </div>
      </Link>
    </Card>
  );
}
