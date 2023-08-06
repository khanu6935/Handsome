/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1140px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
