/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f2ff',
          100: '#e9e6ff',
          200: '#d4d0ff',
          300: '#b5adff',
          400: '#9187ff',
          500: '#6C63FF', // Primary
          600: '#5a48ff',
          700: '#4e34f7',
          800: '#3f29d9',
          900: '#3425b1',
          950: '#201371',
        },
        secondary: {
          50: '#effef9',
          100: '#c7fff1',
          200: '#91f8e4',
          300: '#5eead6',
          400: '#4ECDC4', // Secondary
          500: '#20b6aa',
          600: '#139590',
          700: '#127675',
          800: '#135e5e',
          900: '#144d4d',
          950: '#052b2c',
        },
        accent: {
          50: '#fff3f0',
          100: '#ffe4dd',
          200: '#ffc7bb',
          300: '#ff9f8a',
          400: '#FF7E67', // Accent
          500: '#fe5b40',
          600: '#f03111',
          700: '#cc220a',
          800: '#a81e0d',
          900: '#8a1e11',
          950: '#4b0b05',
        },
        success: {
          50: '#f0fef4',
          100: '#dbfee6',
          200: '#b8fbcf',
          300: '#7cf5a8',
          400: '#39e980',
          500: '#06D6A0', // Success
          600: '#0ab474',
          700: '#068f5b',
          800: '#087248',
          900: '#095d3d',
          950: '#033525',
        },
        warning: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#FFD166', // Warning
          300: '#fdcd45',
          400: '#fabc13',
          500: '#e8a300',
          600: '#ca8200',
          700: '#a05f00',
          800: '#854c05',
          900: '#6f400a',
          950: '#3f2000',
        },
        error: {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fccfd8',
          300: '#f9a8b9',
          400: '#f47795',
          500: '#EF476F', // Error
          600: '#db2452',
          700: '#bf1744',
          800: '#9d173d',
          900: '#83183a',
          950: '#4c091e',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#121416',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};