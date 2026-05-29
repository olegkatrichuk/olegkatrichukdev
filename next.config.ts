import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME-sniffing — sticks especially to user-uploaded content.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow being embedded in iframes (defence in depth — also covered
  // by frame-ancestors below, but X-Frame-Options is universally honoured).
  { key: "X-Frame-Options", value: "DENY" },
  // Limit information leaked when navigating off-site.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down powerful browser features we never use.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), midi=()",
  },
  // Force HTTPS for everything below this host for a year, including
  // subdomains. Vercel also sets this, but explicit beats implicit.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
