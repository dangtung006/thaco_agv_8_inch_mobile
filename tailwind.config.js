/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      shadow: {
        'chat-msg': '0px 1px 5px rgba(1, 1, 1, 0.1)',
      },
      colors: {
        blue: '#377DE5',
        blue200: '#E8F7FF',
        blue300: '#A4D3FE',
        blue400: '#83D2FF',
        blue500: '#0F6EB8',
        red: '#C91313',
        greyBt: '#BFBFBF',
        greyBt50: '#BFBFBF80',
        greyBg: '#F3F3F3',
        greyBorder: '#777777',
        orange100: '#F9ECAA80',
        orange500: '#e09423',
        orange: '#F2AC06',
        green: '#0CAB55',
        green50: '#C2EECC',
        greyText: '#8D8D8D',
        bg: '#F3F4F9',
        darkText: '#27433D',
      },
    },
  },
  plugins: [],
};
