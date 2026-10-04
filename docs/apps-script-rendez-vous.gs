/**
 * Rendez-vous — Dr Noureddine Boulaguiem
 *
 * À coller dans le Google Sheet : Extensions → Apps Script.
 * - Onglet « Rendez-vous » : une ligne par demande (créé automatiquement).
 * - Onglet « Fermetures » : une date par ligne en colonne A pour bloquer un jour.
 * - Mettre « Annulé » dans la colonne Statut libère le créneau.
 */

// Chaque demande est envoyée à toutes ces adresses (en ajouter entre guillemets, séparées par une virgule)
const NOTIFY_EMAILS = ["boulag92@gmail.com", "yboulagu@icloud.com"];
const SLOTS = ["14:00", "15:00", "16:00", "17:00"];
const HEADERS = ["Reçu le", "Date", "Heure", "Nom", "Téléphone", "Motif", "Statut"];
const CANCELLED = "Annulé";

const DAYS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
  "août", "septembre", "octobre", "novembre", "décembre"];

/** À lancer une fois à la main : crée les onglets et demande les autorisations. */
function setup() {
  bookingsSheet_();
  closuresSheet_();
}

/** Le site lit les créneaux déjà pris (sans aucun nom ni téléphone). */
function doGet() {
  const today = formatDate_(new Date());
  const booked = readBookings_()
    .filter(function (b) { return b.status !== CANCELLED && b.date >= today; })
    .map(function (b) { return { date: b.date, time: b.time }; });
  return json_({ booked: booked, closed: readClosures_() });
}

/** Le site envoie une demande de rendez-vous. */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const date = String(data.date || "");
    const time = String(data.time || "");
    const name = clean_(data.name);
    const phone = clean_(data.phone);
    const reason = clean_(data.reason);

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || SLOTS.indexOf(time) === -1 || !name || !phone) {
      return json_({ ok: false, error: "invalid" });
    }
    const taken = readBookings_().some(function (b) {
      return b.date === date && b.time === time && b.status !== CANCELLED;
    });
    if (taken || readClosures_().indexOf(date) !== -1) {
      return json_({ ok: false, error: "taken" });
    }

    bookingsSheet_().appendRow([new Date(), date, time, name, phone, reason, "À confirmer"]);

    const label = dayLabel_(date) + " à " + Number(time.split(":")[0]) + " h";
    MailApp.sendEmail(
      NOTIFY_EMAILS.join(","),
      "Nouveau rendez-vous : " + label,
      "Nouvelle demande de rendez-vous depuis le site.\n\n" +
        "Date : " + label + "\n" +
        "Nom : " + name + "\n" +
        "Téléphone : " + phone + "\n" +
        "Motif : " + (reason || "non précisé") + "\n\n" +
        "Pensez à rappeler le patient pour confirmer.\n" +
        SpreadsheetApp.getActiveSpreadsheet().getUrl()
    );
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: "server" });
  } finally {
    lock.releaseLock();
  }
}

function bookingsSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Rendez-vous");
  if (!sheet) {
    sheet = ss.insertSheet("Rendez-vous", 0);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange("1:1").setFontWeight("bold");
    // Texte brut, pour que Sheets ne transforme ni les dates ni les numéros de téléphone
    sheet.getRange("B:G").setNumberFormat("@");
  }
  return sheet;
}

function closuresSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Fermetures");
  if (!sheet) {
    sheet = ss.insertSheet("Fermetures");
    sheet.appendRow(["Jour fermé (ex. 2026-12-25)", "Raison (facultatif)"]);
    sheet.setFrozenRows(1);
    sheet.getRange("1:1").setFontWeight("bold");
  }
  return sheet;
}

function readBookings_() {
  const sheet = bookingsSheet_();
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues()
    .map(function (row) {
      return { date: formatDate_(row[1]), time: formatTime_(row[2]), status: String(row[6]).trim() };
    });
}

function readClosures_() {
  const sheet = closuresSheet_();
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues()
    .map(function (row) { return formatDate_(row[0]); })
    .filter(function (d) { return d; });
}

// Accepte une vraie date Sheets ou un texte « 2026-10-15 »
function formatDate_(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd");
  }
  return String(value || "").trim();
}

function formatTime_(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), "HH:mm");
  }
  return String(value || "").trim();
}

function dayLabel_(isoDate) {
  const parts = isoDate.split("-").map(Number);
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return DAYS[d.getDay()] + " " + d.getDate() + " " + MONTHS[d.getMonth()];
}

// Texte court, et jamais interprété comme une formule par Sheets
function clean_(value) {
  const text = String(value || "").trim().slice(0, 200);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
