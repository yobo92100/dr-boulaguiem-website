import Link from "next/link";
import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ArrowRightIcon,
  CalendarIcon,
  CertificateIcon,
  HandIcon,
  LeafIcon,
  MapPinIcon,
  QuoteIcon,
  SparkIcon,
  StarIcon,
  WhatsAppIcon
} from "@/components/Icons";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

const homeMessage =
  "Bonjour Dr Boulaguiem, je souhaite réserver une place pour une formation en homéopathie ou Sujok au Maroc.";

const stats = [
  { value: "Docteur", label: "en pharmacie" },
  { value: "+15 ans", label: "d'expérience terrain" },
  { value: "+500", label: "élèves formés au Maroc" },
  { value: "Partout", label: "à travers le Maroc" }
];

const disciplines = [
  {
    name: "Homéopathie",
    href: "/homeopathie",
    image: images.homeo2,
    icon: LeafIcon,
    text: "Une découverte progressive des principes fondamentaux à travers des cas concrets, un vocabulaire clair et un cadre d'usage responsable."
  },
  {
    name: "Sujok",
    href: "/sujok",
    image: images.sujokBall,
    icon: HandIcon,
    text: "Une initiation pratique aux techniques de base et à leur usage prudent au quotidien. Accessible sans prérequis médical."
  }
];

const pillars = [
  {
    icon: SparkIcon,
    title: "Pédagogie claire",
    text: "Pas de discours mystique. Des repères solides, des cas pratiques et une progression pensée pour être comprise."
  },
  {
    icon: CertificateIcon,
    title: "Complémentarité",
    text: "Une approche complémentaire qui respecte les limites et le suivi de santé classique."
  },
  {
    icon: HandIcon,
    title: "Ancrée dans la pratique",
    text: "Des exercices, des études de cas et des mises en situation pour repartir avec des outils utilisables."
  }
];

const testimonials = [
  {
    quote:
      "Formation très structurée. J'ai enfin compris le cadre d'utilisation de l'homéopathie dans ma pratique.",
    author: "Fatima Z.",
    role: "Pharmacienne · Casablanca"
  },
  {
    quote:
      "Le Dr explique avec beaucoup de clarté. Pas de discours mystique — des faits et des cas pratiques.",
    author: "Karim M.",
    role: "Infirmier · Rabat"
  },
  {
    quote:
      "J'ai suivi la formation Sujok sans formation médicale. Très accessible, très utile au quotidien.",
    author: "Nadia A.",
    role: "Participante · Marrakech"
  }
];

const faqItems = [
  {
    question: "Faut-il un diplôme médical pour participer ?",
    answer:
      "Non. Les formations s'adressent aussi bien aux professionnels de santé qu'au grand public. Le niveau est adapté à chaque groupe."
  },
  {
    question: "Combien coûte une formation ?",
    answer:
      "Les tarifs varient selon la durée et la ville. Contactez-nous via WhatsApp pour recevoir les informations précises."
  },
  {
    question: "Reçoit-on une attestation à la fin ?",
    answer:
      "Oui, une attestation de participation est remise à la fin de chaque journée de formation."
  },
  {
    question: "Comment réserver une place ?",
    answer:
      "La réservation se fait directement via WhatsApp. Vous pouvez demander les prochaines dates et vérifier les places disponibles."
  }
];

