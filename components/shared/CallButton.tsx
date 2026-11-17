import Link from "next/link";
import { Phone } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/whatsapp";

export function CallButton({
  label = `Call ${siteConfig.phoneDisplay}`,
  variant = "outline",
  ...props
}: Omit<ButtonProps, "asChild"> & { label?: string }) {
  return (
    <Button asChild variant={variant} {...props}>
      <Link href={telHref()} aria-label={label}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        {label}
      </Link>
    </Button>
  );
}
