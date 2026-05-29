import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getJournalEntries, getJournalEntry } from "@/lib/journal";
import { locales, isLocale, lh, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getJournalEntries().map((e) => ({ locale, slug: e.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const e = getJournalEntry(slug, locale);
  if (!e) return {};
  return {
    title: e.title,
    description: e.summary,
    alternates: localeAlternates(locale, `/journal/${slug}`),
    openGraph: {
      title: e.title,
      description: e.summary,
      type: "article",
      publishedTime: e.date,
      authors: [site.name],
      ...(e.tags?.length ? { tags: e.tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: e.title,
      description: e.summary,
    },
  };
}

export default async function JournalArticle({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const e = getJournalEntry(slug, locale);
  if (!e) notFound();
  const t = getDictionary(locale);

  return (
    <article className="py-16 sm:py-20">
      <JsonLd data={articleSchema(e, locale)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: site.name, path: "/" },
          { name: t.journal.title, path: "/journal" },
          { name: e.title, path: `/journal/${slug}` },
        ])}
      />
      <Container>
        <Link
          href={lh(locale, "/journal")}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.journal.backToIndex}
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
            <time dateTime={e.date}>{formatDate(e.date, locale)}</time>
            <span>·</span>
            <span>
              {e.readingMinutes} {t.journal.minRead}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {e.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{e.summary}</p>
          {e.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {e.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-blockquote:border-l-accent prose-blockquote:bg-surface prose-blockquote:py-1 prose-blockquote:not-italic prose-img:my-8 prose-img:h-auto prose-img:w-full prose-img:rounded-xl prose-img:border prose-img:border-border">
          <MDXRemote source={e.body} />
        </div>

        <div className="mt-16 rounded-xl border border-border bg-surface p-10 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            {t.journal.ctaTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            {t.journal.ctaBody}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {site.telegram && (
              <ButtonLink href={site.telegram} external withArrow>
                {t.common.bookCall}
              </ButtonLink>
            )}
            <ButtonLink href={lh(locale, "/work")} variant="secondary">
              {t.common.seeWork}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </article>
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
