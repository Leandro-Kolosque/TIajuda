/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
  };
