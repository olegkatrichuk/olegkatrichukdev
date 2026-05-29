"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, isLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  function pathFor(locale: Locale): string {
    const segments = pathname.split("/");
    if (isLocale(segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="flex items-center gap-0.5 text-xs font-medium">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathFor(l)}
          aria-current={l === current ? "true" : undefined}
          className={cn(
            "rounded px-1.5 py-1 transition-colors",
            l === current
              ? "text-foreground"
              : "text-muted hover:text-foreground",
          )}
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}
