/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cherish:["Cherish", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    }, 
  },
  plugins: [],
};
