import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { site } from "@/lib/site";
import { locales, isLocale, localeAlternates, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sourceSerif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin", "cyrillic"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);

  const keywordsByLocale: Record<string, string[]> = {
    en: [
      "website development",
      "web development",
      "custom website development",
      "web application development",
      "full-stack engineer",
      ".NET developer",
      "TypeScript developer",
      "React developer",
      "Next.js developer",
      "freelance web developer",
      "SaaS development",
      "Oleg Katrichuk",
    ],
    uk: [
      "створення сайтів",
      "розробка сайту",
      "замовити сайт",
      "сайт для бізнесу",
      "розробка вебзастосунків",
      "full-stack розробник",
      ".NET розробник",
      "TypeScript розробник",
      "React розробник",
      "Next.js розробник",
      "фрілансер веб-розробник",
      "розробка SaaS",
      "Олег Катричук",
    ],
    ru: [
      "создание сайтов",
      "разработка сайта",
      "заказать сайт",
      "сайт для бизнеса",
      "разработка веб-приложений",
      "full-stack разработчик",
      ".NET разработчик",
      "TypeScript разработчик",
      "React разработчик",
      "Next.js разработчик",
      "фрилансер веб-разработчик",
      "разработка SaaS",
      "Олег Катричук",
    ],
  };

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.seoTitle,
      template: `%s — ${site.name}`,
    },
    description: t.description,
    keywords: keywordsByLocale[locale] ?? keywordsByLocale.en,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: localeAlternates(locale),
    openGraph: {
      title: `${site.name} — ${t.role}`,
      description: t.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${t.role}`,
      description: t.description,
      creator: "@ilikenewcoin",
      site: "@ilikenewcoin",
    },
    // TODO: fill in once verified in each console.
    // Get codes from:
    //   - Google Search Console → https://search.google.com/search-console
    //   - Bing Webmaster Tools  → https://www.bing.com/webmasters
    //   - Yandex.Webmaster      → https://webmaster.yandex.com
    verification: {
      google: process.env.NEXT_PUBLIC_VERIFY_GOOGLE,
      yandex: process.env.NEXT_PUBLIC_VERIFY_YANDEX,
      other: process.env.NEXT_PUBLIC_VERIFY_BING
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_VERIFY_BING }
        : undefined,
    },
    category: "technology",
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0b0b0c"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
        <SiteHeader locale={locale as Locale} t={t} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale as Locale} t={t} />
        {process.env.NODE_ENV === "production" && (
          <Script
            defer
            src="https://analytics.getpetzone.com/script.js"
            data-website-id="a7db4eb7-1bc2-4052-8e99-c4170c3b2d77"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
