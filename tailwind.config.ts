import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: "#1B6B4A",
          navy: "#17352c",
          sky: "#edf6f1"
        },
        pharmacy: {
          green: "#1B6B4A",
          mint: "#d4eddf"
        },
        ivory: "#fbf7ee"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-dm-sans)", "DM Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(27, 107, 74, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
