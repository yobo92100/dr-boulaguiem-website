import Link from "next/link";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/homeopathie", label: "Homéopathie" },
  { href: "/sujok", label: "Sujok" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <p className="truncate text-base font-bold text-medical-navy">
            {siteConfig.name}
          </p>
          <p className="truncate text-xs font-medium text-pharmacy-green">
            {siteConfig.secondaryName}
          </p>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-medical-sky hover:text-medical-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" variant="secondary" className="hidden sm:inline-flex">
          WhatsApp
        </Button>
      </div>
      <nav
        className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 lg:hidden"
        aria-label="Navigation mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
