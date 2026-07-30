import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRightIcon, CheckIcon, HandIcon } from "@/components/Icons";
import { images } from "@/config/images";

const learningPoints = [
  "Les principes de base du Sujok",
  "Des repères pratiques et une méthode d'observation",
  "Les conditions d'un usage prudent",
  "Des exercices sur séance, matériel fourni",
  "Une initiation accessible sans prérequis médical"
];

export default function SujokPage() {
  return (
    <>
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative py-16 text-center sm:py-24">
          <Reveal>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
              <HandIcon className="h-6 w-6" />
            </span>
            <p className="eyebrow mt-6 justify-center">Sujok</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Découvrir le Sujok avec une approche claire
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Un sujet d'apprentissage complémentaire, présenté avec une pédagogie
              accessible aux professionnels comme au grand public.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="img-zoom relative overflow-hidden rounded-5xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.sujokSession}
                alt="Démonstration de Sujok"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-forest-900/10" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Une initiation progressive
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                Les sessions Sujok permettent de découvrir les principes, les
                repères pratiques et une méthode d'observation et de
                compréhension, pour un usage concret au quotidien.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Elle est abordée dans un cadre pédagogique, en complément d'un
                accompagnement de santé classique.
              </p>
              <Button href="/formations" className="mt-8">
                Voir les formations
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
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
                « Le Sujok se transmet par la pratique. On observe, on comprend, on
                applique avec prudence. »
              </p>
              <p className="mt-6 text-sm font-medium text-forest-700">
                Dr Noureddine Boulaguiem
              </p>
              <div className="mt-8 border-t border-forest-900/8 pt-8">
                <p className="text-sm leading-7 text-muted">
                  Aucun prérequis médical n'est nécessaire pour participer.
                </p>
                <WhatsAppButton
                  message="Bonjour Dr Boulaguiem, je souhaite m'inscrire à une formation Sujok."
                  className="mt-5 w-full sm:w-auto"
                >
                  M'inscrire en Sujok
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pedagogical: reflexology map */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Le principe
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Une cartographie du corps
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                Le Sujok repose sur l'idée de zones de correspondance : certaines
                régions des mains et des pieds sont associées, point par point, aux
                différentes parties du corps.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                La formation apprend à repérer et à comprendre ces repères, dans
                une démarche d'observation et de pratique — toujours en complément
                d'un accompagnement de santé classique.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-5xl border border-forest-900/8 bg-white p-8 shadow-soft sm:p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.sujokDiagram}
                alt="Carte de réflexologie du pied en Sujok"
                className="mx-auto max-h-[26rem] w-auto object-contain"
              />
              <p className="mt-6 text-center text-xs text-muted">
                Exemple de zones de correspondance (schéma pédagogique).
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
