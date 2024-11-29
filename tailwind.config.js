/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], theme: {
    extend: {
      colors: {
        firstcolor: "#e10914",
        cardcolor_1: "#fff3e1",
        cardcolor_2: "#ffe4e9",
        cardcolor_3: "#ffedba",
        cardcolor_4: "#ead6c0",
      },
      boxShadow: {
        "myboxshadow": 'rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem"
        }
      },
      fontFamily: {
        Kalnia: ['Kalnia', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
        Playball: ['Playball', 'cursive'],
      },
    },
  },
  plugins: [],
}