const galleryImages = [
  { src: images.teachingAlt, label: "En formation", span: "lg:col-span-2 lg:row-span-2" },
  { src: images.sessionWide2, label: "Séance Sujok", span: "" },
  { src: images.homeo1, label: "Homéopathie", span: "" },
  { src: images.sujokSession, label: "Pratique", span: "" },
  { src: images.sessionWide1, label: "Accompagnement", span: "" }
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative grid gap-14 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="eyebrow animate-fade-in">
              <span className="rule-gold" aria-hidden="true" />
              Docteur en pharmacie · Formateur certifié
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-[4.25rem]">
              Des formations médicales en{" "}
              <span className="italic text-forest-700">homéopathie</span> &{" "}
              <span className="italic text-forest-700">Sujok</span>.
            </h1>
            <p className="mt-6 font-display text-xl italic text-clay-dark">
              Bien-être & équilibre naturel.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Animées par un pharmacien fort de 15 ans de terrain. Pour les
              professionnels de santé comme pour les apprenants sérieux —
              partout à travers le Maroc.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={homeMessage}>Réserver une place</WhatsAppButton>
              <Button href="#formations" variant="secondary" size="lg">
                Voir les formations
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-muted">
              <div className="flex -space-x-2">
                {[images.participant1, images.participant2, images.participant3].map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
              <p>
                <span className="font-semibold text-ink">+500 participants</span>{" "}
                formés à travers le Maroc
              </p>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex items-center justify-center">
            <div className="img-zoom relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/60 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.heroPortrait}
                alt="Dr Noureddine Boulaguiem en séance"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
            </div>
            {/* Floating credential card */}
            <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-forest-900/8 bg-cream/95 px-4 py-3 shadow-lift backdrop-blur sm:left-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700/10 text-forest-700">
                <CertificateIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-semibold text-ink">
                  Attestation remise
                </p>
                <p className="text-[11px] text-muted">à chaque formation</p>
              </div>
            </div>
            <div className="absolute -right-1 top-6 hidden items-center gap-2 rounded-full border border-forest-900/8 bg-cream/95 px-3.5 py-2 shadow-lift backdrop-blur sm:flex">
              <LeafIcon className="h-4 w-4 text-forest-600" />
              <span className="text-xs font-medium text-forest-800">
                Approche naturelle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="bg-forest-radial">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4 md:divide-x md:divide-cream/12">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 text-center">
                <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-cream/65 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- UPCOMING FORMATIONS ---------- */}
      <section id="formations" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle
                align="left"
                eyebrow="Prochaines sessions"
                title="Inscrivez-vous — places limitées"
                text="Des formations organisées à travers tout le Maroc, en petits groupes pour un vrai suivi."
              />
              <Link
                href="/formations"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-forest-700"
              >
                Toutes les dates
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-clay/20 bg-clay-50 px-4 py-2 text-[13px] font-medium text-clay-dark">
              <CalendarIcon className="h-4 w-4" />
              Prochaine session : 18 mai à Casablanca — il reste 5 places.
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.slice(0, 3).map((event, i) => (
              <Reveal key={`${event.title}-${event.city}`} delay={i * 100}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DISCIPLINES ---------- */}
      <section className="relative overflow-hidden bg-sand/60 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Les disciplines"
              title="Deux approches, une même exigence"
              text="Enseignées avec méthode et rigueur, comme des approches complémentaires qui s'intègrent naturellement à un parcours de santé."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {disciplines.map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <Link
                  href={d.href}
                  className="img-zoom group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-4xl shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/35 to-transparent" />
                  <div className="relative p-8">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-cream ring-1 ring-cream/25 backdrop-blur">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                      {d.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-cream/80">
                      {d.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-light">
                      En savoir plus
                      <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- APPROACH ---------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="img-zoom relative overflow-hidden rounded-4xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.teaching}
                alt="Une formation en cours"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-forest-900/10" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionTitle
                align="left"
                eyebrow="La méthode"
                title="Une formation sérieuse, humaine et utile"
                text="Chaque session est construite autour de la compréhension et de la pratique, dans un cadre professionnel assumé."
              />
            </Reveal>
            <div className="mt-10 space-y-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="flex gap-4 rounded-3xl border border-forest-900/8 bg-white/70 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-7 text-muted">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT PREVIEW ---------- */}
      <section className="bg-sand/60 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-5xl border border-forest-900/8 bg-white/80 shadow-soft">
              <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
                <div className="img-zoom relative min-h-[18rem] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images.portrait}
                    alt="Dr Noureddine Boulaguiem"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
                </div>
                <div className="p-8 sm:p-10 lg:p-12">
                  <p className="eyebrow">
                    <span className="rule-gold" aria-hidden="true" />
                    À propos
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    Qui est Dr Noureddine Boulaguiem ?
                  </h2>
                  <p className="mt-3 text-sm font-medium text-forest-700">
                    Docteur en pharmacie · Formateur depuis 2009
                  </p>
                  <p className="mt-6 text-base leading-8 text-muted">
                    Pharmacien de formation, il accompagne depuis plus de 15 ans
                    des professionnels de santé et des apprenants à travers le
                    Maroc. Ses formations ne font pas de promesses médicales —
                    elles donnent des repères solides, des outils pratiques et une
                    posture professionnelle.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {["Pharmacie clinique", "Homéopathie", "Sujok", "Pédagogie médicale"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-forest-900/10 bg-cream px-4 py-1.5 text-[13px] text-forest-800"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <Button href="/a-propos" variant="ghost" className="mt-8 -ml-2">
                    Découvrir son parcours
                    <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="En images"
              title="Formations, échanges & pratique"
              text="Un aperçu de l'esprit des sessions : concentration, bienveillance et travail concret."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((g) => (
                <div
                  key={g.src}
                  className={`img-zoom group relative overflow-hidden rounded-3xl shadow-soft ${g.span}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt={g.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-4 text-sm font-medium text-cream opacity-0 transition group-hover:opacity-100">
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-sand/60 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Témoignages"
              title="Ce que disent les participants"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-4xl border border-forest-900/8 bg-white/80 p-7 shadow-soft">
                  <QuoteIcon className="h-8 w-8 text-forest-200" />
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
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                align="left"
                eyebrow="Questions fréquentes"
                title="Tout ce qu'il faut savoir avant de vous inscrire"
                text="Une autre question ? Écrivez directement sur WhatsApp, la réponse est rapide."
              />
              <WhatsAppButton
                message="Bonjour Dr Boulaguiem, j'ai une question à propos des formations."
                className="mt-8"
              >
                Poser une question
              </WhatsAppButton>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="divide-y divide-forest-900/8 rounded-4xl border border-forest-900/8 bg-white/70 px-6 shadow-soft sm:px-8">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink marker:hidden">
                    {item.question}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-forest-900/15 text-forest-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-5xl bg-forest-radial px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            <div className="glow-warm pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <p className="eyebrow !text-gold-light">
                <span className="rule-gold" aria-hidden="true" />
                Places limitées
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
                Prêt à réserver votre place ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-cream/70">
                Pour connaître les prochaines dates ou réserver, contactez
                directement le Dr Boulaguiem sur WhatsApp.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(homeMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-forest-800 shadow-soft transition hover:-translate-y-0.5"
                >
                  <WhatsAppIcon />
                  S'inscrire via WhatsApp
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-cream/70">
                  <MapPinIcon className="h-4 w-4 text-gold-light" />
                  {siteConfig.whatsappDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
