import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ArrowRightIcon,
  CalendarIcon,
  CertificateIcon,
  CheckIcon,
  HandIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
  QuoteIcon,
  SparkIcon,
  StarIcon,
  WhatsAppIcon
} from "@/components/Icons";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import {
  longTestimonials,
  shortTestimonials,
  videoTestimonials
} from "@/data/testimonials";

const homeMessage = "Bonjour Dr Boulaguiem, j'ai une question.";

const bookingHref = "/consultations#rdv";

const stats = [
  { value: "Docteur", label: "en pharmacie" },
  { value: "+15 ans", label: "d'expérience terrain" },
  { value: "+500", label: "élèves formés au Maroc" },
  { value: "100 %", label: "approche naturelle et personnalisée" }
];

const disciplines = [
  {
    name: "Homéopathie",
    href: "/homeopathie",
    image: images.homeo1,
    icon: LeafIcon,
    text: "Une approche douce qui considère la personne dans sa globalité. Pratiquée en consultation, enseignée pas à pas en formation."
  },
  {
    name: "Sujok",
    href: "/sujok",
    image: images.sujokBall,
    icon: HandIcon,
    text: "Soulager la douleur et les tensions du quotidien par la stimulation de points précis des mains et des pieds — en séance au cabinet, ou en l'apprenant vous-même."
  }
];

const doors = [
  {
    key: "consultations",
    eyebrow: "Consulter",
    title: "Une consultation au cabinet",
    text: "Douleurs, migraines, stress, sommeil, troubles digestifs… Une approche naturelle, globale et personnalisée.",
    image: images.sujokSession2,
    imageAlt: "Le Dr Boulaguiem stimulant un point de la main en consultation",
    imagePosition: "object-[50%_35%]",
    points: [
      `Cabinet à Casablanca`,
      `${siteConfig.consultation.days}, ${siteConfig.consultation.hours}`,
      `${siteConfig.consultation.price} au lieu de ${siteConfig.consultation.regularPrice} — offre de lancement`
    ],
    cta: "Prendre rendez-vous",
    href: bookingHref,
    dark: true
  },
  {
    key: "formations",
    eyebrow: "Se former",
    title: "Une formation pour apprendre",
    text: "Apprenez l'homéopathie et le Sujok avec un pharmacien formateur depuis 2009, que vous soyez professionnel de santé ou débutant.",
    image: images.teachingConference,
    imageAlt: "Le Dr Boulaguiem animant une formation",
    imagePosition: "object-center",
    points: [
      "En présentiel partout au Maroc, ou en ligne",
      "Programme progressif, attestation remise",
      "+500 élèves déjà formés"
    ],
    cta: "Découvrir les formations",
    href: "/formations",
    dark: false
  }
];

const pillars = [
  {
    icon: SparkIcon,
    title: "Clarté",
    text: "Pas de discours mystique. Des explications simples, pour comprendre ce que l'on vous propose comme ce que l'on apprend."
  },
  {
    icon: CertificateIcon,
    title: "Approche globale",
    text: "Une approche naturelle qui considère la personne dans sa globalité, corps et esprit."
  },
  {
    icon: HandIcon,
    title: "Ancrée dans la pratique",
    text: "Des conseils concrets en consultation, des exercices et des cas réels en formation : des outils utilisables au quotidien."
  }
];

const consultationFaq = [
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Choisissez un jour et un créneau sur la page Consultations, puis laissez votre nom et votre téléphone. Le Dr Boulaguiem vous recontacte pour confirmer. Vous pouvez aussi écrire sur WhatsApp."
  },
  {
    question: "Combien coûte une consultation ?",
    answer: `${siteConfig.consultation.price} au lieu de ${siteConfig.consultation.regularPrice}, dans le cadre de l'offre de lancement.`
  },
  {
    question: "Où se trouve le cabinet ?",
    answer: `${siteConfig.cabinet.street}, ${siteConfig.cabinet.city}. Consultations ${siteConfig.consultation.days.toLowerCase()}, ${siteConfig.consultation.hours}.`
  }
];

