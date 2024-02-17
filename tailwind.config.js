/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-white": "#FBF6EE",
        "soft-black": "#191919",
        "error-red": "#BF3131",
        "success-green": "#79AC78",
        "hard-blue": "#29353C",
        "medium-blue": "#44576D",
        blue: "#768A96",
        "light-blue": "#AAC7D8",
        "soft-blue": "#DFEBF6",
      },
      fontFamily: {
        inter: ["Inter", "Sans Serif"],
        nunito: ["nunito", "Sans Serif"],
      },
      boxShadow: {
        menu: "0 -2px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
