import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { isLocale, localeAlternates } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
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
    title: t.contact.title,
    description: t.contact.description,
    alternates: localeAlternates(locale, "/contact"),
    openGraph: {
      title: t.contact.title,
      description: t.contact.description,
    },
  };
}

export default async function ContactPage({
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
          { name: t.contact.title, path: "/contact" },
        ])}
      />
      <Container>
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="mt-3 max-w-xl text-muted">{t.contact.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-12 sm:grid-cols-[1fr_auto]">
          <Reveal>
            <ContactForm t={t.contact} locale={locale} />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="space-y-6 text-sm sm:w-56">
              <div>
                <h2 className="font-semibold">{t.contact.preferCallTitle}</h2>
                {site.telegram ? (
                  <a
                    href={site.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-accent hover:underline"
                  >
                    {t.contact.bookMin} →
                  </a>
                ) : (
                  <p className="mt-1 text-muted">
                    Add your Telegram link in <code>src/lib/site.ts</code>.
                  </p>
                )}
              </div>
              <div>
                <h2 className="font-semibold">{t.contact.emailTitle}</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-accent hover:underline"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <h2 className="font-semibold">{t.contact.elsewhereTitle}</h2>
                <ul className="mt-1 space-y-1">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      {s.href ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent hover:underline"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <span className="text-muted">
                          {s.label}: {s.handle}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
