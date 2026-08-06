"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  drift: number;
  rotate: number;
};

export default function FlowerPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Runs only in the browser → no SSR mismatch
    setPetals(
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 2,
        size: 14 + Math.random() * 20,
        drift: -6 + Math.random() * 12,
        rotate: 180 + Math.random() * 360,
      }))
    );
  }, []);

  // Nothing is rendered on the server (or on the first client paint)
  if (petals.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: -120,
            x: `${petal.left}vw`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            x: [
              `${petal.left}vw`,
              `${petal.left + petal.drift}vw`,
              `${petal.left - petal.drift}vw`,
              `${petal.left + petal.drift / 2}vw`,
            ],
            rotate: petal.rotate,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            times: [0, 0.2, 0.8, 1],
          }}
          style={{
            width: petal.size,
            height: petal.size * 1.4,
          }}
          className="absolute top-0 left-0 will-change-transform"
        >
          <svg
            viewBox="0 0 40 55"
            className="w-full h-full drop-shadow-lg"
            fill="none"
          >
            <path
              d="M20 0 C35 10 38 28 20 55 C2 28 5 10 20 0Z"
              fill="#F8B8C8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}