import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { footerNav, primaryNav } from "@/lib/nav";
import { defaultWhatsAppLink, telHref } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/data/site";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.lat},${siteConfig.geo.lng}`;

// Third column mirrors the "Rajasthan Tours" dropdown in the header, so the two never drift apart.
const tourLinks = primaryNav.find((item) => item.href === "/rajasthan-tours")?.children ?? [];

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/90 transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-black";

export function Footer() {
  return (
    <footer className="relative bg-[#262626] text-white">
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />

      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <FooterSection title="About Us">
          <Link href="/" className="inline-block" aria-label={`${siteConfig.name} home`}>
            <Image src="/images/footerurlogo.png" alt={siteConfig.name} width={135} height={134} unoptimized className="h-24 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-7 text-white/75">{siteConfig.description}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            Serving since {siteConfig.foundingYear}
          </p>
        </FooterSection>

        <FooterSection title="Our Services">
          <FooterLinks items={footerNav.services} />
        </FooterSection>

        <FooterSection title="Rajasthan Tours">
          <FooterLinks items={tourLinks} />
        </FooterSection>

        <FooterSection title="Contact Info">
          <ul className="space-y-4 text-sm leading-6 text-white/85">
            <ContactRow icon={MapPin} label="Address">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {siteConfig.addressDisplay}
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="For Booking (24×7)">
              <a href={telHref()} className="text-base font-semibold text-white hover:text-gold">
                {siteConfig.phoneDisplay}
              </a>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gold">
                {siteConfig.email}
              </a>
            </ContactRow>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.instagram.url}
              aria-label={`Instagram @${siteConfig.social.instagram.username}`}
              className={socialClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.facebook.url}
              aria-label={siteConfig.social.facebook.name}
              className={socialClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={defaultWhatsAppLink()}
              aria-label="Chat on WhatsApp"
              className={socialClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </FooterSection>
      </div>

      <div className="container">
        <nav aria-label="Footer" className="border-y border-white/15 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <li>
              <Link href="/" prefetch={false} className="hover:text-gold">
                Home
              </Link>
            </li>
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center justify-center gap-2 py-6 text-center text-sm text-white/75 sm:flex-row sm:gap-4">
          <p>
            Copyright © {new Date().getFullYear()} <span className="text-gold">{siteConfig.legalName}</span> All Rights Reserved.
          </p>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
          <p>
            Created By:{" "}
            <a
              href="https://www.instagram.com/teja__jakhar"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-gold hover:underline"
            >
              Teja
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="relative pb-3 text-base font-bold uppercase tracking-wide">
        {title}
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white/15" aria-hidden="true" />
        <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gold" aria-hidden="true" />
      </h3>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function FooterLinks({ items }: { items: readonly { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3 text-sm font-medium uppercase tracking-wide">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            prefetch={false}
            className="group inline-flex items-center gap-1.5 text-white/80 transition-colors hover:text-gold"
          >
            <ChevronRight
              className="h-3.5 w-3.5 -ml-1 text-gold opacity-0 transition-all duration-200 group-hover:ml-0 group-hover:opacity-100"
              aria-hidden="true"
            />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
        <Icon className="h-4 w-4" aria-hidden={true} />
      </span>
      <span>
        <span className="block text-[11px] font-bold uppercase tracking-wider text-white/55">{label}</span>
        {children}
      </span>
    </li>
  );
}
