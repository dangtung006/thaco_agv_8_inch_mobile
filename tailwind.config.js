/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#377DE5',
        blue500: '#21AFFF',
        blue200: '#E8F7FF',
        red: '#FF462D',
        greyBg: '#BFBFBF',
        orange: '#FBC94B',
        green: '#2EAB47',
        greyText: '#8D8D8D'
      },
    },
  },
  plugins: [],
}

