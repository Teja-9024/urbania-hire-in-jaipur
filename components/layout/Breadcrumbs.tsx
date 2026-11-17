import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem } from "@/types";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b bg-muted/40">
      <ol className="container flex flex-wrap items-center gap-1 py-3 text-sm text-muted-foreground">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <BreadcrumbSchema items={allItems} />
    </nav>
  );
}
