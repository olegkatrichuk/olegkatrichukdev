import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type Locale, defaultLocale } from "./i18n";

const JOURNAL_DIR = path.join(process.cwd(), "src/content/journal");
const LOCALE_SUFFIX = /\.(uk|ru)\.mdx$/;

export type JournalEntryMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date (YYYY-MM-DD) — frontmatter publish date
  updatedAt: string; // ISO date — newest file mtime across locale variants
  tags?: string[];
  draft?: boolean;
  readingMinutes?: number;
};

// Newest mtime across the base file and any per-locale override, so an edit
// to any translation freshens dateModified. Mirrors sitemap's logic.
function entryUpdatedAt(slug: string): string {
  const candidates = [
    path.join(JOURNAL_DIR, `${slug}.mdx`),
    path.join(JOURNAL_DIR, `${slug}.uk.mdx`),
    path.join(JOURNAL_DIR, `${slug}.ru.mdx`),
  ];
  let latest = 0;
  for (const p of candidates) {
    try {
      const m = fs.statSync(p).mtimeMs;
      if (m > latest) latest = m;
    } catch {
      /* ignore missing locale files */
    }
  }
  return new Date(latest || Date.now()).toISOString().slice(0, 10);
}

export type JournalEntry = JournalEntryMeta & {
  body: string;
};

function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function readAll(locale: Locale): JournalEntry[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];

  const baseFiles = fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".mdx") && !LOCALE_SUFFIX.test(f));

  return baseFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const localized = path.join(JOURNAL_DIR, `${slug}.${locale}.mdx`);
    const finalPath =
      locale !== defaultLocale && fs.existsSync(localized)
        ? localized
        : path.join(JOURNAL_DIR, file);

    const raw = fs.readFileSync(finalPath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      summary: data.summary ?? "",
      date:
        typeof data.date === "string"
          ? data.date
          : data.date instanceof Date
            ? data.date.toISOString().slice(0, 10)
            : new Date().toISOString().slice(0, 10),
      updatedAt: entryUpdatedAt(slug),
      tags: Array.isArray(data.tags) ? data.tags : undefined,
      draft: data.draft ?? false,
      readingMinutes: estimateReadingMinutes(content),
      body: content,
    } satisfies JournalEntry;
  });
}

const isProd = process.env.NODE_ENV === "production";

export function getJournalEntries(
  locale: Locale = defaultLocale,
): JournalEntryMeta[] {
  return readAll(locale)
    .filter((e) => !(isProd && e.draft))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ body: _body, ...meta }) => meta);
}

export function getJournalEntry(
  slug: string,
  locale: Locale = defaultLocale,
): JournalEntry | null {
  const found = readAll(locale).find((e) => e.slug === slug);
  if (!found) return null;
  if (isProd && found.draft) return null;
  return found;
}
