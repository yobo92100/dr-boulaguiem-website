import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#1b6b4a]/10 bg-[#fbf7ee] pb-20 text-slate-600 sm:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-heading font-semibold text-medical-navy">
            Dr Noureddine Boulaguiem
          </p>
          <p className="mt-2 text-xs">
            Formations en homéopathie & Sujok au Maroc
          </p>
          <p className="mt-3 text-xs">WhatsApp : {siteConfig.whatsappDisplay}</p>
          <p className="mt-3 text-xs text-slate-500">
            Les formations proposées ont une vocation pédagogique.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs">
          <Link href="/formations">Formations</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
