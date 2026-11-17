import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small pill above the heading. */
  eyebrow?: string;
  /** Dark part of the heading. */
  title: string;
  /** Orange part of the heading, shown after the title. */
  highlight?: string;
  description?: string;
  id?: string;
  className?: string;
}

/** Shared heading block for homepage sections: pill, two-tone heading and intro text. */
export function SectionHeading({ eyebrow, title, highlight, description, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow && (
        <span className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="max-w-4xl text-balance font-[family-name:var(--font-jakarta)] text-3xl font-bold leading-tight text-[#0F172A] md:text-[38px] md:leading-[1.25]"
      >
        {title}
        {highlight && <> <span className="text-primary">{highlight}</span></>}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl font-[family-name:var(--font-jakarta)] text-base font-normal leading-7 text-[#334155]">
          {description}
        </p>
      )}
    </div>
  );
}
