import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ArrowRightIcon,
  CheckIcon,
  HandIcon,
  NeedleIcon,
  SeedIcon
} from "@/components/Icons";
import { images } from "@/config/images";

const techniques = [
  {
    name: "L'acupuncture",
    icon: NeedleIcon,
    text: "Une technique d'origine chinoise qui utilise de fines aiguilles sur des points précis pour rééquilibrer l'énergie. Vous en apprenez les repères et le geste juste."
  },
  {
    name: "Le massage des mains",
    icon: HandIcon,
    text: "La main reflète le corps entier. Vous apprenez à localiser les zones de correspondance et à les stimuler par des gestes simples, sans aucun matériel."
  },
  {
    name: "La thérapie par les graines",
    icon: SeedIcon,
    text: "Une méthode traditionnelle parmi les plus douces : des graines placées sur les points des mains ou des pieds, censées absorber l'énergie négative et revitaliser le corps. Accessible à tous, et facile à pratiquer chez soi."
  }
];

const learningPoints = [
  "Les principes du Sujok et la cartographie main/pied",
  "Soulager la douleur : maux de tête, dos, tensions musculaires",
  "Réduire le stress et favoriser la détente",
  "Améliorer la circulation et le confort digestif",
  "Les trois techniques : graines, massage, acupuncture",
  "Pratiquer sur soi-même et sur son entourage"
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
              Apprenez à soulager la douleur, à réduire le stress et à améliorer
              la circulation par la stimulation de points précis des mains et
              des pieds. Une formation accessible aux professionnels comme au
              grand public.
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
                src={images.sujokSession2}
                alt="Dr Noureddine Boulaguiem stimulant un point de la main"
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
                Le Sujok est une thérapie énergétique douce qui soulage la
                douleur. La formation vous apprend à repérer les points, à
                comprendre leurs correspondances et à les stimuler — pour
                vous-même comme pour vos proches.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Maux de tête, douleurs dorsales, tensions, troubles digestifs,
                stress : autant de situations du quotidien que les techniques
                enseignées permettent d'aborder, en complément d'un suivi de
                santé classique.
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
                « Le Sujok tient dans quelques gestes simples. Une fois les
                repères acquis, on les applique partout, tous les jours. »
              </p>
              <p className="mt-6 text-sm font-medium text-forest-700">
                Dr Noureddine Boulaguiem
              </p>
              <div className="mt-8 border-t border-forest-900/8 pt-8">
                <p className="text-sm leading-7 text-muted">
                  Aucun prérequis médical n'est nécessaire. Professionnels de
                  santé souhaitant élargir leur pratique, ou simples curieux
                  voulant prendre soin d'eux et de leurs proches : la formation
                  s'adapte au niveau de chacun.
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

      {/* Techniques covered */}
      <section className="bg-sand/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Les techniques"
              title="Trois façons de stimuler les points"
              text="Le Sujok se pratique de plusieurs manières. La formation les aborde tour à tour, de la plus douce à la plus technique."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {techniques.map((technique, i) => (
              <Reveal key={technique.name} delay={i * 100}>
                <article className="flex h-full flex-col rounded-4xl border border-forest-900/8 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
                    <technique.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {technique.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {technique.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
