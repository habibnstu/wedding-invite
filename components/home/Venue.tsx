"use client";

import { motion } from "framer-motion";
import {
  Home,
  Navigation,
  MapPin,
  CarFront,
  Heart,
  CalendarDays,
  Clock,
} from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function Venue() {
  const { brideHouse, groomHouse, dateDisplay, timeDisplay } =
    weddingConfig.wedding;

  return (
    <section id="venue" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="section-heading">Our Wedding Journey</h2>

          <p className="mt-4 text-gold-700/70 dark:text-cream-200/70 max-w-2xl mx-auto">
            The beginning of our forever starts with a beautiful journey from
            the Groom's Residence to the Bride's Residence, where our wedding
            ceremony will be celebrated.
          </p>

          <div className="gold-divider mt-6" />
        </div>

        {/* Journey */}

        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">

          {/* Groom */}

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 text-center"
          >
            <Home className="w-10 h-10 mx-auto text-gold-500 mb-4" />

            <h3 className="font-display text-xl">
              Groom's Residence
            </h3>

            <p className="mt-3 font-semibold">
              {groomHouse.houseName}
            </p>

            <p>{groomHouse.village}</p>

            <p>Post Office: {groomHouse.postOffice}</p>

            <p>{groomHouse.upazila}, {groomHouse.district}</p>
          </motion.div>

          {/* Journey */}

          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: .8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center"
          >
            <CarFront className="w-12 h-12 text-gold-500 animate-bounce" />

            <h3 className="mt-4 font-display text-xl">
              Wedding Procession
            </h3>

            <p className="text-sm opacity-70">
              Borjatri Journey
            </p>

            <div className="w-1 h-16 bg-gold-300 my-5 rounded-full" />

            <Heart
              className="text-rose-500"
              fill="currentColor"
              size={30}
            />
          </motion.div>

          {/* Bride */}

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 text-center border-2 border-gold-400 shadow-xl"
          >
            <MapPin className="w-10 h-10 mx-auto text-rose-500 mb-4" />

            <span className="text-xs uppercase tracking-widest text-gold-500">
              Wedding Venue
            </span>

            <h3 className="font-display text-xl mt-2">
              Bride's Residence
            </h3>

            <p className="mt-3 font-semibold">
              {brideHouse.houseName}
            </p>

            <p>{brideHouse.village}</p>

            <p>Post Office: {brideHouse.postOffice}</p>

            <p>{brideHouse.upazila}, {brideHouse.district}</p>
          </motion.div>

        </div>

        {/* Wedding Info */}

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">

            <div className="flex gap-4">
              <CalendarDays className="text-gold-500" />
              <div>
                <h4 className="font-semibold">
                  Wedding Date
                </h4>

                <p>{dateDisplay}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-gold-500" />
              <div>
                <h4 className="font-semibold">
                  Ceremony Time
                </h4>

                <p>{timeDisplay}</p>
              </div>
            </div>

          </div>
        </motion.div>

  
      </div>
    </section>
  );
}