/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
         'oxanium': ['Oxanium', 'sans-serif'],
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        // Custom green-based color palette
        primary: {
          50: '#f7f8f7',
          100: '#eef0ed',
          200: '#dde2da',
          300: '#c2cbbf',
          400: '#9EBC8A', // Light green
          500: '#73946B', // Medium green
          600: '#537D5D', // Dark green
          700: '#456750',
          800: '#3a5542',
          900: '#2f4437',
        },
        accent: {
          50: '#fefef7',
          100: '#fcfcef',
          200: '#f8f7d7',
          300: '#f2f0bf',
          400: '#e8e58f',
          500: '#D2D0A0', // Light cream/beige
          600: '#bdba90',
          700: '#9e9b78',
          800: '#7f7c60',
          900: '#67654e',
        },
        green: {
          50: '#f7f8f7',
          100: '#eef0ed',
          200: '#dde2da',
          300: '#c2cbbf',
          400: '#9EBC8A',
          500: '#73946B',
          600: '#537D5D',
          700: '#456750',
          800: '#3a5542',
          900: '#2f4437',
        },
      },
      keyframes: {
        bell: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(15deg)' },
          '30%': { transform: 'rotate(-15deg)' },
          '45%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        bell: 'bell 0.8s ease-in-out infinite',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}

