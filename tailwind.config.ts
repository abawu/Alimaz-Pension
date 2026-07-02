import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        warmWhite: "#FAF9F6",
        softIvory: "#F5F3EE",
        gold: "#C8A96A",
        champagne: "#E5D3A1",
        charcoal: "#222222",
        slate: "#666666",
        beige: "#EAE3D6"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 22px 60px rgba(34, 34, 34, 0.10)",
        nav: "0 14px 40px rgba(34, 34, 34, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
