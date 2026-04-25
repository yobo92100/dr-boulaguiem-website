import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { PersonIcon, WhatsAppIcon } from "@/components/Icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

const homeMessage =
  "Bonjour Dr Boulaguiem, je souhaite réserver une place pour une formation en homéopathie ou Sujok au Maroc.";

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
      <section className="soft-grid">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.35fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-[#D4EDDF] px-4 py-2 text-xs font-medium text-[#1B6B4A]">
              Docteur en pharmacie · Formateur certifié
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.05] text-medical-navy sm:text-5xl lg:text-6xl">
              Des formations médicales en{" "}
              <span className="text-[#1B6B4A]">homéopathie & Sujok.</span>
            </h1>
            <p className="mt-5 text-xl font-normal text-[#1B6B4A]">
              Apprendre & pratiquer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Animées par un pharmacien avec 15 ans de terrain. Pour professionnels
              de santé et apprenants sérieux — à Casablanca, Rabat, Marrakech.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={homeMessage}>Réserver une place</WhatsAppButton>
              <Button
                href="#formations"
                variant="secondary"
                className="border-[#1B6B4A]/30 bg-transparent text-[#1B6B4A]"
              >
                Voir les formations
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-soft">
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl bg-[#C8DDD4] text-center md:min-h-[320px]">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#D4EDDF] text-[#5A8A7A]">
                <PersonIcon className="h-16 w-16" />
              </div>
              <p className="mt-4 text-[11px] text-slate-500">Photo Dr Boulaguiem</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B6B4A] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center text-white sm:flex-row sm:gap-4">
          <span className="font-heading text-base font-semibold sm:text-lg">
            Docteur en pharmacie
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/45 sm:block" />
          <span className="text-sm text-white/85 sm:text-base">
            Plus de <strong className="font-semibold text-white">15 ans</strong>{" "}
            d'expérience
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/45 sm:block" />
          <span className="text-sm text-white/85 sm:text-base">
            Plus de{" "}
            <strong className="font-semibold text-white">500 participants</strong>{" "}
            formés
          </span>
        </div>
      </section>

      <section id="formations" className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#1b6b4a]/10 bg-white/75 p-5 shadow-soft sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-medical-navy">
                Inscrivez-vous — places limitées
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Des formations organisées dans plusieurs villes du Maroc :
                Casablanca, Rabat, Marrakech et autres.
              </p>
            </div>
            <a href="/formations" className="text-sm font-medium text-[#1B6B4A]">
              Toutes les dates →
            </a>
          </div>
          <div className="mt-5 w-fit rounded-md bg-[#FAEEDA] px-4 py-2 text-[11px] font-medium text-[#B05530]">
            Prochaine session : 18 mai à Casablanca — il reste 5 places.
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={`${event.title}-${event.city}`} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl font-semibold text-medical-navy">
            Les formations
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-[#edf6f1] p-7 shadow-soft">
              <h3 className="font-heading text-2xl font-medium text-medical-navy">
                Homéopathie
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Formation progressive permettant de découvrir les principes de base
                de l'homéopathie à travers des exemples concrets et des cas
                pratiques.
              </p>
            </article>
            <article className="rounded-2xl bg-[#fbf7ee] p-7 shadow-soft">
              <h3 className="font-heading text-2xl font-medium text-medical-navy">
                Sujok
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Formation pratique permettant d'apprendre les techniques de base du
                Sujok et leur utilisation au quotidien.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-7 shadow-soft sm:p-10">
          <div className="grid gap-6 md:grid-cols-[120px_1fr]">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#C8DDD4] text-[#5A8A7A]">
              <PersonIcon className="h-14 w-14" />
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Pharmacien de formation, Dr Noureddine Boulaguiem transmet depuis
                plus de 15 ans son expérience en homéopathie et en Sujok.
              </p>
              <p>
                Au fil des années, il a formé plus de 500 participants à travers le
                Maroc, issus aussi bien du domaine de la santé que du grand public.
              </p>
              <p>
                Son approche repose sur une pédagogie simple, progressive et centrée
                sur la compréhension et la pratique, afin de rendre ces disciplines
                accessibles à tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl font-semibold text-medical-navy">
              Formations en images
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Un aperçu des formations, des échanges et des moments de pratique.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Formation", "Échanges", "Pratique"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-[#1b6b4a]/10 bg-white p-3 shadow-soft"
              >
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#C8DDD4] to-[#fbf7ee]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-medical-navy">
            Ce que disent les participants
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-lg border border-[#1b6b4a]/10 bg-[#fbf7ee] p-5 shadow-soft"
              >
                <p className="text-[11px] text-[#BA7517]">★★★★★</p>
                <p className="mt-3 text-sm italic leading-7 text-slate-700">
                  “{testimonial.quote}”
                </p>
                <p className="mt-4 text-xs text-slate-500">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-heading text-3xl font-semibold text-medical-navy">
            Questions fréquentes
          </h2>
          <div className="mt-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="border-t border-slate-200/70 py-4 first:border-t-0"
              >
                <h3 className="text-[13px] font-medium text-medical-navy">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B6B4A] px-6 py-14 text-center">
        <h2 className="font-heading text-3xl font-semibold leading-tight text-white">
          Intéressé par une formation ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
          Pour connaître les prochaines dates ou réserver votre place, vous pouvez
          contacter directement via WhatsApp.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(homeMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1B6B4A] shadow-soft"
        >
          <WhatsAppIcon />
          S'inscrire via WhatsApp
        </a>
      </section>
    </>
  );
}
