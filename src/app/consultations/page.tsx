import type { Metadata } from "next";
import { BookingWidget } from "@/components/BookingWidget";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  CalendarIcon,
  ClockIcon,
  HandIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  SeedIcon,
  SparkIcon
} from "@/components/Icons";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Consultations Sujok & homéopathie à Casablanca | ${siteConfig.name}`,
  description: `Consultation en Sujok et homéopathie au cabinet du Dr Noureddine Boulaguiem à Casablanca. ${siteConfig.consultation.price} au lieu de ${siteConfig.consultation.regularPrice}. Réservez votre créneau en ligne.`
};

const questionMessage =
  "Bonjour Dr Boulaguiem, j'ai une question à propos des consultations.";

const reasons = [
  {
    icon: HandIcon,
    title: "Douleurs articulaires & musculaires",
    text: "Dos, nuque, genoux, tensions : un accompagnement naturel, en complément de votre suivi."
  },
  {
    icon: SparkIcon,
    title: "Migraines & fatigue",
    text: "Maux de tête récurrents, baisse d'énergie : soulager et retrouver de l'élan."
  },
  {
    icon: LeafIcon,
    title: "Anxiété & sommeil",
    text: "Stress, nervosité, nuits difficiles : un rééquilibrage physique et émotionnel."
  },
  {
    icon: SeedIcon,
    title: "Troubles digestifs",
    text: "Ballonnements, inconfort digestif et autres troubles fonctionnels."
  }
];

const steps = [
  {
    title: "Vous choisissez un créneau",
    text: "Sélectionnez un jour et une heure ci-dessous, et laissez votre nom et votre téléphone."
  },
  {
    title: "Le Dr Boulaguiem vous recontacte",
    text: "Il confirme votre rendez-vous et répond à vos éventuelles questions avant la séance."
  },
  {
    title: "Vous venez au cabinet",
    text: "Écoute, bilan, puis Sujok et/ou homéopathie selon vos besoins, avec des conseils pour la suite."
  }
];

export default function ConsultationsPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <Reveal>
            <p className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Consultations · Casablanca
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Une consultation en{" "}
              <span className="italic text-forest-700">Sujok</span> &{" "}
              <span className="italic text-forest-700">homéopathie</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Une approche naturelle, globale et personnalisée pour soulager les
              douleurs, réduire le stress, améliorer le sommeil et favoriser
              l'équilibre physique et émotionnel.
            </p>
            <div className="mt-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-2 text-sm">
              <span className="font-medium text-ink">Offre de lancement :</span>
              <span className="font-display text-lg font-semibold text-forest-700">
                {siteConfig.consultation.price}
              </span>
              <span className="text-muted line-through">
                {siteConfig.consultation.regularPrice}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#rdv" size="lg">
                <CalendarIcon />
                Réserver un créneau
              </Button>
              <WhatsAppButton message={questionMessage} variant="secondary">
                Poser une question
              </WhatsAppButton>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="img-zoom relative mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/60 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.sujokSession2}
                alt="Le Dr Boulaguiem stimulant un point de la main en consultation"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- REASONS ---------- */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Pour quels motifs ?"
              title="Ce pour quoi vous pouvez consulter"
              text="Quelques motifs fréquents de consultation, en complément de votre suivi médical."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="h-full rounded-4xl border border-forest-900/8 bg-white/80 p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-5 flex items-center gap-4 rounded-4xl border border-forest-900/8 bg-sand/60 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-forest-700">
                <PlusIcon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-7 text-ink/85">
                <strong className="font-semibold text-ink">
                  Et toute autre pathologie, organique ou psychique.
                </strong>{" "}
                Cette liste n'est pas exhaustive : n'hésitez pas à consulter ou à
                poser votre question sur WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-sand/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionTitle eyebrow="Comment ça se passe" title="Trois étapes simples" />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <li className="h-full rounded-4xl border border-forest-900/8 bg-white p-7 shadow-soft">
                  <span className="font-display text-4xl font-semibold text-gold">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- BOOKING ---------- */}
      <section id="rdv" className="scroll-mt-24 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Réservation"
              title="Réservez votre consultation"
              text={`${siteConfig.consultation.days}, ${siteConfig.consultation.hours}. Le Dr Boulaguiem vous recontacte pour confirmer votre rendez-vous.`}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_20rem]">
            <BookingWidget />

            <aside className="flex flex-col gap-6 rounded-4xl bg-forest-radial p-7 text-cream shadow-lift">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
                  Le cabinet
                </p>
                <p className="mt-3 font-display text-lg font-semibold">
                  {siteConfig.cabinet.name}
                </p>
              </div>
              <a
                href={siteConfig.cabinet.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-3 text-sm leading-6 text-cream/80 transition hover:text-cream"
              >
                <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-gold-light" />
                <span>
                  {siteConfig.cabinet.street}
                  <br />
                  {siteConfig.cabinet.city}
                  <span className="mt-1 block font-medium text-gold-light group-hover:underline">
                    Ouvrir dans Google Maps →
                  </span>
                </span>
              </a>
              <p className="flex gap-3 text-sm leading-6 text-cream/80">
                <ClockIcon className="mt-1 h-4 w-4 shrink-0 text-gold-light" />
                <span>
                  {siteConfig.consultation.days}
                  <br />
                  {siteConfig.consultation.hours}
                </span>
              </p>
              <p className="flex gap-3 text-sm leading-6 text-cream/80">
                <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-gold-light" />
                <a href={`tel:+${siteConfig.whatsappNumber}`} className="hover:text-cream">
                  {siteConfig.whatsappDisplay}
                </a>
              </p>
              <div className="mt-auto rounded-3xl bg-cream/[0.07] p-5 ring-1 ring-cream/10">
                <p className="text-xs uppercase tracking-[0.14em] text-cream/60">
                  Tarif de lancement
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold text-gold-light">
                    {siteConfig.consultation.price}
                  </span>
                  <span className="text-sm text-cream/50 line-through">
                    {siteConfig.consultation.regularPrice}
                  </span>
                </p>
              </div>
            </aside>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs italic leading-6 text-muted">
            Le Sujok et l'homéopathie ne remplacent pas le diagnostic médical ni
            les traitements prescrits. Ils interviennent comme une approche
            complémentaire destinée à améliorer le confort et le bien-être.
          </p>
        </div>
      </section>
    </>
  );
}
