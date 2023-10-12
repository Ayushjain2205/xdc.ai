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
          primary: "#07ADCD",
          secondary: "#7A7A7A",
          "base-100": "#f8fbfc",
          "background-color": "#f8fbfc",
        },
        dev: {
          primary: "#16284B",
          secondary: "#7A7A7A",
          neutral: "#23243e",
          "base-100": "#f8fbfc",
          "background-color": "#f8fbfc",
        },
      },
    ],
  },
};
export default config;
