"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  MapPin,
  History,
  GraduationCap,
  Heart,
  ArrowRight,
  Building2,
  Users,
  Clock,
  Phone,
  MapPinned,
  Calendar,
  Award,
  BookOpen,
  TreePine,
  LandPlot,
  Mountain,
  Church,
  Library,
  School,
  Store,
  Utensils,
  Camera,
  Star,
  Sparkles,
} from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function AboutCumilla() {
  const about = weddingConfig.aboutCumilla;

  const administration = about.administration;
  const upazilas = administration.upazilas || [];
  const historicalPlaces = about.historicalPlaces || [];

  return (
    <section
      id="about-cumilla"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffaf5] via-[#fdf8f3] to-[#fffaf5] py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f8d9df]/20 blur-3xl" />
        <div className="absolute -right-32 top-[35%] h-80 w-80 rounded-full bg-[#e7c98b]/15 blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-[#f6e5d6]/30 blur-3xl" />

        {/* Decorative dots */}
        <div className="absolute left-[8%] top-[15%] h-2 w-2 rounded-full bg-[#d8b36a]/50" />
        <div className="absolute right-[12%] top-[22%] h-3 w-3 rounded-full bg-[#e8b6c3]/40" />
        <div className="absolute left-[18%] bottom-[20%] h-2 w-2 rounded-full bg-[#d8b36a]/40" />
        <div className="absolute right-[20%] bottom-[12%] h-2 w-2 rounded-full bg-[#e8b6c3]/50" />

        {/* Decorative pattern */}
        <div className="absolute left-[5%] top-[50%] h-[1px] w-20 rotate-45 bg-[#d8b36a]/10" />
        <div className="absolute right-[5%] top-[30%] h-[1px] w-20 -rotate-45 bg-[#d8b36a]/10" />
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
            <p className="mt-3 font-serif text-xl text-[#b18a46]">
              {about.titleBn}
            </p>
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
            icon={<LandPlot size={18} />}
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

            {/* Key Periods */}
            {about.history?.keyPeriods &&
              about.history.keyPeriods.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium text-[#5c4147]">
                    Key Periods:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {about.history.keyPeriods.map(
                      (period: any, idx: number) => (
                        <span
                          key={idx}
                          className="rounded-full bg-[#f8e8df] px-3 py-1 text-xs text-[#b18a46] transition hover:bg-[#f0dfd0]"
                        >
                          {period.period}
                        </span>
                      )
                    )}
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

            {/* Historical Names */}
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

          {/* MAIN ADMIN CARDS */}

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
                <PlaceCard key={place.id ?? index} place={place} index={index} />
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

          {/* Wedding location connection */}
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[#806b6b]">
            <MapPinned size={16} className="text-[#b18a46]" />
            <span>
              Wedding Venue:{" "}
              <span className="text-[#5c4147]">
                Debidwar, {administration.district}
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   QUICK STAT
============================================================ */

function QuickStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/60 p-3 text-center transition hover:bg-white/80">
      <div className="mb-1 text-[#b18a46]">{icon}</div>
      <p className="text-xs font-medium uppercase tracking-wider text-[#a38a82]">
        {label}
      </p>
      <p className="font-serif text-base text-[#5c4147] sm:text-lg">{value}</p>
    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-[#eadbc5] bg-white/80 p-5 text-center shadow-[0_10px_35px_rgba(120,80,60,0.05)] backdrop-blur-sm transition-all hover:shadow-[0_15px_40px_rgba(120,80,60,0.1)] sm:p-6"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f8e8df] text-[#b18a46]">
        {icon}
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#a38a82]">
        {label}
      </p>
      <p className="mt-1 font-serif text-base text-[#5c4147] sm:text-lg">
        {value}
      </p>
    </motion.div>
  );
}

/* ============================================================
   SMALL STAT
============================================================ */

function SmallStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#eee3d8] bg-[#fffaf5] p-3">
      <div className="flex items-center gap-1.5 text-[#b18a46]">
        {icon}
        <span className="text-[9px] uppercase tracking-[0.12em]">
          {label}
        </span>
      </div>
      <p className="mt-1 font-serif text-sm text-[#5c4147]">{value}</p>
    </div>
  );
}

/* ============================================================
   PLACE CARD
============================================================ */

function PlaceCard({
  place,
  index,
}: {
  place: any;
  index: number;
}) {
  // Extract short description for card view
  const shortDescription = place.description
    ? place.description
        .split("\n")
        .filter((line: string) => line.trim() && !line.includes("###"))
        .slice(0, 2)
        .join(" ")
        .substring(0, 120) + (place.description.length > 120 ? "..." : "")
    : "";

  // Get category icon
  const getCategoryIcon = (category: string) => {
    const cat = category?.toLowerCase() || "";
    if (cat.includes("temple") || cat.includes("মন্দির")) return <Church size={16} />;
    if (cat.includes("mosque") || cat.includes("মসজিদ")) return <Building2 size={16} />;
    if (cat.includes("museum") || cat.includes("জাদুঘর")) return <Library size={16} />;
    if (cat.includes("archaeological") || cat.includes("প্রত্ন")) return <Landmark size={16} />;
    if (cat.includes("war") || cat.includes("যুদ্ধ")) return <Award size={16} />;
    if (cat.includes("garden") || cat.includes("উদ্ভিদ")) return <TreePine size={16} />;
    if (cat.includes("water") || cat.includes("জল")) return <LandPlot size={16} />;
    if (cat.includes("palace") || cat.includes("জমিদার")) return <Building2 size={16} />;
    return <Star size={16} />;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.08, 0.4),
      }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.5rem] border border-[#eadbc5] bg-white shadow-[0_12px_40px_rgba(120,80,60,0.06)] transition-all hover:shadow-[0_25px_60px_rgba(120,80,60,0.12)]"
    >
      {/* IMAGE */}

      <div className="relative h-52 overflow-hidden bg-[#f6ebe5]">
        {place.image && place.image !== "/placeholder.jpg" ? (
          <img
            src={place.image}
            alt={place.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#f8e8df] to-[#f6ebe5]">
            <Landmark size={42} className="text-[#d8b36a]/50" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {place.category && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#8b6b52] backdrop-blur-sm shadow-sm">
            {getCategoryIcon(place.category)}
            {place.category}
          </span>
        )}

        {place.district && (
          <span className="absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-[9px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            {place.district}
          </span>
        )}
      </div>

      {/* CONTENT */}

      <div className="p-6">
        <h4 className="font-serif text-xl leading-snug text-[#5c4147] group-hover:text-[#b18a46] transition-colors">
          {place.name}
        </h4>

        {place.banglaName && (
          <p className="mt-1 text-sm text-[#b18a46]">{place.banglaName}</p>
        )}

        {shortDescription && (
          <p className="mt-3 text-sm leading-7 text-[#756263] line-clamp-3">
            {shortDescription}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#8b7777]">
          {place.upazila && (
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-[#c79c58]" />
              {place.upazila}
            </span>
          )}
          {place.distanceFromCumillaCity && (
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-[#c79c58]" />
              {place.distanceFromCumillaCity}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#eee3d8] pt-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#b18a46]">
            Cumilla Heritage
          </span>

          <div className="flex items-center gap-3">
            {place.sourceUrl && (
              <a
                href={place.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-medium text-[#80656b] transition hover:text-[#b18a46]"
              >
                <BookOpen size={12} />
                Source
              </a>
            )}
            {place.latitude && place.longitude && (
              <a
                href={`https://maps.google.com/?q=${place.latitude},${place.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-medium text-[#80656b] transition hover:text-[#b18a46]"
              >
                <MapPinned size={12} />
                Map
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}