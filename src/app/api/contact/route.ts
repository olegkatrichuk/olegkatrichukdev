import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const apiKey = process.env.RESEND_API_KEY;
// Resend requires a verified domain in production. `onboarding@resend.dev`
// works only for testing and only delivers to the account owner.
const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";
const to = process.env.CONTACT_TO ?? site.email;

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ code: "invalid" }, { status: 400 });
  }

  const { name, email, message } = (data ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    message.trim().length < 10
  ) {
    return NextResponse.json({ code: "invalid" }, { status: 422 });
  }

  // Without an API key the form still works in dev — it just logs.
  if (!apiKey) {
    console.log("[contact] (no RESEND_API_KEY — not sent)", {
      name,
      email,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio contact — ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("[contact] resend error", error);
    return NextResponse.json({ code: "error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
