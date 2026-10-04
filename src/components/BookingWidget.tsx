"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRightIcon, CalendarIcon, CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { bookingConfig } from "@/config/booking";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
];
const DAY_NAMES = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const WEEKDAY_INITIALS = ["L", "M", "M", "J", "V", "S", "D"];

type Booked = { date: string; time: string };
type Status = "idle" | "sending" | "sent" | "taken" | "error";

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// yyyy-mm-dd in local time — the format shared with the Google Sheet
function toKey(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function dayLabel(d: Date) {
  return `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

function slotLabel(slot: string) {
  return `${Number(slot.split(":")[0])} h`;
}

const inputClass =
  "w-full rounded-2xl border border-forest-900/12 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20";

export function BookingWidget() {
  // Dates depend on the visitor's clock, so the calendar renders after mount.
  const [now, setNow] = useState<Date | null>(null);
  const [viewMonth, setViewMonth] = useState<Date | null>(null);
  const [booked, setBooked] = useState<Booked[]>([]);
  const [closed, setClosed] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, hidden from humans
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const current = new Date();
    setNow(current);
    setViewMonth(new Date(current.getFullYear(), current.getMonth(), 1));
    loadAvailability();
  }, []);

  function loadAvailability() {
    if (!bookingConfig.endpoint) return;
    fetch(bookingConfig.endpoint)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data?.booked)) setBooked(data.booked);
        if (Array.isArray(data?.closed)) setClosed(data.closed);
      })
      .catch(() => {
        // Availability is a convenience; the server still rejects double bookings.
      });
  }

  if (!now || !viewMonth) {
    return <div className="min-h-[30rem] animate-pulse rounded-4xl bg-white/60" />;
  }

  const today = startOfDay(now);
  const lastDay = new Date(today);
  lastDay.setDate(lastDay.getDate() + bookingConfig.weeksAhead * 7);

  function freeSlots(d: Date) {
    const key = toKey(d);
    return bookingConfig.slots.filter((slot) => {
      if (booked.some((b) => b.date === key && b.time === slot)) return false;
      if (key === toKey(today)) {
        // Same day: only slots starting at least an hour from now
        const [h, m] = slot.split(":").map(Number);
        const start = new Date(today);
        start.setHours(h, m);
        return start.getTime() - now!.getTime() >= 60 * 60 * 1000;
      }
      return true;
    });
  }

  function isBookable(d: Date) {
    return (
      d >= today &&
      d <= lastDay &&
      bookingConfig.openWeekdays.includes(d.getDay()) &&
      !closed.includes(toKey(d)) &&
      freeSlots(d).length > 0
    );
  }

  const firstOfMonth = viewMonth;
  const offset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
  const canGoBack =
    viewMonth > new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoForward =
    viewMonth < new Date(lastDay.getFullYear(), lastDay.getMonth(), 1);

  function shiftMonth(delta: number) {
    setViewMonth(new Date(viewMonth!.getFullYear(), viewMonth!.getMonth() + delta, 1));
  }

  function pickDate(d: Date) {
    setSelectedDate(d);
    setSelectedSlot(null);
    setFormError("");
    if (status === "taken") setStatus("idle");
  }

  function whatsAppMessage() {
    return [
      `Bonjour Dr Boulaguiem, je souhaite prendre rendez-vous pour une consultation le ${dayLabel(
        selectedDate!
      )} à ${slotLabel(selectedSlot!)}.`,
      `Nom : ${name.trim()}`,
      `Téléphone : ${phone.trim()}`,
      `Motif : ${reason || "non précisé"}`
    ].join("\n");
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      setFormError("Choisissez un jour et une heure dans le calendrier.");
      return;
    }
    if (!name.trim() || phone.replace(/\D/g, "").length < 9) {
      setFormError("Indiquez votre nom et un numéro de téléphone valide.");
      return;
    }
    setFormError("");
    if (website) return;

    if (!bookingConfig.endpoint) {
      window.open(getWhatsAppUrl(whatsAppMessage()), "_blank", "noopener");
      setStatus("sent");
      return;
    }

    const slot = { date: toKey(selectedDate), time: selectedSlot };
    setStatus("sending");
    try {
      // text/plain keeps this a "simple" request, which Apps Script accepts cross-origin
      const res = await fetch(bookingConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...slot, name: name.trim(), phone: phone.trim(), reason })
      });
      const data = await res.json();
      if (data?.ok) {
        setBooked((b) => [...b, slot]);
        setStatus("sent");
      } else if (data?.error === "taken") {
        setBooked((b) => [...b, slot]);
        setSelectedSlot(null);
        setStatus("taken");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setSelectedDate(null);
    setSelectedSlot(null);
    setName("");
    setPhone("");
    setReason("");
    setStatus("idle");
    loadAvailability();
  }

  if (status === "sent" && selectedDate && selectedSlot) {
    const viaWhatsApp = !bookingConfig.endpoint;
    return (
      <div className="flex min-h-[30rem] flex-col items-center justify-center rounded-4xl border border-forest-900/8 bg-white p-8 text-center shadow-soft sm:p-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-700 text-cream">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {viaWhatsApp ? "Votre demande est prête" : "Demande envoyée"}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
          {viaWhatsApp ? (
            <>
              Envoyez le message ouvert dans WhatsApp pour confirmer votre
              demande du <strong className="text-ink">{dayLabel(selectedDate)}</strong> à{" "}
              <strong className="text-ink">{slotLabel(selectedSlot)}</strong>.
            </>
          ) : (
            <>
              Votre demande pour le{" "}
              <strong className="text-ink">{dayLabel(selectedDate)}</strong> à{" "}
              <strong className="text-ink">{slotLabel(selectedSlot)}</strong> est
              bien reçue. Le Dr Boulaguiem vous recontacte au {phone.trim()} pour
              la confirmer.
            </>
          )}
        </p>
        {viaWhatsApp ? (
          <a
            href={getWhatsAppUrl(whatsAppMessage())}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-medium text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-800"
          >
            <WhatsAppIcon />
            Rouvrir WhatsApp
          </a>
        ) : null}
        <button
          type="button"
          onClick={reset}
          className="mt-4 text-sm font-medium text-forest-700 underline-offset-4 hover:underline"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  const slotsForDay = selectedDate ? freeSlots(selectedDate) : [];

  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid overflow-hidden rounded-4xl border border-forest-900/8 bg-white shadow-soft lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* Calendar + slots */}
      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">
          1. Choisissez un jour
        </p>
        <div className="mt-5 flex items-center justify-between">
          <p className="font-display text-xl font-semibold capitalize text-ink">
            {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              disabled={!canGoBack}
              aria-label="Mois précédent"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-900/12 text-forest-800 transition hover:bg-forest-700/5 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              disabled={!canGoForward}
              aria-label="Mois suivant"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-900/12 text-forest-800 transition hover:bg-forest-700/5 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-7 text-center text-[11px] font-semibold uppercase tracking-wide text-muted">
          {WEEKDAY_INITIALS.map((d, i) => (
            <span key={i} className="py-1">
              {d}
            </span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {Array.from({ length: offset }).map((_, i) => (
            <span key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i + 1);
            const bookable = isBookable(d);
            const selected = selectedDate?.getTime() === d.getTime();
            const isToday = d.getTime() === today.getTime();
            return (
              <button
                key={i}
                type="button"
                disabled={!bookable}
                onClick={() => pickDate(d)}
                aria-label={dayLabel(d)}
                aria-pressed={selected}
                className={`mx-auto flex aspect-square w-full max-w-11 items-center justify-center rounded-full text-sm transition ${
                  selected
                    ? "bg-forest-700 font-semibold text-cream shadow-soft"
                    : bookable
                      ? "font-medium text-ink hover:bg-forest-700/10"
                      : "text-ink/25"
                } ${isToday && !selected ? "ring-1 ring-gold" : ""}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted">
          Consultations du lundi au vendredi. Les jours grisés ne sont pas
          disponibles.
        </p>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">
          2. Choisissez une heure
        </p>
        {selectedDate ? (
          <div className="mt-4 grid grid-cols-4 gap-2">
            {bookingConfig.slots.map((slot) => {
              const free = slotsForDay.includes(slot);
              const selected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  disabled={!free}
                  onClick={() => {
                    setSelectedSlot(slot);
                    setFormError("");
                  }}
                  aria-pressed={selected}
                  className={`rounded-2xl border py-3 text-sm font-medium transition ${
                    selected
                      ? "border-forest-700 bg-forest-700 text-cream shadow-soft"
                      : free
                        ? "border-forest-900/12 text-ink hover:border-forest-500 hover:bg-forest-700/5"
                        : "border-transparent bg-sand/60 text-ink/30 line-through"
                  }`}
                >
                  {slotLabel(slot)}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 rounded-2xl bg-sand/60 px-4 py-3 text-sm text-muted">
            Sélectionnez d'abord un jour.
          </p>
        )}
        {status === "taken" ? (
          <p className="mt-3 text-sm font-medium text-clay-dark">
            Ce créneau vient d'être réservé. Merci d'en choisir un autre.
          </p>
        ) : null}
      </div>

      {/* Contact details */}
      <div className="flex flex-col border-t border-forest-900/8 bg-cream/60 p-6 sm:p-8 lg:border-l lg:border-t-0">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">
          3. Vos coordonnées
        </p>
        <div className="mt-5 space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom complet"
            autoComplete="name"
            aria-label="Nom complet"
            className={inputClass}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Téléphone"
            autoComplete="tel"
            inputMode="tel"
            aria-label="Téléphone"
            className={inputClass}
          />
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            aria-label="Motif de consultation"
            className={`${inputClass} ${reason ? "" : "text-muted/70"}`}
          >
            <option value="">Motif de consultation (facultatif)</option>
            {bookingConfig.reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
        </div>

        <div className="mt-6 rounded-2xl border border-forest-900/8 bg-white px-4 py-3 text-sm text-muted">
          {selectedDate && selectedSlot ? (
            <span className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 shrink-0 text-forest-600" />
              <span>
                <strong className="font-semibold capitalize text-ink">
                  {dayLabel(selectedDate)}
                </strong>{" "}
                à <strong className="font-semibold text-ink">{slotLabel(selectedSlot)}</strong>
              </span>
            </span>
          ) : (
            "Aucun créneau choisi pour l'instant."
          )}
        </div>

        {formError ? (
          <p className="mt-3 text-sm font-medium text-clay-dark">{formError}</p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm text-clay-dark">
            L'envoi n'a pas abouti.{" "}
            <a
              href={selectedDate && selectedSlot ? getWhatsAppUrl(whatsAppMessage()) : getWhatsAppUrl("Bonjour Dr Boulaguiem, je souhaite prendre rendez-vous.")}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Réservez plutôt via WhatsApp
            </a>
            .
          </p>
        ) : null}

        <div className="mt-auto pt-6">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 text-[15px] font-medium text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-800 disabled:opacity-60"
          >
            {status === "sending" ? "Envoi en cours…" : "Demander ce rendez-vous"}
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-muted">
            Le Dr Boulaguiem vous recontacte pour confirmer. Vos informations
            servent uniquement à organiser votre rendez-vous.
          </p>
        </div>
      </div>
    </form>
  );
}
