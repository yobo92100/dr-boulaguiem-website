import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Primary — deep, credible forest green
        forest: {
          50: "#eef5f1",
          100: "#d5e7dd",
          200: "#abcfbc",
          300: "#7cb298",
          400: "#4f9573",
          500: "#317a57",
          600: "#1f5f44",
          700: "#184b37",
          800: "#123729",
          900: "#0c231b"
        },
        // Warm accent — clay / terracotta
        clay: {
          DEFAULT: "#bf6f52",
          light: "#d69175",
          dark: "#9f5539",
          50: "#f9ede7"
        },
        // Restrained brass / gold
        gold: {
          DEFAULT: "#b0893f",
          light: "#c9a566",
          dark: "#8c6a2c"
        },
        // Neutrals — warm paper tones
        cream: "#faf6ec",
        sand: "#f2e9d8",
        ivory: "#fdfaf3",
        ink: "#16241d",
        muted: "#5c6b63",

        // Legacy aliases (keep old class names working during migration)
        medical: {
          blue: "#1f5f44",
          navy: "#16241d",
          sky: "#eef5f1"
        },
        pharmacy: {
          green: "#1f5f44",
          mint: "#d5e7dd"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Fraunces", "ui-serif", "Georgia", "serif"],
        heading: ["var(--font-fraunces)", "Fraunces", "ui-serif", "Georgia", "serif"]
      },
      letterSpacing: {
        tightest: "-0.03em"
      },
      boxShadow: {
        soft: "0 2px 6px rgba(18, 55, 41, 0.04), 0 14px 40px rgba(18, 55, 41, 0.07)",
        lift: "0 4px 10px rgba(18, 55, 41, 0.05), 0 30px 60px rgba(18, 55, 41, 0.12)",
        ring: "0 0 0 1px rgba(18, 55, 41, 0.06)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem"
      },
      backgroundImage: {
        "forest-radial":
          "radial-gradient(120% 120% at 15% 10%, #206349 0%, #143a2b 55%, #0c231b 100%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1s ease both",
        "float-slow": "float-slow 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
