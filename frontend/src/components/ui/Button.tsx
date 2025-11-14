import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
};

export function Button({ children, href, variant = "solid" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition border";
  const solid =
    "bg-per-accent text-slate-950 border-per-accent hover:bg-per-accentSoft";
  const ghost =
    "bg-transparent text-per-accent border-transparent hover:bg-slate-900";

  const className = `${base} ${variant === "solid" ? solid : ghost}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
