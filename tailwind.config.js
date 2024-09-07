/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this if your source files are in different locations
  ],
  theme: {
    extend: {
      fontFamily: {
        // main: ["Outfit"],
        main: ["Merriweather"],
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
        "hero-desktop-background": "url('/src/assests/Image/hero.png')",
        "hero-mobile-background": "url('/src/assests/Image/heromobile.png')",
        "hero-tab-background": "url('/src/assests/Image/hero-tab.png')",
        "header-background-one": "url('/src/assests/Image/header-img-1.png')",
        "header-background-two": "url('/src/assests/Image/contact-header.png')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveInLeft: {
          "0% ": { transform: "translateX(-100px)", opacity: 0 },
          "60%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        moveInTop: {
          "0%": { transform: "translateY(-100px)", opacity: 0 },
          "60%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        moveInRight: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "60%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        moveInBottom: {
          "0%": { transform: "translateY(3rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        ping: {
          "75%": { transform: "scale(1.1)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 0 },
        },
        fadeInGradient: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        buttonHover: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        textShadowPulse: {
          "0%": { textShadow: "0 0 0 rgba(0, 0, 0, 0)" },
          "50%": { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" },
          "100%": { textShadow: "0 0 0 rgba(0, 0, 0, 0)" },
        },
        backgroundZoom: {
          "0%": { backgroundSize: "100%" },
          "100%": { backgroundSize: "105%" } /* Adjust size for zoom effect */,
        },
        gradientPulse: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        moveInLeft: "moveInLeft 2s ease-out",
        moveInRight: "moveInRight 2s ease-out",
        moveInBottom: "moveInBottom 2s ease-out",
        moveInTop: "moveInTop 2s ease-out",
        animatePing: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        backgroundZoom: "backgroundZoom 30s infinite alternate",
        gradientPulse: "gradientPulse 15s linear infinite",
      },
    },
  },
  plugins: [],
};
