/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#faf4fa',
          100: '#dcbad4',
          200: '#c995bd',
          300: '#a86699',
          400: '#8e2778',
          500: '#8e2778',
          600: '#692658',
          700: '#692658',
          800: '#4a1a3d',
          900: '#202221',
        },
        muted: '#888085',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

