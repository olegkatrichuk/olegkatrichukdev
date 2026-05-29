import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta } from "@/lib/content";
import { lh, type Locale } from "@/lib/i18n";

// Brittany-Chiang-style row: year on the left rail, content on the right.
// Used on /work as a denser, more scannable alternative to the card grid.
export function CaseRow({
  c,
  locale,
}: {
  c: CaseStudyMeta;
  locale: Locale;
}) {
  return (
    <Link
      href={lh(locale, `/work/${c.slug}`)}
      className="group grid grid-cols-[3.5rem_1fr] gap-5 py-7 transition-colors hover:bg-surface/60 sm:grid-cols-[6rem_1fr] sm:gap-8 sm:px-4"
    >
      <div className="pt-1 font-mono text-sm text-muted">{c.year}</div>
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
            {c.title}
          </h3>
          <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" />
        </div>
        {c.client && <p className="mt-1.5 text-sm text-muted">{c.client}</p>}
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          {c.summary}
        </p>
        {c.result && (
          <p className="mt-2 text-sm font-medium text-accent">{c.result}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
