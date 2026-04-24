import type { EventItem } from "@/data/events";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-medical-sky px-3 py-1 text-xs font-semibold text-medical-blue">
          {event.city}
        </span>
        {event.limitedPlaces ? (
          <span className="rounded-full bg-pharmacy-mint px-3 py-1 text-xs font-semibold text-pharmacy-green">
            Places limitées
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-xl font-bold text-medical-navy">{event.title}</h3>
      <dl className="mt-4 grid gap-2 text-sm text-slate-600">
        <div>
          <dt className="font-semibold text-slate-900">Date</dt>
          <dd>{event.date}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Horaire</dt>
          <dd>{event.time}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Lieu</dt>
          <dd>{event.venue}</dd>
        </div>
      </dl>
      <p className="mt-5 flex-1 leading-7 text-slate-600">{event.shortText}</p>
      <WhatsAppButton message={event.whatsappMessage} className="mt-6 w-full" />
    </article>
  );
}
