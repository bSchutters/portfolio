/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backg: "#0D0D0D",
        primary: "#1C1C1E",
        secondary: "#8A8A8B",
      },
      fontFamily: {
        diamond: ["Diamond", "sans-serif"],
        playfair: ["Playfair", "sans-serif"],
      },
    },
  },
  plugins: [],
};
