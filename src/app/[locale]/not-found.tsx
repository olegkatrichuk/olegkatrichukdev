import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-muted">
          The link may be old or mistyped.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg shadow-sm transition-all hover:shadow-md"
        >
          Back home
        </Link>
      </Container>
    </section>
  );
}
