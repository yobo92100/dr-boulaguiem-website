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
    <article className="flex h-full flex-col rounded-xl border border-[#1b6b4a]/10 bg-white/95 p-5 shadow-soft">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${cityClasses}`}>
          {event.city}
        </span>
        <span className="rounded-full bg-[#FAEEDA] px-3 py-1 text-[11px] font-semibold text-[#B05530]">
          {event.remainingPlaces} places restantes
        </span>
      </div>
      <h3 className="mt-4 font-heading text-lg font-medium leading-7 text-medical-navy">
        {event.title}
      </h3>
      <p className="mt-3 text-sm text-slate-600">
        📅 {event.date} <span className="px-1 text-slate-300">·</span> 🕘 {event.time}
      </p>
      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
        {event.shortText}
      </p>
      <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-medical-navy">{event.price}</p>
        <a
          href={getWhatsAppUrl(event.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#1B6B4A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#15553b]"
        >
          <WhatsAppIcon />
          S'inscrire
        </a>
      </div>
    </article>
  );
}
