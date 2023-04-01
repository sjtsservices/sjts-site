// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
const config = {
  corePlugins: {
    preflight: false
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[700],
        'primary-dark': colors.indigo[900]
      },
      aspectRatio: {
        '4/3': '3 / 4'
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};

module.exports = config;
