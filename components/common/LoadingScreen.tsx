"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] bg-cream-50 dark:bg-[#151110] flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-blush-400 fill-blush-400" />
          </motion.div>
          <p className="mt-4 font-script text-2xl text-gold-600">Loading our story...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
