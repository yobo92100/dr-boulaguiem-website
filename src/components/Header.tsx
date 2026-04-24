import Link from "next/link";
import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navItems = [
  { href: "/formations", label: "Formations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" }
];

const navMessage =
  "Bonjour Dr Boulaguiem, je souhaite réserver une place pour une formation.";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#1b6b4a]/10 bg-[#fbf7ee]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="min-w-0">
            <p className="truncate text-base font-semibold text-medical-navy">
              <span className="text-[#1B6B4A]">Dr</span> Boulaguiem
            </p>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#d4eddf] hover:text-[#1B6B4A]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href={getWhatsAppUrl(navMessage)} variant="whatsapp" className="hidden sm:inline-flex">
            WhatsApp
          </Button>
        </div>
      </header>
      <a
        href={getWhatsAppUrl(navMessage)}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-4 bottom-4 z-50 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B6B4A] px-5 py-3 text-sm font-semibold text-white shadow-soft sm:hidden"
      >
        <WhatsAppIcon />
        Réserver une place
      </a>
    </>
  );
}
