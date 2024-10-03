/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#8b0000",
        white: "#fafad2",
        gray: "#2e2e2e",
        brown: "#cdb79e",
        cream: "#ede1b1",
      },
      fontFamily: {
        takoyaki: ["Takoyaki", "sans-serif"],
      },
    },
  },
  plugins: [],
};
