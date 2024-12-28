import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#30C63E",
        primaryRed: "#EF3333",
        primaryYellow: "#F7C523",
        primaryGray: "#F0F3F7",
        primaryBlack: "#0E141E",
        primaryCustomGray: "#141c2a",
      },
    },
  },
  plugins: [],
};
export default config;
