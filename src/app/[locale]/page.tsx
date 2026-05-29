import Link from "next/link";
import { Target, GitBranch, ShieldCheck, ArrowRight, Handshake } from "lucide-react";
import { site } from "@/lib/site";
import { getCaseStudies } from "@/lib/content";
import { isLocale, lh } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { CaseCard } from "@/components/case-card";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import {
  personSchema,
  websiteSchema,
  professionalServiceSchema,
} from "@/lib/jsonld";

const icons = [Target, GitBranch, ShieldCheck, Handshake];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const work = getCaseStudies(locale).slice(0, 4);

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={professionalServiceSchema(locale)} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
        <Container className="py-20 sm:py-32">
          <Reveal>
            <Link
              href={lh(locale, "/work/futura-ai")}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.home.currentlyBuilding}{" "}
              <span className="font-medium text-foreground">Futura AI</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="mt-4 text-sm font-medium text-accent">{t.role}</p>
            <h1 className="mt-4 font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              {t.positioning}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t.locationLine}. {t.home.heroSub}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {site.telegram && (
                <ButtonLink href={site.telegram} external withArrow>
                  {t.common.bookCall}
                </ButtonLink>
              )}
              <ButtonLink href={lh(locale, "/work")} variant="secondary">
                {t.common.seeWork}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {t.home.workTitle}
              </h2>
              <a
                href={lh(locale, "/work")}
                className="text-sm font-medium text-accent hover:underline"
              >
                {t.common.allProjects} →
              </a>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {work.map((c, i) => (
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

      <section className="border-y border-border bg-surface py-16 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {t.home.howTitle}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.principles.map((p, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-medium">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              {t.home.ctaBody}
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={lh(locale, "/contact")} withArrow>
                {t.common.startConversation}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
