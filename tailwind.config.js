import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    fontFamily: {
      lexend: ['Lexend Deca', 'sans-serif'],
    },
  },
},

  plugins: [animate],
};
