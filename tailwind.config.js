/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#00020F',
        'primary': '#6329B3',
        'primary-font': '#FFFFFF',
        'secondary-font': '#BDBDBD',
        'gradient-from': '#4A00E0',
        'gradient-to': '8E2DE2',
        'secondary-bg': '#070917,'
      },
      boxShadow: {
        'primary': '0 0 25px 0px rgba(99, 41, 179, 1)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}