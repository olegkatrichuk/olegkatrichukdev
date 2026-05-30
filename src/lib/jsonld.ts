import { site } from "./site";
import { type Locale, defaultLocale } from "./i18n";
import type { CaseStudyMeta } from "./content";
import type { JournalEntryMeta } from "./journal";

const PERSON_ID = `${site.url}/#person`;

// Reference to the canonical Person node (defined once in personSchema).
// Using @id deduplicates the entity across every schema block so Google
// attributes all content to one author entity.
const author = { "@id": PERSON_ID };

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: "Full-stack engineer — .NET & TypeScript",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
    },
    nationality: { "@type": "Country", name: "Ukraine" },
    sameAs: site.socials
      .map((s) => s.href)
      .filter((h): h is string => !!h && /^https?:\/\//.test(h)),
    knowsAbout: [
      "Website development",
      "Web development",
      "Web application development",
      ".NET",
      "ASP.NET",
      "C#",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Clean Architecture",
      "Multi-tenant SaaS",
      "EF Core",
    ],
    knowsLanguage: ["en", "uk", "ru"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: ["en", "uk", "ru"],
    author,
  };
}

const serviceDescription: Record<Locale, string> = {
  en: "Website and web-app development with .NET, TypeScript, React & Next.js. Solo full-stack engineer, end-to-end delivery, paid after launch.",
  uk: "Створення та розробка сайтів і вебзастосунків на .NET, TypeScript, React і Next.js. Один full-stack інженер, наскрізна реалізація, оплата після запуску.",
  ru: "Создание и разработка сайтов и веб-приложений на .NET, TypeScript, React и Next.js. Один full-stack инженер, сквозная реализация, оплата после запуска.",
};

const serviceTypes: Record<Locale, string[]> = {
  en: [
    "Website development",
    "Custom website development",
    "Web application development",
    ".NET backend development",
    "React / Next.js frontend development",
    "SaaS MVP development",
    "API design and integration",
  ],
  uk: [
    "Створення сайтів",
    "Розробка сайту під ключ",
    "Розробка вебзастосунків",
    "Бекенд-розробка на .NET",
    "Фронтенд на React / Next.js",
    "Розробка SaaS MVP",
    "Проєктування та інтеграція API",
  ],
  ru: [
    "Создание сайтов",
    "Разработка сайта под ключ",
    "Разработка веб-приложений",
    "Бэкенд-разработка на .NET",
    "Фронтенд на React / Next.js",
    "Разработка SaaS MVP",
    "Проектирование и интеграция API",
  ],
};

export function professionalServiceSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — Full-stack engineering`,
    url: `${site.url}/${locale}`,
    image: `${site.url}/${locale}/opengraph-image`,
    description: serviceDescription[locale] ?? serviceDescription.en,
    provider: { "@id": PERSON_ID },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Ukraine" },
      { "@type": "Place", name: "European Union" },
      { "@type": "Place", name: "CIS" },
    ],
    serviceType: serviceTypes[locale] ?? serviceTypes.en,
    availableLanguage: ["English", "Ukrainian", "Russian"],
    priceRange: "$$",
    paymentAccepted: "Bank transfer, USDT",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      availableLanguage: ["English", "Ukrainian", "Russian"],
      url: site.telegram,
    },
  };
}

export function caseStudySchema(c: CaseStudyMeta, locale: Locale) {
  const image = c.coverImage
    ? `${site.url}${c.coverImage}`
    : `${site.url}/${locale}/work/${c.slug}/opengraph-image`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title,
    description: c.summary,
    url: `${site.url}/${locale}/work/${c.slug}`,
    datePublished: String(c.year),
    ...(c.liveUrl ? { sameAs: c.liveUrl } : {}),
    creator: author,
    keywords: c.stack.join(", "),
    inLanguage: locale,
    about: c.client,
    image,
  };
}

export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}/${locale}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function faqPageSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

export function itemListSchema(
  locale: Locale,
  items: CaseStudyMeta[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/${locale}/work/${c.slug}`,
      name: c.title,
    })),
  };
}

// Used by metadata generators to provide a reliable OG image URL
// even though Next will also auto-discover the colocated file.
export function ogImageUrl(locale: Locale = defaultLocale, path = "") {
  return `${site.url}/${locale}${path}/opengraph-image`;
}

export function blogSchema(locale: Locale, entries: JournalEntryMeta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} — Journal`,
    url: `${site.url}/${locale}/journal`,
    inLanguage: locale,
    author,
    blogPost: entries.map((e) => ({
      "@type": "BlogPosting",
      headline: e.title,
      url: `${site.url}/${locale}/journal/${e.slug}`,
      datePublished: e.date,
      ...(e.tags?.length ? { keywords: e.tags.join(", ") } : {}),
    })),
  };
}

export function articleSchema(e: JournalEntryMeta, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: e.title,
    description: e.summary,
    url: `${site.url}/${locale}/journal/${e.slug}`,
    datePublished: e.date,
    dateModified: e.updatedAt,
    inLanguage: locale,
    author,
    publisher: author,
    mainEntityOfPage: `${site.url}/${locale}/journal/${e.slug}`,
    ...(e.tags?.length ? { keywords: e.tags.join(", ") } : {}),
    image: `${site.url}/${locale}/journal/${e.slug}/opengraph-image`,
  };
}
