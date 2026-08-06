"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function EventTimeline() {
  return (
    <section id="schedule" className="py-10 px-4">
      <h2 className="section-heading">Event Schedule</h2>
      <div className="gold-divider mt-4 mb-14" />

      <div className="max-w-xl mx-auto space-y-4">
        {weddingConfig.eventTimeline.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="shrink-0 w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-white">
              <Clock3 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gold-600 dark:text-gold-300 text-sm">{event.time}</p>
              <p className="font-display text-lg text-gold-900 dark:text-cream-100">{event.title}</p>
              <p className="text-sm text-gold-700/70 dark:text-cream-100/60">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
