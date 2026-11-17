import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/data/site";
import { telHref, defaultWhatsAppLink } from "@/lib/whatsapp";

const stats = [
  { value: "24×7", label: "call & WhatsApp support" },
  { value: "0%", label: "commission — book direct" },
];

export function CTASection({
  title = "Tell us where the road should take you",
  description = "Share your pickup, date and destination on WhatsApp or by phone and we'll send a transparent quote — usually within minutes.",
  showForm = true,
}: {
  title?: string;
  description?: string;
  showForm?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c0603] py-10 text-white md:py-14">
      <Image
        src="/images/hero/desktop.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover object-[50%_62%]"
      />
      {/* Dark on the text side, warm sunset showing through on the ticket side */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,4,2,0.96)_0%,rgba(8,4,2,0.88)_40%,rgba(8,4,2,0.6)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(8,4,2,0.9),rgba(8,4,2,0.8))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_45%,rgba(234,88,12,0.32),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"
      />
      {/* Amber accent line along the bottom edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Book your ride</p>
          <h2 className="mt-3 max-w-lg text-balance font-serif text-2xl font-bold leading-tight sm:text-3xl md:text-[2.3rem]">{title}</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">{description}</p>

          <dl className="mt-6 flex flex-wrap gap-x-9 gap-y-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-2xl font-bold text-gold">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-white/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Ticket-style card */}
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-center lg:rotate-[2deg]">
          <div className="relative flex rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
            <div className="flex w-12 shrink-0 items-center justify-center rounded-l-2xl border-r-2 border-dashed border-white/60 bg-primary">
              <span className="rotate-180 font-serif text-xs font-bold uppercase tracking-[0.4em] text-white [writing-mode:vertical-rl]">
                Book now
              </span>
            </div>

            {/* Notches where the ticket stub is torn off */}
            <span aria-hidden="true" className="absolute left-12 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0c0603]" />
            <span aria-hidden="true" className="absolute bottom-0 left-12 h-6 w-6 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0c0603]" />

            <div className="flex-1 rounded-r-2xl bg-[#FBF5E9] p-5 text-center text-secondary sm:p-6">
              <h3 className="font-serif text-xl font-bold">Get a free quote now</h3>
              <p className="mt-1.5 text-[13px] text-secondary/70">
                Fastest response on WhatsApp — send your trip details and we&apos;ll take it from there.
              </p>

              <div className="mt-4 space-y-2.5">
                <a
                  href={defaultWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-lg"
                >
                  <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                  Book on WhatsApp
                </a>
                <a
                  href={telHref()}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-secondary text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>

              {showForm && (
                <Link
                  href="/contact"
                  className="group mt-3.5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:underline"
                >
                  Or send an enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
