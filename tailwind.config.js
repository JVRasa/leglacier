/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#C8EAFC",
        "dark-blue": "#A9DEF9",
        yellow: "#FCF6BD",
        green: "#D0F4DE",
        purple: "#E4C1F9",
        pink: "#FF99C8",
        grey: "#424A45",
      },
      fontFamily: { Mochiy: ["Mochiy Pop One", "sans-serif"] },
    },
  },
  plugins: [],
};
