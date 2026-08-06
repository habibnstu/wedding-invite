"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/config";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="py-10 px-4 bg-blush-50/40 dark:bg-white/[0.02]"
    >
      <h2 className="section-heading">Our Story</h2>
      <div className="gold-divider mt-4 mb-16" />

      <div className="max-w-2xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-300/60 md:-translate-x-1/2" />

        {weddingConfig.ourStory.map((item, i) => (
          <motion.div
            key={`${item.title}-${item.date}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
              i % 2 === 0
                ? "md:pr-12 md:text-right md:ml-0"
                : "md:pl-12 md:ml-auto"
            }`}
          >
            {/* Timeline Dot */}
            <span
              className="absolute left-2.5 md:left-auto top-2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-gold-100 dark:ring-white/10"
              style={
                i % 2 === 0
                  ? { right: "-6px", left: "auto" }
                  : { left: "-6px" }
              }
            />

            {/* Year */}
            <p className="font-script text-2xl text-blush-500">
              {item.year}
            </p>

            {/* Date */}
            <p className="text-sm font-medium uppercase tracking-widest text-gold-500 dark:text-gold-300 mt-1">
              {item.date}
            </p>

            {/* Title */}
            <h3 className="mt-2 font-display text-xl md:text-2xl text-gold-800 dark:text-gold-200">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gold-700/80 dark:text-cream-100/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}