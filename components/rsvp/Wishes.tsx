"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Heart, Loader2, AlertCircle } from "lucide-react";
import { weddingConfig } from "@/lib/config";

type Wish = { name: string; message: string };
type WishFormData = { name: string; message: string };

const FALLBACK_WISHES: Wish[] = [
  { name: "Rahim & Family", message: "May Allah bless your marriage with love and happiness." },
  { name: "Nadia", message: "Congratulations to the beautiful couple!" },
  { name: "Tanvir", message: "Wishing you a lifetime of love and laughter." },
];

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(FALLBACK_WISHES);
  const [loadingWishes, setLoadingWishes] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const { register, handleSubmit, reset } = useForm<WishFormData>();

  useEffect(() => {
    const url = weddingConfig.googleAppsScriptUrl;
    if (!url) return;
    setLoadingWishes(true);
    fetch(`${url}?type=wishes`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
        return r.json();
      })
      .then((data: Wish[]) => {
        if (Array.isArray(data) && data.length) setWishes(data);
      })
      .catch((err) => {
        console.error("Failed to fetch wishes:", err);
        /* keep fallback wishes */
      })
      .finally(() => setLoadingWishes(false));
  }, []);

  const onSubmit = async (data: WishFormData) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("type", "wish");
      formData.append("name", data.name);
      formData.append("message", data.message);

      const response = await fetch(weddingConfig.googleAppsScriptUrl, {
        method: "POST",
        body: formData,
        // Add mode and headers for better CORS handling
        mode: "cors",
        headers: {
          "Accept": "application/json",
        },
      });

      // Log the response for debugging
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      // Try to parse the response as text first
      const responseText = await response.text();
      console.log("Response text:", responseText);

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        // If it's not JSON, use the text as is
        result = responseText;
      }

      if (!response.ok) {
        // Include the response text in the error message for debugging
        throw new Error(`Failed to save wish: ${response.status} ${responseText}`);
      }

      // Check if the response indicates success
      if (result && typeof result === 'object' && result.success === false) {
        throw new Error(result.message || "Failed to save wish");
      }

      // Success - update the UI
      setWishes((prev) => [
        {
          name: data.name,
          message: data.message,
        },
        ...prev,
      ]);

      reset();
      setSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      console.error("Submit error:", err);
      setError(err instanceof Error ? err.message : "Failed to save wish. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="wishes" className="py-10 px-4 bg-blush-50/40 dark:bg-white/[0.02]">
      <h2 className="section-heading">Guest Wishes</h2>
      <div className="gold-divider mt-4 mb-12" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto glass rounded-2xl p-5 mb-10 flex flex-col gap-3"
      >
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your name"
          className="rounded-xl border border-gold-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400"
        />
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Write your wish for the couple..."
          rows={2}
          className="rounded-xl border border-gold-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400"
        />
        
        {/* Show error message */}
        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
        
        {/* Show success message */}
        {success && (
          <div className="flex items-center gap-2 text-green-500 text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
            <Heart className="w-4 h-4 fill-current" />
            <span>Your wish has been sent! ❤️</span>
          </div>
        )}
        
        <button
          type="submit"
          disabled={submitting}
          className="self-end inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-gradient text-white text-sm font-medium disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            "❤️ Send Wish"
          )}
        </button>
      </form>

      <div className="max-w-4xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {wishes.map((w, i) => (
          <motion.div
            key={`${w.name}-${i}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="break-inside-avoid glass rounded-2xl p-5"
          >
            <p className="text-gold-800 dark:text-cream-100 italic">&ldquo;{w.message}&rdquo;</p>
            <p className="mt-3 text-sm font-semibold text-gold-600 dark:text-gold-300">— {w.name}</p>
          </motion.div>
        ))}
      </div>
      {loadingWishes && (
        <p className="text-center text-sm text-gold-500 mt-4">Loading more wishes...</p>
      )}
    </section>
  );
}