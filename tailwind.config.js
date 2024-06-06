/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg":"linear-gradient(180deg,#F6E3A3 0%,#D2A753 100%)"
      },
      colors: {
        greey: '#3F3F3F', // Custom color definition
        darkgreey :'#292929',
        lightgreey :'#3A3A3A',
        yellowlight :'#fae59f'
      },
    },
  },
  plugins: [],
};
