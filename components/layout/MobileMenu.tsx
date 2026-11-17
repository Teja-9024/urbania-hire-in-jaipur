"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/nav";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => (open ? close() : setOpen(true))}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b bg-background shadow-lg">
          <nav className="container flex flex-col py-4" aria-label="Mobile">
            {primaryNav.map((item) => {
              const isExpanded = expanded === item.label;
              const rowClass =
                "flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-bold uppercase tracking-wide text-secondary hover:bg-muted";

              if (!item.children) {
                return (
                  <Link key={item.href} href={item.href} className={rowClass} onClick={close}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    className={cn(rowClass, isExpanded && "text-primary")}
                    aria-expanded={isExpanded}
                    onClick={() => setExpanded(isExpanded ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {isExpanded && (
                    <ul className="mb-2 ml-3 border-l-2 border-primary/30 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-secondary/80 hover:bg-muted hover:text-primary"
                            onClick={close}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <div className="mt-4 flex flex-col gap-3">
              <CallButton className="w-full" />
              <WhatsAppButton className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
