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
} from "lucide-react";
import { weddingConfig } from "@/lib/config";
import { useState } from "react";

export default function NearbyPlaces() {
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);

  const openModal = (place: any) => {
    setSelectedPlace(place);
  };

  const closeModal = () => {
    setSelectedPlace(null);
  };

  // Get the first image from imageSources or use placeholder
  const getImageUrl = (place: any) => {
    if (place.image && typeof place.image === "string") {
      return place.image;
    }
    if (place.imageSources && place.imageSources.length > 0 && place.imageSources[0]?.url) {
      return place.imageSources[0].url;
    }
    return "/placeholder.jpg";
  };

  // Format distance display
  const getDistanceDisplay = (place: any) => {
    if (place.distanceFromVenue) {
      const match = place.distanceFromVenue.match(/(\d+)\s*(কিমি|km)/i);
      if (match) {
        return `${match[1]} ${match[2]}`;
      }
      return place.distanceFromVenue;
    }
    return place.distance || "";
  };

  // Decide if we should skip Next.js image optimization
  const shouldUnoptimize = (url: string) => {
    return (
      url.startsWith("https://upload.wikimedia.org") ||
      url.startsWith("https://commons.wikimedia.org") ||
      url.includes("wikimedia") ||
      url.includes("googleusercontent") ||
      url.includes("lh3.googleusercontent.com")
    );
  };

  return (
    <section id="nearby" className="py-24 px-4 bg-blush-50/40 dark:bg-white/[0.02]">
      <h2 className="section-heading">Places to Explore Nearby</h2>
      <div className="gold-divider mt-4 mb-12" />

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {weddingConfig.nearbyPlaces.map((place, i) => {
          const imageUrl = getImageUrl(place);
          const distanceDisplay = getDistanceDisplay(place);

          return (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden glass bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gold-200/20 dark:border-white/10 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full bg-gold-100/50 dark:bg-white/5">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={place.name || "Nearby place"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={shouldUnoptimize(imageUrl)}
                    onError={(e) => {
                      // Fallback if the image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.jpg";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gold-600 dark:text-cream-100/60">
                    No image
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm inline-block">
                    {place.category}
                  </span>
                  {distanceDisplay && (
                    <span className="text-xs text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm inline-block ml-2">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {distanceDisplay}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="font-display text-lg text-gold-900 dark:text-cream-100 leading-tight">
                  {place.name}
                </h3>

                <p className="text-sm text-gold-700/70 dark:text-cream-100/60 mt-1 line-clamp-2">
                  {place.shortDescription || place.fullDescription?.slice(0, 120)}
                </p>

                <button
                  onClick={() => openModal(place)}
                  className="mt-3 w-full py-2.5 text-sm bg-gold-600/10 hover:bg-gold-600/20 dark:bg-gold-400/10 dark:hover:bg-gold-400/20 text-gold-700 dark:text-cream-100 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Info className="w-4 h-4" />
                  <span>More Info</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-gold-50/80 dark:bg-neutral-800/80 backdrop-blur-sm border-b border-gold-200/20 dark:border-white/10">
                <h3 className="font-display text-xl text-gold-900 dark:text-cream-100">
                  {selectedPlace.name}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gold-600 hover:text-blush-400 dark:text-gold-400 dark:hover:text-gold-300 transition-colors rounded-lg hover:bg-gold-100/50 dark:hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 custom-scrollbar">
                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedPlace.builtYear && (
                    <div className="flex items-center gap-2 text-sm text-gold-700/80 dark:text-cream-100/70 bg-gold-50/50 dark:bg-white/5 px-3 py-2 rounded-lg">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span className="truncate">{selectedPlace.builtYear}</span>
                    </div>
                  )}
                  {selectedPlace.founderOrBuilder && (
                    <div className="flex items-center gap-2 text-sm text-gold-700/80 dark:text-cream-100/70 bg-gold-50/50 dark:bg-white/5 px-3 py-2 rounded-lg col-span-2">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span className="truncate">{selectedPlace.founderOrBuilder}</span>
                    </div>
                  )}
                  {selectedPlace.entryFee && (
                    <div className="flex items-center gap-2 text-sm text-gold-700/80 dark:text-cream-100/70 bg-gold-50/50 dark:bg-white/5 px-3 py-2 rounded-lg col-span-2">
                      <Ticket className="w-4 h-4 shrink-0" />
                      <span>{selectedPlace.entryFee}</span>
                    </div>
                  )}
                  {selectedPlace.openingHours && (
                    <div className="flex items-center gap-2 text-sm text-gold-700/80 dark:text-cream-100/70 bg-gold-50/50 dark:bg-white/5 px-3 py-2 rounded-lg col-span-2">
                      <ClockIcon className="w-4 h-4 shrink-0" />
                      <span>{selectedPlace.openingHours}</span>
                    </div>
                  )}
                  {selectedPlace.bestTimeToVisit && (
                    <div className="flex items-center gap-2 text-sm text-gold-700/80 dark:text-cream-100/70 bg-amber-50/50 dark:bg-amber-500/10 px-3 py-2 rounded-lg col-span-2">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>{selectedPlace.bestTimeToVisit}</span>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                {selectedPlace.fullDescription && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2">
                      Description
                    </h4>
                    <p className="leading-relaxed text-sm text-gold-700/80 dark:text-cream-100/70">
                      {selectedPlace.fullDescription}
                    </p>
                  </div>
                )}

                {/* History */}
                {selectedPlace.history && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2">
                      History
                    </h4>
                    <p className="leading-relaxed text-sm text-gold-700/80 dark:text-cream-100/70">
                      {selectedPlace.history}
                    </p>
                  </div>
                )}

                {/* Naming History */}
                {selectedPlace.namingHistory && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2">
                      Naming History
                    </h4>
                    <p className="leading-relaxed text-sm text-gold-700/80 dark:text-cream-100/70">
                      {selectedPlace.namingHistory}
                    </p>
                  </div>
                )}

                {/* Architectural Style */}
                {selectedPlace.architecturalStyle && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2">
                      Architectural Style
                    </h4>
                    <p className="leading-relaxed text-sm text-gold-700/80 dark:text-cream-100/70">
                      {selectedPlace.architecturalStyle}
                    </p>
                  </div>
                )}

                {/* Importance */}
                {selectedPlace.importance && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2">
                      Importance
                    </h4>
                    <p className="leading-relaxed text-sm text-gold-700/80 dark:text-cream-100/70">
                      {selectedPlace.importance}
                    </p>
                  </div>
                )}

                {/* Visitor Tips */}
                {selectedPlace.visitorTips && selectedPlace.visitorTips.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4" />
                      <span>Visitor Tips</span>
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPlace.visitorTips.map((tip: string, idx: number) => (
                        <li key={idx} className="text-sm text-gold-700/80 dark:text-cream-100/70">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Interesting Facts */}
                {selectedPlace.interestingFacts && selectedPlace.interestingFacts.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>Interesting Facts</span>
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPlace.interestingFacts.map((fact: string, idx: number) => (
                        <li key={idx} className="text-sm text-gold-700/80 dark:text-cream-100/70">
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gallery Keywords / Tags */}
                {selectedPlace.galleryKeywords && selectedPlace.galleryKeywords.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gold-800 dark:text-cream-100 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Tag className="w-4 h-4" />
                      <span>Tags</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlace.galleryKeywords.map((keyword: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs bg-gold-600/10 dark:bg-gold-400/10 text-gold-700 dark:text-cream-100 px-3 py-1 rounded-full border border-gold-200/20 dark:border-white/5"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* External Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gold-200/20 dark:border-white/10">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      selectedPlace.googleMapsQuery || selectedPlace.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-blush-400 dark:text-gold-400 dark:hover:text-gold-300 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {selectedPlace.wikipedia && (
                    <a
                      href={selectedPlace.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-blush-400 dark:text-gold-400 dark:hover:text-gold-300 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>Wikipedia</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {selectedPlace.officialWebsite && (
                    <a
                      href={selectedPlace.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-blush-400 dark:text-gold-400 dark:hover:text-gold-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Official Website</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.5);
        }
      `}</style>
    </section>
  );
}