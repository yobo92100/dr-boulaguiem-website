/**
 * Online booking for consultations.
 *
 * `endpoint` is the Google Apps Script web-app URL that stores bookings in the
 * doctor's Google Sheet (see docs/google-sheet-rendez-vous.md). While it is
 * empty, the form falls back to opening WhatsApp with the booking details.
 */
export const bookingConfig = {
  endpoint: "",
  // Hourly slots, Monday to Friday
  slots: ["14:00", "15:00", "16:00", "17:00"],
  openWeekdays: [1, 2, 3, 4, 5],
  // How many weeks ahead patients can book
  weeksAhead: 8,
  reasons: [
    "Douleurs articulaires / musculaires",
    "Migraines / maux de tête",
    "Stress / anxiété / sommeil",
    "Troubles digestifs",
    "Autre"
  ]
};
