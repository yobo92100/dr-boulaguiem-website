import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

export default function SujokPage() {
  return (
    <>
      <section className="bg-pharmacy-mint px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sujok"
          title="Découvrir le Sujok avec une approche claire et responsable"
          text="Le Sujok est présenté comme un sujet d'apprentissage complémentaire, avec une pédagogie accessible aux professionnels et au grand public."
        />
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex min-h-[340px] items-center justify-center rounded-2xl bg-medical-sky text-center">
              <p className="max-w-sm px-6 text-xl font-bold text-medical-navy">
                Espace réservé à une image de démonstration Sujok
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-medical-navy">Une initiation progressive</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Les sessions Sujok permettent de découvrir les principes, les repères
              pratiques et les conditions d'un usage prudent. La formation vise à
              transmettre une méthode d'observation et de compréhension, sans
              promesse de résultat.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Cette approche ne remplace pas l'avis d'un médecin, un diagnostic ou un
              traitement. Elle est abordée dans un cadre pédagogique, en complément
              d'un accompagnement de santé responsable.
            </p>
            <Button href="/formations" className="mt-8">
              Voir les formations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
