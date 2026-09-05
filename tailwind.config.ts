import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        ink: {
          950: "#08080a",
          900: "#0c0c0f",
          800: "#111114",
          700: "#17171b",
          600: "#1e1e23",
          500: "#2a2a30",
          400: "#3a3a42",
          300: "#5a5a63",
          200: "#8b8b93",
          100: "#c9c9cf",
        },
        bone: {
          50: "#faf8f4",
          100: "#f2efe8",
          200: "#e6e2d8",
          300: "#c9c4b6",
        },
        // Brand (dark editorial blue — Persian)
        signal: {
          50: "#eef1fc",
          200: "#b5c0ee",
          400: "#3c5adf",
          500: "#1c39bb",
          600: "#122782",
          700: "#0a184f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SF Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        tighter2: "-0.035em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-strong": "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      backdropBlur: {
        xxl: "56px",
      },
      boxShadow: {
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -1px 0 rgba(0,0,0,0.35), 0 20px 60px -20px rgba(0,0,0,0.55)",
        soft: "0 12px 48px -18px rgba(0,0,0,0.35)",
        hard: "0 32px 80px -24px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
