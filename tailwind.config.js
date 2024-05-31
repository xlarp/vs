/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khula: ["var(--font-khula)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        "cum-purple": "#5768FF",
        "cust-gray": "#161616",
      },
    },
  },
  plugins: [],
};
