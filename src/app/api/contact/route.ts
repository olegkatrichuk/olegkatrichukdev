import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const MAX_NAME = 100;
const MAX_EMAIL = 320; // RFC 5321
const MAX_MESSAGE = 5000;
const MIN_MESSAGE = 10;

const apiKey = process.env.RESEND_API_KEY;
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
    // Honeypot: real users never fill this hidden field. Bots usually do.
    // We accept-and-discard so the bot thinks it succeeded.
    company,
  } = (data ?? {}) as Record<string, unknown>;

  if (typeof company === "string" && company.trim()) {
    return NextResponse.json({ ok: true });
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

function autoReplyText(name: string, locale: string | null): string {
  switch (locale) {
    case "uk":
      return `Привіт ${name},\n\nПовідомлення отримав — відповім протягом доби. Якщо швидше — пишіть у Telegram: ${site.telegram}.\n\n— ${site.name}`;
    case "ru":
      return `Привет ${name},\n\nСообщение получил — отвечу в течение суток. Если быстрее — пишите в Telegram: ${site.telegram}.\n\n— ${site.name}`;
    default:
      return `Hi ${name},\n\nThanks for reaching out — I'll get back to you within a day. If it's urgent, ping me on Telegram: ${site.telegram}.\n\n— ${site.name}`;
  }
}

function autoReplyHtml(name: string, locale: string | null): string {
  const body =
    locale === "uk"
      ? `Повідомлення отримав — відповім протягом доби. Якщо швидше — <a href="${site.telegram}" style="color:#4f46e5">пишіть у Telegram</a>.`
      : locale === "ru"
        ? `Сообщение получил — отвечу в течение суток. Если быстрее — <a href="${site.telegram}" style="color:#4f46e5">пишите в Telegram</a>.`
        : `Thanks for reaching out — I'll get back to you within a day. If it's urgent, <a href="${site.telegram}" style="color:#4f46e5">ping me on Telegram</a>.`;

  const greet =
    locale === "uk"
      ? `Привіт ${escapeHtml(name)},`
      : locale === "ru"
        ? `Привет ${escapeHtml(name)},`
        : `Hi ${escapeHtml(name)},`;

  return `<!doctype html>
<html><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#111;line-height:1.55">
  <div style="max-width:520px;margin:0 auto;padding:24px">
    <p>${greet}</p>
    <p>${body}</p>
    <p style="margin-top:24px">— ${escapeHtml(site.name)}</p>
  </div>
</body></html>`;
}
