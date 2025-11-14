import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        per: {
          blue: "#102A43",
          blueLight: "#243B53",
          accent: "#2BB0ED",
          accentSoft: "#DCEEFB",
          background: "#020617"
        }
      }
    }
  },
  plugins: []
};

export default config;
