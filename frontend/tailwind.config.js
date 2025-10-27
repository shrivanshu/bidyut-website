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
        // Headings - Poppins
        'heading': ['Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        
        // Subheadings - Nunito Sans
        'subheading': ['Nunito Sans', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        
        // Body text - Roboto (default)
        'body': ['Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        // Custom colors for consistent theming
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
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