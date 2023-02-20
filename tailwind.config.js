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

    
    colors:{ 
      blue : "rgb(102, 108, 163)",
      vdb: "rgb(19,24,63)",
      grey: "rgb(131,136,154)",
      pink: "rgb(247,71,128)",
      lightpink:"rgb(255,167,155)",
      white: "rgb(255,255,255)",
      pink2:"rgb(240, 2,166)",
      orange:"rgb(255,111,72)",
      blue:"rgb(71,82,255)",
      grey2:"rgb(242,242,242)",
      white2:"rgb(240,241,255)",


    },
    extend: {},
  },
  plugins: [],
}
