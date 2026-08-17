"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Music,
  Music2 as MusicOff,
  MessageCircle,
  Phone,
} from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* ============================================================
     Scroll To Top
  ============================================================ */
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ============================================================
     Audio Events
  ============================================================ */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleCanPlay = () => {
      setAudioReady(true);
    };

    const handlePlay = () => {
      setPlaying(true);
    };

    const handlePause = () => {
      setPlaying(false);
    };

    const handleEnded = () => {
      setPlaying(false);
    };

    const handleError = () => {
      setAudioReady(false);
      setPlaying(false);

      console.error(
        "Background music could not be loaded. Check the audio file path."
      );
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  /* ============================================================
     Toggle Music
  ============================================================ */
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      console.error("Audio element not found.");
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Music playback failed:", error);
      setPlaying(false);
    }
  };

  /* ============================================================
     Coordinator
  ============================================================ */
  const coordinatorPhone =
    weddingConfig.contacts.coordinator.phone;

  return (
    <>
      {/* ========================================================
          Background Music
      ======================================================== */}

      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        preload="auto"
      />

      {/* ========================================================
          Floating Buttons
      ======================================================== */}

      <div
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          flex-col
          gap-3
        "
      >
        {/* ======================================================
            Scroll To Top
        ====================================================== */}

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-gold-gradient
                text-white
                shadow-lg
              "
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* ======================================================
            Music Button
        ====================================================== */}

        <button
          type="button"
          onClick={toggleMusic}
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            glass
            text-gold-700
            shadow-lg
            transition-all
            duration-300
            dark:text-gold-200
            ${
              playing
                ? "scale-105 ring-2 ring-gold-400"
                : ""
            }
          `}
          aria-label={
            playing
              ? "Pause background music"
              : "Play background music"
          }
        >
          {playing ? (
            <Music className="h-5 w-5 animate-pulse" />
          ) : (
            <MusicOff className="h-5 w-5" />
          )}
        </button>

        {/* ======================================================
            WhatsApp
        ====================================================== */}

        <a
          href={`https://wa.me/${coordinatorPhone.replace(
            /\D/g,
            ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-green-500
            text-white
            shadow-lg
            transition-transform
            hover:scale-105
          "
          aria-label="WhatsApp coordinator"
        >
          <MessageCircle className="h-5 w-5" />
        </a>

        {/* ======================================================
            Call
        ====================================================== */}

        <a
          href={`tel:${coordinatorPhone}`}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gold-600
            text-white
            shadow-lg
            transition-transform
            hover:scale-105
          "
          aria-label="Call coordinator"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}