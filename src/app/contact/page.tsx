import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

const contactMessage =
  "Bonjour Dr Boulaguiem, je souhaite connaître les prochaines dates de formation et réserver une place.";

export default function ContactPage() {
  return (
    <section className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium text-[#1B6B4A]">Contact</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-medical-navy sm:text-5xl">
            Intéressé par une formation ?
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Pour connaître les prochaines dates ou réserver votre place, vous pouvez
            contacter directement via WhatsApp.
          </p>
        </div>
        <div className="rounded-2xl border border-[#1b6b4a]/10 bg-white p-8 shadow-soft">
          <h2 className="font-heading text-2xl font-semibold text-medical-navy">
            WhatsApp
          </h2>
          <p className="mt-4 text-lg font-semibold text-[#1B6B4A]">
            {siteConfig.whatsappDisplay}
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Formations en homéopathie & Sujok au Maroc : Casablanca, Rabat,
            Marrakech et autres villes selon le calendrier.
          </p>
          <WhatsAppButton message={contactMessage} className="mt-7 w-full sm:w-auto">
            S'inscrire via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
