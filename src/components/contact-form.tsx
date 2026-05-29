"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import type { Dictionary } from "@/lib/dictionaries";

// Read the active theme straight from the html element — no effect-driven
// state, no hydration warnings. Subscribes to class mutations so the
// Turnstile widget swaps theme when the user toggles light/dark.
function subscribeThemeChange(cb: () => void): () => void {
  if (typeof document === "undefined") return () => {};
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => obs.disconnect();
}

function getSnapshotTheme(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshotTheme(): "light" | "dark" {
  return "light";
}

function useTheme(): "light" | "dark" {
  return useSyncExternalStore(
    subscribeThemeChange,
    getSnapshotTheme,
    getServerSnapshotTheme,
  );
}

type State = "idle" | "sending" | "sent" | "error";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      reset: (widget?: string | HTMLElement) => void;
    };
  }
}

export function ContactForm({
  t,
  locale,
}: {
  t: Dictionary["contact"];
  locale?: string;
}) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");

    const form = e.currentTarget;
    const turnstileToken =
      (form.elements.namedItem("cf-turnstile-response") as
        | HTMLInputElement
        | null)?.value ?? "";

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      locale,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // Reset Turnstile so the user can retry without reloading.
        if (turnstileRef.current && window.turnstile) {
          try {
            window.turnstile.reset(turnstileRef.current);
          } catch {
            /* ignore */
          }
        }
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
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      )}
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

        {TURNSTILE_SITE_KEY && (
          <div
            ref={turnstileRef}
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme={theme}
            data-size="flexible"
            data-language={locale ?? "auto"}
          />
        )}

        {state === "error" && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg shadow-sm transition-all hover:shadow-md disabled:opacity-60"
        >
          {state === "sending" ? t.sending : t.send}
        </button>
      </form>
    </>
  );
}
