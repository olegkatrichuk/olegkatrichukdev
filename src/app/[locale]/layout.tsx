import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${t.role}`,
      template: `%s — ${site.name}`,
    },
    description: t.description,
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
    },
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
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
        <SiteHeader locale={locale as Locale} t={t} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale as Locale} t={t} />
      </body>
    </html>
  );
}