const faqItems = [
  {
    question: "Faut-il être professionnel de santé pour participer ?",
    answer:
      "Non. La formation est ouverte aux professionnels de santé comme au grand public."
  },
  {
    question: "Peut-on participer sans connaître le Sujok ?",
    answer:
      "Oui. Aucun prérequis n'est nécessaire. L'apprentissage commence par les bases."
  },
  {
    question: "Que vais-je apprendre durant la formation du Sujok ?",
    answer:
      "À repérer les zones de correspondance du corps sur les mains et les pieds et à utiliser les principales techniques de stimulation Sujok."
  },
  {
    question: "La formation comprend-elle de la pratique ?",
    answer:
      "Oui. Les explications théoriques sont accompagnées de démonstrations et d'exercices pratiques."
  },
  {
    question: "Peut-on pratiquer après la formation ?",
    answer:
      "Oui. Les techniques de base enseignées sont conçues pour être facilement comprises et mises en pratique."
  },
  {
    question: "Le matériel Sujok est-il présenté pendant la formation ?",
    answer:
      "Oui. Vous découvrirez notamment les stylets, graines, aimants, moxa et différents outils utilisés en Sujok."
  },
  {
    question: "Combien coûte une formation ?",
    answer:
      "En présentiel, 600 Dh par module (10 modules au total), ou 5 000 Dh pour les 10 modules avec facilités de paiement. En ligne, 400 Dh par mois, payable par trimestre. Le détail complet est sur la page Formations."
  },
  {
    question: "Reçoit-on une attestation ?",
    answer:
      "Oui. Une attestation de participation est remise à la fin de la formation."
  },
  {
    question: "Comment connaître les dates et réserver ?",
    answer:
      "Contactez-nous directement via WhatsApp pour recevoir les prochaines dates, lieux et disponibilités."
  }
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
              Docteur en pharmacie · Praticien & formateur
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-[4.25rem]">
              <span className="italic text-forest-700">Homéopathie</span> &{" "}
              <span className="italic text-forest-700">Sujok</span>, en
              consultation et en formation.
            </h1>
            <p className="mt-6 font-display text-xl italic text-clay-dark">
              Bien-être & équilibre naturel.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Pharmacien fort de 15 ans de terrain, le Dr Boulaguiem vous reçoit
              en consultation à son cabinet de Casablanca, et forme
              professionnels de santé et passionnés partout au Maroc.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={bookingHref} size="lg">
                <CalendarIcon />
                Prendre rendez-vous
              </Button>
              <Button href="/formations" variant="secondary" size="lg">
                Découvrir les formations
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
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-semibold text-ink">
                  Cabinet à Casablanca
                </p>
                <p className="text-[11px] text-muted">
                  {siteConfig.consultation.days.toLowerCase()}
                </p>
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

      {/* ---------- TWO DOORS ---------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Consulter ou se former"
              title="Comment le Dr Boulaguiem peut vous accompagner"
              text={
                <>
                  Venir en consultation pour être soulagé, ou suivre une
                  formation pour apprendre : deux façons de découvrir
                  l'homéopathie et le&nbsp;Sujok&nbsp;et
                  <span className="mt-3 block font-display text-2xl italic text-forest-700 sm:text-3xl">
                    améliorer son bien-être.
                  </span>
                </>
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {doors.map((door, i) => (
              <Reveal key={door.key} delay={i * 120}>
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-4xl shadow-soft ${
                    door.dark
                      ? "bg-forest-radial text-cream shadow-lift"
                      : "border border-forest-900/8 bg-white"
                  }`}
                >
                  <div className="img-zoom relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={door.image}
                      alt={door.imageAlt}
                      className={`aspect-square w-full object-cover ${door.imagePosition}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 sm:p-10">
                    <p className={`eyebrow ${door.dark ? "!text-gold-light" : ""}`}>
                      <span className="rule-gold" aria-hidden="true" />
                      {door.eyebrow}
                    </p>
                    <h3
                      className={`mt-4 font-display text-2xl font-semibold sm:text-3xl ${
                        door.dark ? "text-cream" : "text-ink"
                      }`}
                    >
                      {door.title}
                    </h3>
                    <p
                      className={`mt-4 text-[15px] leading-7 ${
                        door.dark ? "text-cream/75" : "text-muted"
                      }`}
                    >
                      {door.text}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {door.points.map((point) => (
                        <li
                          key={point}
                          className={`flex items-start gap-3 text-sm ${
                            door.dark ? "text-cream/85" : "text-ink/80"
                          }`}
                        >
                          <CheckIcon
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              door.dark ? "text-gold-light" : "text-forest-600"
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      {door.dark ? (
                        <Link
                          href={door.href}
                          className="group inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-forest-800 shadow-soft transition hover:-translate-y-0.5"
                        >
                          <CalendarIcon />
                          {door.cta}
                        </Link>
                      ) : (
                        <Button href={door.href} variant="secondary" size="lg">
                          {door.cta}
                          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
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
              title="Deux disciplines complémentaires"
              text="Pratiquées en consultation et enseignées en formation, avec la même méthode et la même rigueur."
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
                alt="Le Dr Boulaguiem tenant un modèle de main Sujok"
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
                title="Une approche sérieuse, humaine et utile"
                text="En consultation comme en formation : de l'écoute, des explications claires et un cadre professionnel assumé."
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
                    Docteur en pharmacie · Praticien & formateur depuis 2009
                  </p>
                  <p className="mt-6 text-base leading-8 text-muted">
                    Pharmacien de formation, il reçoit ses patients en
                    consultation à Casablanca et accompagne depuis plus de 15 ans
                    des professionnels de santé et des apprenants à travers le
                    Maroc.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {["Officine", "Homéopathie", "Sujok", "Consultations", "Formation continue"].map(
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

      {/* ---------- TESTIMONIALS ---------- */}
      <section id="temoignages" className="scroll-mt-24 bg-sand/60 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Témoignages"
              title="Ce qu'ils en disent"
              text="Des personnes venues de tous horizons, professionnels de santé comme débutants complets."
            />
          </Reveal>

          {/* Three reels */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.key} delay={i * 100}>
                <VideoTestimonial item={v} />
              </Reveal>
            ))}
          </div>

          {/* First long story */}
          <Reveal delay={160}>
            <figure className="mt-6 rounded-4xl border border-forest-900/8 bg-white p-8 shadow-soft sm:p-12">
              <QuoteIcon className="h-9 w-9 text-forest-200" />
              <blockquote className="mt-5 grid gap-4 sm:grid-cols-3">
                {longTestimonials[0].paragraphs.map((p) => (
                  <p key={p} className="text-[15px] leading-8 text-ink/85">
                    {p}
                  </p>
                ))}
              </blockquote>
              <figcaption className="mt-8 border-t border-forest-900/8 pt-5">
                <p className="font-display text-lg font-semibold text-ink">
                  {longTestimonials[0].author}
                </p>
                <p className="text-sm text-muted">
                  {longTestimonials[0].role} · {longTestimonials[0].detail}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Second long story, full width */}
          <Reveal delay={80}>
            <figure className="mt-6 rounded-4xl border border-forest-900/8 bg-forest-900 p-8 text-cream shadow-lift sm:p-12">
              <QuoteIcon className="h-9 w-9 text-cream/25" />
              <blockquote className="mt-5 grid gap-4 sm:grid-cols-3">
                {longTestimonials[1].paragraphs.map((p) => (
                  <p key={p} className="text-[15px] leading-8 text-cream/85">
                    {p}
                  </p>
                ))}
              </blockquote>
              <figcaption className="mt-8 border-t border-cream/12 pt-5">
                <p className="font-display text-lg font-semibold text-cream">
                  {longTestimonials[1].author}
                </p>
                <p className="text-sm text-cream/60">
                  {longTestimonials[1].role}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Short quotes */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {shortTestimonials.map((t, i) => (
              <Reveal key={t.key} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-4xl border border-forest-900/8 bg-white/80 p-7 shadow-soft">
                  <div className="flex gap-0.5 text-gold">
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
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Questions fréquentes"
              title="Tout ce qu'il faut savoir"
            />
          </Reveal>
          {[
            { title: "Consultations", items: consultationFaq },
            { title: "Formations", items: faqItems }
          ].map((group, g) => (
            <Reveal key={group.title} delay={80 + g * 40}>
              <h3 className="mt-12 font-display text-xl font-semibold text-forest-800">
                {group.title}
              </h3>
              <div className="mt-4 divide-y divide-forest-900/8 rounded-4xl border border-forest-900/8 bg-white/70 px-6 shadow-soft sm:px-8">
                {group.items.map((item) => (
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
          ))}
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center gap-4 text-center">
              <p className="text-base text-muted">
                Une autre question ? Écrivez directement sur WhatsApp, la
                réponse est rapide.
              </p>
              <WhatsAppButton message={homeMessage}>
                Poser une question
              </WhatsAppButton>
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
                Consultations & formations
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
                Prêt à faire le premier pas ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-cream/70">
                Réservez votre consultation en ligne, ou écrivez directement au
                Dr Boulaguiem sur WhatsApp pour toute question sur les
                consultations ou les formations.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={bookingHref}
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-forest-800 shadow-soft transition hover:-translate-y-0.5"
                >
                  <CalendarIcon />
                  Prendre rendez-vous
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(homeMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-[15px] font-medium text-cream transition hover:-translate-y-0.5 hover:bg-cream/10"
                >
                  <WhatsAppIcon />
                  Écrire sur WhatsApp
                </a>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-cream/70">
                <PhoneIcon className="h-4 w-4 text-gold-light" />
                {siteConfig.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
