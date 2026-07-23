/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D',
          50: '#E8EDF4',
          100: '#D1DBE9',
          200: '#A3B7D3',
          300: '#7593BD',
          400: '#476FA7',
          500: '#1A365D',
          600: '#152B4A',
          700: '#102038',
          800: '#0A1525',
          900: '#050A13',
        },
        secondary: {
          DEFAULT: '#C9A96E',
          50: '#FAF6EE',
          100: '#F5EDDD',
          200: '#EBDBBB',
          300: '#E1C999',
          400: '#D7B777',
          500: '#C9A96E',
          600: '#A68A58',
          700: '#7F6A43',
          800: '#594B2E',
          900: '#332B1A',
        },
        background: '#F7F7F7',
        text: '#2D2D2D',
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
