/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          dark: '#1B5E20',
          forest: '#1A6B2E',
          mid: '#2E7D32',
          action: '#388E3C',
          light: '#E8F5E9',
          lighter: '#F1F8E9',
        },
        neutral: {
          white: '#FFFFFF',
          offWhite: '#F5F5F5',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        dark: {
          black: '#0D1F3C',
          text: '#212121',
          body: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'green': '0 4px 20px rgba(27, 94, 32, 0.15)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(27, 94, 32, 0.12)',
      },
    },
  },
  plugins: [],
};