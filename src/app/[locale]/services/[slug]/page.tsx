import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { locales, isLocale, lh, localeAlternates, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getCaseStudies } from "@/lib/content";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { CaseCard } from "@/components/case-card";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/jsonld";

// Landing slugs are the keys of the `landings.pages` dictionary — kept in
// one place so the route, the sitemap and the /services index can't drift.
export const landingSlugs = [
  "website-development",
  "web-app-development",
  "saas-development",
  "dotnet-development",
  "website-fixes",
] as const;

export type LandingSlug = (typeof landingSlugs)[number];

function isLandingSlug(value: string): value is LandingSlug {
  return (landingSlugs as readonly string[]).includes(value);
}

// Which case studies to surface on each landing. Internal links from a
// commercial page to proof of the same kind of work.
const relatedCases: Record<LandingSlug, string[]> = {
  "website-development": [
    "oksanarudak-psychology-site",
    "colorist-studio-site",
  ],
  "web-app-development": ["getpetzone-adoption-platform", "suncold-catalog-leadgen"],
  "saas-development": ["futura-ai", "getpetzone-adoption-platform"],
  "dotnet-development": ["getpetzone-adoption-platform", "futura-ai"],
  "website-fixes": ["suncold-catalog-leadgen", "colorist-studio-site"],
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    landingSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isLandingSlug(slug)) return {};
  const p = getDictionary(locale).landings.pages[slug];
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: localeAlternates(locale, `/services/${slug}`),
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
    },
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isLandingSlug(slug)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const g = t.landings;
  const p = g.pages[slug];

  const wanted = relatedCases[slug];
  const cases = getCaseStudies(l)
    .filter((c) => wanted.includes(c.slug))
    .sort((a, b) => wanted.indexOf(a.slug) - wanted.indexOf(b.slug));

  return (
    <>
      <JsonLd
        data={serviceSchema(l, {
          slug,
          title: p.title,
          metaDescription: p.metaDescription,
          includes: p.includes,
        })}
      />
      <JsonLd data={faqPageSchema(p.faq)} />
      <JsonLd
        data={breadcrumbSchema(l, [
          { name: site.name, path: "/" },
          { name: t.services.title, path: "/services" },
          { name: p.title, path: `/services/${slug}` },
        ])}
      />

      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <h1 className="font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {p.heroSub}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {site.telegram && (
                <ButtonLink href={site.telegram} external withArrow>
                  {t.common.bookCall}
                </ButtonLink>
              )}
              <ButtonLink href={lh(l, "/work")} variant="secondary">
                {t.common.seeWork}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
              {p.intro}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mt-16 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {g.includesTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
            {p.includes.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div>
                  <div className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    {item.body}
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
              {g.processTitle}
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {t.services.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li>
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-medium">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {cases.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <Reveal>
              <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                {g.casesTitle}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {cases.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <CaseCard c={c} locale={l} readLabel={t.common.readCase} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {g.faqTitle}
            </h2>
          </Reveal>
          <div className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
            {p.faq.map((o, i) => (
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

      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t.services.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              {t.services.ctaBody}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {site.telegram && (
                <ButtonLink href={site.telegram} external withArrow>
                  {t.common.bookCall}
                </ButtonLink>
              )}
              <ButtonLink href={lh(l, "/contact")} variant="secondary">
                {t.common.sendMessage}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
