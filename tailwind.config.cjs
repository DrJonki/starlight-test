const starlightPlugin = require("@astrojs/starlight-tailwind");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.sky,
        gray: colors.gray["900"],
      },
    },
  },
  plugins: [starlightPlugin()],
};
