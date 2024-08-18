/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this if your source files are in different locations
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Outfit"],
        body: ["Raleway"],
        sub: ["Avenir"],
      },
      colors: {
        primary: {
          100: "#347856",
          200: "#252B42",
          300: "#161C2D",
        },
        secondary: {
          100: "#E6622C",
          200: "#64AB80",
          300: "#EEF4F0",
        },

        white: {
          100: "#fff",
          200: "#F8FCF9",
          300: "#F1F7F5",
        },
      },
      backgroundImage: {
        "hero-background": "url('/src/assests/Image/hero.png')",
        "hero-mobile-background": "url('/src/assests/Image/heromobile.png')",
      },
    },
  },
  plugins: [],
};
