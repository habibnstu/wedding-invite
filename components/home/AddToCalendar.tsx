"use client";

import { CalendarPlus, Download } from "lucide-react";
import { weddingConfig } from "@/lib/config";
import { buildGoogleCalendarUrl, buildICS } from "@/lib/utils";

export default function AddToCalendar() {
  const { wedding } = weddingConfig;
  const start = wedding.dateISO;
  const end = new Date(new Date(start).getTime() + 5 * 60 * 60 * 1000).toISOString();

  const eventOpts = {
    title: `${wedding.title} Wedding`,
    startISO: start,
    endISO: end,
    location: wedding.brideHouse.houseName,
    details: "Join us to celebrate our wedding day!",
  };

  const googleUrl = buildGoogleCalendarUrl(eventOpts);

  const downloadICS = () => {
    const ics = buildICS(eventOpts);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-invitation.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  const btnClass =
    "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white/70 dark:bg-white/10 text-gold-800 dark:text-gold-100 hover:bg-gold-100 dark:hover:bg-white/20 transition-colors shadow-sm";

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a href={googleUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
        <CalendarPlus className="w-4 h-4" /> Google Calendar
      </a>
      <button onClick={downloadICS} className={btnClass}>
        <Download className="w-4 h-4" /> Apple / Outlook (.ics)
      </button>
    </div>
  );
}
