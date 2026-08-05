import type { FormatItem } from "@/data/formats";
import { WhatsAppIcon, CheckIcon, MapPinIcon, MonitorIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type FormatCardProps = {
  format: FormatItem;
};

export function FormatCard({ format }: FormatCardProps) {
  const Icon = format.icon === "presentiel" ? MapPinIcon : MonitorIcon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-forest-900/8 bg-white/80 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="img-zoom relative aspect-[16/9] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={format.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 via-forest-900/10 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold text-forest-800 shadow-soft backdrop-blur">
          <Icon className="h-3.5 w-3.5 text-forest-600" />
          {format.icon === "presentiel" ? "Présentiel" : "En ligne"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
          {format.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-forest-700">{format.tagline}</p>

        <ul className="mt-5 flex-1 space-y-3">
          {format.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-700/10 text-forest-700">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="text-sm leading-6 text-muted">{point}</span>
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppUrl(format.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest-700 px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-800"
        >
          <WhatsAppIcon />
          Être informé des prochaines dates
        </a>
      </div>
    </article>
  );
}
