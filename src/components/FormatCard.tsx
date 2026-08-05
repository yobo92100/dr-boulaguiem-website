import type { FormatItem } from "@/data/formats";
import { WhatsAppIcon, CheckIcon, MapPinIcon, MonitorIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type FormatCardProps = {
  format: FormatItem;
};

export function FormatCard({ format }: FormatCardProps) {
  const Icon = format.icon === "presentiel" ? MapPinIcon : MonitorIcon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-forest-900/8 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden bg-forest-radial px-7 py-8">
        <div className="glow-warm pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/12 text-cream ring-1 ring-cream/20">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
            {format.name}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-gold-light">
            {format.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <ul className="flex-1 space-y-3.5">
          {format.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-700/10 text-forest-700">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="text-sm leading-6 text-ink/80">{point}</span>
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
