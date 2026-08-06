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
    <section id="contacts" className="py-10 px-4 bg-blush-50/40 dark:bg-white/[0.02]">
      <h2 className="section-heading">Need Help?</h2>
      <div className="gold-divider mt-4 mb-12" />

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
        {list.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-500">{c.label}</p>
              <p className="font-display text-lg text-gold-900 dark:text-cream-100">{c.name}</p>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${c.phone}`}
                className="w-10 h-10 rounded-full bg-gold-100 dark:bg-white/10 flex items-center justify-center text-gold-700 dark:text-gold-200 hover:bg-gold-200 transition-colors"
                aria-label={`Call ${c.name}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${c.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-700 dark:text-green-300 hover:bg-green-200 transition-colors"
                aria-label={`WhatsApp ${c.name}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
