import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type Locale, defaultLocale } from "./i18n";

const WORK_DIR = path.join(process.cwd(), "src/content/work");
const LOCALE_SUFFIX = /\.(uk|ru)\.mdx$/;

export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  stack: string[];
  result: string;
  liveUrl?: string;
  year: number;
  draft?: boolean;
  // higher = shown first
  order?: number;
  // Optional hero image (path under /public). Used for the case-study
  // hero, OG card override, and JSON-LD image.
  coverImage?: string;
  coverAlt?: string;
  coverWidth?: number;
  coverHeight?: number;
};

export type CaseStudy = CaseStudyMeta & {
  body: string;
};

function readAll(locale: Locale): CaseStudy[] {
  if (!fs.existsSync(WORK_DIR)) return [];

  // Base .mdx files (without a locale suffix) define the canonical slug list.
  // Per-locale files (.uk.mdx / .ru.mdx) override the base content for that locale.
  const baseFiles = fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx") && !LOCALE_SUFFIX.test(f));

  return baseFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const localized = path.join(WORK_DIR, `${slug}.${locale}.mdx`);
    const finalPath =
      locale !== defaultLocale && fs.existsSync(localized)
        ? localized
        : path.join(WORK_DIR, file);

    const raw = fs.readFileSync(finalPath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      client: data.client ?? "",
      summary: data.summary ?? "",
      stack: data.stack ?? [],
      result: data.result ?? "",
      liveUrl: data.liveUrl ?? undefined,
      year: data.year ?? new Date().getFullYear(),
      draft: data.draft ?? false,
      order: data.order ?? 0,
      coverImage: data.coverImage ?? undefined,
      coverAlt: data.coverAlt ?? undefined,
      coverWidth: data.coverWidth ?? undefined,
      coverHeight: data.coverHeight ?? undefined,
      body: content,
    } satisfies CaseStudy;
  });
}

const isProd = process.env.NODE_ENV === "production";

export function getCaseStudies(locale: Locale = defaultLocale): CaseStudyMeta[] {
  return readAll(locale)
    .filter((c) => !(isProd && c.draft))
    .sort((a, b) => (b.order ?? 0) - (a.order ?? 0) || b.year - a.year)
    .map(({ body: _body, ...meta }) => meta);
}

export function getCaseStudy(
  slug: string,
  locale: Locale = defaultLocale,
): CaseStudy | null {
  const found = readAll(locale).find((c) => c.slug === slug);
  if (!found) return null;
  if (isProd && found.draft) return null;
  return found;
}
