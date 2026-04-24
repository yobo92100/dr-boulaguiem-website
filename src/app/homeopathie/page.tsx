import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

export default function HomeopathiePage() {
  return (
    <>
      <section className="bg-medical-sky px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Homéopathie"
          title="Comprendre l'homéopathie dans un cadre pédagogique"
          text="Les formations présentent l'homéopathie comme une approche complémentaire à étudier avec méthode, prudence et sens des responsabilités."
        />
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold text-medical-navy">Objectif des formations</h2>
            <p className="mt-5 leading-8 text-slate-600">
              L'objectif est d'apporter des bases structurées, un vocabulaire clair et
              une compréhension du cadre dans lequel l'homéopathie peut être abordée.
              Les contenus sont pensés pour aider les participants à distinguer
              l'apprentissage, l'accompagnement et les limites à respecter.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Les formations ne remplacent pas une consultation médicale, un
              diagnostic ou un traitement prescrit par un professionnel de santé.
              Elles s'inscrivent dans une démarche d'éducation et de complémentarité.
            </p>
            <Button href="/formations" className="mt-8">
              Voir les formations
            </Button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex min-h-[340px] items-center justify-center rounded-2xl bg-ivory text-center">
              <p className="max-w-sm px-6 text-xl font-bold text-medical-navy">
                Espace réservé à une image de cours ou de formation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
