"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function EventTimeline() {
  return (
    <section
      id="schedule"
      className="
        w-full
        py-2
        sm:py-3
        md:py-4
        px-2
        sm:px-3
      "
    >
      {/* Heading */}
      <h2 className="section-heading">
        Event Schedule
      </h2>

      <div className="gold-divider mt-1 sm:mt-2 mb-3 sm:mb-4 md:mb-5" />

      {/* Events */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
  {weddingConfig.eventTimeline.map((event, i) => (
    <motion.div
      key={event.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: i * 0.08,
        duration: 0.5,
      }}
      className="
        w-full
        glass
        rounded-xl
        sm:rounded-2xl
        p-4
        sm:p-5
        flex
        items-start
        gap-3
        sm:gap-4
      "
    >
      {/* Event Icon */}
      <div
        className="
          shrink-0
          w-11
          h-11
          sm:w-14
          sm:h-14
          rounded-full
          bg-gold-gradient
          flex
          items-center
          justify-center
          text-white
        "
      >
        <Clock3 className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Event Information */}
      <div className="min-w-0 flex-1">
        {/* Time */}
        <p
          className="
            font-semibold
            text-gold-600
            dark:text-gold-300
            text-xs
            sm:text-sm
            leading-relaxed
          "
        >
          {event.time}
        </p>

        {/* Event Title */}
        <p
          className="
            font-display
            text-base
            sm:text-lg
            text-gold-900
            dark:text-cream-100
            leading-snug
            break-words
          "
        >
          {event.title}
        </p>

        {/* Description */}
        <p
          className="
            mt-1
            text-xs
            sm:text-sm
            text-gold-700/70
            dark:text-cream-100/60
            leading-relaxed
            break-words
          "
        >
          {event.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}