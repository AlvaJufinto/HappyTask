/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '768px' },
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      grey: {
        default: '#F8F8F8',
        light: '#00000033',
        medium: '#00000066'
      },
      orange: {
        default: '#FF9952',
        light: '#FFE5D3' 
      },
      red: {
        default: '#FF4A4A',
      },
      yellow: {
        default: '#FFA901'
      }
    },
    fontFamily: {
      poppins: ['DM Sans', 'sans-serif'],
    },
  },
  
  plugins: [
    require('flowbite/plugin')
  ],
  
}
