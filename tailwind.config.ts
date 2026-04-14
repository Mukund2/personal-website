import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Anthropic-inspired palette
        cream: "#faf9f5",
        "cream-alt": "#f5f3ec",
        ink: "#141413",
        "ink-soft": "#2b2926",
        warm: "#6e6860",
        "warm-light": "#a39e96",
        line: "#e8e6dc",
        "line-soft": "#efece4",
        coral: "#d97757",
        "coral-deep": "#c55f3e",
        sage: "#788c5d",
        sky: "#6a9bcc",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,19,0.04), 0 8px 24px rgba(20,20,19,0.04)",
        lift: "0 2px 8px rgba(20,20,19,0.06), 0 24px 48px rgba(20,20,19,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
