import { site } from "./site";
import type { Locale } from "./i18n";
import type { CaseStudyMeta } from "./content";

const author = { "@type": "Person" as const, name: site.name, url: site.url };

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: "Full-stack engineer — .NET & TypeScript",
    sameAs: site.socials
      .map((s) => s.href)
      .filter((h): h is string => !!h && /^https?:\/\//.test(h)),
    knowsAbout: [
      ".NET",
      "ASP.NET",
      "C#",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Clean Architecture",
    ],
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

export function caseStudySchema(c: CaseStudyMeta, locale: Locale) {
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
  };
}
