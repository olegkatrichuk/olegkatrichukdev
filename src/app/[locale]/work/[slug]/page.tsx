import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { locales, isLocale, lh, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { caseStudySchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseStudies().map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const c = getCaseStudy(slug, locale);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: localeAlternates(locale, `/work/${slug}`),
    openGraph: { title: c.title, description: c.summary, type: "article" },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const c = getCaseStudy(slug, locale);
  if (!c) notFound();
  const t = getDictionary(locale);

  return (
    <article className="py-16 sm:py-20">
      <JsonLd data={caseStudySchema(c, locale)} />
      <Container>
        <Link
          href={lh(locale, "/work")}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.common.backToWork}
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-sm font-medium text-accent">
            {c.client} · {c.year}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{c.summary}</p>
          {c.result && (
            <p className="mt-4 font-medium text-accent">{c.result}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-border px-2 py-0.5 text-xs text-muted"
              >
                {s}
              </span>
            ))}
          </div>
          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
            >
              {t.common.visitSite}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </header>

        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-blockquote:border-l-accent prose-blockquote:bg-surface prose-blockquote:py-1 prose-blockquote:not-italic">
          <MDXRemote source={c.body} />
        </div>

        <div className="mt-16 rounded-xl border border-border bg-surface p-10 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            {t.caseStudy.ctaTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            {t.caseStudy.ctaBody}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {site.telegram && (
              <ButtonLink href={site.telegram} external withArrow>
                {t.common.bookCall}
              </ButtonLink>
            )}
            <ButtonLink href={lh(locale, "/contact")} variant="secondary">
              {t.common.sendMessage}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </article>
  );
}
