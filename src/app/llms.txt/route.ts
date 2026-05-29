// llms.txt — gives AI crawlers (ChatGPT, Perplexity, Claude) a structured
// summary of the site. Emerging standard, cheap to add.
import { site } from "@/lib/site";
import { getCaseStudies } from "@/lib/content";
import { defaultLocale } from "@/lib/i18n";

export const dynamic = "force-static";

export async function GET() {
  const work = getCaseStudies();
  const lines = [
    `# ${site.name}`,
    ``,
    `> Full-stack engineer — .NET & TypeScript. Working with clients in the US, EU, Ukraine and the CIS.`,
    ``,
    `Site: ${site.url}`,
    `Contact: ${site.email} · ${site.telegram}`,
    ``,
    `## Work`,
    ``,
    ...work.map((c) => {
      const url = `${site.url}/${defaultLocale}/work/${c.slug}`;
      const live = c.liveUrl ? ` — live at ${c.liveUrl}` : "";
      return `- [${c.title}](${url})${live}\n  ${c.summary}`;
    }),
    ``,
    `## Stack`,
    ``,
    `C# / .NET, TypeScript, React & Next.js, PostgreSQL, Docker.`,
    ``,
    `## Links`,
    ``,
    ...site.socials
      .filter((s) => s.href)
      .map((s) => `- ${s.label}: ${s.href}`),
    ``,
  ];

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
