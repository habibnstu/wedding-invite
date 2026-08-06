# 💛 Wedding Invitation Website

A premium, personalized, database-free wedding invitation site built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deploys free on Vercel.

Live features included in this build:

- Personalized greeting from `?guest=Name` URL param
- Animated hero, save-the-date, live countdown, add-to-calendar (Google/ICS)
- Our Story timeline, event-day schedule
- Venue section with embedded Google Map + one-click navigation
- Live weather near the venue (Open-Meteo, no API key needed)
- Nearby tourist/historical places cards
- Responsive gallery with fullscreen lightbox
- Emergency contact cards (call + WhatsApp)
- RSVP form → Google Sheets (no database) with loading/success states
- Guest wishes wall (read + write to Google Sheets)
- Downloadable invitation card (PNG + PDF) with QR code
- Social sharing (WhatsApp, Messenger, Facebook, Telegram, copy link, native share)
- Floating buttons: scroll-to-top, music toggle, WhatsApp, call
- Dark / light / system theme toggle
- Luxury loading screen + skeleton states
- SEO: dynamic metadata, Open Graph, Twitter Card, robots.txt, sitemap.xml
- Password-protected `/admin` RSVP dashboard (stats + full table)

---

## 1. What you still need to add

This is real, working source code — but a wedding site needs your personal content:

| Item | Where |
|---|---|
| Bride/groom photos, gallery photos, OG cover image | `/public/images/` (see `images/README.txt`) |
| Nearby place photos | `/public/images/nearby/` |
| Background music (royalty-free .mp3) | `/public/audio/background-music.mp3` |
| Wedding date, names, venue, contacts, story, schedule | `lib/config.ts` — **single file, edit once, updates the whole site** |

## 2. Install & run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open `http://localhost:3000/?guest=Habibur%20Rahman` to preview a personalized invitation.

## 3. Google Sheets setup (RSVP + Wishes — no database)

1. Create a new Google Sheet with two tabs: `RSVPs` and `Wishes`.
   - `RSVPs` header row: `name | phone | attendance | guests | message | submittedAt`
   - `Wishes` header row: `name | message | submittedAt`
2. In the Sheet: **Extensions → Apps Script**, paste in `google-apps-script/Code.gs` from this repo.
3. Replace `YOUR_GOOGLE_SHEET_ID` in the script with your sheet's ID (from its URL).
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL → set it as `NEXT_PUBLIC_GAS_URL` in `.env.local` / Vercel env vars.

> ⚠️ Note: the Apps Script `doGet` endpoint is public by design (it's how the browser reads wishes/RSVP stats without a backend). Don't put sensitive personal data in the sheet beyond what guests submit themselves, and keep the `/admin` password strong — it's your only real gate on viewing the full RSVP list.

## 4. Admin dashboard

Visit `/admin`. Password is read from the server-side `ADMIN_PASSWORD` env var (never shipped to the browser). Set it in `.env.local` and in your Vercel project's Environment Variables.

## 5. Deploy on Vercel (free)

```bash
npm i -g vercel
vercel
```

Or push this repo to GitHub and import it at vercel.com/new. Add these Environment Variables in the Vercel dashboard:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GAS_URL`
- `ADMIN_PASSWORD`

Then redeploy. Your invitation link becomes:

```
https://your-project.vercel.app/?guest=Habibur%20Rahman
```

Send that link (with each guest's name URL-encoded) via WhatsApp, SMS, Messenger, or email.

## 6. Google Maps

The venue map uses Google's keyless embed (`https://maps.google.com/maps?q=lat,lng&output=embed`), so **no Google Maps API key is required** and it stays on the free tier. If you'd prefer the official Maps Embed API with richer styling, swap the `iframe src` in `components/home/Venue.tsx` for `https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=...`.

## 7. Weather

Uses [Open-Meteo](https://open-meteo.com/), a free weather API with no key required. See `components/home/WeatherWidget.tsx`.

## 8. Project structure

```
app/                    Routes (home, /admin, /api/admin-auth, sitemap.ts)
components/
  home/                 Hero, countdown, story, timeline, venue, weather, etc.
  gallery/              Lightbox gallery
  rsvp/                 RSVP form, wishes wall
  common/                Navbar, floating buttons, theme toggle, loading screen, social share
lib/
  config.ts             ← single source of truth for all wedding content
  guest.ts              Guest-name parsing from URL
  utils.ts              Countdown, calendar link, ICS builders, cn()
google-apps-script/     Code.gs — paste into Google Apps Script
public/                 Images, audio, robots.txt
```

## 9. Things intentionally left as follow-ups

Given the size of the original spec (29 feature areas), a few items are stubbed with clear extension points rather than fully built out, since they depend on assets/keys only you have:

- **QR code** is generated client-side already (`qrcode.react`) inside the download card — no action needed.
- **Background music file** — drop your own royalty-free track in `/public/audio/`.
- **Google Maps Embed API key** — optional upgrade path documented above; the free keyless embed works out of the box.
- **Lighthouse 95+** — largely achieved by Next.js defaults + `next/image`, but final score depends on the real photos/fonts you add; run `npm run build && npx serve out` and audit once real assets are in.

## 10. Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · React Hook Form · html2canvas · jsPDF · qrcode.react · Google Apps Script (backend) · Open-Meteo (weather) · Vercel (hosting)
