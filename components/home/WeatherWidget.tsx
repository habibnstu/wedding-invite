"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Droplets, Wind, CloudRain, Sun } from "lucide-react";
import { weddingConfig } from "@/lib/config";

type WeatherData = {
  temperature: number;
  windSpeed: number;
  humidity: number;
  precipitationChance: number;
  weatherCode: number;
};

// Open-Meteo is a free weather API that requires no API key.
export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { venueLat, venueLng } = weddingConfig.wedding;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${venueLat}&longitude=${venueLng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setWeather({
          temperature: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          precipitationChance: data.current.precipitation_probability ?? 0,
          weatherCode: data.current.weather_code,
        });
      })
      .catch(() => setWeather(null))
      .finally(() => setLoading(false));
  }, []);

  const conditionLabel = (code?: number) => {
    if (code === undefined) return "Clear";
    if (code === 0) return "Clear Sky";
    if (code <= 3) return "Partly Cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    return "Stormy";
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-md mx-auto glass rounded-2xl p-6">
        <h3 className="font-display text-xl text-gold-800 dark:text-gold-200 text-center mb-4">
          Weather Near the Venue
        </h3>

        {loading ? (
          <div className="skeleton h-24 rounded-xl" />
        ) : weather ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center gap-3">
              <Sun className="w-8 h-8 text-gold-500" />
              <div>
                <p className="text-2xl font-display text-gold-800 dark:text-gold-200">
                  {Math.round(weather.temperature)}°C
                </p>
                <p className="text-xs text-gold-600/70">{conditionLabel(weather.weatherCode)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-700 dark:text-gold-300">
              <Droplets className="w-4 h-4" /> {weather.humidity}% humidity
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-700 dark:text-gold-300">
              <CloudRain className="w-4 h-4" /> {weather.precipitationChance}% rain
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-700 dark:text-gold-300">
              <Wind className="w-4 h-4" /> {weather.windSpeed} km/h
            </div>
          </motion.div>
        ) : (
          <p className="text-center text-sm text-gold-500 flex items-center justify-center gap-2">
            <Cloud className="w-4 h-4" /> Weather unavailable right now
          </p>
        )}
      </div>
    </section>
  );
}
