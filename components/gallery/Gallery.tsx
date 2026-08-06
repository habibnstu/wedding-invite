"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function Gallery() {
  const images = weddingConfig.gallery;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section id="gallery" className="py-10 px-4">
      <h2 className="section-heading">Gallery</h2>
      <div className="gold-divider mt-4 mb-12" />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-square rounded-2xl overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Gallery photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={close}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 md:left-8 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`Gallery photo ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute right-4 md:right-8 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
