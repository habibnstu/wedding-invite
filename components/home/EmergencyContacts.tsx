"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function EmergencyContacts() {
  const contacts = weddingConfig.contacts;

  const list = [
    { label: "Groom", ...contacts.groom },
    { label: "Wedding Coordinator", ...contacts.coordinator },
    { label: "Emergency Contact", ...contacts.emergency },
  ];

  return (
    <section
      id="contacts"
      className="
        bg-blush-50/40
        px-1
        py-2
        dark:bg-white/[0.02]
        sm:px-2
        sm:py-3
      "
    >
      <h2 className="section-heading">Need Help?</h2>

      <div className="gold-divider mb-2 mt-3 sm:mb-4" />

      <div
        className="
          mx-auto
          grid
          max-w-4xl
          grid-cols-1
          gap-4
          sm:grid-cols-2
          sm:gap-5
        "
      >
        {list.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: i * 0.05,
            }}
            className="
              glass
              flex
              min-w-0
              items-center
              justify-between
              gap-3
              rounded-2xl
              p-2
              sm:p-5
            "
          >
            {/* Contact Information */}
            <div className="min-w-0 flex-1">
  <p
    className="
      truncate
      text-[10px]
      uppercase
      tracking-[0.15em]
      text-gold-500
      sm:text-xs
      sm:tracking-widest
    "
  >
    {c.label}
  </p>

  <p
    className="
      truncate
      font-display
      text-base
      text-gold-900
      dark:text-cream-100
      sm:text-lg
    "
  >
    {c.name}
  </p>

  {/* Phone Number */}
  <p
    className="
      mt-1
      truncate
      text-xs
      text-gold-600
      dark:text-cream-100/70
      sm:text-sm
    "
  >
    {c.phone}
  </p>
</div>

            {/* Action Buttons */}
            <div className="flex shrink-0 gap-2">
              <a
                href={`tel:${c.phone}`}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-gold-100
                  text-gold-700
                  transition-colors
                  hover:bg-gold-200
                  dark:bg-white/10
                  dark:text-gold-200
                  sm:h-10
                  sm:w-10
                "
                aria-label={`Call ${c.name}`}
              >
                <Phone className="h-4 w-4" />
              </a>

              <a
                href={`https://wa.me/${c.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                  text-green-700
                  transition-colors
                  hover:bg-green-200
                  dark:bg-green-500/10
                  dark:text-green-300
                  sm:h-10
                  sm:w-10
                "
                aria-label={`WhatsApp ${c.name}`}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}