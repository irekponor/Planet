/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title1: ["Roboto Slab", "serif"],
        name: ["Kurale", "serif"],
        title: ["Open Sans", "sans-serif"],
      },
      colors: {
        "custom-color": "#a0934b",
      },
    },
  },
  plugins: [],
};
