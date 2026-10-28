import Link from "next/link";
import { DisciplineCards } from "@/components/DisciplineCards";
import { FormatCard } from "@/components/FormatCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  MonitorIcon,
  CertificateIcon,
  QuoteIcon,
  StarIcon
} from "@/components/Icons";
import { formats } from "@/data/formats";
import { courseClips, shortTestimonials } from "@/data/testimonials";

const infoItems = [
  { icon: MapPinIcon, text: "Présentiel : Rabat & Casablanca, le week-end" },
  { icon: MonitorIcon, text: "En ligne : en semaine, en soirée" },
  { icon: CertificateIcon, text: "Attestation de participation remise" }
];

export default function FormationsPage() {
  return (
    <>
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Formations
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Se former en Sujok & Homéopathie
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Homéopathie et Sujok, chacune proposée en deux formats : en
              présentiel le week-end à Rabat et Casablanca, ou en ligne en
              soirée, partout au Maroc.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-3">
              {infoItems.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white/70 px-4 py-2 text-[13px] text-forest-800 backdrop-blur"
                >
                  <item.icon className="h-4 w-4 text-forest-600" />
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Les disciplines"
              title="Deux formations, une même exigence"
              text="Enseignées avec méthode et rigueur, deux formations que vous pouvez suivre selon vos envies."
            />
          </Reveal>
          <DisciplineCards />

          <div className="mt-20">
            <Reveal>
              <SectionTitle
                align="left"
                eyebrow="À quoi s'attendre"
                title="Un aperçu d'une session"
                text="Trois extraits filmés pendant une formation, pour voir concrètement comment ça se passe."
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              {courseClips.map((c, i) => (
                <Reveal key={c.key} delay={i * 100}>
                  <VideoTestimonial item={c} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16">
              <div className="grid gap-6 md:grid-cols-2">
                {shortTestimonials.slice(0, 2).map((t, i) => (
                  <Reveal key={t.key} delay={i * 100}>
                    <figure className="flex h-full flex-col rounded-4xl border border-forest-900/8 bg-white/80 p-7 shadow-soft">
                      <QuoteIcon className="h-7 w-7 text-forest-200" />
                      <div className="mt-3 flex gap-0.5 text-gold">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <StarIcon key={s} className="h-4 w-4" />
                        ))}
                      </div>
                      <blockquote className="mt-4 flex-1 font-display text-lg italic leading-8 text-ink/90">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-6 border-t border-forest-900/8 pt-4">
                        <p className="font-semibold text-ink">{t.author}</p>
                        <p className="text-[13px] text-muted">{t.role}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/#temoignages"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 transition hover:text-forest-800"
                >
                  Voir tous les témoignages
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div id="tarifs" className="mt-20 scroll-mt-24">
            <Reveal>
              <SectionTitle
                eyebrow="Formats & tarifs"
                title="En présentiel ou en ligne"
                text="Chaque formation est proposée en deux formats. Choisissez celui qui vous convient."
              />
            </Reveal>
            <Reveal>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-sand/60 px-4 py-2 text-center text-[13px] font-medium text-forest-800">
                  <CalendarIcon className="h-4 w-4 shrink-0" />
                  Prochaines dates bientôt annoncées — inscrivez-vous pour être informé(e) en priorité.
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {formats.map((format, i) => (
                <Reveal key={format.key} delay={i * 100}>
                  <FormatCard format={format} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-center gap-5 rounded-5xl border border-forest-900/8 bg-sand/60 px-6 py-12 text-center">
              <h2 className="max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
                Envie de participer à une prochaine session ?
              </h2>
              <p className="max-w-lg text-sm leading-7 text-muted">
                Écrivez-nous sur WhatsApp pour être prévenu(e) dès l'ouverture des
                inscriptions, en présentiel comme en ligne.
              </p>
              <WhatsAppButton message="Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines dates de formation (présentiel ou en ligne).">
                Être informé des prochaines dates
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
