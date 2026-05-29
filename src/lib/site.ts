// Locale-independent config. Translatable copy lives in src/lib/dictionaries.ts.

type Social = { label: string; href?: string; handle?: string };

export const site: {
  name: string;
  url: string;
  email: string;
  telegram: string;
  available: boolean;
  socials: Social[];
} = {
  name: "Oleg Katrichuk",

  url: "https://olegkatrichuk.com",

  email: "katrichukoleg@gmail.com",

  // Toggle off when you don't want the "Available for work" badge to show.
  available: true,

  // Primary contact CTA points here.
  telegram: "https://t.me/Olegnewlife",

  // label is shown as-is. Use href for a clickable profile; use handle
  // (no href) for platforms without a public profile URL (e.g. Discord).
  socials: [
    { label: "Telegram", href: "https://t.me/Olegnewlife" },
    { label: "GitHub", href: "https://github.com/olegkatrichuk" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oleg-katrichuk-67468a223/",
    },
    { label: "X", href: "https://x.com/ilikenewcoin" },
    { label: "Viber", href: "viber://chat?number=%2B380689080884" },
    { label: "Discord", handle: "olegsun" },
  ],
};

export type Site = typeof site;
