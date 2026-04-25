import { EventCard } from "@/components/EventCard";
import { events } from "@/data/events";

export default function FormationsPage() {
  return (
    <section className="bg-[#fbf7ee] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#1B6B4A]">Formations</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-medical-navy sm:text-5xl">
            Prochaines formations
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Des formations sont régulièrement organisées dans plusieurs villes du
            Maroc, notamment à Casablanca, Rabat et Marrakech.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Les places étant limitées, il est recommandé de s'inscrire à l'avance
            pour garantir sa participation.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={`${event.title}-${event.city}`} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
