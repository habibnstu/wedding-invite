"use client";

import { motion } from "framer-motion";
import {
  Home,
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
    <section
      id="venue"
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="section-heading">
            Our Wedding Journey
          </h2>

          <p
            className="
              mt-3
              sm:mt-4
              w-full
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              text-gold-700/70
              dark:text-cream-200/70
              leading-relaxed
            "
          >
            The beginning of our forever starts with a beautiful journey from
            the Groom&apos;s Residence to the Bride&apos;s Residence, where our
            wedding ceremony will be celebrated.
          </p>

          <div className="gold-divider mt-5 sm:mt-6" />
        </div>

        {/* Wedding Journey */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
            md:gap-8
            items-stretch
            lg:items-center
            mb-10
            sm:mb-12
            md:mb-16
          "
        >

          {/* Groom Residence */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            className="
              w-full
              glass
              rounded-2xl
              sm:rounded-3xl
              p-5
              sm:p-6
              text-center
            "
          >
            <Home
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10
                mx-auto
                text-gold-500
                mb-3
                sm:mb-4
              "
            />

            <h3
              className="
                font-display
                text-lg
                sm:text-xl
                text-gold-800
                dark:text-gold-200
              "
            >
              Groom&apos;s Residence
            </h3>

            <div
              className="
                mt-3
                text-sm
                sm:text-base
                text-gold-700
                dark:text-cream-100
                leading-relaxed
                break-words
              "
            >
              <p className="font-semibold">
                {groomHouse.houseName}
              </p>

              <p>{groomHouse.village}</p>

              <p>
                Post Office: {groomHouse.postOffice}
              </p>

              <p>
                {groomHouse.upazila}, {groomHouse.district}
              </p>
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: true }}
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-2
              md:py-4
            "
          >
            <CarFront
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12
                text-gold-500
                animate-bounce
              "
            />

            <h3
              className="
                mt-3
                sm:mt-4
                font-display
                text-lg
                sm:text-xl
                text-gold-800
                dark:text-gold-200
              "
            >
              Wedding Procession
            </h3>

            <p
              className="
                text-xs
                sm:text-sm
                opacity-70
                mt-1
              "
            >
              Borjatri Journey
            </p>

            {/* Journey Line */}
            <div
              className="
                w-1
                h-12
                sm:h-16
                bg-gold-300
                my-4
                sm:my-5
                rounded-full
              "
            />

            <Heart
              className="text-rose-500"
              fill="currentColor"
              size={26}
            />
          </motion.div>

          {/* Bride Residence */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            className="
              w-full
              glass
              rounded-2xl
              sm:rounded-3xl
              p-5
              sm:p-6
              text-center
              border-2
              border-gold-400
              shadow-xl
            "
          >
            <MapPin
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10
                mx-auto
                text-rose-500
                mb-3
                sm:mb-4
              "
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.15em]
                sm:tracking-widest
                text-gold-500
              "
            >
              Wedding Venue
            </span>

            <h3
              className="
                font-display
                text-lg
                sm:text-xl
                text-gold-800
                dark:text-gold-200
                mt-2
              "
            >
              Bride&apos;s Residence
            </h3>

            <div
              className="
                mt-3
                text-sm
                sm:text-base
                text-gold-700
                dark:text-cream-100
                leading-relaxed
                break-words
              "
            >
              <p className="font-semibold">
                {brideHouse.houseName}
              </p>

              <p>{brideHouse.village}</p>

              <p>
                Post Office: {brideHouse.postOffice}
              </p>

              <p>
                {brideHouse.upazila}, {brideHouse.district}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Wedding Information */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          viewport={{ once: true }}
          className="
            w-full
            glass
            rounded-2xl
            sm:rounded-3xl
            p-5
            sm:p-6
            md:p-8
            mb-8
            sm:mb-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              sm:gap-6
              md:gap-8
            "
          >

            {/* Wedding Date */}
            <div
              className="
                flex
                items-start
                gap-3
                sm:gap-4
              "
            >
              <CalendarDays
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  shrink-0
                  text-gold-500
                "
              />

              <div className="min-w-0">
                <h4
                  className="
                    font-semibold
                    text-sm
                    sm:text-base
                    text-gold-800
                    dark:text-gold-200
                  "
                >
                  Wedding Date
                </h4>

                <p
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    text-gold-700
                    dark:text-cream-100
                    break-words
                  "
                >
                  {dateDisplay}
                </p>
              </div>
            </div>

            {/* Ceremony Time */}
            <div
              className="
                flex
                items-start
                gap-3
                sm:gap-4
              "
            >
              <Clock
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  shrink-0
                  text-gold-500
                "
              />

              <div className="min-w-0">
                <h4
                  className="
                    font-semibold
                    text-sm
                    sm:text-base
                    text-gold-800
                    dark:text-gold-200
                  "
                >
                  Ceremony Time
                </h4>

                <p
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    text-gold-700
                    dark:text-cream-100
                    break-words
                  "
                >
                  {timeDisplay}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}