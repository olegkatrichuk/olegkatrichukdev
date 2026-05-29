import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { getCaseStudies } from "@/lib/content";
import { getJournalEntries } from "@/lib/journal";

const WORK_DIR = path.join(process.cwd(), "src/content/work");
const JOURNAL_DIR = path.join(process.cwd(), "src/content/journal");

// Stable mtime for a case-study slug: max of the base file and any
// per-locale override. Falls back to "now" if the file vanished.
function caseStudyMtime(slug: string): Date {
  const candidates = [
    path.join(WORK_DIR, `${slug}.mdx`),
    path.join(WORK_DIR, `${slug}.uk.mdx`),
    path.join(WORK_DIR, `${slug}.ru.mdx`),
  ];
  let latest = 0;
  for (const p of candidates) {
    try {
      const stat = fs.statSync(p);
      if (stat.mtimeMs > latest) latest = stat.mtimeMs;
    } catch {
      // ignore missing locale files
    }
  }
  return latest ? new Date(latest) : new Date();
}

function journalEntryMtime(slug: string): Date {
  const candidates = [
    path.join(JOURNAL_DIR, `${slug}.mdx`),
    path.join(JOURNAL_DIR, `${slug}.uk.mdx`),
    path.join(JOURNAL_DIR, `${slug}.ru.mdx`),
  ];
  let latest = 0;
  for (const p of candidates) {
    try {
      const stat = fs.statSync(p);
      if (stat.mtimeMs > latest) latest = stat.mtimeMs;
    } catch {
      /* ignore */
    }
  }
  return latest ? new Date(latest) : new Date();
}

// One stable date for all static routes — most recently edited page file
// in the [locale] tree. Stays constant across redeploys that touched
// nothing under app/.
function staticPagesMtime(): Date {
  const root = path.join(process.cwd(), "src/app/[locale]");
  let latest = 0;
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && /\.(tsx|ts|mdx)$/.test(entry.name)) {
        const m = fs.statSync(full).mtimeMs;
        if (m > latest) latest = m;
      }
    }
  };
  try {
    walk(root);
  } catch {
    /* ignore */
  }
  return latest ? new Date(latest) : new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticMtime = staticPagesMtime();
  const cases = getCaseStudies();
  const journal = getJournalEntries();

  const entries: { path: string; lastModified: Date; priority: number }[] = [
    { path: "", lastModified: staticMtime, priority: 1.0 },
    { path: "/work", lastModified: staticMtime, priority: 0.9 },
    { path: "/why", lastModified: staticMtime, priority: 0.8 },
    { path: "/journal", lastModified: staticMtime, priority: 0.8 },
    { path: "/about", lastModified: staticMtime, priority: 0.6 },
    { path: "/contact", lastModified: staticMtime, priority: 0.6 },
    ...cases.map((c) => ({
      path: `/work/${c.slug}`,
      lastModified: caseStudyMtime(c.slug),
      priority: 0.8,
    })),
    ...journal.map((e) => ({
      path: `/journal/${e.slug}`,
      lastModified: journalEntryMtime(e.slug),
      priority: 0.7,
    })),
  ];

  return locales.flatMap((locale) =>
    entries.map((e) => ({
      url: `${site.url}/${locale}${e.path}`,
      lastModified: e.lastModified,
      changeFrequency: "monthly" as const,
      priority: e.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${e.path}`]),
        ),
      },
    })),
  );
}
