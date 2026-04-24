import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-medical-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-slate-200">
            Formations en homéopathie & Sujok au Maroc
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Les formations proposées ont une vocation pédagogique.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contact :</p>
          <p className="mt-3 text-sm text-slate-300">WhatsApp : {siteConfig.whatsappDisplay}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
            <Link href="/formations">Formations</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
