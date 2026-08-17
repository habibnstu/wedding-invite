"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/lib/config";
import FlowerPetals from "./FlowerPetals";

export default function Hero({ guestName }: { guestName: string }) {
  const { couple, wedding } = weddingConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-1 sm:px-2">
      {/* Animated background */}
      <FlowerPetals />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-blush-50 dark:from-[#1a1512] dark:via-[#161210] dark:to-[#151110]" />

      {/* Floating background blobs */}
      <motion.div
        className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-blush-200/40 blur-3xl animate-float-slow"
        aria-hidden
      />

      <motion.div
        className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gold-200/40 blur-3xl animate-float-slower"
        aria-hidden
      />

      {/* Floral decoration - Top Left */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-50 sm:opacity-60 rotate-180"
        aria-hidden
      >
        <FloralCorner />
      </div>

      {/* Floral decoration - Bottom Right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-50 sm:opacity-60"
        aria-hidden
      >
        <FloralCorner />
      </div>

      {/* Wedding Of */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          uppercase
          tracking-[0.2em]
          sm:tracking-[0.3em]
          md:tracking-[0.35em]
          text-[10px]
          sm:text-xs
          md:text-sm
          text-gold-600
          dark:text-gold-300
          mb-2
          text-center
        "
      >
        The Wedding Of
      </motion.p>

      {/* Couple Portraits */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-10 mb-2 sm:mb-3">
        <PortraitPhoto
          src={couple.groomPhoto}
          alt={couple.groomFullName}
          delay={0.3}
        />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="shrink-0"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blush-400 fill-blush-400" />
        </motion.div>

        <PortraitPhoto
          src={couple.bridePhoto}
          alt={couple.brideFullName}
          delay={0.1}
        />
      </div>

      {/* Couple Names */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="
          w-full
          max-w-4xl
          px-2
          font-display
          text-2xl
          xs:text-4xl
          sm:text-5xl
          md:text-7xl
          text-center
          leading-tight
          text-gold-800
          dark:text-gold-200
        "
      >
        {couple.groomName}

        <span className="font-script text-blush-400 mx-1 sm:mx-2 md:mx-4">
          &amp;
        </span>

        {couple.brideName}
      </motion.h1>

      {/* Date & Time */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="
          mt-1
          sm:mt-2
          px-1
          text-center
          font-body
          text-base
          sm:text-lg
          md:text-2xl
          text-gold-700
          dark:text-gold-300
        "
      >
        {wedding.dateDisplay}
        <span className="mx-1 sm:mx-2">&middot;</span>
        {wedding.timeDisplay}
      </motion.p>

      {/* Venue placeholder */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        className="
          mt-1
          text-center
          text-xs
          sm:text-sm
          md:text-base
          text-gold-600/80
          dark:text-gold-300/70
        "
      >
        {/* {wedding.venueName} */}
      </motion.p>

      {/* Personalized Greeting */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="
          mt-1
          sm:mt-2
          md:mt-3
          lg:mt-4
          md:mt-5
          w-full
          max-w-2xl
          glass
          rounded-2xl
          sm:rounded-3xl
          md:rounded-full
          px-2
          sm:px-3
          py-2
          sm:py-2
        "
      >
        <p
          className="
            text-center
            text-xs
            sm:text-sm
            md:text-base
            leading-relaxed
            font-medium
            text-gold-800
            dark:text-cream-100
          "
        >
         Dear{" "}
            <span className="font-bold text-[#B8860B] underline decoration-[#D4AF37] decoration-2 underline-offset-4">
              {guestName}
            </span>
            , it would be our greatest honor to have you join us as we begin this beautiful journey
            together. ✨
        </p>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="
          absolute
          bottom-10
          sm:bottom-6
          md:bottom-8
          text-gold-500
          dark:text-gold-300
          text-[9px]
          sm:text-xs
          tracking-[0.2em]
          sm:tracking-widest
          uppercase
        "
      >
        Scroll Down
      </motion.div>
    </section>
  );
}

function PortraitPhoto({
  src,
  alt,
  delay,
}: {
  src: string;
  alt: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay }}
      className="
        relative
        shrink-0
        w-20
        h-20
        sm:w-28
        sm:h-28
        md:w-40
        md:h-40
        rounded-full
        overflow-hidden
        ring-2
        sm:ring-3
        md:ring-4
        ring-white/70
        dark:ring-white/10
        shadow-xl
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 160px"
        className="object-cover"
        priority
      />
    </motion.div>
  );
}

function FloralCorner() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="30" cy="30" r="14" fill="#eac25e" opacity="0.5" />
      <circle cx="60" cy="15" r="9" fill="#efa4b0" opacity="0.5" />
      <circle cx="15" cy="65" r="10" fill="#efa4b0" opacity="0.4" />
      <path
        d="M10 10 C 60 20, 20 60, 90 90"
        stroke="#c8922a"
        strokeWidth="2"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
}