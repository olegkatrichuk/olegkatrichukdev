import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { isLocale, lh, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.about.title,
    description: t.about.description,
    alternates: localeAlternates(locale, "/about"),
    openGraph: {
      title: t.about.title,
      description: t.about.description,
      type: "profile",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="py-16 sm:py-20">
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: site.name, path: "/" },
          { name: t.about.title, path: "/about" },
        ])}
      />
      <Container>
        <Reveal>
          <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {t.about.title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {t.about.stackTitle}
            </h2>
            <p className="mt-3 text-foreground/85">{t.about.stackBody}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
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
  );
}
