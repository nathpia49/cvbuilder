import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b1220",
        foreground: "#f7fafc",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#f8fafc",
        },
        muted: "#1c2333",
        border: "#1f2937",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(37, 99, 235, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
