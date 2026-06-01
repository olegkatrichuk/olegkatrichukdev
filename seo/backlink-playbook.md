# Backlink playbook — olegkatrichuk.com

Goal: earn links from high-authority domains that pass ranking signals to the
site and corroborate the Person/Organization entity Google now sees in the
JSON-LD. Ordered by effort-to-value. Do them top-down.

The canonical URL to link everywhere: **https://olegkatrichuk.com** (apex, no
`www`, no locale — it 308-redirects to the visitor's language).

---

## Tier 1 — profile links (do today, ~30 min total)

These are permanent, high-DA, and you control them. Each is one strong backlink.

| Platform | Where to put the link | Status |
|---|---|---|
| **GitHub profile** | Create public repo named `olegkatrichuk`, add `seo/github-profile-README.md` as README.md. Also set the **website field** on github.com/olegkatrichuk to the site. | ☐ |
| **GitHub repos** | Add the site to the *About → website* field of your top pinned repos (PetZone, this portfolio). | ☐ |
| **LinkedIn** | Profile → Contact info → Website (label "Portfolio"). Plus a **Featured** item linking a case study. | ☐ |
| **X / Twitter** | Bio website field → site. Pin a tweet linking a case study. | ☐ |
| **dev.to** | Settings → profile → "Website URL". | ☐ |
| **Hashnode** | Profile → social → website. | ☐ |
| **Stack Overflow** | Profile → "Website" link. | ☐ |
| **DOU.ua** | Профіль → сайт (Ukrainian dev audience, strong local relevance). | ☐ |
| **Telegram bio** | Add the site link to your @Olegnewlife bio. | ☐ |

## Tier 2 — content syndication (highest long-term value)

Cross-post the journal articles to publishing platforms with a **canonical
URL pointing back to your site**. This is the key move: the platform's domain
authority flows to your canonical, and Google does NOT treat it as duplicate
content because the canonical tag tells it which is the original.

Ready-to-paste copies live in `seo/crosspost/`. Each already contains the
front-matter `canonical_url` line.

| Platform | How to set canonical | Article |
|---|---|---|
| **dev.to** | Paste article → front-matter `canonical_url:` is honored automatically. | both posts |
| **Hashnode** | Article settings → "Original article URL". | both posts |
| **Medium** | Import story by URL (Medium auto-sets `rel=canonical`) OR Story settings → Advanced → canonical. | optional |
| **Reddit** | r/dotnet, r/csharp, r/SaaS, r/webdev — link the *original* site URL with a genuine comment, not the cross-post. Only where it genuinely fits; low-effort drops get removed. | Result-pattern → r/dotnet |

Cadence: publish 1 new journal post every 2–4 weeks, syndicate each the same
day. Consistency is itself a ranking signal and gives you a recurring,
on-topic reason to drop a link.

## Tier 3 — directories & communities (slow burn)

- **Awesome lists** — submit PetZone / Futura to relevant `awesome-*` GitHub
  lists if they fit (e.g. awesome-dotnet examples). Real value, must be a true fit.
- **Indie/maker directories** — Futura AI on: BetaList, sites like SaaSHub,
  AlternativeTo (if it has alternatives), Product Hunt (one-shot launch).
  Each lets you set a maker/website link.
- **Freelance/agency profiles** — if you take client work: a complete profile
  on one or two platforms (Upwork/Toptal/Contra) usually allows a portfolio URL.
- **Ukrainian tech catalogs** — djinni profile, dou.ua company/person.

## Tier 4 — earned mentions (opportunistic)

- Answer questions on Stack Overflow / Reddit about .NET Result pattern,
  multi-tenant Postgres, embeddable widgets — link the journal post only when
  it's the actual answer, never as spam.
- Guest post: pitch one of your journal topics to a .NET/SaaS newsletter or
  blog that accepts contributors. One good guest post > 50 directory links.

---

## After links go live

1. **Google Search Console** → the "Page with redirect" report → **Validate Fix**.
2. GSC → URL Inspection → request indexing for `/en`, `/ru`, `/uk` and each
   case study, once.
3. Re-check after ~1 week: GSC → Pages → confirm the localized URLs are
   "Indexed", and Links report starts showing the new referring domains.
4. Bing Webmaster Tools — submit the same sitemap; Bing indexes faster and
   feeds ChatGPT search.

## Don't

- ❌ Buy links / use PBNs — manual penalty risk.
- ❌ Fake reviews or `AggregateRating` in schema — structured-data penalty.
- ❌ Mass-drop the same link in unrelated subreddits/forums — removed + flagged.
- ❌ Link `www` or a locale path — always the bare apex.
