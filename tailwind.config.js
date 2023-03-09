/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  

    fontFamily: {
      plusjakarta: ["PlusJakarta"]
    },

    
    
    extend: {
      colors:{ 
        lightblue : "rgb(102, 108, 163)",
        vdb: "rgb(19,24,63)",
        grey: "rgb(131,136,154)",
        lightishpink: "rgb(247,71,128)",
        lightpink:"rgb(255,167,155)",
        white: "rgb(255,255,255)",
        pink2:"rgb(240, 42,166)",
        orange:"rgb(255,111,72)",
        blue2:"rgb(72,81,255)",
        grey2:"rgb(242,242,242)",
        white2:"rgb(240,241,255)",
  
  
      },
    },
  },
  plugins: [],
}
