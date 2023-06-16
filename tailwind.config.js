/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {boxShadow: {
      'narrow': '0 0px 4px 0px rgba(0, 0, 0, 0.3)',
    }},
  },
  plugins: [],
}

