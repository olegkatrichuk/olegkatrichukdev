import { site } from "./site";

export const locales = ["en", "uk", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  uk: "UA",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Prefix an internal path with the active locale.
export function lh(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

// Per-page canonical + hreflang for Next.js Metadata.alternates.
export function localeAlternates(locale: Locale, path = "") {
  return {
    canonical: `${site.url}/${locale}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
      "x-default": `${site.url}/${defaultLocale}${path}`,
    },
  };
}
