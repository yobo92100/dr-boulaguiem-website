import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

const contactMessage =
  "Bonjour Dr Boulaguiem, je souhaite recevoir des informations sur les formations en homéopathie et Sujok au Maroc.";

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="S'inscrire ou demander des informations"
          text="Le contact se fait simplement par WhatsApp pour connaître les prochaines dates, les villes prévues et les places disponibles."
        />
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-medical-navy">WhatsApp</h2>
            <p className="mt-4 text-lg font-semibold text-pharmacy-green">
              {siteConfig.whatsappDisplay}
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Formations organisées au Maroc, notamment à Casablanca, Rabat,
              Marrakech et dans d'autres villes selon le calendrier.
            </p>
            <WhatsAppButton message={contactMessage} className="mt-6 w-full sm:w-auto" />
          </div>
          <div className="rounded-2xl bg-medical-sky p-8">
            <h2 className="text-2xl font-bold text-medical-navy">Note importante</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Les formations proposées ont une vocation pédagogique et ne remplacent
              pas une consultation médicale, un diagnostic ou un traitement prescrit
              par un professionnel de santé.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
