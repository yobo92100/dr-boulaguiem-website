import { PersonIcon } from "@/components/Icons";

export default function AboutPage() {
  return (
    <section className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-soft">
          <div className="flex min-h-[360px] items-center justify-center rounded-xl bg-[#C8DDD4] text-[#5A8A7A]">
            <PersonIcon className="h-20 w-20" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-[#1B6B4A]">À propos</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-medical-navy sm:text-5xl">
            Dr Noureddine Boulaguiem
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
            <p>
              Pharmacien de formation, Dr Noureddine Boulaguiem transmet depuis
              plus de 15 ans son expérience en homéopathie et en Sujok.
            </p>
            <p>
              Au fil des années, il a formé plus de 500 participants à travers le
              Maroc, issus aussi bien du domaine de la santé que du grand public.
            </p>
            <p>
              Son approche repose sur une pédagogie simple, progressive et centrée
              sur la compréhension et la pratique, afin de rendre ces disciplines
              accessibles à tous.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Docteur en pharmacie", "+15 ans d'expérience", "+500 élèves formés"].map(
              (item) => (
                <div key={item} className="rounded-2xl bg-white p-5 text-center text-sm font-medium text-medical-navy shadow-soft">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
