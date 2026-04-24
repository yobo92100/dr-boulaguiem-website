import { SectionTitle } from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="À propos"
          title="Dr Noureddine Boulaguiem"
          text="Docteur en pharmacie, formateur en homéopathie et praticien Sujok, avec une approche professionnelle, claire et accessible."
        />
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-medical-sky text-center">
              <div className="px-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-pharmacy-green">
                  Photo de profil
                </p>
                <p className="mt-3 text-xl font-bold text-medical-navy">
                  Espace réservé au portrait professionnel
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-medical-navy">
              Une transmission sérieuse et pédagogique
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Dr Noureddine Boulaguiem est docteur en pharmacie et accompagne depuis
              plus de 15 ans des publics variés dans la compréhension de
              l'homéopathie et du Sujok. Son enseignement s'adresse aux pharmaciens,
              médecins, kinésithérapeutes, infirmiers, ainsi qu'aux personnes sans
              formation médicale souhaitant découvrir ces approches avec rigueur.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Plus de 500 élèves ont déjà suivi ses formations. Son objectif est de
              proposer des repères structurés, une pédagogie accessible et un
              accompagnement responsable, sans promesse médicale ni discours
              exagéré.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["+15 ans d'expérience", "+500 élèves formés", "Docteur en pharmacie"].map(
                (item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-5 text-center font-semibold text-medical-navy">
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
