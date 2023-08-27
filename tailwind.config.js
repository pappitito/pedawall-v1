/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'bxs': '324px',
        'xs': '430px',    // Custom extra small screen size
        'xsm': '550px',
        'sm': '700px',    // Custom small screen size
        'md': '830px',    // Custom medium screen size
        'lg': '1024px', 
        'mlg': '1090px',  // Custom large screen size
        'blg': '1140px',
        'elg': '1204px',
        'sxl': '1260px',
        'xl': '1280px',   // Custom extra large screen size
        '2xl': '1536px',  // Custom 2x extra large screen size
      }
    },
  },
  plugins: [],
}
