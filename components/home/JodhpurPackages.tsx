import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { jodhpurPackages } from "@/data/jodhpur-packages";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function JodhpurPackages() {
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <SectionHeading
          eyebrow="Local Sightseeing Packages"
          title="See Jodhpur in Comfort"
          highlight="With a Force Urbania and Driver"
          description="From Mehrangarh Fort to the blue-washed lanes of the old city, tour Jodhpur together with your whole group in an air-conditioned Urbania, driven by a chauffeur who knows these roads well."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jodhpurPackages.map((pkg) => (
            <article key={pkg.slug} className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-md">
              <div className={`relative aspect-[16/7] w-full bg-gradient-to-br ${pkg.gradient}`}>
                {pkg.image && (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: pkg.imagePosition }}
                  />
                )}
                <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {pkg.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{pkg.description}</p>

                <div className="mt-4 rounded-xl bg-muted/70 p-4 mb-auto">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary">{pkg.stopsLabel}</p>
                  <p className="mt-1.5 text-xs font-semibold leading-5">{pkg.stops.join(" • ")}</p>
                </div>

                <Button asChild className="mt-6 h-11 w-full rounded-lg font-semibold">
                  <a
                    href={buildWhatsAppLink(`Hello, I want to book the "${pkg.title}" in Jodhpur. Please share the quote.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pkg.cta}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Photo credits: Sardar Market clock tower by{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Jodhpur,_India,_Jodhpur_Clock_Tower_(Ghanta_Ghar).jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vyacheslav Argenberg
          </a>{" "}
          (CC BY 4.0); Blue City view by Mustang Joe (CC0), via Wikimedia Commons.
        </p>
      </div>
    </section>
  );
}
