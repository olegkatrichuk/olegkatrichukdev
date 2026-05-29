// RSS 2.0 feed for the journal. Uses the default locale so feed readers
// — which generally don't speak hreflang — get a consistent stream.
import { site } from "@/lib/site";
import { getJournalEntries } from "@/lib/journal";
import { defaultLocale } from "@/lib/i18n";

export const dynamic = "force-static";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const entries = getJournalEntries(defaultLocale);
  const feedUrl = `${site.url}/feed.xml`;
  const indexUrl = `${site.url}/${defaultLocale}/journal`;

  const items = entries
    .map((e) => {
      const url = `${site.url}/${defaultLocale}/journal/${e.slug}`;
      const pubDate = new Date(`${e.date}T00:00:00Z`).toUTCString();
      return [
        `    <item>`,
        `      <title>${escape(e.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escape(e.summary)}</description>`,
        e.tags?.length
          ? e.tags
              .map((t) => `      <category>${escape(t)}</category>`)
              .join("\n")
          : null,
        `    </item>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)} — Journal</title>
    <link>${indexUrl}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>Notes on shipping software — .NET, TypeScript, multi-tenant SaaS.</description>
    <language>${defaultLocale}</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
