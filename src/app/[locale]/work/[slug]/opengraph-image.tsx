import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/lib/content";
import { site } from "@/lib/site";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const c = getCaseStudy(slug, isLocale(locale) ? locale : "en");
  return [
    {
      id: "main",
      alt: c ? `${c.title} — case study by ${site.name}` : "Case study",
      contentType,
      size,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = isLocale(locale) ? locale : "en";
  const c = getCaseStudy(slug, lang);
  const t = getDictionary(lang);
  const title = c?.title ?? "Case study";
  const subtitle = c ? `${c.client} · ${c.year}` : "";
  const domain = site.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0b0c",
          color: "#ededee",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#8b8bff",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: "#4f46e5",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            OK
          </div>
          <span>
            {site.name} · {domain}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {subtitle && (
            <div style={{ fontSize: 26, color: "#8b8bff", marginBottom: 14 }}>
              {subtitle}
            </div>
          )}
          <div style={{ fontSize: 60, fontWeight: 600, lineHeight: 1.08 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#9a9aa3" }}>
          {t.common.readCase} →
        </div>
      </div>
    ),
    { ...size },
  );
}
