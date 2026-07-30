import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeafIcon, HandIcon, CertificateIcon, SparkIcon } from "@/components/Icons";
import { images } from "@/config/images";

const stats = [
  { value: "Docteur", label: "en pharmacie" },
  { value: "+15 ans", label: "d'expérience" },
  { value: "+500", label: "élèves formés" }
];

const values = [
  {
    icon: SparkIcon,
    title: "Clarté",
    text: "Une pédagogie simple et progressive, sans jargon ni discours mystique."
  },
  {
    icon: CertificateIcon,
    title: "Complémentarité",
    text: "Une approche complémentaire qui respecte les limites et le suivi de santé classique."
  },
  {
    icon: HandIcon,
    title: "Pratique",
    text: "Des cas concrets et des mises en situation pour un savoir réellement utilisable."
  },
  {
    icon: LeafIcon,
    title: "Accessibilité",
    text: "Des contenus ouverts aux professionnels de santé comme au grand public."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.5rem] bg-forest-radial shadow-lift">
                <div className="glow-warm absolute inset-0 opacity-40" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="flex h-32 w-32 items-center justify-center rounded-full bg-cream/10 font-display text-5xl font-semibold text-cream ring-1 ring-cream/20">
                    NB
                  </span>
                  <p className="mt-6 font-display text-xl font-medium text-cream">
                    Dr N. Boulaguiem
                  </p>
                  <p className="mt-1 text-xs text-cream/60">Photo à venir</p>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-forest-900/8 bg-cream/95 px-4 py-2.5 shadow-lift backdrop-blur">
                <LeafIcon className="h-4 w-4 text-forest-600" />
                <span className="text-xs font-medium text-forest-800">
                  Formateur depuis 2009
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                À propos
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Dr Noureddine Boulaguiem
              </h1>
              <div className="mt-8 space-y-5 text-base leading-8 text-muted">
                <p>
                  Pharmacien de formation, Dr Noureddine Boulaguiem transmet
                  depuis plus de 15 ans son expérience en homéopathie et en Sujok.
                </p>
                <p>
                  Au fil des années, il a formé plus de 500 participants à travers
                  le Maroc, issus aussi bien du domaine de la santé que du grand
                  public.
                </p>
                <p>
                  Son approche repose sur une pédagogie simple, progressive et
                  centrée sur la compréhension et la pratique, afin de rendre ces
                  disciplines accessibles à tous.
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-forest-900/8 bg-white/70 p-5 text-center shadow-soft"
                  >
                    <p className="font-display text-2xl font-semibold text-forest-700">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[13px] text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                <span className="rule-gold" aria-hidden="true" />
                Sa démarche
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Ce qui guide ses formations
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-4xl border border-forest-900/8 bg-white/80 p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with image */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-5xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.seminar}
                alt="Une formation animée par Dr Boulaguiem"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-900/70" />
              <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                  Envie d'apprendre à ses côtés ?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-cream/75">
                  Rejoignez une prochaine session en homéopathie ou en Sujok.
                </p>
                <div className="mt-8 flex justify-center">
                  <WhatsAppButton message="Bonjour Dr Boulaguiem, je souhaite en savoir plus sur vos formations.">
                    Réserver une place
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
