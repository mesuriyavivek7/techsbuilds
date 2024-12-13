/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Nunito Sans', 'serif'], // Add Google Font here
        archivo: ["Archivo Black",'sans-serif'],
        anton: ["Anton SC", 'sans-serif']
      },
      colors:{
        darkblue:"#141d38",
        bluelight:"#43baff",
        purple:"#7141b1",
        darkpurple:"#221f3c",
        midpurple:"#262051",
        textpurple:"#8e88b8",
        purplegray:"#6d6d6d"
      }
    },
  },
  plugins: [],
}

// #1d2c38