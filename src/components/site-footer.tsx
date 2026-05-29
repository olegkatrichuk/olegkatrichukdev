import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { lh, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { lastUpdated } from "@/lib/build-info";
import { Container } from "./container";

export function SiteFooter({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <footer className="mt-24 border-t border-border py-12 text-sm text-muted">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="mt-1">{t.role}</p>
          <p className="mt-3">
            © {new Date().getFullYear()} · {t.locationLine}
          </p>
          <p className="mt-1 text-xs">
            {t.common.lastUpdated}{" "}
            <time dateTime={lastUpdated}>
              {new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
                new Date(lastUpdated),
              )}
            </time>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {site.socials.map((s) =>
            s.href ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 transition-colors hover:bg-surface hover:text-foreground"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5"
              >
                {s.label}: {s.handle}
              </span>
            ),
          )}
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 transition-colors hover:bg-surface hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            {t.contact.emailTitle}
          </a>
          <Link
            href={lh(locale, "/contact")}
            className="ml-1 transition-colors hover:text-foreground"
          >
            {t.nav.contact}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
