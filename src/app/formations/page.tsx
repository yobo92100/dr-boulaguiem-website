import { EventCard } from "@/components/EventCard";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/data/events";

export default function FormationsPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Formations"
        title="Agenda des prochaines sessions"
        text="Les formations sont ouvertes aux professionnels de santé et aux personnes intéressées par les approches complémentaires, dans un cadre pédagogique clair."
      />
      <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={`${event.title}-${event.city}`} event={event} />
        ))}
      </div>
    </section>
  );
}
