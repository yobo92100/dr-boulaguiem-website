import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#1b6b4a]/10 bg-[#fbf7ee] pb-20 text-slate-500 sm:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{siteConfig.name} — Formations médicales au Maroc</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/formations">Formations</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
