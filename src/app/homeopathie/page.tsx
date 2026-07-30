import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRightIcon, CheckIcon, LeafIcon } from "@/components/Icons";
import { images } from "@/config/images";

const learningPoints = [
  "Les principes fondamentaux de l'homéopathie",
  "Un vocabulaire clair et structuré",
  "Des cas pratiques et des exemples concrets",
  "Le cadre d'usage et les limites à respecter",
  "La complémentarité avec le suivi médical classique"
];

export default function HomeopathiePage() {
  return (
    <>
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative py-16 text-center sm:py-24">
          <Reveal>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
              <LeafIcon className="h-6 w-6" />
            </span>
            <p className="eyebrow mt-6 justify-center">Homéopathie</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Comprendre l'homéopathie dans un cadre pédagogique
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Une approche complémentaire à étudier avec méthode et rigueur —
              pour les professionnels de santé comme pour les curieux.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Objectif des formations
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                Apporter des bases structurées, un vocabulaire clair et une
                compréhension du cadre dans lequel l'homéopathie peut être
                abordée. Les contenus aident à distinguer l'apprentissage,
                l'accompagnement et les limites à respecter.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Elles s'inscrivent dans une démarche d'éducation et de
                complémentarité, aux côtés du suivi de santé classique.
              </p>
              <Button href="/formations" className="mt-8">
                Voir les formations
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="img-zoom relative overflow-hidden rounded-5xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.eucalyptus}
                alt="Approche naturelle et botanique"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-forest-900/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/60 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Au programme
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Ce que vous apprendrez
              </h2>
              <ul className="mt-8 space-y-4">
                {learningPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-700 text-cream">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base leading-7 text-ink/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-5xl border border-forest-900/8 bg-white/80 p-8 shadow-soft sm:p-10">
              <p className="font-display text-xl italic leading-8 text-ink/90">
                « L'homéopathie s'apprend avec rigueur. Mon rôle est de donner un
                cadre clair, pas des certitudes. »
              </p>
              <p className="mt-6 text-sm font-medium text-forest-700">
                Dr Noureddine Boulaguiem
              </p>
              <div className="mt-8 border-t border-forest-900/8 pt-8">
                <p className="text-sm leading-7 text-muted">
                  Prêt à commencer ? Les places sont limitées à chaque session.
                </p>
                <WhatsAppButton
                  message="Bonjour Dr Boulaguiem, je souhaite m'inscrire à une formation en homéopathie."
                  className="mt-5 w-full sm:w-auto"
                >
                  M'inscrire en homéopathie
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
