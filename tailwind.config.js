/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.{html,js}', './content/**/*.md'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#315399',
        primary_dark: '#ffffff',
        secondary: '#334155',
        secondary_dark: '#e2e8f0',
        text: '#292929',
        text_dark: '#EDEDF1',
        dark: '#18181b',
      },
      fontFamily: {
        poppins: "'Poppins', system-ui, serif",
        merriweather: "'Merriweather', system-ui, serif",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography', '@tailwindcss/aspect-ratio')],
};
