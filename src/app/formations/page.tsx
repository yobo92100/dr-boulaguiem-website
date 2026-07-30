import { EventCard } from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CalendarIcon, MapPinIcon, CertificateIcon } from "@/components/Icons";
import { events } from "@/data/events";

const infoItems = [
  { icon: MapPinIcon, text: "Partout à travers le Maroc" },
  { icon: CalendarIcon, text: "Sessions régulières, en petits groupes" },
  { icon: CertificateIcon, text: "Attestation de participation remise" }
];

export default function FormationsPage() {
  return (
    <>
      <section className="soft-grid relative overflow-hidden">
        <div className="glow-warm pointer-events-none absolute inset-0" />
        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Formations
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Prochaines formations au Maroc
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Des formations sont régulièrement organisées à travers tout le
              Maroc. Les places étant limitées, il est recommandé de s'inscrire
              à l'avance pour garantir sa participation.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-3">
              {infoItems.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white/70 px-4 py-2 text-[13px] text-forest-800 backdrop-blur"
                >
                  <item.icon className="h-4 w-4 text-forest-600" />
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={`${event.title}-${event.city}`} delay={(i % 3) * 100}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-center gap-5 rounded-5xl border border-forest-900/8 bg-sand/60 px-6 py-12 text-center">
              <h2 className="max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
                Vous ne trouvez pas la date qui vous convient ?
              </h2>
              <p className="max-w-lg text-sm leading-7 text-muted">
                Écrivez-nous sur WhatsApp pour connaître les prochaines sessions
                ou organiser une formation dans votre ville.
              </p>
              <WhatsAppButton message="Bonjour Dr Boulaguiem, je souhaite connaître les prochaines dates de formation.">
                Demander les prochaines dates
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
