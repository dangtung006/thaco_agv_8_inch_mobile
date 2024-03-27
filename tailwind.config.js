/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      shadow: {
        'chat-msg': '0px 1px 5px rgba(1, 1, 1, 0.1)',
      },
      colors: {
        blue: '#377DE5',
        blue500: '#21AFFF',
        blue200: '#E8F7FF',
        red: '#FF462D',
        greyBt: '#BFBFBF',
        greyBg: '#F3F3F3',
        orange: '#FBC94B',
        green: '#2EAB47',
        greyText: '#8D8D8D'
      },
    },
  },
  plugins: [],
}

