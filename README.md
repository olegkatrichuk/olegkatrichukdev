# olegkatrichuk.dev

Personal portfolio — Next.js 16 (App Router), Tailwind 4, MDX, trilingual (en/uk/ru).

Four case studies of live products, a sales page (`/why`), contact form via
Resend. Content lives in the repo, no CMS.

## Stack

- **Next.js 16** — App Router, static generation
- **Tailwind CSS 4** — with `@tailwindcss/typography`
- **MDX** for case studies (`next-mdx-remote`)
- **Source Serif 4** for editorial headlines (Cyrillic-aware) + **Geist** for UI
- **Resend** for contact-form email delivery
- **Motion (Framer Motion)** for reveal animations
- **Lucide React** icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Editing content

### Case studies — `src/content/work/*.mdx`

One case study per file. Frontmatter drives the cards, SEO and OG images:

```yaml
---
title: "An outcome, not the tech"
client: "Client name — industry, region"
summary: "Shows on the card."
stack: [".NET", "React", "TypeScript"]
result: "The outcome line — qualitative, no fake numbers"
liveUrl: "https://realsite.com"
year: 2026
order: 100              # higher = shown first
draft: false            # true = hidden in production, visible in dev
---
```

Body follows: **Problem → Approach → Stack & why → Result → What was hard.**
The filename becomes the URL (`/work/<filename>`).

**Translations.** For multilingual case content, add `*.uk.mdx` and `*.ru.mdx`
next to the base file with the same slug. Falls back to the base `*.mdx`
(English) if a locale file is missing.

### UI copy — `src/lib/dictionaries.ts`

All translatable strings — nav, page titles, hero copy, "How I work" principles,
`/why` reasons & objections, contact form, footer. Three locales (en/uk/ru),
all derived from the EN type so missing keys fail compile.

### Site config — `src/lib/site.ts`

Name, URL, email, Telegram, social links. `available: boolean` toggles the
"Available for work" badge in the header.

## Contact form

`src/app/api/contact/route.ts` sends submissions via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — required for actual sending; without it the form still
  validates and returns 200 in dev (just logs)
- `CONTACT_FROM` — sender; must be on a domain verified in Resend (defaults
  to `onboarding@resend.dev` for testing, delivers only to the Resend account
  owner)
- `CONTACT_TO` — destination; defaults to `site.email`

## SEO

- Per-page `canonical` + `hreflang` for en/uk/ru — see `src/lib/i18n.ts`
- JSON-LD: `Person`, `WebSite` on home; `CreativeWork` on every case page
- Dynamic OG images via `next/og` — default per-locale + per-case
- `robots.txt`, multilingual `sitemap.xml`, dynamic `llms.txt` for AI crawlers
- Custom `icon.svg` monogram + `manifest.webmanifest`

## Deploy

Push to GitHub and import the repo in Vercel — zero config.

After deploy:

1. Connect the custom domain in Vercel.
2. Update `site.url` in `src/lib/site.ts` if different from
   `https://olegkatrichuk.dev`.
3. Set `RESEND_API_KEY` in Vercel project env vars.
4. Verify your sending domain in Resend, then set `CONTACT_FROM`.
5. Submit `sitemap.xml` in Google Search Console + Bing Webmaster.

## Project structure

```
src/
├── app/
│   ├── [locale]/                  # locale-prefixed routes (en/uk/ru)
│   │   ├── page.tsx               # home
│   │   ├── work/
│   │   │   ├── page.tsx           # case list (year-rail)
│   │   │   └── [slug]/            # case page + opengraph-image
│   │   ├── why/page.tsx           # sales page (reasons, objections)
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx             # fonts, metadata, header, footer
│   │   └── opengraph-image.tsx    # default per-locale OG
│   ├── api/contact/               # Resend handler
│   ├── llms.txt/                  # AI-crawler endpoint (route handler)
│   ├── icon.svg                   # OK monogram, replaces favicon
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
├── components/                    # CaseCard, CaseRow, SiteHeader, SiteFooter, ...
├── content/work/                  # *.mdx case studies (base + .uk.mdx + .ru.mdx)
├── lib/                           # site, i18n, dictionaries, content, jsonld, build-info
└── proxy.ts                       # middleware: redirects / to /<detected-locale>
```
