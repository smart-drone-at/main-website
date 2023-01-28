/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsThin: ["Poppins Thin", "sans-serif"],
        poppinsBold: ["Poppins Bold", "sans-serif"],
        poppinsSemiBold: ["Poppins SemiBold", "sans-serif"],
      },
      colors: {
        primaryBlue: "#007BFF",
        gray: "#D9D9D9",
        grayishBlue: "#34495e",
      },
      boxShadow: {
        navbar: "0 5px 30px -10px rgb(0 0 0 / 15%)",
        holistic: "0 5px 30px -10px rgb(0 0 0 / 20%)",
      },
      keyframes: {
        "fly-in": {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        fly: { "50%": { transform: "translateY(7px)" } },
        "fog-left": {
          "0%": { opacity: "1" },
          "100%": { transform: "translateX(-100px)", opacity: "0" },
        },
        "fog-right": {
          "0%": { opacity: "1" },
          "100%": { transform: "translateX(100px)", opacity: "0" },
        },
      },
      animation: {
        // "drone-fly":
        //   "fly-in 1.5s ease-out, fly 2500ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        "drone-fly":
          "fly 2500ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        "fog-right": "fog-right 1s ease-out 0.8s 1 forwards",
        "fog-left": "fog-left 1s ease-out 0.8s 1 forwards",
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};
