import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const alt = `${site.name} — portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = isLocale(locale) ? getDictionary(locale) : getDictionary("en");
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
            fontSize: 24,
            color: "#8b8bff",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "#4f46e5",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            OK
          </div>
          <span>{domain}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 600, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 38, color: "#9a9aa3", marginTop: 18 }}>
            {t.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9a9aa3",
          }}
        >
          {t.locationLine}
        </div>
      </div>
    ),
    { ...size },
  );
}
