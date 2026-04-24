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
      "Les tarifs varient entre 500 et 700 MAD selon la durée et la ville. Contactez-nous via WhatsApp pour un devis précis."
  },
  {
    question: "Reçoit-on une attestation à la fin ?",
    answer:
      "Oui, une attestation de participation est remise à la fin de chaque journée de formation."
  },
  {
    question: "Comment réserver une place ?",
    answer:
      "Directement via WhatsApp. Dr Boulaguiem répond personnellement et confirme votre inscription sous 24h."
  }
];

export default function Home() {
  return (
    <>
      <section className="soft-grid">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.35fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-[#D4EDDF] px-4 py-2 text-xs font-medium text-[#1B6B4A]">
              Docteur en pharmacie · Formateur certifié
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.05] text-medical-navy sm:text-5xl lg:text-6xl">
              Des formations médicales sérieuses en{" "}
              <span className="text-[#1B6B4A]">homéopathie & Sujok.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Animées par un pharmacien avec 15 ans de terrain. Pour professionnels
              de santé et apprenants sérieux — à Casablanca, Rabat, Marrakech.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={homeMessage}>Réserver une place</WhatsAppButton>
              <Button href="#formations" variant="secondary" className="border-[#1B6B4A]/30 bg-transparent text-[#1B6B4A]">
                Voir les formations
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-soft">
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl bg-[#C8DDD4] text-center md:min-h-[280px]">
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
            ["+15 ans", "d'expérience terrain"],
            ["+500", "élèves formés au Maroc"]
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

      <section id="formations" className="bg-[#fbf7ee] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#1b6b4a]/10 bg-white/70 p-5 shadow-soft sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-medical-navy">
                Inscrivez-vous — places limitées
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Des formations organisées dans plusieurs villes du Maroc : Casablanca,
                Rabat, Marrakech et autres.
              </p>
            </div>
            <a href="/formations" className="text-sm font-medium text-[#1B6B4A]">
              Toutes les dates →
            </a>
          </div>
          <div className="mt-5 w-fit rounded-md bg-[#FAEEDA] px-4 py-2 text-[11px] font-medium text-[#B05530]">
            ⚡ Prochaine session : 18 mai à Casablanca — il reste 5 places.
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={`${event.title}-${event.city}`} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-5 rounded-2xl bg-white p-6 shadow-soft sm:grid-cols-[80px_1fr] sm:p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C8DDD4] text-[#5A8A7A]">
            <PersonIcon className="h-12 w-12" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-medical-navy">
              Qui est Dr Boulaguiem ?
            </h2>
            <p className="mt-4 text-base font-medium text-medical-navy">
              Dr Noureddine Boulaguiem
            </p>
            <p className="mt-1 text-xs font-medium text-[#1B6B4A]">
              Docteur en pharmacie · Formateur depuis 2009
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Pharmacien de formation, Dr Boulaguiem accompagne depuis plus de 15 ans
              des professionnels de santé et des apprenants à travers le Maroc. Ses
              formations ne font pas de promesses médicales — elles donnent des
              repères solides, des outils pratiques et une posture professionnelle.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Pharmacie clinique", "Homéopathie", "Sujok", "Pédagogie médicale"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1b6b4a]/10 bg-[#fbf7ee] px-3 py-1 text-xs text-slate-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-medical-navy">
            Ce que disent les participants
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="rounded-lg border border-[#1b6b4a]/10 bg-white/80 p-4 shadow-soft">
                <p className="text-[11px] text-[#BA7517]">★★★★★</p>
                <p className="mt-3 text-xs italic leading-6 text-slate-700">
                  “{testimonial.quote}”
                </p>
                <p className="mt-4 text-[11px] text-slate-500">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white/85 p-6 shadow-soft sm:p-8">
          <h2 className="font-heading text-3xl font-semibold text-medical-navy">Questions fréquentes</h2>
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

      <section className="bg-[#1B6B4A] px-6 py-10 text-center">
        <h2 className="text-lg font-medium leading-7 text-white">
          Une place à réserver ?
          <br />
          Une question à poser ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-white/75">
          Envoyez un message WhatsApp — Dr Boulaguiem répond personnellement, sous 24h.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(homeMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1B6B4A] shadow-soft"
        >
          <WhatsAppIcon />
          Écrire sur WhatsApp
        </a>
        <p className="mt-4 text-xs text-white/60">
          ou appelez directement : {siteConfig.whatsappDisplay}
        </p>
      </section>
    </>
  );
}
