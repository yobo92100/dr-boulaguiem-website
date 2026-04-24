import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { events } from "@/data/events";

const homeMessage =
  "Bonjour Dr Boulaguiem, je souhaite recevoir des informations sur les prochaines formations en homéopathie et Sujok au Maroc.";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-ivory to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-pharmacy-green">
              Sujok Maroc / Sujok Homeo
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-medical-navy sm:text-5xl">
              Dr Noureddine Boulaguiem
            </h1>
            <p className="mt-5 text-2xl font-semibold text-medical-blue">
              Formations en homéopathie & Sujok au Maroc
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Docteur en pharmacie · +15 ans d'expérience · +500 élèves formés
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={homeMessage} />
              <Button href="/formations" variant="secondary">
                Voir les prochaines formations
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-medical-sky text-center">
              <div className="px-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-pharmacy-green">
                  Photo professionnelle
                </p>
                <p className="mt-3 text-2xl font-bold text-medical-navy">
                  Espace réservé au portrait de Dr Boulaguiem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Formation structurée", "Des contenus organisés pour comprendre les bases, les usages et les limites."],
            ["Cadre responsable", "Une approche pédagogique qui ne remplace pas l'avis médical ni le suivi prescrit."],
            ["Présence au Maroc", "Des sessions prévues à Casablanca, Rabat, Marrakech et dans d'autres villes."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-medical-navy">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Agenda"
          title="Prochaines formations"
          text="Inscription simple par WhatsApp, avec confirmation selon les places disponibles."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard key={`${event.title}-${event.city}`} event={event} />
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-medical-sky p-8">
            <h2 className="text-2xl font-bold text-medical-navy">Homéopathie</h2>
            <p className="mt-4 leading-8 text-slate-700">
              L'homéopathie est présentée ici comme un sujet de formation et une
              approche complémentaire. Les sessions mettent l'accent sur les repères,
              la prudence et la compréhension du cadre d'utilisation.
            </p>
          </div>
          <div className="rounded-2xl bg-pharmacy-mint p-8">
            <h2 className="text-2xl font-bold text-medical-navy">Sujok</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Le Sujok est abordé dans un cadre pédagogique, avec des explications
              accessibles et une attention particulière à l'accompagnement responsable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
