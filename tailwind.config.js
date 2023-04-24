/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightgray: "hsl(212, 45%, 89%)",
        grayishblue: "hsl(220, 15%, 55%)",
        darkblue: "hsl(218, 44%, 22%)",
      },
      screens: {
        xs: "375px",
        xl: "1440px",
      },
      fontFamily: {
        outfit: "Outfit, sans-serif",
      },
    },
  },
  plugins: [],
};
