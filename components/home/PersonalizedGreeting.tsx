"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/config";

export default function PersonalizedGreeting({ guestName }: { guestName: string }) {
  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center glass rounded-3xl p-8 md:p-12"
      >
        <p className="font-script text-3xl text-blush-400 mb-4">Dear {guestName},</p>
        <p className="text-gold-800 dark:text-cream-100 leading-relaxed">
          With the blessings of Almighty Allah and our beloved families, we are delighted to invite you
          to our Wedding Ceremony.
        </p>
        <p className="text-gold-800 dark:text-cream-100 leading-relaxed mt-3">
          Your presence will make our special day even more memorable.
        </p>
        <p className="mt-6 font-display text-lg text-gold-600 dark:text-gold-300">
          {weddingConfig.couple.groomName} &amp; {weddingConfig.couple.brideName}
        </p>
      </motion.div>
    </section>
  );
}
