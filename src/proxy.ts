import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

function detectLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language");
  if (header) {
    for (const part of header.split(",")) {
      const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
      if ((locales as readonly string[]).includes(code)) return code;
    }
  }
  return defaultLocale;
}

// 308 (permanent) so Google consolidates ranking signals onto the canonical
// localized URL instead of holding the redirecting source ("Page with redirect"
// in Search Console). 307 is treated as temporary and never consolidates.
const PERMANENT = 308;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") ?? req.nextUrl.host;

  // Collapse the www host onto the apex so there is a single canonical origin.
  if (host.startsWith("www.")) {
    const url = req.nextUrl.clone();
    url.host = host.slice(4);
    url.port = "";
    return NextResponse.redirect(url, PERMANENT);
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, PERMANENT);
}

export const config = {
  // Skip API, Next internals, and static/SEO files.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
