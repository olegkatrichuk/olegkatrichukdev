import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { getCaseStudies } from "@/lib/content";
import { getJournalEntries } from "@/lib/journal";

// lastmod comes from frontmatter `date` fields, not file mtimes: CI
// checkouts reset every mtime to build time, which made all sitemap
// dates identical (and useless to Google) on each deploy.

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = getCaseStudies();
  const journal = getJournalEntries();

  const caseDate = (date?: string) => (date ? new Date(date) : new Date());
  // Static pages change when content does — use the newest content date
  // so the stamp is stable across deploys that publish nothing new.
  const staticMtime = new Date(
    Math.max(
      ...cases.map((c) => caseDate(c.date).getTime()),
      ...journal.map((e) => new Date(e.date).getTime()),
    ),
  );

  const entries: {
    path: string;
    lastModified: Date;
    priority: number;
    // Absolute image URLs surfaced in the image sitemap (Google Images).
    images?: string[];
  }[] = [
    { path: "", lastModified: staticMtime, priority: 1.0 },
    { path: "/work", lastModified: staticMtime, priority: 0.9 },
    { path: "/services", lastModified: staticMtime, priority: 0.9 },
    { path: "/why", lastModified: staticMtime, priority: 0.8 },
    { path: "/journal", lastModified: staticMtime, priority: 0.8 },
    { path: "/about", lastModified: staticMtime, priority: 0.6 },
    { path: "/contact", lastModified: staticMtime, priority: 0.6 },
    ...cases.map((c) => ({
      path: `/work/${c.slug}`,
      lastModified: caseDate(c.date),
      priority: 0.8,
      images: c.coverImage ? [`${site.url}${c.coverImage}`] : undefined,
    })),
    ...journal.map((e) => ({
      path: `/journal/${e.slug}`,
      lastModified: new Date(e.date),
      priority: 0.7,
    })),
  ];

  return locales.flatMap((locale) =>
    entries.map((e) => ({
      url: `${site.url}/${locale}${e.path}`,
      lastModified: e.lastModified,
      changeFrequency: "monthly" as const,
      priority: e.priority,
      ...(e.images ? { images: e.images } : {}),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${e.path}`]),
        ),
      },
    })),
  );
}
