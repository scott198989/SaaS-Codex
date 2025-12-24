import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        "slate-ink": "#0f172a",
        "steel": "#1f2937",
        "panel": "#111827",
        "accent": "#22d3ee",
        "accent-strong": "#0891b2"
      },
      boxShadow: {
        "panel": "0 20px 50px rgba(8, 15, 30, 0.45)",
      }
    },
  },
  plugins: [],
} satisfies Config;
