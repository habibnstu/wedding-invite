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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

      const response = await fetch(weddingConfig.googleAppsScriptUrl, {
        method: "POST",
        body: formData,
      });

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
    <section id="rsvp" className="py-10 px-4">
      <h2 className="section-heading">Kindly Confirm Your Attendance</h2>
      <div className="gold-divider mt-4 mb-12" />

      <div className="max-w-lg mx-auto glass rounded-3xl p-6 md:p-10">
        {status === "success" ? (
          <div className="text-center py-10">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
            <p className="mb-6">
              Your Confirmation has been submitted successfully.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-3 rounded-full bg-gold-gradient text-white"
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
            <div>
              <label htmlFor="rsvp-name">Full Name</label>
              <input
                id="rsvp-name"
                suppressHydrationWarning
                {...register("name", { required: true })}
                className="w-full mt-1 rounded-xl border px-4 py-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            <div>
              <label htmlFor="rsvp-phone">Phone</label>
              <input
                id="rsvp-phone"
                suppressHydrationWarning
                {...register("phone", { required: true })}
                className="w-full mt-1 rounded-xl border px-4 py-3"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">Phone is required</p>
              )}
            </div>

            <div>
              <label className="block mb-3 text-sm font-medium text-gold-800 dark:text-cream-100">
                Attendance
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(
                  [
                    { value: "Yes", label: "Joyfully Accept", icon: "💖" },
                    { value: "No", label: "Regretfully Decline", icon: "🙏" },
                    { value: "Maybe", label: "Maybe", icon: "🤔" },
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
                    className={`rounded-xl border-2 px-2 py-2 transition-all duration-300 font-medium ${
                      attendance === option.value
                        ? "bg-gold-500 border-gold-500 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-white/5 border-gold-300 text-gold-700 dark:text-cream-100 hover:border-gold-500 hover:bg-gold-50 dark:hover:bg-white/10"
                    }`}
                  >
                    <div className="text-2xl mb-1">{option.icon}</div>
                    <div>{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="rsvp-guests">Number of Guests</label>
              <input
                id="rsvp-guests"
                type="number"
                min={1}
                suppressHydrationWarning
                {...register("guests", {
                  valueAsNumber: true,
                  min: 1,
                })}
                className="w-full mt-1 rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="rsvp-message">Message</label>
              <textarea
                id="rsvp-message"
                rows={4}
                suppressHydrationWarning
                {...register("message")}
                className="w-full mt-1 rounded-xl border px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || !mounted}
              className="w-full rounded-full py-3 bg-gold-gradient text-white flex justify-center items-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Confirm RSVP</span>
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-center text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}