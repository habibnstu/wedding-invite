"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/lib/config";
import FlowerPetals from "./FlowerPetals";

export default function Hero({ guestName }: { guestName: string }) {
  const { couple, wedding } = weddingConfig;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated background blobs */}
        <FlowerPetals />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-blush-50 dark:from-[#1a1512] dark:via-[#161210] dark:to-[#151110]" />
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush-200/40 blur-3xl animate-float-slow"
        aria-hidden
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl animate-float-slower"
        aria-hidden
      />

      {/* Floral decoration corners (simple SVG, swap for real floral PNGs in /public/images) */}
      <div className="pointer-events-none absolute top-0 left-0 w-40 h-40 opacity-60 rotate-180" aria-hidden>
        <FloralCorner />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 opacity-60" aria-hidden>
        <FloralCorner />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="uppercase tracking-[0.35em] text-xs md:text-sm text-gold-600 dark:text-gold-300 mb-4"
      >
        The Wedding Of
      </motion.p>

      <div className="flex items-center gap-6 md:gap-10 mb-6">
          <PortraitPhoto src={couple.groomPhoto} alt={couple.groomFullName} delay={0.3} />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Heart className="w-8 h-8 md:w-10 md:h-10 text-blush-400 fill-blush-400" />
        </motion.div>
               <PortraitPhoto src={couple.bridePhoto} alt={couple.brideFullName} delay={0.1} />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="font-display text-4xl md:text-7xl text-center text-gold-800 dark:text-gold-200"
      >
        {couple.brideName} <span className="font-script text-blush-400 mx-2 md:mx-4">&amp;</span> {couple.groomName}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 font-body text-lg md:text-2xl text-gold-700 dark:text-gold-300"
      >
        {wedding.dateDisplay} &middot; {wedding.timeDisplay}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        className="mt-1 text-sm md:text-base text-gold-600/80 dark:text-gold-300/70"
      >
        {/* {wedding.venueName} */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-10 glass rounded-full px-6 py-3"
      >
        <p className="text-sm md:text-base font-medium text-gold-800 dark:text-cream-100">
          Dear <span className="font-semibold">{guestName}</span>, it would be our greatest honor to have you join us as we begin this beautiful journey together. ✨
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 text-gold-500 dark:text-gold-300 text-xs tracking-widest uppercase"
      >
        Scroll Down
      </motion.div>
    </section>
  );
}

function PortraitPhoto({ src, alt, delay }: { src: string; alt: string; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay }}
      className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/70 dark:ring-white/10 shadow-xl"
    >
      <Image src={src} alt={alt} fill sizes="160px" className="object-cover" priority />
    </motion.div>
  );
}

function FloralCorner() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="30" cy="30" r="14" fill="#eac25e" opacity="0.5" />
      <circle cx="60" cy="15" r="9" fill="#efa4b0" opacity="0.5" />
      <circle cx="15" cy="65" r="10" fill="#efa4b0" opacity="0.4" />
      <path d="M10 10 C 60 20, 20 60, 90 90" stroke="#c8922a" strokeWidth="2" opacity="0.3" fill="none" />
    </svg>
  );
}
