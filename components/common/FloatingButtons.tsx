"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Music, Music2 as MusicOff, MessageCircle, Phone } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const coordinatorPhone = weddingConfig.contacts.coordinator.phone;

  return (
    <>
      {/* Place a royalty-free instrumental at /public/audio/background-music.mp3 */}
      <audio ref={audioRef} src="/audio/background-music.mp3" loop />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-11 h-11 rounded-full bg-gold-gradient text-white shadow-lg flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMusic}
          className="w-11 h-11 rounded-full glass text-gold-700 dark:text-gold-200 shadow-lg flex items-center justify-center"
          aria-label="Toggle background music"
        >
          {playing ? <Music className="w-5 h-5" /> : <MusicOff className="w-5 h-5" />}
        </button>

        <a
          href={`https://wa.me/${coordinatorPhone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center"
          aria-label="WhatsApp coordinator"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <a
          href={`tel:${coordinatorPhone}`}
          className="w-11 h-11 rounded-full bg-gold-600 text-white shadow-lg flex items-center justify-center"
          aria-label="Call coordinator"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
