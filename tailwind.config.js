/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{
          emerald: "#6ADF98",
          mint: "#00CC99",
        },
        b:{
          1: "#1176F3",
          2: "#1D55E6",
          3: "#2934DA",
          4: "#3513CD",
          5: "#1F24B7",
        },
        w:{
          1:"#FFFFFF",
          2:"#FFFFFC",
          3:"#FFFAFA",
          4:"#F2F3F4",
          5:"#1C3144",
        },
      },
      fontFamily: {
        stick: "var(--font-stick)",
        poppins: "var(--font-poppins)",
        exo: "var(--font-exo)",
        roboto: "var(--font-roboto)",
      },
      letterSpacing: {
        tagline: "15em"
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      zIndex:{
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
  };
