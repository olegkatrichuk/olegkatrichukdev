import { execSync } from "node:child_process";

// Captured at module-load time, which on a static build means build time.
// Falls back to the build moment if git isn't available (e.g. minimal Docker).
function getLastUpdated(): string {
  try {
    const iso = execSync("git log -1 --format=%cI", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (iso) return iso;
  } catch {}
  return new Date().toISOString();
}

export const lastUpdated = getLastUpdated();
