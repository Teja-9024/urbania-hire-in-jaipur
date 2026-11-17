import Link from "next/link";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Button, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppLink, defaultWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends Omit<ButtonProps, "asChild"> {
  message?: string;
  context?: string;
  label?: string;
}

/** Server-renderable WhatsApp CTA — no client JS needed, it's a plain link. */
export function WhatsAppButton({
  message,
  context,
  label = "WhatsApp Us",
  variant = "whatsapp",
  className,
  ...props
}: WhatsAppButtonProps) {
  const href = message
    ? buildWhatsAppLink(message)
    : defaultWhatsAppLink(context);

  return (
    <Button asChild variant={variant} className={cn(className)} {...props}>
      <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
        {label}
      </Link>
    </Button>
  );
}
