/**
 * WEDDING INVITATION - GOOGLE APPS SCRIPT BACKEND
 * ------------------------------------------------
 * This script acts as a free, database-free backend.
 * It reads/writes to a Google Sheet for RSVPs and Guest Wishes.
 *
 * SETUP:
 * 1. Create a new Google Sheet.
 * 2. Create two tabs named exactly: "RSVPs" and "Wishes".
 *    RSVPs headers (row 1):  name | phone | attendance | guests | message | submittedAt
 *    Wishes headers (row 1): name | message | submittedAt
 * 3. Extensions > Apps Script, paste this file's contents in as Code.gs.
 * 4. Deploy > New deployment > Type: Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL into NEXT_PUBLIC_GAS_URL in your .env.local
 */

const SHEET_ID = "YOUR_GOOGLE_SHEET_ID"; // paste the ID from your sheet's URL

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SHEET_ID);

  if (body.type === "rsvp") {
    const sheet = ss.getSheetByName("RSVPs");
    sheet.appendRow([
      body.name || "",
      body.phone || "",
      body.attendance || "",
      body.guests || 1,
      body.message || "",
      body.submittedAt || new Date().toISOString(),
    ]);
  } else if (body.type === "wish") {
    const sheet = ss.getSheetByName("Wishes");
    sheet.appendRow([body.name || "", body.message || "", body.submittedAt || new Date().toISOString()]);
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet(e) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const type = e.parameter.type;

  if (type === "wishes") {
    const sheet = ss.getSheetByName("Wishes");
    const rows = sheet.getDataRange().getValues().slice(1); // skip header
    const wishes = rows.map((r) => ({ name: r[0], message: r[1] })).reverse();
    return ContentService.createTextOutput(JSON.stringify(wishes)).setMimeType(
      ContentService.MimeType.JSON
    );
  }

  if (type === "rsvps") {
    const sheet = ss.getSheetByName("RSVPs");
    const rows = sheet.getDataRange().getValues().slice(1);
    const rsvps = rows.map((r) => ({
      name: r[0],
      phone: r[1],
      attendance: r[2],
      guests: r[3],
      message: r[4],
      submittedAt: r[5],
    }));
    return ContentService.createTextOutput(JSON.stringify(rsvps)).setMimeType(
      ContentService.MimeType.JSON
    );
  }

  return ContentService.createTextOutput(JSON.stringify({ error: "Unknown type" })).setMimeType(
    ContentService.MimeType.JSON
  );
}
