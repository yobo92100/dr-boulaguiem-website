import { FormatCard } from "@/components/FormatCard";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CalendarIcon, MapPinIcon, MonitorIcon, CertificateIcon } from "@/components/Icons";
import { formats } from "@/data/formats";

const infoItems = [
  { icon: MapPinIcon, text: "Présentiel : Rabat & Casablanca, le week-end" },
  { icon: MonitorIcon, text: "En ligne : en semaine, en soirée" },
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
              Se former en Sujok & Homéopathie
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Deux formats pour apprendre à votre rythme : en présentiel le
              week-end à Rabat et Casablanca, ou en ligne en soirée depuis
              n'importe où au Maroc.
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
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-clay/20 bg-clay-50 px-4 py-2 text-[13px] font-medium text-clay-dark">
              <CalendarIcon className="h-4 w-4" />
              Prochaines dates bientôt annoncées — inscrivez-vous pour être informé(e) en priorité.
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {formats.map((format, i) => (
              <Reveal key={format.key} delay={i * 100}>
                <FormatCard format={format} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-center gap-5 rounded-5xl border border-forest-900/8 bg-sand/60 px-6 py-12 text-center">
              <h2 className="max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
                Envie de participer à une prochaine session ?
              </h2>
              <p className="max-w-lg text-sm leading-7 text-muted">
                Écrivez-nous sur WhatsApp pour être prévenu(e) dès l'ouverture des
                inscriptions, en présentiel comme en ligne.
              </p>
              <WhatsAppButton message="Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines dates de formation (présentiel ou en ligne).">
                Être informé des prochaines dates
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
