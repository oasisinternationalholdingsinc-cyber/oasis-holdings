/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        wideplus: "0.18em",
        widemax: "0.28em",
      },
    },
  },
  plugins: [],
};
