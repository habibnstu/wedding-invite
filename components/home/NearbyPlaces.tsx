"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ExternalLink,
  Calendar,
  Building2,
  Info,
  X,
  Ticket,
  Clock as ClockIcon,
  Award,
  Lightbulb,
  Tag,
  Star,
  Compass,
  Heart,
  Share2,
  ChevronRight,
  Navigation,
} from "lucide-react";
import { weddingConfig } from "@/lib/config";
import { useState } from "react";

type NearbyPlace = {
  id: string | number;
  name: string;
  category?: string;
  image?: string;
  imageSources?: {
    url?: string;
  }[];
  distanceFromVenue?: string;
  distance?: string;
  shortDescription?: string;
  fullDescription?: string;
  description?: string;
  builtYear?: string;
  founderOrBuilder?: string;
  entryFee?: string;
  openingHours?: string;
  bestTimeToVisit?: string;
  history?: string;
  architecturalStyle?: string;
  importance?: string;
  visitorTips?: string[];
  interestingFacts?: string[];
  galleryKeywords?: string[];
  wikipedia?: string | null;
  officialWebsite?: string | null;
  googleMapsLink?: string;
  googleMapsQuery?: string;
  latitude?: string | number;
  longitude?: string | number;
};

export default function NearbyPlaces() {
  const [selectedPlace, setSelectedPlace] =
    useState<NearbyPlace | null>(null);

  const [hoveredPlace, setHoveredPlace] =
    useState<string | number | null>(null);

  const VENUE_LATITUDE = "23.426234";
  const VENUE_LONGITUDE = "91.1372098";

  const openModal = (place: NearbyPlace) => {
    setSelectedPlace(place);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPlace(null);
    document.body.style.overflow = "unset";
  };

  const getImageUrl = (place: NearbyPlace) => {
    if (place.image && typeof place.image === "string") {
      return place.image;
    }

    if (
      place.imageSources &&
      place.imageSources.length > 0 &&
      place.imageSources[0]?.url
    ) {
      return place.imageSources[0].url;
    }

    return "/placeholder.jpg";
  };

  const getDistanceDisplay = (place: NearbyPlace) => {
    if (place.distanceFromVenue) {
      const match = place.distanceFromVenue.match(
        /(\d+(?:\.\d+)?)\s*(কিমি|km)/i
      );

      if (match) {
        return `${match[1]} ${match[2]}`;
      }

      return place.distanceFromVenue;
    }

    return place.distance || "";
  };

  const shouldUnoptimize = (url: string) => {
    return (
      url.includes("upload.wikimedia.org") ||
      url.includes("commons.wikimedia.org") ||
      url.includes("wikimedia") ||
      url.includes("googleusercontent") ||
      url.includes("lh3.googleusercontent.com")
    );
  };

  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      Temple:
        "bg-amber-100 text-amber-800 border-amber-200",

      Palace:
        "bg-rose-100 text-rose-800 border-rose-200",

      Fort:
        "bg-stone-100 text-stone-800 border-stone-200",

      Garden:
        "bg-emerald-100 text-emerald-800 border-emerald-200",

      Museum:
        "bg-indigo-100 text-indigo-800 border-indigo-200",

      Lake:
        "bg-sky-100 text-sky-800 border-sky-200",

      Market:
        "bg-orange-100 text-orange-800 border-orange-200",

      "প্রত্নতাত্ত্বিক স্থান":
        "bg-stone-100 text-stone-800 border-stone-200",

      জাদুঘর:
        "bg-indigo-100 text-indigo-800 border-indigo-200",

      মন্দির:
        "bg-amber-100 text-amber-800 border-amber-200",

      "জলাধার/পার্ক":
        "bg-sky-100 text-sky-800 border-sky-200",

      "যুদ্ধ সমাধিক্ষেত্র":
        "bg-rose-100 text-rose-800 border-rose-200",

      "প্রাসাদ/জমিদার বাড়ি":
        "bg-rose-100 text-rose-800 border-rose-200",

      "ঐতিহাসিক ভবন":
        "bg-stone-100 text-stone-800 border-stone-200",

      "শিক্ষা ও গবেষণা প্রতিষ্ঠান":
        "bg-indigo-100 text-indigo-800 border-indigo-200",

      "প্রাকৃতিক আকর্ষণ/উদ্ভিদ উদ্যান":
        "bg-emerald-100 text-emerald-800 border-emerald-200",
    };

    return (
      colors[category || ""] ||
      "bg-[#d4af37]/10 text-[#8a6d1d] border-[#d4af37]/20"
    );
  };

  const getCategoryIcon = (category?: string) => {
    const icons: Record<string, any> = {
      Temple: Award,
      Palace: Building2,
      Fort: Building2,
      Garden: Compass,
      Museum: Info,
      Lake: Compass,
      Market: Tag,

      "প্রত্নতাত্ত্বিক স্থান": Building2,
      জাদুঘর: Info,
      মন্দির: Award,
      "জলাধার/পার্ক": Compass,
      "যুদ্ধ সমাধিক্ষেত্র": Heart,
      "প্রাসাদ/জমিদার বাড়ি": Building2,
      "ঐতিহাসিক ভবন": Building2,
      "শিক্ষা ও গবেষণা প্রতিষ্ঠান": Star,
      "প্রাকৃতিক আকর্ষণ/উদ্ভিদ উদ্যান": Compass,
    };

    return icons[category || ""] || MapPin;
  };

  const getGoogleMapsUrl = (place: NearbyPlace) => {
    if (place.latitude && place.longitude) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${place.latitude},${place.longitude}`
      )}`;
    }

    if (place.googleMapsQuery) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.googleMapsQuery
      )}`;
    }

    if (place.googleMapsLink) {
      return place.googleMapsLink;
    }

    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${place.name}, ${VENUE_LATITUDE}, ${VENUE_LONGITUDE}`
    )}`;
  };

  const getDirectionUrl = (place: NearbyPlace) => {
    const destination =
      place.latitude && place.longitude
        ? `${place.latitude},${place.longitude}`
        : place.googleMapsQuery || place.name;

    return `https://www.google.com/maps/dir/?api=1&origin=${VENUE_LATITUDE},${VENUE_LONGITUDE}&destination=${encodeURIComponent(
      destination
    )}&travelmode=driving`;
  };

  const sharePlace = async (place: NearbyPlace) => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: place.name,
          text:
            place.shortDescription ||
            `Check out ${place.name}`,
          url,
        });
      } catch {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied!");
      } catch {
        // Clipboard unavailable
      }
    }
  };

  /**
   * Render description with markdown-like formatting.
   * Supports:
   * ### Heading
   * followed by normal text.
   */
  const renderDescription = (text: string) => {
    if (!text) return null;

    const sections = text.split(/(?=### )/g);

    return sections.map((section, idx) => {
      if (section.startsWith("### ")) {
        const lines = section.split("\n");

        const title = lines[0]
          .replace("### ", "")
          .trim();

        const content = lines
          .slice(1)
          .join("\n")
          .trim();

        return (
          <div
            key={`section-${idx}`}
            className="mb-4"
          >
            <h4 className="mb-2 text-sm font-bold text-[#5b4636]">
              {title}
            </h4>

            <p className="whitespace-pre-wrap text-sm leading-7 text-[#806d5d]">
              {content}
            </p>
          </div>
        );
      }

      if (section.trim()) {
        return (
          <p
            key={`text-${idx}`}
            className="mb-3 whitespace-pre-wrap text-sm leading-7 text-[#806d5d]"
          >
            {section.trim()}
          </p>
        );
      }

      return null;
    });
  };

  /**
   * Convert full description into short card preview.
   */
  const getPlainTextPreview = (
    description: string,
    maxLength: number = 130
  ) => {
    if (!description) return "";

    const plain = description
      .replace(/### [^\n]*\n/g, "")
      .replace(/\n/g, " ")
      .trim();

    return plain.length > maxLength
      ? plain.slice(0, maxLength) + "..."
      : plain;
  };

  /**
   * Get description from either fullDescription
   * or description.
   */
  const getFullDescription = (
    place: NearbyPlace
  ) => {
    return (
      place.fullDescription ||
      place.description ||
      ""
    );
  };

  return (
    <section
      id="nearby"
      className="relative overflow-hidden px-4 py-24 md:px-6"
      style={{
        background:
          "linear-gradient(180deg, #fffaf5 0%, #f8eee5 50%, #fffaf5 100%)",
      }}
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[100px]" />

        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#c99a5b]/10 blur-[100px]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ead8b7]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md"
          >
            <Compass className="h-4 w-4 text-[#b18a25]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d1d]">
              Explore Nearby
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="font-display text-4xl leading-tight text-[#5b4636] md:text-5xl lg:text-6xl"
          >
            Discover Beautiful

            <span className="block text-[#b18a25]">
              Places Nearby
            </span>
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          />

          <motion.p
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
              delay: 0.3,
            }}
            className="mx-auto max-w-2xl text-sm leading-7 text-[#806d5d]"
          >
            Take a little time to explore the cultural
            heritage, beautiful landmarks and hidden
            gems around our wedding venue.
          </motion.p>
        </div>

        {/* Places Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {weddingConfig.nearbyPlaces.map(
            (place: NearbyPlace, index: number) => {
              const imageUrl = getImageUrl(place);

              const distanceDisplay =
                getDistanceDisplay(place);

              const categoryColor =
                getCategoryColor(place.category);

              const CategoryIcon =
                getCategoryIcon(place.category);

              const isHovered =
                hoveredPlace === String(place.id);

              const fullDescription =
                getFullDescription(place);

              const previewText =
                getPlainTextPreview(
                  fullDescription
                );

              const hasLongDescription =
                previewText.length > 100 ||
                fullDescription.includes("###");

              return (
                <motion.article
                  key={place.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                  }}
                  onHoverStart={() =>
                    setHoveredPlace(place.id)
                  }
                  onHoverEnd={() =>
                    setHoveredPlace(null)
                  }
                  className="group cursor-pointer"
                  onClick={() =>
                    openModal(place)
                  }
                >
                  <div className="relative overflow-hidden rounded-[26px] border border-[#d4af37]/15 bg-white shadow-[0_15px_50px_rgba(105,75,40,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(105,75,40,0.16)]">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={
                          place.name ||
                          "Nearby place"
                        }
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized={shouldUnoptimize(
                          imageUrl
                        )}
                        onError={(e) => {
                          const target =
                            e.target as HTMLImageElement;

                          target.src =
                            "/placeholder.jpg";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Category */}
                      <div className="absolute left-4 top-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md ${categoryColor}`}
                        >
                          <CategoryIcon className="h-3.5 w-3.5" />

                          {place.category ||
                            "Attraction"}
                        </span>
                      </div>

                      {/* Distance */}
                      {distanceDisplay && (
                        <div className="absolute right-4 top-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                            <MapPin className="h-3.5 w-3.5" />

                            {distanceDisplay}
                          </span>
                        </div>
                      )}

                      {/* Bottom Actions */}
                      <div className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(place);
                          }}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#604a36] shadow-xl transition hover:bg-[#fffaf5]"
                        >
                          <Info className="h-4 w-4" />

                          Explore
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            sharePlace(place);
                          }}
                          className="rounded-full bg-white p-2.5 shadow-xl transition hover:scale-105"
                        >
                          <Share2 className="h-4 w-4 text-[#a17c20]" />
                        </button>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl leading-tight text-[#5b4636] transition-colors group-hover:text-[#b18a25]">
                          {place.name}
                        </h3>

                        <motion.div
                          animate={{
                            x: isHovered ? 3 : 0,
                            rotate: isHovered ? 45 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#d4af37]" />
                        </motion.div>
                      </div>

                      {/* Description */}
                      <div className="mb-3">
                        <div className="text-sm leading-6 text-[#806d5d]">
                          <p className="line-clamp-2">
                            {previewText}
                          </p>
                        </div>

                        {/* Read More opens Modal */}
                        {hasLongDescription && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(place);
                            }}
                            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#b18a25] transition-colors hover:text-[#8a6d1d]"
                          >
                            Read More

                            <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#9b806a]">
                        {place.builtYear && (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />

                            {place.builtYear}
                          </div>
                        )}

                        {place.entryFee && (
                          <div className="flex items-center gap-1.5">
                            <Ticket className="h-3.5 w-3.5" />

                            {place.entryFee}
                          </div>
                        )}
                      </div>

                      {/* Progress */}
                      <div className="mt-5 h-px w-full overflow-hidden bg-[#eadfce]">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: "100%",
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              index * 0.08 + 0.3,
                            duration: 1,
                          }}
                          className="h-full bg-gradient-to-r from-[#c49a35] via-[#e0c16b] to-[#c49a35]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-md md:p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] bg-[#fffaf5] shadow-2xl"
            >
              {/* Modal Image */}
              <div className="relative h-60 shrink-0 md:h-80">
                <Image
                  src={getImageUrl(
                    selectedPlace
                  )}
                  alt={selectedPlace.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  unoptimized={shouldUnoptimize(
                    getImageUrl(
                      selectedPlace
                    )
                  )}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-md transition hover:bg-black/50"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-6 left-5 right-5 md:left-8 md:right-8">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${getCategoryColor(
                        selectedPlace.category
                      )}`}
                    >
                      {selectedPlace.category ||
                        "Attraction"}
                    </span>

                    {selectedPlace.builtYear && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                        <Calendar className="h-3.5 w-3.5" />

                        {selectedPlace.builtYear}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl leading-tight text-white md:text-5xl">
                    {selectedPlace.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="custom-scrollbar overflow-y-auto p-5 md:p-8">
                {/* Quick Information */}
                <div className="mb-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {selectedPlace.founderOrBuilder && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <Building2 className="mb-2 h-4 w-4 text-[#b18a25]" />

                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Built By
                      </p>

                      <p className="text-sm font-medium text-[#604a36]">
                        {
                          selectedPlace.founderOrBuilder
                        }
                      </p>
                    </div>
                  )}

                  {selectedPlace.entryFee && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <Ticket className="mb-2 h-4 w-4 text-[#b18a25]" />

                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Entry Fee
                      </p>

                      <p className="text-sm font-medium text-[#604a36]">
                        {selectedPlace.entryFee}
                      </p>
                    </div>
                  )}

                  {selectedPlace.openingHours && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <ClockIcon className="mb-2 h-4 w-4 text-[#b18a25]" />

                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Opening Hours
                      </p>

                      <p className="text-sm font-medium text-[#604a36]">
                        {
                          selectedPlace.openingHours
                        }
                      </p>
                    </div>
                  )}

                  {selectedPlace.bestTimeToVisit && (
                    <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-4">
                      <Award className="mb-2 h-4 w-4 text-[#b18a25]" />

                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#9b806a]">
                        Best Time
                      </p>

                      <p className="text-sm font-medium text-[#604a36]">
                        {
                          selectedPlace.bestTimeToVisit
                        }
                      </p>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                {getFullDescription(
                  selectedPlace
                ) && (
                  <div className="mb-4 rounded-2xl border border-[#d4af37]/10 bg-white p-5">
                    <SectionTitle
                      icon={
                        <Info className="h-4 w-4" />
                      }
                      title="About This Place"
                    />

                    <div className="space-y-3">
                      {renderDescription(
                        getFullDescription(
                          selectedPlace
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* History */}
                {selectedPlace.history && (
                  <div className="mb-4 rounded-2xl border border-[#d4af37]/10 bg-white p-5">
                    <SectionTitle
                      icon={
                        <Building2 className="h-4 w-4" />
                      }
                      title="History"
                    />

                    <p className="whitespace-pre-wrap text-sm leading-7 text-[#806d5d]">
                      {selectedPlace.history}
                    </p>
                  </div>
                )}

                {/* Architecture + Significance */}
                {(selectedPlace.architecturalStyle ||
                  selectedPlace.importance) && (
                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    {selectedPlace.architecturalStyle && (
                      <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-5">
                        <SectionTitle
                          icon={
                            <Star className="h-4 w-4" />
                          }
                          title="Architecture"
                        />

                        <p className="text-sm leading-7 text-[#806d5d]">
                          {
                            selectedPlace.architecturalStyle
                          }
                        </p>
                      </div>
                    )}

                    {selectedPlace.importance && (
                      <div className="rounded-2xl border border-[#d4af37]/10 bg-white p-5">
                        <SectionTitle
                          icon={
                            <Award className="h-4 w-4" />
                          }
                          title="Significance"
                        />

                        <p className="text-sm leading-7 text-[#806d5d]">
                          {
                            selectedPlace.importance
                          }
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Visitor Tips */}
                {selectedPlace.visitorTips &&
                  selectedPlace.visitorTips.length >
                    0 && (
                    <div className="mb-4 rounded-2xl border border-amber-200/50 bg-amber-50/50 p-5">
                      <SectionTitle
                        icon={
                          <Lightbulb className="h-4 w-4" />
                        }
                        title="Visitor Tips"
                      />

                      <ul className="space-y-2">
                        {selectedPlace.visitorTips.map(
                          (
                            tip: string,
                            index: number
                          ) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm leading-6 text-[#806d5d]"
                            >
                              <span className="mt-1 text-[#c49a35]">
                                •
                              </span>

                              <span>{tip}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Interesting Facts */}
                {selectedPlace.interestingFacts &&
                  selectedPlace.interestingFacts
                    .length > 0 && (
                    <div className="mb-4 rounded-2xl border border-rose-200/40 bg-rose-50/40 p-5">
                      <SectionTitle
                        icon={
                          <Heart className="h-4 w-4" />
                        }
                        title="Interesting Facts"
                      />

                      <ul className="space-y-2">
                        {selectedPlace.interestingFacts.map(
                          (
                            fact: string,
                            index: number
                          ) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm leading-6 text-[#806d5d]"
                            >
                              <span className="mt-1 text-rose-400">
                                ✦
                              </span>

                              <span>{fact}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Tags */}
                {selectedPlace.galleryKeywords &&
                  selectedPlace.galleryKeywords.length >
                    0 && (
                    <div className="mb-6">
                      <SectionTitle
                        icon={
                          <Tag className="h-4 w-4" />
                        }
                        title="Tags"
                      />

                      <div className="flex flex-wrap gap-2">
                        {selectedPlace.galleryKeywords.map(
                          (
                            keyword: string,
                            index: number
                          ) => (
                            <span
                              key={index}
                              className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-1.5 text-xs text-[#806d5d]"
                            >
                              #{keyword}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Action Buttons */}
                <div className="border-t border-[#d4af37]/15 pt-6">
                  <div className="flex flex-wrap gap-3">
                    {/* Google Maps */}
                    <a
                      href={getGoogleMapsUrl(
                        selectedPlace
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#b18a25] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b18a25]/20 transition hover:-translate-y-0.5 hover:bg-[#96751d]"
                    >
                      <MapPin className="h-4 w-4" />

                      Google Maps

                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    {/* Directions */}
                    <a
                      href={getDirectionUrl(
                        selectedPlace
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white px-5 py-3 text-sm font-semibold text-[#604a36] transition hover:-translate-y-0.5 hover:bg-[#fff8ec]"
                    >
                      <Navigation className="h-4 w-4 text-[#b18a25]" />

                      Get Directions

                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    {/* Share */}
                    <button
                      onClick={() =>
                        sharePlace(
                          selectedPlace
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white px-5 py-3 text-sm font-semibold text-[#604a36] transition hover:-translate-y-0.5 hover:bg-[#fff8ec]"
                    >
                      <Share2 className="h-4 w-4 text-[#b18a25]" />

                      Share
                    </button>

                    {/* Wikipedia */}
                    {selectedPlace.wikipedia && (
                      <a
                        href={
                          selectedPlace.wikipedia
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white px-5 py-3 text-sm font-semibold text-[#604a36] transition hover:-translate-y-0.5 hover:bg-[#fff8ec]"
                      >
                        <Info className="h-4 w-4 text-[#b18a25]" />

                        Wikipedia

                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {/* Official Website */}
                    {selectedPlace.officialWebsite && (
                      <a
                        href={
                          selectedPlace.officialWebsite
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white px-5 py-3 text-sm font-semibold text-[#604a36] transition hover:-translate-y-0.5 hover:bg-[#fff8ec]"
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

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#72583f]">
      <span className="text-[#b18a25]">
        {icon}
      </span>

      {title}
    </h4>
  );
}