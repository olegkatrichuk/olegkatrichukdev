import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-border text-foreground hover:bg-surface hover:-translate-y-0.5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  withArrow,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  withArrow?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 active:translate-y-0",
    styles[variant],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
