import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import {
  ExperienceIcon,
  PersonIcon,
  PharmacyIcon,
  StudentsIcon,
  WhatsAppIcon
} from "@/components/Icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

const homeMessage =
  "Bonjour Dr Boulaguiem, je souhaite m'inscrire à une formation en homéopathie ou Sujok au Maroc.";

const credibilityItems = [
  {
    icon: PharmacyIcon,
    title: "Docteur en pharmacie",
    text: "Une base scientifique et une pédagogie claire."
  },
  {
    icon: ExperienceIcon,
    title: "+15 ans d'expérience",
    text: "Un enseignement nourri par le terrain."
  },
  {
    icon: StudentsIcon,
    title: "+500 personnes formées",
    text: "Des participants au Maroc, en France et en Belgique."
  }
];

const testimonials = [
  {
    quote:
      "Formation très structurée. J'ai enfin compris le cadre d'utilisation de l'homéopathie dans ma pratique.",
    author: "Fatima Z. — Pharmacienne · Casablanca"
  },
  {
    quote:
      "Le Dr explique avec beaucoup de clarté. Pas de discours mystique — des faits et des cas pratiques.",
    author: "Karim M. — Infirmier · Rabat"
  },
  {
    quote:
      "J'ai suivi la formation Sujok sans formation médicale. Très accessible, très utile au quotidien.",
    author: "Nadia A. — Participante · Marrakech"
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

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(212,237,223,0.9),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(232,245,251,0.8),transparent_30%),linear-gradient(135deg,#fbf7ee_0%,#ffffff_48%,#edf6f1_100%)]">
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#d4eddf]/50 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#e8f5fb]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <p className="font-heading text-xl font-semibold text-medical-navy sm:text-2xl">
              Dr Noureddine Boulaguiem
            </p>
            <p className="mt-3 max-w-xl text-base font-medium text-[#1B6B4A] sm:text-lg">
              Formations en homéopathie & Sujok au Maroc
            </p>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.04] text-medical-navy sm:text-6xl lg:text-[4.75rem]">
              Bien-être & Equilibre Naturel
            </h1>
            <div className="mt-5 flex max-w-2xl flex-wrap justify-center gap-2 md:justify-start">
              {["Docteur en pharmacie", "+15 ans d'expérience", "+500 élèves formés"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1b6b4a]/10 bg-white/75 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:whitespace-nowrap">
              Des formations accessibles, structurées et orientées vers la pratique.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <WhatsAppButton message={homeMessage} className="w-full sm:w-auto">S'inscrire via WhatsApp</WhatsAppButton>
              <Button
                href="#formations"
                variant="secondary"
                className="w-full border-[#12344d]/15 bg-white/70 text-medical-navy hover:bg-white sm:w-auto"
              >
                Voir les formations
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#1B6B4A]/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white bg-white/85 p-4 shadow-soft">
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#C8DDD4] to-[#eef7f2] text-center md:min-h-[380px]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/55 text-[#5A8A7A] shadow-soft sm:h-32 sm:w-32">
                  <PersonIcon className="h-14 w-14 sm:h-20 sm:w-20" />
                </div>
                <p className="mt-5 text-xs font-medium text-slate-600">Photo Dr Boulaguiem</p>
                <div className="mt-8 rounded-full bg-white/75 px-4 py-2 text-xs font-medium text-medical-navy">
                  Formateur en homéopathie & Sujok
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {credibilityItems.map((item) => {
            const Icon = item.icon;
            return (
            <article
              key={item.title}
              className="flex gap-4 rounded-[1.5rem] border border-[#12344d]/10 bg-[#fbf7ee] p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-white/80 sm:gap-5 sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1B6B4A] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold leading-7 text-medical-navy">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#d4eddf]/70 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-soft">
              <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#C8DDD4] to-[#eef7f2] text-[#5A8A7A] sm:min-h-[360px]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/55 shadow-soft sm:h-32 sm:w-32">
                  <PersonIcon className="h-14 w-14 sm:h-20 sm:w-20" />
                </div>
                <div className="mt-8 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-medical-navy">
                  Docteur en pharmacie
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-[#1B6B4A] sm:text-lg">À propos</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight text-medical-navy sm:text-5xl">
              Qui est Dr Boulaguiem ?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:mt-7 sm:text-xl sm:leading-9">
              Pharmacien de formation, Dr Noureddine Boulaguiem transmet depuis plus
              de 15 ans son expérience en homéopathie et en Sujok.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              Son approche est simple, progressive et centrée sur la pratique, avec
              une attention particulière à la clarté et à la compréhension.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Pharmacie clinique", "Homéopathie", "Sujok", "Pédagogie médicale"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1b6b4a]/10 bg-white px-4 py-2 text-sm text-medical-navy shadow-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="formations" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-heading text-base font-semibold text-[#1B6B4A] sm:text-lg">Agenda</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight text-medical-navy sm:text-5xl">
                Prochaines formations
              </h2>
            </div>
            <a
              href="/formations"
              className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-[#1B6B4A]/20 bg-[#edf6f1] px-5 py-3 text-sm font-semibold text-[#1B6B4A] transition hover:-translate-y-0.5 hover:bg-[#d4eddf]"
            >
              Voir toutes les dates →
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={`${event.title}-${event.city}`} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf6f1] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-base font-semibold text-[#1B6B4A] sm:text-lg">Programmes</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold text-medical-navy sm:text-5xl">
            Les formations
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.5rem] bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-medical-navy sm:text-3xl">
                Homéopathie
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Formation progressive pour découvrir les principes de base de
                l'homéopathie à travers des exemples concrets et des cas pratiques.
              </p>
            </article>
            <article className="rounded-[1.5rem] bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-medical-navy sm:text-3xl">
                Sujok
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Formation pratique pour apprendre les techniques de base du Sujok et
                leur utilisation au quotidien.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-base font-semibold text-[#1B6B4A] sm:text-lg">Galerie</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold text-medical-navy sm:text-5xl">
            Formations en images
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Un aperçu des formations, des échanges et des moments de pratique.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-[2rem] border border-[#12344d]/10 bg-white p-3 shadow-soft">
              <div className="flex aspect-[4/3] items-end rounded-[1.5rem] bg-gradient-to-br from-[#C8DDD4] via-[#edf6f1] to-white p-5">
                <p className="rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-medical-navy">
                  Sessions de formation
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              {["Groupes de participants", "Moments d'échange"].map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-[#12344d]/10 bg-white p-3 shadow-soft"
                >
                  <div className="flex aspect-[4/3] items-end rounded-[1.5rem] bg-gradient-to-br from-[#C8DDD4] via-[#edf6f1] to-white p-5">
                    <p className="rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-medical-navy">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-base font-semibold text-[#1B6B4A] sm:text-lg">
            Témoignages
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight text-medical-navy sm:text-5xl">
            Ce que disent les participants
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-2xl border border-[#12344d]/10 bg-[#fbf7ee] p-7 shadow-soft"
              >
                <p className="text-sm tracking-[0.18em] text-[#BA7517]">★★★★★</p>
                <p className="mt-5 text-base italic leading-8 text-slate-700">
                  “{testimonial.quote}”
                </p>
                <p className="mt-6 text-sm font-medium text-medical-navy">
                  {testimonial.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-heading text-base font-semibold text-[#1B6B4A] sm:text-lg">
              FAQ
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-medical-navy sm:text-5xl">
              Questions fréquentes
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-slate-600">
              Les réponses essentielles avant de réserver votre place ou de poser une
              question par WhatsApp.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(homeMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1B6B4A] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#15553b]"
            >
              <WhatsAppIcon />
              Poser une question
            </a>
          </div>
          <div className="rounded-[2rem] border border-[#12344d]/10 bg-white p-4 shadow-soft sm:p-6">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="group grid gap-4 rounded-2xl p-4 transition hover:bg-[#fbf7ee] sm:grid-cols-[48px_1fr] sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf6f1] font-heading text-sm font-semibold text-[#1B6B4A]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-medical-navy">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B6B4A] px-4 py-16 pb-28 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Intéressé par une formation ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/75">
            Contactez directement via WhatsApp pour connaître les prochaines dates et
            réserver votre place.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(homeMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-[#1B6B4A] shadow-soft transition hover:-translate-y-0.5 hover:bg-[#f7fbf9] sm:w-auto"
          >
            <WhatsAppIcon />
            S'inscrire via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
