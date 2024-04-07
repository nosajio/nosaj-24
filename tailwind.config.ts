import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      container: {
        center: true,
        screens: {
          lg: "920px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "0",
        },
      },
      colors: {
        soot: {
          "50": "#f7f7f8",
          "100": "#eeeef0",
          "200": "#d9d9de",
          "300": "#b9bac0",
          "400": "#92939e",
          "500": "#757682",
          "600": "#5e5e6b",
          "700": "#4d4d57",
          "800": "#42424a",
          "900": "#3a3a40",
          "950": "#1d1d20",
        },
      },
    },
  },
  plugins: [typography, animate],
};
export default config;
