import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const MAX_NAME = 100;
const MAX_EMAIL = 320; // RFC 5321
const MAX_MESSAGE = 5000;
const MIN_MESSAGE = 10;

const apiKey = process.env.RESEND_API_KEY;
const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
// Resend requires a verified domain in production. `onboarding@resend.dev`
// works only for testing and only delivers to the account owner.
const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";
const to = process.env.CONTACT_TO ?? site.email;
// Opt-in via env: set CONTACT_AUTOREPLY=true to send the visitor a
// confirmation email. Off by default to keep Resend quota predictable.
const autoreply = process.env.CONTACT_AUTOREPLY === "true";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function truncate(s: string, n: number): string {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length <= n ? clean : clean.slice(0, n - 1) + "…";
}

// Strip ASCII control characters (including CR/LF) — prevents header-style
// injection from name fields that get embedded in email subjects.
function stripControl(s: string): string {
  return s.replace(/[\x00-\x1f\x7f]/g, " ").trim();
}

function isSameOrigin(req: Request): boolean {
  // In dev we accept anything to avoid breaking local testing.
  if (process.env.NODE_ENV !== "production") return true;
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const allowed = site.url;
  if (origin && origin === allowed) return true;
  if (referer && referer.startsWith(`${allowed}/`)) return true;
  return false;
}

