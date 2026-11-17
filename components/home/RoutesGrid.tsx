import Link from "next/link";
import { routes } from "@/data/routes";
import { RouteCard } from "@/components/shared/RouteCard";

export function RoutesGrid() {
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl md:text-3xl">Popular Rajasthan Routes</h2>
          <p className="max-w-2xl text-muted-foreground">
            Fixed intercity routes with distance, duration and pricing guidance for outstation Urbania hire.
          </p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/routes" className="text-sm font-medium text-primary hover:underline">
            View all routes →
          </Link>
        </div>
      </div>
    </section>
  );
}
