import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#050505",
        obsidian: "#0b0d17",
        aurum: "#e8c280",
        platinum: "#f5f5f0",
        amethyst: "#6c5ce7",
        sapphire: "#3f7cff",
        velvet: "#1a0f29",
        quartz: "#c9d6ff",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
      },
      boxShadow: {
        aurora: "0 40px 120px -35px rgba(108, 92, 231, 0.55)",
        luxe: "0 20px 60px -20px rgba(15, 23, 42, 0.65)",
      },
      backdropBlur: {
        luscious: "30px",
      },
      borderRadius: {
        super: "3rem",
      },
      backgroundImage: {
        "lux-gradient":
          "radial-gradient(circle at 20% 20%, rgba(108, 92, 231, 0.22) 0%, rgba(108, 92, 231, 0) 40%), radial-gradient(circle at 80% 0%, rgba(63, 124, 255, 0.18) 0%, rgba(63, 124, 255, 0) 45%), radial-gradient(circle at 50% 80%, rgba(232, 194, 128, 0.14) 0%, rgba(232, 194, 128, 0) 60%)",
        "velvet-noise":
          "url('data:image/svg+xml,%3Csvg width=\"160\" height=\"160\" viewBox=\"0 0 160 160\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect width=\"160\" height=\"160\" fill=\"%230b0d17\"/%3E%3Cg opacity=\"0.2\"%3E%3Ccircle cx=\"20\" cy=\"18\" r=\"2.5\" fill=\"%236c5ce7\"/%3E%3Ccircle cx=\"68\" cy=\"40\" r=\"1.5\" fill=\"%23e8c280\"/%3E%3Ccircle cx=\"120\" cy=\"24\" r=\"2\" fill=\"%236c5ce7\"/%3E%3Ccircle cx=\"40\" cy=\"110\" r=\"1.7\" fill=\"%233f7cff\"/%3E%3Ccircle cx=\"140\" cy=\"120\" r=\"2.2\" fill=\"%23e8c280\"/%3E%3Ccircle cx=\"88\" cy=\"96\" r=\"1.3\" fill=\"%236c5ce7\"/%3E%3Ccircle cx=\"118\" cy=\"150\" r=\"1.8\" fill=\"%233f7cff\"/%3E%3Ccircle cx=\"24\" cy=\"150\" r=\"1.2\" fill=\"%23e8c280\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -20px, 0) scale(1.02)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "float-slow 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 10s ease-in-out infinite",
        "slide-up": "slide-up 1s ease forwards",
        shimmer: "shimmer 6s linear infinite",
      },
      spacing: {
        royal: "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
