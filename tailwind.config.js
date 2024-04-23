/** @type {import('tailwindcss').Config} */
export default {
  content: [
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily:{
      mainFont:['Montserrat','sans-serif']
    }},
    colors:{
      'mainBlue':"#123c69",
      'lightBlue':"#A3B2E7",
      "mainGrey":"#F6F6F6",
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}