/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1E",
        secondary: "#8A8A8B",
      },
    },
  },
  plugins: [],
};
