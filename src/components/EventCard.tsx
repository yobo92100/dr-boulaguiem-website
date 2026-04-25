import type { EventItem } from "@/data/events";
import { WhatsAppIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  const cityClasses =
    {
      Casablanca: "bg-[#E6F1FB] text-[#185FA5]",
      Rabat: "bg-[#E1F5EE] text-[#0F6E56]",
      Marrakech: "bg-[#FAEEDA] text-[#854F0B]"
    }[event.city] ?? "bg-[#E1F5EE] text-[#0F6E56]";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#12344d]/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,52,77,0.12)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cityClasses}`}>
          {event.city}
        </span>
        {event.limitedPlaces ? (
          <span className="rounded-full bg-[#FAEEDA] px-3 py-1 text-xs font-semibold text-[#B05530]">
            Places limitées
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold leading-7 text-medical-navy">
        {event.title}
      </h3>
      <div className="mt-4 space-y-1 text-sm text-slate-600">
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
      <p className="mt-5 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
        {event.shortText}
      </p>
      <a
        href={getWhatsAppUrl(event.whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1B6B4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15553b]"
      >
        <WhatsAppIcon />
        S'inscrire via WhatsApp
      </a>
    </article>
  );
}
