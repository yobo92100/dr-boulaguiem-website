"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsAppIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navItems = [
  { href: "/formations", label: "Formations" },
  { href: "/homeopathie", label: "Homéopathie" },
  { href: "/sujok", label: "Sujok" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" }
];

const navMessage =
  "Bonjour Dr Boulaguiem, je souhaite réserver une place pour une formation.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-forest-900/10 bg-cream/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4 py-4">
          <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-700 font-display text-sm font-semibold text-cream shadow-soft">
                NB
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate font-display text-[15px] font-semibold tracking-tight text-ink">
                  Dr Noureddine Boulaguiem
                </span>
                <span className="block text-[11px] tracking-wide text-muted">
                  Homéopathie · Sujok · Maroc
                </span>
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-forest-900/70 transition hover:bg-forest-700/8 hover:text-forest-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl(navMessage)}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-forest-700 px-5 py-2.5 text-sm font-medium text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-800 sm:inline-flex"
            >
              <WhatsAppIcon />
              Réserver
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/10 bg-white/60 text-forest-800 transition hover:bg-white lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-forest-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute inset-x-0 top-0 origin-top rounded-b-4xl bg-cream px-5 pb-8 pt-24 shadow-lift transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-forest-900/8 py-4 font-display text-xl font-medium text-ink"
              >
                {item.label}
                <ArrowRightIcon className="h-5 w-5 text-forest-400 transition group-hover:translate-x-1 group-hover:text-forest-700" />
              </Link>
            ))}
          </div>
          <a
            href={getWhatsAppUrl(navMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-forest-700 px-5 text-[15px] font-medium text-cream shadow-soft"
          >
            <WhatsAppIcon />
            Réserver une place
          </a>
        </nav>
      </div>

      {/* Floating WhatsApp on small screens */}
      <a
        href={getWhatsAppUrl(navMessage)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-forest-700 text-cream shadow-lift transition hover:scale-105 sm:hidden"
        aria-label="Réserver via WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </>
  );
}
