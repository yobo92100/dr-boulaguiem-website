import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: "#1266a3",
          navy: "#12344d",
          sky: "#e8f5fb"
        },
        pharmacy: {
          green: "#1f8a70",
          mint: "#e7f6ef"
        },
        ivory: "#fbf7ee"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(18, 52, 77, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
