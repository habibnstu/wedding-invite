"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Heart, Loader2, AlertCircle } from "lucide-react";
import { weddingConfig } from "@/lib/config";

type Wish = {
  name: string;
  message: string;
};

type WishFormData = {
  name: string;
  message: string;
};

const FALLBACK_WISHES: Wish[] = [
  {
    name: "Rahim & Family",
    message:
      "May Allah bless your marriage with love and happiness.",
  },
  {
    name: "Nadia",
    message:
      "Congratulations to the beautiful couple!",
  },
  {
    name: "Tanvir",
    message:
      "Wishing you a lifetime of love and laughter.",
  },
];

export default function Wishes() {
  const [wishes, setWishes] =
    useState<Wish[]>(FALLBACK_WISHES);

  const [loadingWishes, setLoadingWishes] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [success, setSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<WishFormData>();

  useEffect(() => {
    const url = weddingConfig.googleAppsScriptUrl;

    if (!url) return;

    setLoadingWishes(true);

    fetch(`${url}?type=wishes`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(
            `HTTP error! status: ${r.status}`
          );
        }

        return r.json();
      })
      .then((data: Wish[]) => {
        if (Array.isArray(data) && data.length) {
          setWishes(data);
        }
      })
      .catch((err) => {
        console.error(
          "Failed to fetch wishes:",
          err
        );
        /* keep fallback wishes */
      })
      .finally(() =>
        setLoadingWishes(false)
      );
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

      const response = await fetch(
        weddingConfig.googleAppsScriptUrl,
        {
          method: "POST",
          body: formData,
          // Add mode and headers for better CORS handling
          mode: "cors",
          headers: {
            Accept: "application/json",
          },
        }
      );

      // Log the response for debugging
      console.log(
        "Response status:",
        response.status
      );

      console.log(
        "Response headers:",
        response.headers
      );

      // Try to parse the response as text first
      const responseText =
        await response.text();

      console.log(
        "Response text:",
        responseText
      );

      let result;

      try {
        result = JSON.parse(responseText);
      } catch (e) {
        // If it's not JSON, use the text as is
        result = responseText;
      }

      if (!response.ok) {
        // Include the response text in the error message for debugging
        throw new Error(
          `Failed to save wish: ${response.status} ${responseText}`
        );
      }

      // Check if the response indicates success
      if (
        result &&
        typeof result === "object" &&
        result.success === false
      ) {
        throw new Error(
          result.message ||
            "Failed to save wish"
        );
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
      setTimeout(
        () => setSuccess(false),
        3000
      );
    } catch (err) {
      console.error("Submit error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to save wish. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="wishes"
      className="w-full overflow-hidden bg-blush-50/40 px-1 py-2 dark:bg-white/[0.02] sm:px-2 md:px-3"
    >
      <h2 className="section-heading px-1 text-center">
        Guest Wishes
      </h2>

      <div className="gold-divider mt-2 mb-2 sm:mb-3" />

      {/* Wish Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mb-2 flex w-full max-w-lg flex-col gap-3 rounded-2xl glass p-2 sm:p-3"
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Your name"
          className="w-full min-w-0 rounded-xl border border-gold-200 bg-white/70 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gold-400 dark:border-white/10 dark:bg-white/5"
        />

        <textarea
          {...register("message", {
            required: "Message is required",
          })}
          placeholder="Write your wish for the couple..."
          rows={3}
          className="w-full min-w-0 resize-y rounded-xl border border-gold-200 bg-white/70 px-4 py-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-gold-400 dark:border-white/10 dark:bg-white/5"
        />

        {/* Show error message */}
        {error && (
          <div className="flex w-full items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-500 dark:bg-red-900/20">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

            <span className="min-w-0 break-words">
              {error}
            </span>
          </div>
        )}

        {/* Show success message */}
        {success && (
          <div className="flex w-full items-start gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-500 dark:bg-green-900/20">
            <Heart className="mt-0.5 h-4 w-4 shrink-0 fill-current" />

            <span>
              Your wish has been sent! ❤️
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-medium text-white transition-opacity disabled:opacity-60 sm:w-auto sm:self-end sm:py-2"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "❤️ Send Wish"
          )}
        </button>
      </form>

      {/* Wishes */}
     <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  {wishes.map((w, i) => (
    <motion.div
      key={`${w.name}-${i}`}
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: i * 0.04,
      }}
      className="
        flex
        h-full
        min-h-[150px]
        flex-col
        rounded-2xl
        glass
        p-4
        sm:p-5
      "
    >
      <p
        className="
          flex-1
          break-words
          text-sm
          leading-6
          italic
          text-gold-800
          dark:text-cream-100
          sm:text-base
        "
      >
        &ldquo;{w.message}&rdquo;
      </p>

      <p
        className="
          mt-3
          break-words
          text-sm
          font-semibold
          text-gold-600
          dark:text-gold-300
        "
      >
        — {w.name}
      </p>
    </motion.div>
  ))}
</div>

      {loadingWishes && (
        <p className="mt-4 px-4 text-center text-sm text-gold-500">
          Loading more wishes...
        </p>
      )}
    </section>
  );
}