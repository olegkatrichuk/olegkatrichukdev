import Link from "next/link";
import { Menu } from "lucide-react";
import { site } from "@/lib/site";
import { lh, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";

export function SiteHeader({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const nav = [
    { label: t.nav.work, href: lh(locale, "/work") },
    { label: t.nav.why, href: lh(locale, "/why") },
    { label: t.nav.journal, href: lh(locale, "/journal") },
    { label: t.nav.about, href: lh(locale, "/about") },
    { label: t.nav.contact, href: lh(locale, "/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={lh(locale, "/")}
            className="text-[15px] font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            {site.name}
          </Link>
          {site.available && (
            <span
              className="hidden items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted sm:inline-flex"
              title={t.common.available}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {t.common.available}
            </span>
          )}
        </div>

        {/* Desktop nav (sm+) */}
        <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-border" />
          <LocaleSwitcher current={locale} />
          <ThemeToggle />
        </nav>

        {/* Mobile menu (below sm) — native <details>, no JS state needed */}
        <details className="group relative sm:hidden">
          <summary
            aria-label="Menu"
            className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground [&::-webkit-details-marker]:hidden"
          >
            <Menu className="h-4 w-4" />
          </summary>
          <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-lg border border-border bg-background shadow-lg">
            <nav className="flex flex-col p-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-1 h-px bg-border" />
              <div className="flex items-center justify-between gap-2 px-3 py-2">
                <LocaleSwitcher current={locale} />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
