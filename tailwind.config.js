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
        grayishBlue: "#34495e"
      },
      boxShadow: {
        navbar: "0 5px 30px -10px rgb(0 0 0 / 15%)",
      },
    },
    container: {
      center: true,
      padding: "1.5rem"
    },
  },
  plugins: [],
};
