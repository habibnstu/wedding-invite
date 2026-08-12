"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type ElementType =
  | "petal"
  | "heart"
  | "balloon"
  | "sparkle"
  | "butterfly"
  | "love"
  | "particle";

type FloatingElement = {
  id: number;
  type: ElementType;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  opacity: number;
  color: string;
  direction: number;
};

const COLORS = {
  pink: "#F8B8C8",
  rose: "#EFA6BA",
  ivory: "#FFF8EE",
  gold: "#D8B36A",
  white: "#FFFFFF",
  peach: "#F9D5C8",
};

const random = (min: number, max: number) =>
  min + Math.random() * (max - min);

const pick = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export default function FlowerPetals() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Reduce animation on devices where motion is disabled.
    const mobile =
      typeof window !== "undefined" && window.innerWidth < 640;

    const counts = {
  petals: mobile ? 30 : 60,
  hearts: mobile ? 10 : 18,
  balloons: mobile ? 4 : 8,
  sparkles: mobile ? 18 : 35,
  butterflies: mobile ? 2 : 5,
  love: mobile ? 8 : 15,
  particles: mobile ? 18 : 35,
};

    const result: FloatingElement[] = [];

    // ---------------------------------------------------------
    // PETALS
    // ---------------------------------------------------------
    for (let i = 0; i < counts.petals; i++) {
      result.push({
        id: result.length,
        type: "petal",
        left: random(-15, 115),
        top: -10,
        size: random(12, 27),
        duration: random(10, 17),
        delay: random(0, 10),
        drift: random(-18, 18),
        rotate: random(180, 720),
        opacity: random(0.45, 0.85),
        color: pick([
          COLORS.pink,
          COLORS.rose,
          COLORS.ivory,
          COLORS.peach,
        ]),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // ---------------------------------------------------------
    // HEARTS
    // ---------------------------------------------------------
    for (let i = 0; i < counts.hearts; i++) {
      result.push({
        id: result.length,
        type: "heart",
        left: random(-15, 115),
        top: random(30, 110),
        size: random(12, 21),
        duration: random(7, 12),
        delay: random(0, 8),
        drift: random(-14, 14),
        rotate: random(-15, 15),
        opacity: random(0.35, 0.7),
        color: pick([COLORS.pink, COLORS.rose, COLORS.gold]),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // ---------------------------------------------------------
    // BALLOONS
    // ---------------------------------------------------------
    for (let i = 0; i < counts.balloons; i++) {
      result.push({
        id: result.length,
        type: "balloon",
          left: random(-10, 110),
        top: random(90, 120),
        size: random(30, 48),
        duration: random(18, 27),
        delay: random(0, 15),
        drift: random(-15, 15),
        rotate: random(-7, 7),
        opacity: random(0.5, 0.8),
        color: pick([
          COLORS.pink,
          COLORS.ivory,
          COLORS.peach,
          COLORS.gold,
        ]),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // ---------------------------------------------------------
    // SPARKLES
    // ---------------------------------------------------------
    for (let i = 0; i < counts.sparkles; i++) {
      result.push({
        id: result.length,
        type: "sparkle",
        left: random(0, 100),
       top: random(0, 100),
        size: random(4, 9),
        duration: random(2.5, 5),
        delay: random(0, 5),
        drift: random(-3, 3),
        rotate: random(0, 180),
        opacity: random(0.35, 0.8),
        color: pick([COLORS.gold, COLORS.white, COLORS.pink]),
        direction: 1,
      });
    }

    // ---------------------------------------------------------
    // BUTTERFLIES
    // ---------------------------------------------------------
    for (let i = 0; i < counts.butterflies; i++) {
      result.push({
        id: result.length,
        type: "butterfly",
        left: random(-20, 100),
        top: random(10, 90),
        size: random(18, 28),
        duration: random(14, 22),
        delay: random(0, 10),
        drift: random(15, 35),
        rotate: random(-10, 10),
        opacity: random(0.45, 0.7),
        color: pick([COLORS.pink, COLORS.ivory, COLORS.peach]),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // ---------------------------------------------------------
    // LOVE SYMBOLS
    // ---------------------------------------------------------
    for (let i = 0; i < counts.love; i++) {
      result.push({
        id: result.length,
        type: "love",
        left: random(-5, 105),
top: random(40, 110),
        size: random(14, 23),
        duration: random(8, 13),
        delay: random(0, 8),
        drift: random(-15, 15),
        rotate: random(-10, 10),
        opacity: random(0.3, 0.65),
        color: pick([COLORS.pink, COLORS.gold, COLORS.rose]),
        direction: 1,
      });
    }

    // ---------------------------------------------------------
    // LIGHT PARTICLES
    // ---------------------------------------------------------
    for (let i = 0; i < counts.particles; i++) {
      result.push({
        id: result.length,
        type: "particle",
        left: random(2, 98),
        top: random(5, 95),
        size: random(2, 5),
        duration: random(4, 8),
        delay: random(0, 6),
        drift: random(-4, 4),
        rotate: 0,
        opacity: random(0.25, 0.6),
        color: pick([COLORS.gold, COLORS.white, COLORS.pink]),
        direction: 1,
      });
    }

    setElements(result);
  }, []);

  if (elements.length === 0) return null;

  /*
   * If the user/device prefers reduced motion,
   * show only a few static decorative elements.
   */
  if (prefersReducedMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
        {elements
          .filter(
            (element) =>
              element.type === "sparkle" ||
              element.type === "particle"
          )
          .slice(0, 8)
          .map((element) => (
            <div
              key={element.id}
              className="absolute rounded-full"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                width: element.size,
                height: element.size,
                background: element.color,
                opacity: element.opacity,
              }}
            />
          ))}
      </div>
    );
  }

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        z-20
        select-none
      "
      aria-hidden="true"
    >
      {elements.map((element) => (
        <FloatingElementView
          key={element.id}
          element={element}
        />
      ))}
    </div>
  );
}

function FloatingElementView({
  element,
}: {
  element: FloatingElement;
}) {
  const {
    type,
    left,
    top,
    size,
    duration,
    delay,
    drift,
    rotate,
    opacity,
    color,
    direction,
  } = element;

  // ===========================================================
  // PETAL
  // ===========================================================
  if (type === "petal") {
    return (
      <motion.div
        initial={{
          x: `${left}vw`,
          y: "-10vh",
          rotate: 0,
          opacity: 0,
        }}
        animate={{
          y: "115vh",
          x: [
            `${left}vw`,
            `${left + drift}vw`,
            `${left - drift}vw`,
            `${left + drift / 2}vw`,
          ],
          rotate,
          opacity: [0, opacity, opacity, 0],
        }}
        transition={{
          duration,
          delay,
          ease: "linear",
          repeat: Infinity,
          times: [0, 0.15, 0.8, 1],
        }}
        className="absolute top-0 left-0 will-change-transform"
        style={{
          width: size,
          height: size * 1.4,
        }}
      >
        <svg
          viewBox="0 0 40 55"
          className="h-full w-full drop-shadow-sm"
        >
          <path
            d="M20 0 C35 10 38 28 20 55 C2 28 5 10 20 0Z"
            fill={color}
          />
        </svg>
      </motion.div>
    );
  }

  // ===========================================================
  // HEART
  // ===========================================================
  if (type === "heart") {
    return (
      <motion.div
        initial={{
          left: `${left}%`,
          top: `${top}%`,
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          y: "-70vh",
          x: [
            0,
            drift,
            -drift,
            drift / 2,
          ],
          opacity: [0, opacity, opacity, 0],
          scale: [0.7, 1, 0.9, 0.7],
          rotate: [0, rotate, -rotate, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute will-change-transform"
        style={{
          fontSize: size,
          color,
          lineHeight: 1,
          textShadow: "0 2px 8px rgba(216,179,106,0.15)",
        }}
      >
        {Math.random() > 0.5 ? "♡" : "♥"}
      </motion.div>
    );
  }

  // ===========================================================
  // BALLOON
  // ===========================================================
  if (type === "balloon") {
    return (
      <motion.div
        initial={{
          left: `${left}%`,
          top: `${top}%`,
          opacity: 0,
          y: 0,
        }}
        animate={{
          y: "-125vh",
          x: [
            0,
            drift,
            -drift,
            drift / 2,
          ],
          rotate: [
            rotate,
            rotate + 4,
            rotate - 4,
            rotate,
          ],
          opacity: [0, opacity, opacity, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute will-change-transform"
      >
        <div className="relative">
          {/* Balloon */}
          <div
            className="relative rounded-[50%_50%_45%_45%]"
            style={{
              width: size,
              height: size * 1.25,
              background: `radial-gradient(
                circle at 35% 25%,
                rgba(255,255,255,0.75),
                ${color} 45%,
                rgba(190,140,130,0.35)
              )`,
              boxShadow:
                "inset -5px -7px 12px rgba(130,80,80,0.08), 0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            {/* Balloon knot */}
            <div
              className="absolute left-1/2 -bottom-1 -translate-x-1/2"
              style={{
                width: 7,
                height: 7,
                background: color,
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />
          </div>

          {/* String */}
          <motion.div
            animate={{
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-full h-20 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(150,120,100,0.45), transparent)",
            }}
          />
        </div>
      </motion.div>
    );
  }

  // ===========================================================
  // SPARKLE
  // ===========================================================
  if (type === "sparkle") {
    return (
      <motion.div
        initial={{
          left: `${left}%`,
          top: `${top}%`,
          opacity: 0,
          scale: 0,
          rotate: 0,
        }}
        animate={{
          opacity: [0, opacity, 0.15, opacity, 0],
          scale: [0, 1, 0.65, 1, 0],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute will-change-transform"
        style={{
          width: size,
          height: size,
        }}
      >
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
          style={{ background: color }}
        />
        <div
          className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
          style={{ background: color }}
        />
      </motion.div>
    );
  }

  // ===========================================================
  // BUTTERFLY
  // ===========================================================
  if (type === "butterfly") {
    return (
      <motion.div
        initial={{
          left: `${left}%`,
          top: `${top}%`,
          opacity: 0,
          x: 0,
        }}
        animate={{
          x: `${direction * 75}vw`,
          y: [
            0,
            -35,
            20,
            -25,
            0,
          ],
          rotate: [
            rotate,
            rotate + 8,
            rotate - 8,
            rotate + 5,
            rotate,
          ],
          opacity: [0, opacity, opacity, opacity, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute will-change-transform"
        style={{
          width: size,
          height: size,
        }}
      >
        <motion.div
          animate={{
            scaleX: [1, 0.65, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          {/* Left wing */}
          <div
            className="absolute left-0 top-[20%] rounded-[100%_0_100%_0]"
            style={{
              width: size * 0.55,
              height: size * 0.75,
              background: color,
              opacity: 0.75,
              transform: "rotate(-25deg)",
            }}
          />

          {/* Right wing */}
          <div
            className="absolute right-0 top-[20%] rounded-[0_100%_0_100%]"
            style={{
              width: size * 0.55,
              height: size * 0.75,
              background: color,
              opacity: 0.75,
              transform: "rotate(25deg)",
            }}
          />

          {/* Body */}
          <div
            className="absolute left-1/2 top-[25%] -translate-x-1/2 rounded-full"
            style={{
              width: size * 0.1,
              height: size * 0.65,
              background: COLORS.gold,
            }}
          />
        </motion.div>
      </motion.div>
    );
  }

  // ===========================================================
  // LOVE SYMBOL
  // ===========================================================
  if (type === "love") {
    return (
      <motion.div
        initial={{
          left: `${left}%`,
          top: `${top}%`,
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          y: "-55vh",
          x: [
            0,
            drift,
            -drift,
            drift / 2,
          ],
          opacity: [0, opacity, opacity, 0],
          scale: [0.6, 1, 0.9, 0.6],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute font-serif will-change-transform"
        style={{
          color,
          fontSize: size,
        }}
      >
        {Math.random() > 0.5 ? "♡" : "♥"}
      </motion.div>
    );
  }

  // ===========================================================
  // LIGHT PARTICLE
  // ===========================================================
  return (
    <motion.div
      initial={{
        left: `${left}%`,
        top: `${top}%`,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, opacity, 0.15, opacity, 0],
        scale: [0, 1, 0.7, 1, 0],
        x: [0, drift, -drift, 0],
        y: [0, -8, 8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full will-change-transform"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 3}px ${color}`,
      }}
    />
  );
}