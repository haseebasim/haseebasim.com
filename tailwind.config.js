/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans']
      },
      colors: {
        primary: '#F9D081',
        accentDark: '#23272B',
        accentLight: '#3A4753',
        cardBg: '##393F44'
      }
    }
  },
  plugins: []
};
