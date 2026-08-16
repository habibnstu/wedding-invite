"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  MapPin,
  History,
  GraduationCap,
  Heart,
  ArrowRight,
  Building2,
  Users,
  Sparkles,
  X,
  Calendar,
  Clock,
  Ticket,
  Award,
  Info,
  Lightbulb,
  Tag,
  Star,
  Compass,
  Share2,
  ExternalLink,
  Navigation,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { weddingConfig } from "@/lib/config";
import { useState } from "react";

export default function AboutCumilla() {
  const about = weddingConfig.aboutCumilla;
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const administration = about.administration;
  const upazilas = administration.upazilas || [];
  const historicalPlaces = about.historicalPlaces || [];

  const openModal = (place: any) => {
    setSelectedPlace(place);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPlace(null);
    document.body.style.overflow = "unset";
  };

  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      "প্রত্নতাত্ত্বিক স্থান": "bg-stone-100 text-stone-800 border-stone-200",
      জাদুঘর: "bg-indigo-100 text-indigo-800 border-indigo-200",
      মন্দির: "bg-amber-100 text-amber-800 border-amber-200",
      "জলাধার/পার্ক": "bg-sky-100 text-sky-800 border-sky-200",
      "যুদ্ধ সমাধিক্ষেত্র": "bg-rose-100 text-rose-800 border-rose-200",
      "প্রাসাদ/জমিদার বাড়ি": "bg-rose-100 text-rose-800 border-rose-200",
      "ঐতিহাসিক ভবন": "bg-stone-100 text-stone-800 border-stone-200",
      "শিক্ষা ও গবেষণা প্রতিষ্ঠান": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "প্রাকৃতিক আকর্ষণ/উদ্ভিদ উদ্যান": "bg-emerald-100 text-emerald-800 border-emerald-200",
      "ঐতিহাসিক মসজিদ": "bg-emerald-100 text-emerald-800 border-emerald-200",
      "ঐতিহাসিক ও ধর্মীয় স্থান": "bg-purple-100 text-purple-800 border-purple-200",
    };
    return colors[category || ""] || "bg-[#d4af37]/10 text-[#8a6d1d] border-[#d4af37]/20";
  };

  const getCategoryIcon = (category?: string) => {
    const icons: Record<string, any> = {
      "প্রত্নতাত্ত্বিক স্থান": Landmark,
      জাদুঘর: Building2,
      মন্দির: Award,
      "জলাধার/পার্ক": Compass,
      "যুদ্ধ সমাধিক্ষেত্র": Heart,
      "প্রাসাদ/জমিদার বাড়ি": Building2,
      "ঐতিহাসিক ভবন": Building2,
      "শিক্ষা ও গবেষণা প্রতিষ্ঠান": GraduationCap,
      "প্রাকৃতিক আকর্ষণ/উদ্ভিদ উদ্যান": Compass,
      "ঐতিহাসিক মসজিদ": Building2,
      "ঐতিহাসিক ও ধর্মীয় স্থান": Star,
    };
    return icons[category || ""] || MapPin;
  };

  const getImageUrl = (place: any) => {
    if (place.image && place.image !== "/placeholder.jpg") {
      return place.image;
    }
    return "/placeholder.jpg";
  };

  const shouldUnoptimize = (url: string) => {
    return (
      url.includes("upload.wikimedia.org") ||
      url.includes("commons.wikimedia.org") ||
      url.includes("wikimedia") ||
      url.includes("googleusercontent")
    );
  };

  const getShortDescription = (description: string, maxLength: number = 120) => {
    if (!description) return "";
    const plain = description.replace(/### [^\n]*\n/g, "").replace(/\n/g, " ").trim();
    return plain.length > maxLength ? plain.slice(0, maxLength) + "..." : plain;
  };

  const renderDescription = (text: string) => {
    if (!text) return null;
    const sections = text.split(/(?=### )/g);

    return sections.map((section, idx) => {
      if (section.startsWith("### ")) {
        const lines = section.split("\n");
        const title = lines[0].replace("### ", "").trim();
        const content = lines.slice(1).join("\n").trim();
        return (
          <div key={`section-${idx}`} className="mb-4">
            <h4 className="mb-2 text-sm font-bold text-[#5b4636]">{title}</h4>
            <p className="whitespace-pre-wrap break-words text-sm leading-7 text-[#806d5d]">
              {content}
            </p>
          </div>
        );
      }
      if (section.trim()) {
        return (
          <p key={`text-${idx}`} className="mb-3 whitespace-pre-wrap break-words text-sm leading-7 text-[#806d5d]">
            {section.trim()}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section
      id="about-cumilla"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffaf5] via-[#fdf8f3] to-[#fffaf5] py-20 sm:py-24 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f8d9df]/20 blur-3xl" />
        <div className="absolute -right-32 top-[35%] h-80 w-80 rounded-full bg-[#e7c98b]/15 blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-[#f6e5d6]/30 blur-3xl" />
        <div className="absolute left-[8%] top-[15%] h-2 w-2 rounded-full bg-[#d8b36a]/50" />
        <div className="absolute right-[12%] top-[22%] h-3 w-3 rounded-full bg-[#e8b6c3]/40" />
        <div className="absolute left-[18%] bottom-[20%] h-2 w-2 rounded-full bg-[#d8b36a]/40" />
        <div className="absolute right-[20%] bottom-[12%] h-2 w-2 rounded-full bg-[#e8b6c3]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d8b36a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b18a46]">
              Discover Our Hometown
            </span>
            <span className="h-px w-10 bg-[#d8b36a]" />
          </div>

          <h2 className="font-serif text-4xl font-medium tracking-wide text-[#5c4147] sm:text-5xl lg:text-6xl">
            {about.title}
          </h2>

          {about.titleBn && (
            <p className="mt-3 font-serif text-xl text-[#b18a46]">{about.titleBn}</p>
          )}

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#d8b36a] to-transparent" />

          {about.description && (
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#806b6b] sm:text-base">
              {about.description}
            </p>
          )}
        </motion.div>

   

        {/* =====================================================
    OVERVIEW
====================================================== */}

{about.overview && (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mx-auto mb-16 max-w-5xl"
  >
    <div className="relative overflow-hidden rounded-[2rem] border border-[#eadbc5] bg-white/80 p-7 shadow-[0_20px_70px_rgba(120,80,60,0.07)] backdrop-blur-sm sm:p-10 lg:p-14">
      {/* Decorative border gradient - left side */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#d8b36a] via-[#efcfd5] to-[#d8b36a]" />
      
      {/* Decorative corner accents */}
      <div className="absolute -right-2 -top-2 h-12 w-12 rounded-full bg-[#d8b36a]/5 blur-xl" />
      <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-full bg-[#efcfd5]/5 blur-xl" />

      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
        {/* Icon section - left aligned on mobile, left on desktop */}
        <div className="flex items-center gap-4 md:shrink-0">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f8e8df] to-[#f0ddcf] text-[#b18a46] shadow-inner">
            <Landmark size={24} strokeWidth={1.6} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#b18a46]">
              Our Heritage
            </p>
            <h3 className="font-serif text-2xl text-[#5c4147]">
              About Cumilla
            </h3>
          </div>
        </div>

        {/* Decorative divider - hidden on mobile, visible on desktop */}
        <div className="hidden h-12 w-px bg-gradient-to-b from-[#d8b36a]/30 to-transparent md:block" />

        {/* Description text - takes remaining space */}
        <div className="flex-1 space-y-4">
          {about.overview.split("\n").map(
            (paragraph: string, index: number) =>
              paragraph.trim() && (
                <p
                  key={index}
                  className="text-sm leading-7 text-[#725f60] sm:text-base sm:leading-8"
                >
                  {paragraph.trim()}
                </p>
              )
          )}
        </div>
      </div>

      {/* Decorative bottom-right pattern */}
      <div className="absolute -bottom-4 -right-4 flex items-center gap-1 opacity-10">
        <span className="h-8 w-8 rounded-full border-2 border-[#d8b36a]" />
        <span className="h-6 w-6 rounded-full border-2 border-[#d8b36a]" />
        <span className="h-4 w-4 rounded-full border-2 border-[#d8b36a]" />
      </div>
    </div>
  </motion.div>
)}

        {/* =====================================================
            QUICK STATS BAR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 grid grid-cols-2 gap-3 rounded-2xl border border-[#eadbc5] bg-white/60 p-4 backdrop-blur-sm sm:grid-cols-4 md:gap-4 md:p-6"
        >
          <QuickStat
            icon={<Landmark size={18} />}
            label="Area"
            value={`${administration.areaSqKm || 3146} km²`}
          />
          <QuickStat
            icon={<Users size={18} />}
            label="Population"
            value={(administration.population2022 || 6212216).toLocaleString()}
          />
          <QuickStat
            icon={<GraduationCap size={18} />}
            label="Literacy Rate"
            value={`${administration.literacyRate2022 || 76.68}%`}
          />
          <QuickStat
            icon={<Building2 size={18} />}
            label="Upazilas"
            value={String(administration.totalUpazilas || upazilas.length)}
          />
        </motion.div>

        {/* =====================================================
            HISTORY + NAMING HISTORY
        ====================================================== */}

        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {/* HISTORY */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[1.75rem] border border-[#eadbc5] bg-white/80 p-7 shadow-[0_15px_50px_rgba(120,80,60,0.05)] backdrop-blur-sm transition-all hover:shadow-[0_20px_60px_rgba(120,80,60,0.08)] sm:p-9"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
                <History size={22} strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#5c4147]">
                  {about.history?.title || "History of Cumilla"}
                </h3>
                {about.history?.titleBn && (
                  <p className="mt-1 text-sm text-[#b18a46]">
                    {about.history.titleBn}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-5">
              {about.history?.description &&
                about.history.description
                  .split("\n")
                  .map(
                    (paragraph: string, index: number) =>
                      paragraph.trim() && (
                        <p
                          key={index}
                          className="text-sm leading-8 text-[#756263] sm:text-base"
                        >
                          {paragraph.trim()}
                        </p>
                      )
                  )}
            </div>

            {about.history?.keyPeriods && about.history.keyPeriods.length > 0 && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-[#5c4147]">
                  Key Periods:
                </p>
                <div className="flex flex-wrap gap-2">
                  {about.history.keyPeriods.map((period: any, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#f8e8df] px-3 py-1 text-xs text-[#b18a46] transition hover:bg-[#f0dfd0]"
                    >
                      {period.period}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#b18a46]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              Ancient Heritage
            </div>
          </motion.div>

          {/* NAMING HISTORY */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[1.75rem] border border-[#eadbc5] bg-white/80 p-7 shadow-[0_15px_50px_rgba(120,80,60,0.05)] backdrop-blur-sm transition-all hover:shadow-[0_20px_60px_rgba(120,80,60,0.08)] sm:p-9"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
                <Building2 size={22} strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#5c4147]">
                  {about.namingHistory?.title || "Naming History"}
                </h3>
                {about.namingHistory?.titleBn && (
                  <p className="mt-1 text-sm text-[#b18a46]">
                    {about.namingHistory.titleBn}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-5">
              {about.namingHistory?.description &&
                about.namingHistory.description
                  .split("\n")
                  .map(
                    (paragraph: string, index: number) =>
                      paragraph.trim() && (
                        <p
                          key={index}
                          className="text-sm leading-8 text-[#756263] sm:text-base"
                        >
                          {paragraph.trim()}
                        </p>
                      )
                  )}
            </div>

            {about.namingHistory?.historicalNames &&
              about.namingHistory.historicalNames.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium text-[#5c4147]">
                    Historical Names:
                  </p>
                  <div className="space-y-2">
                    {about.namingHistory.historicalNames.map(
                      (name: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex flex-wrap items-center gap-2 rounded-lg bg-[#f8f4ef] px-3 py-2 text-sm transition hover:bg-[#f0e8df]"
                        >
                          <span className="font-medium text-[#5c4147]">
                            {name.name}
                          </span>
                          <span className="text-xs text-[#8b7777]">
                            — {name.description}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#b18a46]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              A Name With History
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            ADMINISTRATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b18a46]">
              District Information
            </span>
            <h3 className="mt-3 font-serif text-3xl text-[#5c4147] sm:text-4xl">
              {administration.title}
            </h3>
            {administration.titleBn && (
              <p className="mt-2 text-[#b18a46]">{administration.titleBn}</p>
            )}
            {administration.description && (
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#806b6b]">
                {administration.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <InfoCard
              icon={<MapPin size={20} />}
              label="Division"
              value={administration.division}
            />
            <InfoCard
              icon={<Landmark size={20} />}
              label="District"
              value={administration.district}
            />
            <InfoCard
              icon={<Building2 size={20} />}
              label="Upazilas"
              value={`${upazilas.length}`}
            />
            {administration.population2022 && (
              <InfoCard
                icon={<Users size={20} />}
                label="Population"
                value={administration.population2022.toLocaleString()}
              />
            )}
          </div>
        </motion.div>

        {/* =====================================================
            ALL UPAZILAS
        ====================================================== */}

        {upazilas.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
                <Building2 size={20} />
              </div>
              <h3 className="font-serif text-3xl text-[#5c4147] sm:text-4xl">
                Upazilas of Cumilla
              </h3>
              <p className="mt-2 text-sm text-[#b18a46]">
                {upazilas.length} Upazilas • {administration.division}
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upazilas.map((upazila: any, index: number) => (
                <motion.article
                  key={upazila.id ?? index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.05, 0.35),
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-[1.5rem] border border-[#eadbc5] bg-white/80 p-6 shadow-[0_12px_40px_rgba(120,80,60,0.05)] backdrop-blur-sm transition-all hover:shadow-[0_20px_50px_rgba(120,80,60,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
                      <MapPin size={19} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif text-xl text-[#5c4147]">
                        {upazila.name}
                      </h4>
                      {upazila.nameBn && (
                        <p className="mt-1 text-sm text-[#b18a46]">
                          {upazila.nameBn}
                        </p>
                      )}
                    </div>
                  </div>

                  {upazila.description && (
                    <p className="mt-5 text-sm leading-7 text-[#756263]">
                      {upazila.description}
                    </p>
                  )}

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {upazila.unionCount !== undefined && (
                      <SmallStat
                        icon={<Building2 size={14} />}
                        label="Unions"
                        value={String(upazila.unionCount)}
                      />
                    )}
                    {upazila.population2022 && (
                      <SmallStat
                        icon={<Users size={14} />}
                        label="Population"
                        value={upazila.population2022.toLocaleString()}
                      />
                    )}
                    {upazila.literacyRate2022 && (
                      <SmallStat
                        icon={<GraduationCap size={14} />}
                        label="Literacy"
                        value={`${upazila.literacyRate2022}%`}
                      />
                    )}
                  </div>

                  {upazila.unions && upazila.unions.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#eee3d8] pt-4">
                      {upazila.unions.slice(0, 4).map((union: string) => (
                        <span
                          key={union}
                          className="rounded-full bg-[#f8f4ef] px-2 py-0.5 text-[10px] text-[#8b7777]"
                        >
                          {union}
                        </span>
                      ))}
                      {upazila.unions.length > 4 && (
                        <span className="text-[10px] text-[#b18a46]">
                          +{upazila.unions.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            HISTORICAL & TOURIST PLACES
        ====================================================== */}

        {historicalPlaces.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif text-3xl text-[#5c4147] sm:text-4xl">
                {about.historicalPlacesTitle || "Historical & Tourist Places"}
              </h3>
              {about.historicalPlacesTitleBn && (
                <p className="mt-2 text-sm text-[#b18a46]">
                  {about.historicalPlacesTitleBn}
                </p>
              )}
              {about.historicalPlacesDescription && (
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#806b6b]">
                  {about.historicalPlacesDescription}
                </p>
              )}
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {historicalPlaces.map((place: any, index: number) => (
                <PlaceCard
                  key={place.id ?? index}
                  place={place}
                  index={index}
                  onOpenModal={openModal}
                />
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            FOOTER MESSAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d8b36a]" />
            <Heart size={14} fill="currentColor" className="text-[#d8b36a]" />
            <span className="h-px w-12 bg-[#d8b36a]" />
          </div>

          <h3 className="font-serif text-3xl text-[#5c4147] sm:text-4xl">
            A Place Close to Our Hearts
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#806b6b] sm:text-base">
            Cumilla is more than a place on a map. It is a land of memories,
            heritage, culture and stories that connect generations.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-md sm:p-3 md:p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-[20px] bg-[#fffaf5] shadow-2xl sm:max-h-[94vh] sm:rounded-[28px] md:max-h-[92vh]"
            >
              {/* Modal Image */}
              <div className="relative h-52 shrink-0 sm:h-60 md:h-80">
                <Image
                  src={getImageUrl(selectedPlace)}
                  alt={selectedPlace.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  unoptimized={shouldUnoptimize(getImageUrl(selectedPlace))}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-md transition hover:bg-black/50 sm:right-4 sm:top-4"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 md:left-8 md:right-8">
                  <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-3">
                    <span
                      className={`rounded-full border px-2.5 py-1.5 text-[10px] font-semibold backdrop-blur-md sm:px-3 sm:text-xs ${getCategoryColor(
                        selectedPlace.category
                      )}`}
                    >
                      {selectedPlace.category || "Attraction"}
                    </span>
                  </div>
                  <h3 className="font-display break-words text-2xl leading-tight text-white sm:text-3xl md:text-5xl">
                    {selectedPlace.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="custom-scrollbar min-h-0 overflow-y-auto p-4 sm:p-5 md:p-8">
                {/* Quick Info */}
                <div className="mb-5 grid gap-3 sm:mb-7 sm:grid-cols-2 lg:grid-cols-4">
                  {selectedPlace.distanceFromVenue && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <MapPin className="mb-2 h-4 w-4 text-[#b18a25]" />
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Distance
                      </p>
                      <p className="break-words text-sm font-medium text-[#604a36]">
                        {selectedPlace.distanceFromVenue}
                      </p>
                    </div>
                  )}

                  {selectedPlace.entryFee && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <Ticket className="mb-2 h-4 w-4 text-[#b18a25]" />
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Entry Fee
                      </p>
                      <p className="break-words text-sm font-medium text-[#604a36]">
                        {selectedPlace.entryFee}
                      </p>
                    </div>
                  )}

                  {selectedPlace.openingHours && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <Clock className="mb-2 h-4 w-4 text-[#b18a25]" />
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Opening Hours
                      </p>
                      <p className="break-words text-sm font-medium text-[#604a36]">
                        {selectedPlace.openingHours}
                      </p>
                    </div>
                  )}

                  {selectedPlace.bestTimeToVisit && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <Award className="mb-2 h-4 w-4 text-[#b18a25]" />
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Best Time
                      </p>
                      <p className="break-words text-sm font-medium text-[#604a36]">
                        {selectedPlace.bestTimeToVisit}
                      </p>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                {selectedPlace.description && (
                  <div className="mb-4 rounded-2xl border border-[#d4af37]/10 bg-white p-4 sm:p-5">
                    <SectionTitle icon={<Info className="h-4 w-4" />} title="About This Place" />
                    <div className="space-y-3">{renderDescription(selectedPlace.description)}</div>
                  </div>
                )}

                {/* Wikipedia Link */}
                {selectedPlace.wikipedia && (
                  <div className="mb-4 rounded-2xl border border-[#d4af37]/10 bg-white p-4 sm:p-5">
                    <SectionTitle icon={<BookOpen className="h-4 w-4" />} title="Learn More" />
                    <a
                      href={selectedPlace.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#b18a25] hover:underline"
                    >
                      Read on Wikipedia
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}

                {/* Keywords / Tags */}
                {selectedPlace.keywords && selectedPlace.keywords.length > 0 && (
                  <div className="mb-4">
                    <SectionTitle icon={<Tag className="h-4 w-4" />} title="Tags" />
                    <div className="flex flex-wrap gap-2">
                      {selectedPlace.keywords.map((keyword: string, index: number) => (
                        <span
                          key={index}
                          className="break-all rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-1.5 text-xs text-[#806d5d]"
                        >
                          #{keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="border-t border-[#d4af37]/15 pt-5 sm:pt-6">
                  <div className="grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                    {selectedPlace.googleMapsLink && (
                      <a
                        href={selectedPlace.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b18a25] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b18a25]/20 transition hover:-translate-y-0.5 hover:bg-[#96751d] sm:w-auto"
                      >
                        <MapPin className="h-4 w-4" />
                        Google Maps
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {selectedPlace.wikipedia && (
                      <a
                        href={selectedPlace.wikipedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/25 bg-white px-5 py-3 text-sm font-semibold text-[#604a36] transition hover:-translate-y-0.5 hover:bg-[#fff8ec] sm:w-auto"
                      >
                        <Info className="h-4 w-4 text-[#b18a25]" />
                        Wikipedia
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {selectedPlace.officialWebsite && (
                      <a
                        href={selectedPlace.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/25 bg-white px-5 py-3 text-sm font-semibold text-[#604a36] transition hover:-translate-y-0.5 hover:bg-[#fff8ec] sm:w-auto"
                      >
                        <ExternalLink className="h-4 w-4 text-[#b18a25]" />
                        Official Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(180, 140, 45, 0.35);
          border-radius: 999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(180, 140, 45, 0.55);
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   QUICK STAT
============================================================ */

function QuickStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/60 p-3 text-center transition hover:bg-white/80">
      <div className="mb-1 text-[#b18a46]">{icon}</div>
      <p className="text-xs font-medium uppercase tracking-wider text-[#a38a82]">{label}</p>
      <p className="font-serif text-base text-[#5c4147] sm:text-lg">{value}</p>
    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-[#eadbc5] bg-white/80 p-5 text-center shadow-[0_10px_35px_rgba(120,80,60,0.05)] backdrop-blur-sm transition-all hover:shadow-[0_15px_40px_rgba(120,80,60,0.1)] sm:p-6"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
        {icon}
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#a38a82]">{label}</p>
      <p className="mt-1 font-serif text-base text-[#5c4147] sm:text-lg">{value}</p>
    </motion.div>
  );
}

/* ============================================================
   SMALL STAT
============================================================ */

function SmallStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#eee3d8] bg-[#fffaf5] p-3">
      <div className="flex items-center gap-1.5 text-[#b18a46]">
        {icon}
        <span className="text-[9px] uppercase tracking-[0.12em]">{label}</span>
      </div>
      <p className="mt-1 font-serif text-sm text-[#5c4147]">{value}</p>
    </div>
  );
}

/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#72583f]">
      <span className="shrink-0 text-[#b18a25]">{icon}</span>
      {title}
    </h4>
  );
}

/* ============================================================
   PLACE CARD
============================================================ */

function PlaceCard({
  place,
  index,
  onOpenModal,
}: {
  place: any;
  index: number;
  onOpenModal: (place: any) => void;
}) {
  const imageUrl = place.image && place.image !== "/placeholder.jpg" ? place.image : "/placeholder.jpg";
  const shortDescription = place.description
    ? place.description.replace(/### [^\n]*\n/g, "").replace(/\n/g, " ").trim().slice(0, 120) + "..."
    : "";

  const categoryColor = (() => {
    const colors: Record<string, string> = {
      "প্রত্নতাত্ত্বিক স্থান": "bg-stone-100 text-stone-800 border-stone-200",
      জাদুঘর: "bg-indigo-100 text-indigo-800 border-indigo-200",
      মন্দির: "bg-amber-100 text-amber-800 border-amber-200",
      "জলাধার/পার্ক": "bg-sky-100 text-sky-800 border-sky-200",
      "যুদ্ধ সমাধিক্ষেত্র": "bg-rose-100 text-rose-800 border-rose-200",
      "প্রাসাদ/জমিদার বাড়ি": "bg-rose-100 text-rose-800 border-rose-200",
      "ঐতিহাসিক ভবন": "bg-stone-100 text-stone-800 border-stone-200",
      "শিক্ষা ও গবেষণা প্রতিষ্ঠান": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "প্রাকৃতিক আকর্ষণ/উদ্ভিদ উদ্যান": "bg-emerald-100 text-emerald-800 border-emerald-200",
      "ঐতিহাসিক মসজিদ": "bg-emerald-100 text-emerald-800 border-emerald-200",
      "ঐতিহাসিক ও ধর্মীয় স্থান": "bg-purple-100 text-purple-800 border-purple-200",
    };
    return colors[place.category || ""] || "bg-[#d4af37]/10 text-[#8a6d1d] border-[#d4af37]/20";
  })();

  const CategoryIcon = (() => {
    const icons: Record<string, any> = {
      "প্রত্নতাত্ত্বিক স্থান": Landmark,
      জাদুঘর: Building2,
      মন্দির: Award,
      "জলাধার/পার্ক": Compass,
      "যুদ্ধ সমাধিক্ষেত্র": Heart,
      "প্রাসাদ/জমিদার বাড়ি": Building2,
      "ঐতিহাসিক ভবন": Building2,
      "শিক্ষা ও গবেষণা প্রতিষ্ঠান": GraduationCap,
      "প্রাকৃতিক আকর্ষণ/উদ্ভিদ উদ্যান": Compass,
      "ঐতিহাসিক মসজিদ": Building2,
      "ঐতিহাসিক ও ধর্মীয় স্থান": Star,
    };
    return icons[place.category || ""] || MapPin;
  })();

  const shouldUnoptimize = (url: string) => {
    return (
      url.includes("upload.wikimedia.org") ||
      url.includes("commons.wikimedia.org") ||
      url.includes("wikimedia") ||
      url.includes("googleusercontent")
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-[#eadbc5] bg-white shadow-[0_12px_40px_rgba(120,80,60,0.06)] transition-all hover:shadow-[0_25px_60px_rgba(120,80,60,0.12)]"
      onClick={() => onOpenModal(place)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#f6ebe5]">
        <Image
          src={imageUrl}
          alt={place.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          unoptimized={shouldUnoptimize(imageUrl)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {place.category && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#8b6b52] backdrop-blur-sm shadow-sm">
            <CategoryIcon className="h-3.5 w-3.5" />
            {place.category}
          </span>
        )}

        {place.distanceFromVenue && (
          <span className="absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-[9px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            {place.distanceFromVenue.replace(/^.{0,8}\s*/, "").slice(0, 30)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-serif text-xl leading-snug text-[#5c4147] group-hover:text-[#b18a46] transition-colors">
          {place.name}
        </h4>

        {shortDescription && (
          <p className="mt-3 text-sm leading-7 text-[#756263] line-clamp-3">{shortDescription}</p>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-[#eee3d8] pt-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#b18a46]">
            Cumilla Heritage
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(place);
            }}
            className="flex items-center gap-2 text-xs font-medium text-[#80656b] transition hover:text-[#b18a46]"
          >
            Read More
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}