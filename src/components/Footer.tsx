import Link from "next/link";
import { WhatsAppIcon, MapPinIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";

const footerMessage =
  "Bonjour Dr Boulaguiem, je souhaite connaître les prochaines dates de formation.";

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "/formations", label: "Formations" },
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Disciplines",
    links: [
      { href: "/homeopathie", label: "Homéopathie" },
      { href: "/sujok", label: "Sujok" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream/80">
      <div className="glow-warm pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 font-display text-sm font-semibold text-cream ring-1 ring-cream/15">
                NB
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-cream">
                Dr Noureddine Boulaguiem
              </span>
            </span>
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/60">
              Formations en homéopathie & Sujok au Maroc. Une pédagogie claire,
              progressive et responsable, pensée en complément d'un suivi de
              santé.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-cream/70">
              <MapPinIcon className="h-4 w-4 text-gold-light" />
              Partout à travers le Maroc
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/85 ring-1 ring-cream/20 transition hover:-translate-y-0.5 hover:bg-cream hover:text-forest-800"
                  >
                    <social.icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/70 transition hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-medium text-cream">
              Une question, une inscription ?
            </p>
            <p className="mt-1 text-sm text-cream/60">
              WhatsApp : {siteConfig.whatsappDisplay}
            </p>
          </div>
          <a
            href={getWhatsAppUrl(footerMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest-800 transition hover:-translate-y-0.5 sm:mt-0"
          >
            <WhatsAppIcon />
            Contacter sur WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dr Noureddine Boulaguiem. Tous droits
            réservés.
          </p>
          <p className="max-w-md">
            Formations à vocation pédagogique, en complément d'un suivi de santé
            classique.
          </p>
        </div>
      </div>
    </footer>
  );
}
