"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { weddingConfig } from "@/lib/config";

const links = [
  { href: "#our-story", label: "Story" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#wishes", label: "Wishes" },
    { href: "/historical-places", label: "Historical Places" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleScroll = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-2"
          : "py-3 sm:py-4 bg-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto w-full px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#home"
            className="
              min-w-0
              font-script
              text-lg
              sm:text-xl
              md:text-2xl
              text-blush-400
              truncate
            "
          >
            {weddingConfig.wedding.title}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="
                  whitespace-nowrap
                  text-sm
                  text-gold-700
                  dark:text-gold-200
                  hover:text-blush-400
                  transition-colors
                "
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="
                md:hidden
                flex
                items-center
                justify-center
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-full
                border
                border-gold-300/50
                text-gold-700
                dark:text-gold-200
                hover:bg-gold-100/30
                dark:hover:bg-white/10
                transition
                shrink-0
              "
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <span className="text-2xl leading-none">×</span>
              ) : (
                <span className="text-xl leading-none">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="mx-3 sm:mx-4 mt-3 rounded-2xl glass p-2 sm:p-3 shadow-lg">
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      w-full
                      rounded-xl
                      px-4
                      py-3
                      sm:py-3.5
                      text-center
                      text-sm
                      sm:text-base
                      text-gold-700
                      dark:text-gold-200
                      hover:bg-gold-100/40
                      dark:hover:bg-white/10
                      hover:text-blush-400
                      transition-colors
                    "
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}