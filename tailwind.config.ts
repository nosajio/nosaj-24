import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { type PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  content: [
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
          // lg: "920px",
          lg: "65ch",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "0",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
      typography: ({ theme }: PluginUtils) => ({
        soot: {
          css: {
            "--tw-prose-body": theme("colors.soot.950"),
            hr: {
              borderColor: theme("colors.soot.300"),
            },
            h1: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
            h2: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
            h3: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
            h4: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.medium"),
            },
            strong: {
              fontWeight: theme("fontWeight.semibold"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography, animate],
};
export default config;
