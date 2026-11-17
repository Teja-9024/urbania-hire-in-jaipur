import Image from "next/image";
import { Check } from "lucide-react";
import { Vehicle } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const DETAILS_HREF = { van: "/urbania-hire", bus: "/bus-services", car: "/taxi-services" } as const;

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-2xl shadow-md">
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} exterior`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          style={{ objectPosition: vehicle.imagePosition }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {vehicle.seatingCapacity} seats
        </span>
      </div>

      {vehicle.gallery.length > 0 && (
        <div className="grid grid-cols-2 gap-1 bg-muted p-1">
          {vehicle.gallery.map((src, i) => (
            <div key={src} className="relative aspect-video overflow-hidden rounded-sm">
              <Image
                src={src}
                alt={`${vehicle.name} interior ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {vehicle.pricePerKm ? (
          <div className="flex items-center justify-between gap-3">
            <p className="font-serif text-2xl font-bold text-primary">
              ₹{vehicle.pricePerKm}
              <span className="ml-1 font-sans text-xs font-semibold text-muted-foreground">/KM</span>
            </p>
            {vehicle.minKmPerDay ? (
              <span className="rounded-md bg-green-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-green-700">
                Min {vehicle.minKmPerDay} km/day
              </span>
            ) : null}
          </div>
        ) : null}

        <h3 className={vehicle.pricePerKm ? "mt-3 text-xl font-bold" : "text-xl font-bold"}>{vehicle.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{vehicle.description}</p>

        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 border-t border-dashed pt-4 sm:grid-cols-2">
          {vehicle.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs font-semibold leading-5">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          <Button asChild className="h-11 rounded-lg font-semibold">
            <a
              href={buildWhatsAppLink(`Hello, I want to book the ${vehicle.name}. Please share the quote.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Book Now
            </a>
          </Button>
          <Button asChild variant="outline" className="h-11 rounded-lg font-semibold">
            <Link href={DETAILS_HREF[vehicle.category]} prefetch={false}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
