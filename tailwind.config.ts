import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#D82E34",
          secondary: "#7A7A7A",
        },
        dev: {
          primary: "#000000",

          secondary: "#7A7A7A",

          accent: "#68f27f",

          neutral: "#23243e",

          "base-100": "#eae8f2",
        },
      },
    ],
  },
};
export default config;
