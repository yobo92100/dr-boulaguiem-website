import { Button } from "@/components/Button";
import { ConsultationBanner } from "@/components/ConsultationBanner";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRightIcon, CalendarIcon, CheckIcon, LeafIcon } from "@/components/Icons";
import { images } from "@/config/images";

const learningPoints = [
  "Les principes fondamentaux de l'homéopathie",
  "Un vocabulaire clair et structuré",
  "Des cas pratiques et des exemples concrets",
  "Les remèdes essentiels et leurs indications",
  "Comment intégrer l'homéopathie dans votre pratique quotidienne"
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
              L'homéopathie, pour vous accompagner{" "}
              <span className="italic text-forest-700">ou pour l'apprendre</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Une approche douce qui considère la personne dans sa globalité —
              à découvrir en consultation au cabinet, ou à étudier avec méthode
              et rigueur en formation.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/consultations#rdv" size="lg">
                <CalendarIcon />
                Prendre rendez-vous
              </Button>
              <Button href="#formation" variant="secondary" size="lg">
                Découvrir la formation
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What homeopathy is — common ground for patients and learners */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Le principe
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Le semblable par le semblable
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                L'homéopathie repose sur le principe de similitude : une
                substance capable de provoquer certains symptômes chez une
                personne en bonne santé peut, à dose très diluée, aider à
                soulager des symptômes semblables.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Elle s'intéresse à la personne dans sa globalité — ses
                symptômes, mais aussi son terrain, son rythme de vie et sa
                sensibilité — pour choisir un remède adapté à chacun.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                En consultation, le Dr Boulaguiem choisit avec vous les remèdes
                adaptés. En formation, vous apprenez à raisonner pour les
                choisir vous-même.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="img-zoom relative overflow-hidden rounded-5xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.homeo2}
                alt="Remèdes homéopathiques et plantes"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-forest-900/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationBanner
        title="Consulter en homéopathie"
        text="Le Dr Boulaguiem vous reçoit à son cabinet pour un accompagnement en homéopathie, global et personnalisé."
        points={[
          "Stress, anxiété, sommeil",
          "Troubles digestifs fonctionnels",
          "Fatigue et baisse d'énergie",
          "Un accompagnement adapté à chacun"
        ]}
      />

      {/* ---------- EN FORMATION ---------- */}
      <section id="formation" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="img-zoom relative overflow-hidden rounded-5xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.homeo1}
                alt="Granules homéopathiques et fleurs"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-forest-900/10" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                En formation
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Apprendre l'homéopathie avec méthode
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                Les formations apportent des bases structurées, un vocabulaire
                clair et une compréhension du cadre dans lequel l'homéopathie
                peut être abordée. Les contenus aident à distinguer
                l'apprentissage, l'accompagnement et les limites à respecter.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Elles s'adressent aux professionnels de santé comme aux curieux
                qui souhaitent comprendre l'homéopathie en profondeur.
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
                « Ce que je transmets, ce n'est pas une liste de remèdes, c'est
                une manière de raisonner. Une fois les principes acquis, chaque
                remède trouve naturellement sa place. »
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
