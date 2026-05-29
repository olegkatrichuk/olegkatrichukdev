import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getJournalEntries } from "@/lib/journal";
import { isLocale, lh, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { blogSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.journal.title,
    description: t.journal.intro,
    alternates: localeAlternates(locale, "/journal"),
    openGraph: {
      title: t.journal.title,
      description: t.journal.intro,
      type: "website",
    },
  };
}

export default async function JournalIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const entries = getJournalEntries(locale);

  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={blogSchema(locale, entries)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: site.name, path: "/" },
          { name: t.journal.title, path: "/journal" },
        ])}
      />
      <Container>
        <Reveal>
          <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {t.journal.title}
          </h1>
          <p className="mt-3 max-w-xl text-muted">{t.journal.intro}</p>
        </Reveal>

        {entries.length === 0 ? (
          <p className="mt-12 text-muted">{t.journal.empty}</p>
        ) : (
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {entries.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.04}>
                <li>
                  <Link
                    href={lh(locale, `/journal/${e.slug}`)}
                    className="group grid gap-4 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-baseline"
                  >
                    <time
                      dateTime={e.date}
                      className="font-mono text-xs uppercase tracking-wide text-muted"
                    >
                      {formatDate(e.date, locale)}
                    </time>
                    <div>
                      <h2 className="font-serif text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                        {e.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/75">
                        {e.summary}
                      </p>
                      {e.tags?.length ? (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {e.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border bg-surface px-2 py-0.5 text-xs text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <span className="hidden items-center gap-1 text-sm text-muted transition-colors group-hover:text-accent sm:inline-flex">
                      {e.readingMinutes} {t.journal.minRead}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

function formatDate(iso: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
