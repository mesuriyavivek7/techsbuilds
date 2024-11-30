/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Nunito Sans', 'serif'], // Add Google Font here
        archivo: ["Archivo Black",'sans-serif']
      },
      colors:{
        darkblue:"#141d38",
        bluelight:"#43baff",
        purple:"#7141b1"
      }
    },
  },
  plugins: [],
}