// Verifies a Turnstile token with Cloudflare. Returns true on success
// (or when no secret is configured — meaning Turnstile is disabled).
async function verifyTurnstile(
  token: string,
  remoteIp: string | null,
): Promise<boolean> {
  if (!turnstileSecret) return true; // not configured → skip
  if (!token) return false;
  try {
    const form = new URLSearchParams();
    form.set("secret", turnstileSecret);
    form.set("response", token);
    if (remoteIp) form.set("remoteip", remoteIp);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: form,
      },
    );
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[contact] turnstile verify failed", err);
    return false;
  }
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ code: "forbidden" }, { status: 403 });
  }

  // Cap payload size before parsing — DoS guard.
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ code: "too_large" }, { status: 413 });
  }

  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ code: "invalid" }, { status: 400 });
  }

  const {
    name,
    email,
    message,
    locale,
    turnstileToken,
    // Honeypot: real users never fill this hidden field. Bots usually do.
    // We accept-and-discard so the bot thinks it succeeded.
    company,
  } = (data ?? {}) as Record<string, unknown>;

  if (typeof company === "string" && company.trim()) {
    return NextResponse.json({ ok: true });
  }

  // Turnstile must pass before we spend any cycles on Resend.
  const remoteIp =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null;
  const tokenStr =
    typeof turnstileToken === "string" ? turnstileToken : "";
  if (!(await verifyTurnstile(tokenStr, remoteIp))) {
    return NextResponse.json({ code: "challenge_failed" }, { status: 403 });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    message.length > MAX_MESSAGE ||
    !stripControl(name) ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    message.trim().length < MIN_MESSAGE
  ) {
    return NextResponse.json({ code: "invalid" }, { status: 422 });
  }

  const safeName = stripControl(name);
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  const localeTag =
    typeof locale === "string" && /^[a-z]{2}$/i.test(locale)
      ? locale.toLowerCase()
      : null;

  // Without an API key the form still works in dev — it just logs.
  if (!apiKey) {
    console.log("[contact] (no RESEND_API_KEY — not sent)", {
      name: safeName,
      email: safeEmail,
      message: safeMessage,
      locale: localeTag,
    });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const preview = truncate(safeMessage, 60);
  const subject = `Portfolio — ${safeName}: ${preview}${localeTag ? ` [${localeTag}]` : ""}`;

  const text = [
    `From: ${safeName} <${safeEmail}>`,
    localeTag ? `Locale: ${localeTag}` : null,
    "",
    safeMessage,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `<!doctype html>
<html><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#111;line-height:1.55">
  <div style="max-width:560px;margin:0 auto;padding:24px">
    <div style="font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px">
      Portfolio contact${localeTag ? ` · ${escapeHtml(localeTag)}` : ""}
    </div>
    <h1 style="margin:0 0 16px;font-size:18px;font-weight:600">${escapeHtml(safeName)}</h1>
    <p style="margin:0 0 4px;font-size:13px;color:#666">
      <a href="mailto:${escapeHtml(safeEmail)}" style="color:#4f46e5;text-decoration:none">${escapeHtml(safeEmail)}</a>
    </p>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0" />
    <div style="white-space:pre-wrap;font-size:14px">${escapeHtml(safeMessage)}</div>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0" />
    <div style="font-size:12px;color:#999">
      Reply directly to this email to reach ${escapeHtml(safeName)}.
    </div>
  </div>
</body></html>`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: safeEmail,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact] resend error", error);
    return NextResponse.json({ code: "error" }, { status: 502 });
  }

  // Best-effort auto-reply. If it fails we don't fail the request —
  // the primary email already landed.
  if (autoreply) {
    try {
      await resend.emails.send({
        from,
        to: safeEmail,
        replyTo: to,
        subject: autoReplySubject(localeTag),
        text: autoReplyText(safeName, localeTag),
        html: autoReplyHtml(safeName, localeTag),
      });
    } catch (err) {
      console.error("[contact] autoreply failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}

function autoReplySubject(locale: string | null): string {
  switch (locale) {
    case "uk":
      return `Дякую — повідомлення отримано (${site.name})`;
    case "ru":
      return `Спасибо — сообщение получено (${site.name})`;
    default:
      return `Thanks — got your message (${site.name})`;
  }
}

type Copy = {
  greet: (name: string) => string;
  body: string;
  fasterTitle: string;
  fasterBody: string;
  exploreTitle: string;
  exploreWork: string;
  exploreJournal: string;
  signOff: string;
  footer: string;
};

function getCopy(locale: string | null): Copy {
  if (locale === "uk") {
    return {
      greet: (n) => `Привіт, ${n} 👋`,
      body: "Отримав ваше повідомлення — повернуся з відповіддю протягом 24 годин. Зазвичай швидше.",
      fasterTitle: "Потрібно швидше?",
      fasterBody:
        "Будь-який із каналів нижче доходить до мене швидше за email.",
      exploreTitle: "Поки чекаєте",
      exploreWork: "Вибрані проєкти",
      exploreJournal: "Журнал",
      signOff: "До зв'язку,",
      footer: "Це підтвердження надіслано один раз. Більше листів не буде.",
    };
  }
  if (locale === "ru") {
    return {
      greet: (n) => `Привет, ${n} 👋`,
      body: "Получил ваше сообщение — вернусь с ответом в течение 24 часов. Обычно быстрее.",
      fasterTitle: "Нужно быстрее?",
      fasterBody:
        "Любой из каналов ниже доходит до меня быстрее email.",
      exploreTitle: "Пока ждёте",
      exploreWork: "Избранные проекты",
      exploreJournal: "Журнал",
      signOff: "До связи,",
      footer: "Это подтверждение отправлено один раз. Больше писем не будет.",
    };
  }
  return {
    greet: (n) => `Hi ${n} 👋`,
    body: "Got your message — I'll come back to you within 24 hours, usually sooner.",
    fasterTitle: "Need to talk sooner?",
    fasterBody: "Any of the channels below reach me faster than email.",
    exploreTitle: "While you wait",
    exploreWork: "Selected work",
    exploreJournal: "Journal",
    signOff: "Talk soon,",
    footer: "This is a one-time confirmation. You won't receive more emails.",
  };
}

function autoReplyText(name: string, locale: string | null): string {
  const c = getCopy(locale);
  const viber = "+380 68 908 0884";
  return [
    c.greet(name),
    "",
    c.body,
    "",
    `${c.fasterTitle} ${c.fasterBody}`,
    `· Telegram: ${site.telegram}`,
    `· Viber: ${viber}`,
    `· Email: ${site.email}`,
    "",
    `${c.signOff}`,
    `— ${site.name}`,
    `  ${site.url}`,
    "",
    c.footer,
  ].join("\n");
}

function autoReplyHtml(name: string, locale: string | null): string {
  const c = getCopy(locale);
  const safeName = escapeHtml(name);
  const viberDisplay = "+380 68 908 0884";
  const viberLink = "viber://chat?number=%2B380689080884";
  const telLink = "tel:+380689080884";

  const accent = "#4f46e5";
  const ink = "#111111";
  const muted = "#6b7280";
  const surface = "#f5f5f7";
  const border = "#e5e5ea";

  const channelButton = (label: string, sub: string, href: string) => `
    <a href="${href}" style="display:block;text-decoration:none;border:1px solid ${border};border-radius:10px;padding:14px 16px;margin-bottom:8px;background:#ffffff">
      <div style="font-size:14px;font-weight:600;color:${ink}">${label}</div>
      <div style="font-size:12px;color:${muted};margin-top:2px">${sub}</div>
    </a>`;

  const linkChip = (label: string, href: string) => `
    <a href="${href}" style="display:inline-block;text-decoration:none;color:${accent};border:1px solid ${border};border-radius:999px;padding:6px 12px;font-size:13px;margin-right:6px;margin-top:6px;background:#ffffff">
      ${label} →
    </a>`;

  return `<!doctype html>
<html lang="${locale ?? "en"}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${escapeHtml(autoReplySubject(locale))}</title>
</head>
<body style="margin:0;padding:0;background:${surface};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:${ink};line-height:1.55">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">
    ${c.body}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${surface};padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid ${border};border-radius:14px;overflow:hidden">
          <tr>
            <td style="background:${accent};height:4px;line-height:4px;font-size:0">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 28px 8px">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle">
                    <div style="display:inline-block;width:36px;height:36px;background:${accent};border-radius:8px;color:#ffffff;font-weight:700;font-size:15px;text-align:center;line-height:36px">OK</div>
                  </td>
                  <td style="padding-left:12px;vertical-align:middle">
                    <div style="font-size:15px;font-weight:600;color:${ink}">${escapeHtml(site.name)}</div>
                    <div style="font-size:12px;color:${muted}">Full-stack engineer — .NET &amp; TypeScript</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 4px">
              <h1 style="margin:0;font-size:22px;font-weight:600;color:${ink};letter-spacing:-0.01em">${c.greet(safeName)}</h1>
              <p style="margin:14px 0 0;font-size:15px;color:${ink}">${c.body}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 8px">
              <div style="font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">${c.fasterTitle}</div>
              <p style="margin:0 0 12px;font-size:14px;color:${ink}">${c.fasterBody}</p>
              ${channelButton("Telegram", "@Olegnewlife", site.telegram)}
              ${channelButton("Viber", viberDisplay, viberLink)}
              ${channelButton("Email", site.email, `mailto:${site.email}`)}
              <div style="font-size:11px;color:${muted};margin-top:6px">
                Viber: <a href="${telLink}" style="color:${muted};text-decoration:underline">${viberDisplay}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 8px">
              <div style="font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px">${c.exploreTitle}</div>
              ${linkChip(c.exploreWork, `${site.url}/${locale ?? "en"}/work`)}
              ${linkChip(c.exploreJournal, `${site.url}/${locale ?? "en"}/journal`)}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 28px">
              <p style="margin:0;font-size:15px;color:${ink}">${c.signOff}</p>
              <p style="margin:4px 0 0;font-size:15px;color:${ink};font-weight:600">${escapeHtml(site.name)}</p>
              <p style="margin:2px 0 0;font-size:13px">
                <a href="${site.url}" style="color:${accent};text-decoration:none">${site.url.replace(/^https?:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
        <div style="max-width:560px;margin:12px auto 0;font-size:11px;color:${muted};text-align:center;line-height:1.5">
          ${c.footer}
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
