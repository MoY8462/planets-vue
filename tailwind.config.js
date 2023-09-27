/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        'DEFAULT': "#0000FF",
        'dark': "#050A30",
        'navy': "#000C66",
        'baby': "#7EC8E3"
      },
      'white': "#FAFBF4"
    },
    extend: {
      fontFamily: {
        custom: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [
    require("./src/theme/planet.theme"),
    plugin(function({ addBase, theme}){
      addBase({
        '#app': {
          "@apply min-h-screen w-full px-10 py-3": {},
          "@apply font-custom": {},
          "@apply bg-[url('./src/assets/dots.svg')] bg-no-repeat bg-cover": {},
        }
      })
    })
  ],
}