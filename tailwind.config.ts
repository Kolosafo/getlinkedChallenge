import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-lg": { max: "1023px" },
        "max-md": { max: "48em" },
        "max-sm": { max: "31.125em" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Montserrat: ["ClashDisplay", "sans-serif", "Unica One"],
      },
      keyframes: {
        in: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        out: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        up: {
          "0%": { transform: "translateY(3rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        down: {
          "0%": { transform: "translateY(-2rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(-2rem)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        in: "in .2s ease-in-out forwards",
        out: "out .2s ease-in-out forwards",
        up: "up .8s forwards",
        down: "down .8s forwards",
        slide: "slide .8s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
