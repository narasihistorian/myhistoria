/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tabletMinWidth: "640px", // (min-width: 640px)
      laptopMinWidth: "1024px", // (min-width: 1024px)
      desktopMinWidth: "1280px", // (min-width: 1280px)
      fullHdMinWidth: "1440px", // (min-width: 1440px)
    },

    extend: {
      fontFamily: {
        NelaSlabLight: ["NelaSlabLight"],
        NewEleganceCondita: ["NewEleganceCondltaFont"],
        NewEleganceConsended: ["NewEleganceCondensedFont"],
        MonaSansUltraLightWide: ["MonaSansUltraLightWide"],
        MonaSansUltraLight: ["MonaSansUltraLight"],
      },
    },
  },
  plugins: [],
};
