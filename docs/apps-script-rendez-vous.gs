/**
 * Rendez-vous — Dr Noureddine Boulaguiem
 *
 * À coller dans le Google Sheet : Extensions → Apps Script.
 * - Onglet « Rendez-vous » : une ligne par demande (créé automatiquement).
 * - Onglet « Fermetures » : une date par ligne en colonne A (double-clic : calendrier) pour bloquer un jour.
 * - Mettre « Annulé » dans la colonne Statut (liste déroulante) libère le créneau.
 */

// Chaque demande est envoyée à toutes ces adresses (en ajouter entre guillemets, séparées par une virgule)
const NOTIFY_EMAILS = ["boulag92@gmail.com", "yboulagu@icloud.com"];
const SLOTS = ["14:00", "15:00", "16:00", "17:00"];
const HEADERS = ["Reçu le", "Date", "Heure", "Nom", "Téléphone", "Motif", "Statut"];
const STATUSES = ["À confirmer", "Confirmé", "Annulé"];
const CLOSURES_HEADERS = ["Jour fermé (double-clic : calendrier)", "Raison (facultatif)"];
const TIME_ZONE = "Africa/Casablanca";

const DAYS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
  "août", "septembre", "octobre", "novembre", "décembre"];

/** À lancer une fois à la main : crée les onglets et demande les autorisations. */
function setup() {
  const sheet = bookingsSheet_();
  // Liste déroulante pour le statut (une autre valeur tapée à la main reste acceptée)
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUSES, true)
    .setAllowInvalid(true)
    .build();
  sheet.getRange("G2:G").setDataValidation(statusRule);

  const closures = closuresSheet_();
  closures.getRange(1, 1, 1, CLOSURES_HEADERS.length).setValues([CLOSURES_HEADERS]);
  // N'accepter que des dates : un double-clic sur la case ouvre un calendrier
  const dateRule = SpreadsheetApp.newDataValidation()
    .requireDate()
    .setAllowInvalid(false)
    .setHelpText("Double-cliquez pour choisir la date dans le calendrier.")
    .build();
  closures.getRange("A2:A").setDataValidation(dateRule).setNumberFormat("dd/mm/yyyy");
}

/** À lancer à la main pour vérifier l'envoi des e-mails (redemande l'autorisation si elle manque). */
function testEmail() {
  MailApp.sendEmail(
    NOTIFY_EMAILS.join(","),
    "Test – rendez-vous du site",
    "Si vous lisez ceci, les e-mails de rendez-vous fonctionnent."
  );
}

/** Le site lit les créneaux déjà pris (sans aucun nom ni téléphone). */
function doGet() {
  const today = Utilities.formatDate(new Date(), TIME_ZONE, "yyyy-MM-dd");
  const booked = readBookings_()
    .filter(function (b) { return !isCancelled_(b.status) && b.date >= today; })
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
      return b.date === date && b.time === time && !isCancelled_(b.status);
    });
    if (taken || readClosures_().indexOf(date) !== -1) {
      return json_({ ok: false, error: "taken" });
    }

    bookingsSheet_().appendRow(
      [new Date(), text_(date), text_(time), text_(name), text_(phone), text_(reason), STATUSES[0]]
    );
    notify_(date, time, name, phone, reason);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: "server" });
  } finally {
    lock.releaseLock();
  }
}

// La demande est déjà enregistrée : un e-mail qui échoue ne doit pas la faire échouer
function notify_(date, time, name, phone, reason) {
  const label = dayLabel_(date) + " à " + Number(time.split(":")[0]) + " h";
  try {
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
  } catch (err) {
    console.error("E-mail non envoyé : " + err);
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
    sheet.appendRow(CLOSURES_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange("1:1").setFontWeight("bold");
  }
  return sheet;
}

function readBookings_() {
  const sheet = bookingsSheet_();
  if (sheet.getLastRow() < 2) return [];
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length);
  const shown = range.getDisplayValues();
  return range.getValues().map(function (row, i) {
    return { date: formatDate_(row[1]), time: formatTime_(shown[i][2]), status: String(row[6]).trim() };
  });
}

// « Annulé », « annulé », « annule », « ANNULÉ »… libèrent tous le créneau
function isCancelled_(status) {
  return /^annul/.test(String(status).trim().toLowerCase());
}

function readClosures_() {
  const sheet = closuresSheet_();
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues()
    .map(function (row) { return formatDate_(row[0]); })
    .filter(function (d) { return d; });
}

// Accepte un texte « 2026-10-15 » ou une date déjà convertie par Sheets
function formatDate_(value) {
  if (value && typeof value.getTime === "function") {
    const zone = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone();
    return Utilities.formatDate(new Date(value.getTime()), zone, "yyyy-MM-dd");
  }
  return String(value || "").trim();
}

// Heure telle qu'affichée dans la cellule : « 17:00 », « 17:00:00 »… → « 17:00 »
function formatTime_(shown) {
  const match = String(shown || "").match(/(\d{1,2}):(\d{2})/);
  return match ? ("0" + match[1]).slice(-2) + ":" + match[2] : "";
}

function dayLabel_(isoDate) {
  const parts = isoDate.split("-").map(Number);
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return DAYS[d.getDay()] + " " + d.getDate() + " " + MONTHS[d.getMonth()];
}

function clean_(value) {
  return String(value || "").trim().slice(0, 200);
}

// L'apostrophe garde le texte tel quel : ni date, ni heure, ni formule, et le 0 de « 06… » reste
function text_(value) {
  return value ? "'" + value : "";
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
