import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCountdownParts(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: diff <= 0 };
}

export function buildGoogleCalendarUrl(opts: {
  title: string;
  startISO: string;
  endISO: string;
  location: string;
  details: string;
}) {
  const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: opts.title,
    dates: `${fmt(opts.startISO)}/${fmt(opts.endISO)}`,
    location: opts.location,
    details: opts.details,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildICS(opts: {
  title: string;
  startISO: string;
  endISO: string;
  location: string;
  details: string;
}) {
  const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@wedding-invitation`,
    `DTSTAMP:${fmt(new Date().toISOString())}`,
    `DTSTART:${fmt(opts.startISO)}`,
    `DTEND:${fmt(opts.endISO)}`,
    `SUMMARY:${opts.title}`,
    `LOCATION:${opts.location}`,
    `DESCRIPTION:${opts.details}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
