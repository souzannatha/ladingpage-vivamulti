import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueCustom: {
          blue01: "#522AF9",
          blue02: "#73CBD9",
          blue03: "#250A94",
          blue04: "#E8E8FF",
          blue05: "#51477D",
          blue06: "#3712D0",
          blueBlack: "#7F77A0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
