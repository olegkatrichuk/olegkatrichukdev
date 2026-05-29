import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { getCaseStudies } from "@/lib/content";
import { isLocale, lh, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { CaseCard } from "@/components/case-card";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqPageSchema } from "@/lib/jsonld";

// The three sites I built for clients in the "do I even need a site?" boat.
// Futura (own SaaS) is excluded — different question.
const EXAMPLE_SLUGS = new Set([
  "getpetzone-adoption-platform",
  "suncold-catalog-leadgen",
  "colorist-studio-site",
]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.why.title,
    description: t.why.heroSub,
    alternates: localeAlternates(locale, "/why"),
  };
}

export default async function WhyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const examples = getCaseStudies(locale).filter((c) =>
    EXAMPLE_SLUGS.has(c.slug),
  );

  return (
    <>
      <JsonLd data={faqPageSchema(t.why.objections)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: site.name, path: "/" },
          { name: t.nav.why, path: "/why" },
        ])}
      />
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <h1 className="font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              {t.why.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t.why.heroSub}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t.why.reasonsTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
            {t.why.reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div>
                  <div className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t.why.objectionsTitle}
            </h2>
          </Reveal>
          <div className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
            {t.why.objections.map((o, i) => (
              <Reveal key={o.q} delay={i * 0.05}>
                <details className="group py-5 [&[open]_.chevron]:rotate-180">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium transition-colors group-hover:text-accent">
                    <span>{o.q}</span>
                    <ChevronDown className="chevron mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{o.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {examples.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <Reveal>
              <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                {t.why.examplesTitle}
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                {t.why.examplesIntro}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {examples.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.06} className="h-full">
                  <CaseCard
                    c={c}
                    locale={locale}
                    readLabel={t.common.readCase}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t.why.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              {t.why.ctaBody}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {site.telegram && (
                <ButtonLink href={site.telegram} external withArrow>
                  {t.common.bookCall}
                </ButtonLink>
              )}
              <ButtonLink href={lh(locale, "/contact")} variant="secondary">
                {t.common.sendMessage}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
