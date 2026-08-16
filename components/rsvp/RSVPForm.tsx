"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { weddingConfig } from "@/lib/config";

type RSVPFormData = {
  name: string;
  phone: string;
  attendance: "Yes" | "No" | "Maybe";
  guests: number;
  message: string;
};

export default function RSVPForm({
  defaultName,
}: {
  defaultName: string;
}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    defaultValues: {
      name: defaultName,
      phone: "",
      attendance: "Yes",
      guests: 1,
      message: "",
    },
  });

  const attendance = watch("attendance");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Avoids hydration mismatches caused by browser extensions
  // (password managers, Grammarly, etc.) that inject markup into
  // form fields before React hydrates.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (data: RSVPFormData) => {
    try {
      setStatus("loading");

      const formData = new FormData();

      formData.append("type", "rsvp");
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("attendance", data.attendance);
      formData.append("guests", data.guests.toString());
      formData.append("message", data.message);

      const response = await fetch(
        weddingConfig.googleAppsScriptUrl,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();

      if (!response.ok) {
        throw new Error(result);
      }

      reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="rsvp"
      className="w-full overflow-hidden px-4 py-10 sm:px-5 md:px-6"
    >
     <div className="text-center">
        <h2 className="section-heading px-1">
          We’d Love to Celebrate With You
        </h2>

        <p className="mt-3 px-4 text-sm text-[#7a6a58] md:text-base">
          Please let us know if you’ll be joining us on our special day.
        </p>
        <p className="mt-3 px-4 text-sm text-[#7a6a58] md:text-base">
         আপনার উপস্থিতিতে আমাদের বিশেষ দিনটি আরও আনন্দময় হয়ে উঠবে।
        </p>
      </div>

      <div className="gold-divider mt-4 mb-10 sm:mb-12" />

      <div className="mx-auto w-full max-w-lg glass rounded-3xl p-4 sm:p-6 md:p-10">
        {status === "success" ? (
          <div className="py-8 text-center sm:py-10">
            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-500 sm:h-16 sm:w-16" />

            <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
              Thank You!
            </h3>

            <p className="mb-6 px-2 text-sm leading-6 sm:text-base">
              Your Confirmation has been submitted successfully.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="w-full max-w-xs rounded-full bg-gold-gradient px-5 py-3 text-sm text-white sm:w-auto sm:px-6 sm:text-base"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            suppressHydrationWarning
          >
            {/* Full Name */}
            <div className="w-full">
              <label
                htmlFor="rsvp-name"
                className="block text-sm"
              >
                Full Name
              </label>

              <input
                id="rsvp-name"
                type="text"
                autoComplete="name"
                suppressHydrationWarning
                {...register("name", { required: true })}
                className="mt-1 block w-full min-w-0 rounded-xl border px-4 py-3 text-base outline-none"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  Name is required
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="w-full">
              <label
                htmlFor="rsvp-phone"
                className="block text-sm"
              >
                Phone
              </label>

              <input
                id="rsvp-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                suppressHydrationWarning
                {...register("phone", { required: true })}
                className="mt-1 block w-full min-w-0 rounded-xl border px-4 py-3 text-base outline-none"
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  Phone is required
                </p>
              )}
            </div>

            {/* Attendance */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gold-800 dark:text-cream-100">
                Attendance
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {(
                  [
                    {
                      value: "Yes",
                      label: "Joyfully Accept",
                      icon: "💖",
                    },
                    {
                      value: "No",
                      label: "Regretfully Decline",
                      icon: "🙏",
                    },
                    {
                      value: "Maybe",
                      label: "Maybe",
                      icon: "🤔",
                    },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setValue("attendance", option.value, {
                        shouldValidate: true,
                        shouldDirty: true,
                      })
                    }
                    className={`min-h-[88px] w-full rounded-xl border-2 px-2 py-2 text-sm font-medium transition-all duration-300 sm:min-h-0 ${
                      attendance === option.value
                        ? "scale-105 border-gold-500 bg-gold-500 text-white shadow-lg"
                        : "border-gold-300 bg-white text-gold-700 hover:border-gold-500 hover:bg-gold-50 dark:border-gold-300 dark:bg-white/5 dark:text-cream-100 dark:hover:bg-white/10"
                    }`}
                  >
                    <div className="mb-1 text-2xl">
                      {option.icon}
                    </div>

                    <div className="leading-5">
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Number of Guests */}
            <div className="w-full">
              <label
                htmlFor="rsvp-guests"
                className="block text-sm"
              >
                Number of Guests
              </label>

              <input
                id="rsvp-guests"
                type="number"
                min={1}
                inputMode="numeric"
                suppressHydrationWarning
                {...register("guests", {
                  valueAsNumber: true,
                  min: 1,
                })}
                className="mt-1 block w-full min-w-0 rounded-xl border px-4 py-3 text-base outline-none"
              />
            </div>

            {/* Message */}
            <div className="w-full">
              <label
                htmlFor="rsvp-message"
                className="block text-sm"
              >
                Message
              </label>

              <textarea
                id="rsvp-message"
                rows={4}
                suppressHydrationWarning
                {...register("message")}
                className="mt-1 block w-full min-w-0 resize-y rounded-xl border px-4 py-3 text-base outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading" || !mounted}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-3 text-sm text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Confirm RSVP</span>
                </>
              )}
            </button>

            {status === "error" && (
              <p className="px-2 text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}