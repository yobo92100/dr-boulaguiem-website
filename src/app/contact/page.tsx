import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppIcon, MapPinIcon, ClockIcon, CheckIcon } from "@/components/Icons";
import { siteConfig } from "@/config/site";

const contactMessage =
  "Bonjour Dr Boulaguiem, je souhaite connaître les prochaines dates de formation et réserver une place.";

const points = [
  "Connaître les prochaines dates",
  "Vérifier les places disponibles",
  "Réserver votre participation",
  "Poser toutes vos questions"
];

export default function ContactPage() {
  return (
    <section className="soft-grid relative overflow-hidden">
      <div className="glow-warm pointer-events-none absolute inset-0" />
      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <Reveal>
          <div>
            <p className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Contact
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Intéressé par une formation ?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Pour connaître les prochaines dates ou réserver votre place, vous
              pouvez contacter directement le Dr Boulaguiem via WhatsApp. La
              réponse est généralement rapide.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base text-ink/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-700 text-cream">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-5xl border border-forest-900/8 bg-white/85 shadow-lift backdrop-blur">
            <div className="bg-forest-radial px-8 py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/15 text-cream ring-1 ring-cream/20">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-cream">
                WhatsApp
              </h2>
              <p className="mt-2 font-display text-3xl font-semibold text-gold-light">
                {siteConfig.whatsappDisplay}
              </p>
            </div>
            <div className="p-8">
              <p className="leading-7 text-muted">
                Formations en homéopathie & Sujok organisées à travers tout le
                Maroc, selon le calendrier des sessions.
              </p>
              <div className="mt-6 space-y-3 text-sm text-forest-800">
                <p className="flex items-center gap-2.5">
                  <MapPinIcon className="h-4 w-4 text-forest-600" />
                  Partout à travers le Maroc
                </p>
                <p className="flex items-center gap-2.5">
                  <ClockIcon className="h-4 w-4 text-forest-600" />
                  Réponse rapide, 7j/7
                </p>
              </div>
              <WhatsAppButton message={contactMessage} className="mt-8 w-full">
                S'inscrire via WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
