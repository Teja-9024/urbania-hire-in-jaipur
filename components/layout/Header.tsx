import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { defaultWhatsAppLink, telHref } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/data/site";

function TopBar() {
  const linkClass = "flex items-center gap-2 transition-colors hover:text-gold";
  return (
    <div className="hidden bg-gradient-to-r from-[#E8590C] via-[#7a3416] to-[#1c1917] text-[13px] font-semibold text-white md:block">
      <div className="container flex h-9 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={defaultWhatsAppLink()} className={linkClass} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <a href={telHref()} className={linkClass}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.instagram.url}
            aria-label={`Instagram @${siteConfig.social.instagram.username}`}
            className="transition-colors hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteConfig.social.facebook.url}
            aria-label={siteConfig.social.facebook.name}
            className="transition-colors hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
      <Image src="/images/logo.png" alt={siteConfig.name} width={209} height={85} priority unoptimized className="h-12 w-auto" />
    </Link>
  );
}

const navLinkClass =
  "flex items-center gap-1 whitespace-nowrap py-6 text-[12px] font-bold uppercase tracking-wide xl:text-[13px] text-secondary transition-colors hover:text-primary focus-visible:text-primary";

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-4 lg:flex xl:gap-7" aria-label="Primary">
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link href={item.href} className={navLinkClass}>
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>

                  <div className="invisible absolute left-0 top-full z-50 w-72 -translate-y-1 pt-0 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-xl border bg-card p-3 shadow-xl">
                      {item.menuTitle && (
                        <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          {item.menuTitle}
                        </p>
                      )}
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href} className="border-b border-border/70 last:border-b-0">
                            <Link
                              href={child.href}
                              prefetch={false}
                              className="flex items-center justify-between rounded-md px-3 py-3 text-[13px] font-bold uppercase tracking-wide text-secondary transition-colors hover:bg-muted hover:text-primary"
                            >
                              {child.label}
                              <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <MobileMenu />
        </div>
      </header>
    </>
  );
}
