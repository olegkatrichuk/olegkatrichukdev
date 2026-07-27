import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { isLocale, lh, localeAlternates, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbSchema,
  faqPageSchema,
  professionalServiceSchema,
} from "@/lib/jsonld";
import { landingSlugs } from "./[slug]/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.services.metaTitle,
    description: t.services.metaDescription,
    alternates: localeAlternates(locale, "/services"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const s = t.services;

  return (
    <>
      <JsonLd
        data={professionalServiceSchema(l, {
          path: "/services",
          offers: s.items,
        })}
      />
      <JsonLd data={faqPageSchema(s.faq)} />
      <JsonLd
        data={breadcrumbSchema(l, [
          { name: site.name, path: "/" },
          { name: s.title, path: "/services" },
        ])}
      />

      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <h1 className="font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              {s.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {s.heroSub}
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
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {s.listTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
            {s.items.map((item, i) => (
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

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t.landings.indexTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              {t.landings.indexSub}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {landingSlugs.map((slug, i) => (
              <Reveal key={slug} delay={i * 0.05}>
                <Link
                  href={lh(l, `/services/${slug}`)}
                  className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <h3 className="font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {t.landings.pages[slug].navTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {t.landings.pages[slug].heroSub}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-accent">
                    {t.landings.pages[slug].title}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                  {s.stackTitle}
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
                  {s.stackBody}
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                  {s.processTitle}
                </h2>
              </Reveal>
              <ol className="mt-6 space-y-6">
                {s.process.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <li className="flex gap-4">
                      <span className="font-mono text-sm text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-medium">{p.title}</h3>
                        <p className="mt-1 leading-relaxed text-muted">
                          {p.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {s.faqTitle}
            </h2>
          </Reveal>
          <div className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
            {s.faq.map((o, i) => (
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
              {s.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">{s.ctaBody}</p>
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
