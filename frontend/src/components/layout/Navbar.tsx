"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/fondos", label: "Fondos" },
  { href: "/reportes", label: "Reportes" },
  { href: "/balances", label: "Balances" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="https://res.cloudinary.com/doyt5r47e/image/upload/v1763153535/logo_per-capital_l9enpk.png"
              alt="Per Capital"
              width={160}
              height={36}
              className="object-contain"
            />
          </Link>
        </div>

  {/* Desktop nav (hidden — navigation only via burger) */}
  <ul className="hidden items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    active
                      ? "text-per-accent font-medium"
                      : "text-slate-700 hover:text-slate-900"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

  {/* Burger (visible siempre) */}
  <div className="ml-4 flex">
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {open && (
            <div className="absolute right-4 top-full mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg z-40">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-sm ${pathname === item.href ? "text-per-accent font-medium" : "text-slate-700 hover:text-slate-900"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
