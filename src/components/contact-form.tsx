"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  t,
  locale,
}: {
  t: Dictionary["contact"];
  locale?: string;
}) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      // Honeypot — must stay empty.
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(res.status === 422 ? t.validation : t.error);
      }
      setState("sent");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : t.error);
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-lg border border-border bg-surface p-6 text-sm">
        {t.sent}
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, attractive to bots. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Company (do not fill)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          className={`mt-1 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={320}
          autoComplete="email"
          className={`mt-1 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className={`mt-1 ${field} resize-y`}
        />
      </div>
      {state === "error" && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg shadow-sm transition-all hover:shadow-md disabled:opacity-60"
      >
        {state === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
