/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
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
        brand: {
          green: '#00D084',
          glow: '#00D08440',
          blue: '#00B4D8',
          blueMid: '#0077A8',
        },
        surface: {
          base: '#080C10',
          card: '#0F1923',
          border: '#1C2A38',
          hover: '#16232F',
        },
        text: {
          primary: '#E8EDF2',
          muted: '#6B7C8E',
          dim: '#3D4F5E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-md': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'site': '1200px',
        'content': '720px',
        'heading': '800px',
      },
      boxShadow: {
        'green': '0 4px 20px rgba(27, 94, 32, 0.15)',
        'green-lg': '0 8px 32px rgba(27, 94, 32, 0.2)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(27, 94, 32, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'data-flow': 'data-flow 2.5s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'radar': 'radar 2s ease-out infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 #00D08440', opacity: '1' },
          '50%': { boxShadow: '0 0 0 12px #00D08400', opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
        'data-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'radar': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};