import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { getCaseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/work",
    "/why",
    "/about",
    "/contact",
    ...getCaseStudies().map((c) => `/work/${c.slug}`),
  ];

  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${site.url}/${locale}${p}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${p}`]),
        ),
      },
    })),
  );
}
