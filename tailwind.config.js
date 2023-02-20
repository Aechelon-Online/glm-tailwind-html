/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'smallMobile': '375px',
      'mobile': '450px',
      'smallTablet': '600px',
      'tablet': '750px',
      'laptop': '1000px',
      'desktop': '1500px'
    },
    extend: {
      textShadow: {
        sm: '0 1px 1px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    
  ],
}
