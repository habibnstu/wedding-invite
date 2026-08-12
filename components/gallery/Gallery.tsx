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

  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );

  const next = () =>
    setActiveIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );

  return (
    <section
      id="gallery"
      className="px-3 py-8 sm:px-4 sm:py-10"
    >
      {/* Heading */}
      <h2 className="section-heading">
        Gallery
      </h2>

      <div className="gold-divider mb-8 mt-4 sm:mb-12" />

      {/* Gallery Grid */}
      <div
        className="
          mx-auto
          grid
          max-w-5xl
          grid-cols-2
          gap-2.5
          sm:gap-3
          md:grid-cols-3
          md:gap-4
        "
      >
        {images.map((src, i) => (
          <motion.button
            key={src}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: i * 0.05,
            }}
            onClick={() => setActiveIndex(i)}
            className="
              group
              relative
              aspect-square
              overflow-hidden
              rounded-xl
              sm:rounded-2xl
            "
          >
            <Image
              src={src}
              alt={`Gallery photo ${i + 1}`}
              fill
              sizes="
                (max-width: 640px) 50vw,
                (max-width: 768px) 50vw,
                33vw
              "
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </motion.button>
        ))}
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              px-2
              sm:px-4
            "
            onClick={close}
          >
            {/* Close Button */}
            <button
              className="
                absolute
                right-3
                top-3
                z-20
                rounded-full
                p-1.5
                text-white/80
                transition
                hover:text-white
                sm:right-6
                sm:top-6
                sm:p-0
              "
              onClick={close}
              aria-label="Close"
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>

            {/* Previous Button */}
            <button
              className="
                absolute
                left-1
                top-1/2
                z-20
                -translate-y-1/2
                rounded-full
                bg-black/30
                p-1
                text-white/80
                transition
                hover:text-white
                sm:left-4
                sm:bg-transparent
                sm:p-0
                md:left-8
              "
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="
                relative
                h-[70vh]
                w-[calc(100vw-80px)]
                max-w-3xl
                sm:h-[80vh]
                sm:w-[calc(100vw-120px)]
              "
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

            {/* Next Button */}
            <button
              className="
                absolute
                right-1
                top-1/2
                z-20
                -translate-y-1/2
                rounded-full
                bg-black/30
                p-1
                text-white/80
                transition
                hover:text-white
                sm:right-4
                sm:bg-transparent
                sm:p-0
                md:right-8
              "
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}