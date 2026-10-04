import Link from "next/link";
import { CalendarIcon, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

type ConsultationBannerProps = {
  title: string;
  text: string;
  points: string[];
};

/** Patient-facing call-out at the top of a discipline page, ahead of the training content. */
export function ConsultationBanner({ title, text, points }: ConsultationBannerProps) {
  return (
    <section className="pb-4 pt-2 sm:pb-8">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-forest-radial p-8 text-cream shadow-lift sm:p-12">
            <div className="glow-warm pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow !text-gold-light">
                  <span className="rule-gold" aria-hidden="true" />
                  En consultation · Casablanca
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-cream/75">{text}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-cream/85">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-4xl bg-cream/[0.07] p-6 ring-1 ring-cream/10 sm:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-cream/60">
                  Tarif de lancement
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold text-gold-light">
                    {siteConfig.consultation.price}
                  </span>
                  <span className="text-sm text-cream/50 line-through">
                    {siteConfig.consultation.regularPrice}
                  </span>
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  {siteConfig.consultation.days}, {siteConfig.consultation.hours}
                </p>
                <Link
                  href="/consultations#rdv"
                  className="mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-[15px] font-medium text-forest-800 shadow-soft transition hover:-translate-y-0.5"
                >
                  <CalendarIcon />
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
