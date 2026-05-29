import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudies } from "@/lib/content";
import { isLocale, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { CaseRow } from "@/components/case-row";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.work.title,
    description: t.work.intro,
    alternates: localeAlternates(locale, "/work"),
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const work = getCaseStudies(locale);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {t.work.title}
          </h1>
          <p className="mt-3 max-w-xl text-muted">{t.work.intro}</p>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {work.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <CaseRow c={c} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
