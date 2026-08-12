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
        py-8
        sm:py-10
        md:py-14
        px-4
        sm:px-6
      "
    >
      {/* Heading */}
      <h2 className="section-heading">
        Event Schedule
      </h2>

      <div className="gold-divider mt-3 sm:mt-4 mb-10 sm:mb-12 md:mb-14" />

      {/* Events */}
      <div className="w-full max-w-xl mx-auto space-y-3 sm:space-y-4">
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