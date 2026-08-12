"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/config";

export default function PersonalizedGreeting({
  guestName,
}: {
  guestName: string;
}) {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          max-w-xl
          mx-auto
          text-center
          glass
          rounded-2xl
          sm:rounded-3xl
          p-5
          sm:p-7
          md:p-12
        "
      >
        {/* Guest Name */}
            <p
          className="
              font-serif
              text-2xl
              sm:text-2xl
              text-blush-400
              mb-4
              break-words
              tracking-wide
          "
        >
          Dear{" "}
          <span className="font-semibold text-[#B8860B] underline decoration-[#D4AF37] decoration-2 underline-offset-4">
            {guestName}
          </span>
          ,
        </p>

        {/* Invitation Message */}
        <p
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-gold-800
            dark:text-cream-100
            leading-relaxed
          "
        >
          With the blessings of Almighty Allah and our beloved families, we
          are delighted to invite you to our Wedding Ceremony.
        </p>

        {/* Second Message */}
        <p
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-gold-800
            dark:text-cream-100
            leading-relaxed
            mt-3
          "
        >
          Your presence will make our special day even more memorable.
        </p>

        {/* Couple Names */}
        <p
          className="
            mt-5
            sm:mt-6
            font-display
            text-base
            sm:text-lg
            md:text-xl
            text-gold-600
            dark:text-gold-300
            break-words
          "
        >
          {weddingConfig.couple.groomName} &amp;{" "}
          {weddingConfig.couple.brideName}
        </p>
      </motion.div>
    </section>
  );
}