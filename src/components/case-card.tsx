import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta } from "@/lib/content";
import { lh, type Locale } from "@/lib/i18n";

export function CaseCard({
  c,
  locale,
  readLabel,
}: {
  c: CaseStudyMeta;
  locale: Locale;
  readLabel: string;
}) {
  return (
    <Link
      href={lh(locale, `/work/${c.slug}`)}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold tracking-tight transition-colors group-hover:text-accent">
          {c.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted">{c.year}</span>
      </div>
      {c.client && <p className="mt-1.5 text-sm text-muted">{c.client}</p>}
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">
        {c.summary}
      </p>
      {c.result && (
        <p className="mt-3 text-sm font-medium text-accent">{c.result}</p>
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
      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-accent">
        {readLabel}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
