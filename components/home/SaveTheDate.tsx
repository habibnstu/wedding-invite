"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarHeart, Clock, MapPin } from "lucide-react";
import { weddingConfig } from "@/lib/config";
import { getCountdownParts } from "@/lib/utils";
import AddToCalendar from "./AddToCalendar";

export default function SaveTheDate() {
  const [time, setTime] = useState(() =>
    getCountdownParts(weddingConfig.wedding.dateISO)
  );
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
    <section
      id="save-the-date"
      className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Save The Date
      </motion.h2>

      <div className="gold-divider mt-3 sm:mt-4 mb-8 sm:mb-10 md:mb-12" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          max-w-3xl
          mx-auto
          glass
          rounded-2xl
          sm:rounded-3xl
          p-5
          sm:p-7
          md:p-12
          text-center
        "
      >
        {/* Calendar Icon */}
        <CalendarHeart className="mx-auto w-9 h-9 sm:w-10 sm:h-10 text-blush-400 mb-3 sm:mb-4" />

        {/* Date */}
        <p
          className="
            font-display
            text-xl
            sm:text-2xl
            md:text-3xl
            text-gold-800
            dark:text-gold-200
            leading-tight
          "
        >
          {weddingConfig.wedding.dateDisplay}
        </p>

        {/* Time */}
        <p
          className="
            flex
            items-center
            justify-center
            gap-2
            mt-3
            text-sm
            sm:text-base
            text-gold-700
            dark:text-gold-300
          "
        >
          <Clock className="w-4 h-4 shrink-0" />

          <span>
            {weddingConfig.wedding.timeDisplay}
          </span>
        </p>

        {/* Venue */}
        <p
          className="
            flex
            items-start
            justify-center
            gap-2
            mt-2
            text-sm
            sm:text-base
            text-gold-700
            dark:text-gold-300
            leading-relaxed
          "
        >
          <MapPin className="w-4 h-4 shrink-0 mt-0.5" />

          <span className="max-w-md">
            {weddingConfig.wedding.brideHouse.houseName}
          </span>
        </p>

        {/* Countdown */}
        {!time.isPast ? (
          <div
            className="
              mt-7
              sm:mt-8
              md:mt-10
              grid
              grid-cols-4
              gap-2
              sm:gap-3
              md:gap-6
            "
          >
            {units.map((u) => (
              <div
                key={u.label}
                className="
                  min-w-0
                  bg-white/60
                  dark:bg-white/5
                  rounded-xl
                  sm:rounded-2xl
                  py-3
                  sm:py-4
                  md:py-6
                  px-1
                  shadow-inner
                "
              >
                <p
                  className="
                    font-display
                    text-xl
                    sm:text-2xl
                    md:text-4xl
                    text-gold-700
                    dark:text-gold-200
                    tabular-nums
                    leading-none
                  "
                >
                  {isMounted
                    ? String(u.value).padStart(2, "0")
                    : "00"}
                </p>

                <p
                  className="
                    text-[8px]
                    sm:text-[10px]
                    md:text-xs
                    uppercase
                    tracking-[0.08em]
                    sm:tracking-widest
                    text-gold-500
                    dark:text-gold-400
                    mt-2
                  "
                >
                  {u.label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p
            className="
              mt-8
              sm:mt-10
              font-script
              text-2xl
              sm:text-3xl
              text-blush-400
            "
          >
            We're married! 🎉
          </p>
        )}

        {/* Add To Calendar */}
        <div className="mt-7 sm:mt-8 md:mt-10 w-full">
          <AddToCalendar />
        </div>
      </motion.div>
    </section>
  );
}