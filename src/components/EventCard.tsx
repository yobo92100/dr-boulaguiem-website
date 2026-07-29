import type { EventItem } from "@/data/events";
import { WhatsAppIcon, MapPinIcon, CalendarIcon, ClockIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { images } from "@/config/images";

type EventCardProps = {
  event: EventItem;
};

function imageForEvent(event: EventItem) {
  const title = event.title.toLowerCase();
  if (title.includes("sujok")) return images.hotStone;
  if (title.includes("accompagnement") || title.includes("responsable"))
    return images.veggies;
  return images.healthyBowl;
}

export function EventCard({ event }: EventCardProps) {
  const image = imageForEvent(event);
  const scarce = event.remainingPlaces <= 5;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-forest-900/8 bg-white/80 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="img-zoom relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold text-forest-800 shadow-soft backdrop-blur">
          <MapPinIcon className="h-3.5 w-3.5 text-forest-600" />
          {event.city}
        </span>
        {event.limitedPlaces ? (
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold shadow-soft ${
              scarce
                ? "bg-clay text-white"
                : "bg-cream/90 text-forest-800 backdrop-blur"
            }`}
          >
            {event.remainingPlaces} places restantes
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
          {event.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4 text-forest-500" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4 text-forest-500" />
            {event.time}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-muted">
          {event.shortText}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-forest-900/8 pt-5">
          <p className="font-display text-base font-semibold text-forest-800">
            {event.price}
          </p>
          <a
            href={getWhatsAppUrl(event.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-forest-700 px-4 py-2 text-sm font-medium text-cream transition hover:bg-forest-800"
          >
            <WhatsAppIcon />
            S'inscrire
          </a>
        </div>
      </div>
    </article>
  );
}
