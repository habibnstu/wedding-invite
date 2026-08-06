"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { weddingConfig } from "@/lib/config";

const links = [
  { href: "#our-story", label: "Story" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#wishes", label: "Wishes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "glass py-2" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <span className="font-script text-xl text-blush-400">{weddingConfig.wedding.title}</span>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gold-700 dark:text-gold-200 hover:text-blush-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
