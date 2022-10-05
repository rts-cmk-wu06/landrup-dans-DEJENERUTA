/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "'Ubuntu', sans-serif",
        logo: "'Racing Sans One', cursive",
      },
      colors: {
        white: "#EAEAEA",
        black: "#000000",
        purple: "#5E2E53",
        pink: "#E1A1E9",
      },
      fontSize: {
        larger: "36px",
        large: "24px",
        medium: "18px",
      },
      plugins: [],
    },
  },
};
