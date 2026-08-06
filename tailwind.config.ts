import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9ee",
          100: "#f9edc9",
          200: "#f3db98",
          300: "#eac25e",
          400: "#e3ac3a",
          500: "#c8922a",
          600: "#a67420",
          700: "#82581c",
          800: "#6b481e",
          900: "#5a3d1e",
        },
        cream: {
          50: "#fffdf9",
          100: "#fdf8ef",
          200: "#faf0dc",
          300: "#f5e5c3",
        },
        blush: {
          50: "#fdf3f4",
          100: "#fbe4e7",
          200: "#f6c9d0",
          300: "#efa4b0",
          400: "#e37b8d",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f3db98 0%, #c8922a 50%, #e3ac3a 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-slower": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
