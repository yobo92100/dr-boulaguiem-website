import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { PersonIcon, WhatsAppIcon } from "@/components/Icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

const homeMessage =
  "Bonjour Dr Boulaguiem, je souhaite m'inscrire à une formation en homéopathie ou Sujok au Maroc.";

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
            <p className="font-heading text-xl font-semibold text-medical-navy sm:text-2xl">
              Dr Noureddine Boulaguiem
            </p>
            <p className="mt-3 text-base font-medium text-[#1B6B4A] sm:text-lg">
              Formations en homéopathie & Sujok au Maroc
            </p>
            <h1 className="mt-8 max-w-3xl font-heading text-5xl font-semibold leading-[1.02] text-medical-navy sm:text-6xl lg:text-7xl">
              Apprendre & pratiquer
            </h1>
            <p className="mt-6 text-sm font-medium text-slate-700 sm:text-base">
              Docteur en pharmacie · +15 ans d'expérience · +500 élèves formés
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Des formations accessibles, structurées et orientées vers la pratique,
              pour découvrir et approfondir ces disciplines dans un cadre clair et
              pédagogique.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={homeMessage}>S'inscrire via WhatsApp</WhatsAppButton>
              <Button href="#formations" variant="secondary" className="border-[#1B6B4A]/30 bg-transparent text-[#1B6B4A]">
                Voir les prochaines formations
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

      <section className="bg-[#1B6B4A] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/15 text-center">
          {[
            ["Dr.", "Docteur en pharmacie"],
            ["+15 ans", "d'expérience"],
            ["+500", "élèves formés"]
          ].map(([number, label]) => (
            <div key={label} className="px-2 py-4">
              <p className="text-base font-medium text-white sm:text-xl">{number}</p>
              <p className="mt-1 text-[10px] leading-4 text-white/70 sm:text-[11px]">
                {label}
              </p>
            </div>
          ))}
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

      <section id="formations" className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#1b6b4a]/10 bg-white/75 p-5 shadow-soft sm:p-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl font-semibold text-medical-navy">
              Prochaines formations
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Des formations sont régulièrement organisées dans plusieurs villes du
              Maroc, notamment à Casablanca, Rabat et Marrakech.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les places étant limitées, il est recommandé de s'inscrire à l'avance
              pour garantir sa participation.
            </p>
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
              <div key={label} className="rounded-2xl border border-[#1b6b4a]/10 bg-white p-3 shadow-soft">
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
              <article key={testimonial.author} className="rounded-lg border border-[#1b6b4a]/10 bg-[#fbf7ee] p-5 shadow-soft">
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
              <div key={item.question} className="border-t border-slate-200/70 py-4 first:border-t-0">
                <h3 className="text-[13px] font-medium text-medical-navy">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.answer}</p>
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
