/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use 'media' if you prefer OS-based switching
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F9FAFB',
          text: '#111827',
          primary: '#0D47A1',
          secondary: '#1E88E5',
          highlight: '#F59E0B',
        },
        dark: {
          background: '#0D1117',
          text: '#E5E7EB',
          primary: '#90CAF9',
          secondary: '#BB86FC',
          highlight: '#03DAC5',
        },
      },
    },
  },
  plugins: [],
}
