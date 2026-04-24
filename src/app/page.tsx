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
      <section className="bg-gradient-to-br from-ivory via-white to-pharmacy-mint/45">
        <div className="mx-auto grid min-h-[720px] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
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
            <p className="mt-4 text-xl font-semibold text-pharmacy-green">
              Apprendre & pratiquer
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
          <div className="rounded-[2rem] border border-white bg-white/80 p-4 shadow-soft">
            <div className="flex min-h-[420px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-medical-sky to-ivory text-center">
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

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-ivory p-8 shadow-soft sm:p-10">
          <SectionTitle eyebrow="À propos" title="Une transmission claire et humaine" />
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Pharmacien de formation, Dr Noureddine Boulaguiem transmet depuis plus
              de 15 ans son expérience en homéopathie et en Sujok.
            </p>
            <p>
              Ses formations s'adressent aussi bien aux professionnels de santé
              qu'aux personnes souhaitant apprendre et pratiquer de manière concrète
              et accessible.
            </p>
            <p>
              Chaque formation est pensée pour être claire, structurée et directement
              applicable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["+", "Docteur en pharmacie"],
            ["15", "+15 ans d'expérience"],
            ["500", "+500 élèves formés à travers le Maroc"]
          ].map(([icon, title]) => (
            <div key={title} className="rounded-2xl border border-white bg-white p-6 text-center shadow-soft">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pharmacy-mint text-xl font-bold text-pharmacy-green">
                {icon}
              </div>
              <h2 className="mt-5 text-xl font-bold text-medical-navy">{title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          title="Prochaines formations"
          text="Des formations organisées dans plusieurs villes du Maroc : Casablanca, Rabat, Marrakech et autres."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard key={`${event.title}-${event.city}`} event={event} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-ivory to-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle title="Les formations" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-medical-sky p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-medical-navy">Homéopathie</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Formation progressive pour découvrir et comprendre les bases de
              l'homéopathie à travers des exemples concrets et des cas pratiques.
            </p>
          </div>
          <div className="rounded-[2rem] bg-pharmacy-mint p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-medical-navy">Sujok</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Formation pratique pour apprendre les techniques de base du Sujok et
              leur utilisation au quotidien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          title="Formations en images"
          text="Un aperçu des formations et des moments d'échange."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Session de formation", "Moment d'échange", "Cas pratiques"].map((title) => (
            <div key={title} className="rounded-[2rem] border border-slate-200 bg-ivory p-4 shadow-soft">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-medical-sky to-pharmacy-mint text-center">
                <p className="px-6 text-lg font-bold text-medical-navy">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
          <h2 className="text-3xl font-bold text-medical-navy">
            Intéressé par une formation ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Contactez directement via WhatsApp pour obtenir les prochaines dates et
            réserver votre place.
          </p>
          <WhatsAppButton message={homeMessage} className="mt-8" />
        </div>
      </section>
    </>
  );
}
