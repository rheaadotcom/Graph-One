import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a", // slate-900
        primary: {
          DEFAULT: "#ff0033", // The red accent
          hover: "#e6002e",
          light: "#ffe6ea",
        },
        secondary: {
          DEFAULT: "#f1f5f9", // slate-100
          foreground: "#334155", // slate-700
        },
        border: "#e2e8f0", // slate-200
        muted: {
          DEFAULT: "#f8fafc", // slate-50
          foreground: "#64748b", // slate-500
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        premium: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.025)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
