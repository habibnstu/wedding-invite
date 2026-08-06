"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarHeart, Clock, MapPin } from "lucide-react";
import { weddingConfig } from "@/lib/config";
import { getCountdownParts } from "@/lib/utils";
import AddToCalendar from "./AddToCalendar";

export default function SaveTheDate() {
  const [time, setTime] = useState(() => getCountdownParts(weddingConfig.wedding.dateISO));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const id = setInterval(() => {
      setTime(getCountdownParts(weddingConfig.wedding.dateISO));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section id="save-the-date" className="py-10 px-4 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Save The Date
      </motion.h2>
      <div className="gold-divider mt-4 mb-12" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 text-center"
      >
        <CalendarHeart className="mx-auto w-10 h-10 text-blush-400 mb-4" />
        <p className="font-display text-2xl md:text-3xl text-gold-800 dark:text-gold-200">
          {weddingConfig.wedding.dateDisplay}
        </p>
        <p className="flex items-center justify-center gap-2 mt-3 text-gold-700 dark:text-gold-300">
          <Clock className="w-4 h-4" /> {weddingConfig.wedding.timeDisplay}
        </p>
        <p className="flex items-center justify-center gap-2 mt-1 text-gold-700 dark:text-gold-300">
          <MapPin className="w-4 h-4" /> {weddingConfig.wedding.brideHouse.houseName}
        </p>

        {!time.isPast ? (
          <div className="mt-10 grid grid-cols-4 gap-3 md:gap-6">
            {units.map((u) => (
              <div
                key={u.label}
                className="bg-white/60 dark:bg-white/5 rounded-2xl py-4 md:py-6 shadow-inner"
              >
                <p className="font-display text-2xl md:text-4xl text-gold-700 dark:text-gold-200 tabular-nums">
                  {isMounted ? String(u.value).padStart(2, "0") : "00"}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gold-500 dark:text-gold-400 mt-1">
                  {u.label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 font-script text-3xl text-blush-400">We're married! 🎉</p>
        )}

        <div className="mt-10">
          <AddToCalendar />
        </div>
      </motion.div>
    </section>
  );
}