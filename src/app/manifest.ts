import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Oleg K",
    description: "Full-stack engineer — .NET & TypeScript",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#0b0b0c",
    theme_color: "#4f46e5",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
