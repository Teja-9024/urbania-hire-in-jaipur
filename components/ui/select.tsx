import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Native <select> styled to match the design system. A native element is
 * used deliberately instead of a JS-driven listbox: it's fully accessible
 * out of the box, works without hydration, and keeps the booking form
 * usable even before client JS loads.
 */
const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export { Select };
