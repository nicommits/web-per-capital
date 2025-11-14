import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-per-accentSoft/10 px-2 py-0.5 text-xs text-per-accent border border-per-accentSoft/40">
      {children}
    </span>
  );
}
