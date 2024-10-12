// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'regular-heading': ['"Fira Sans"', '"Source Sans Pro"', 'sans-serif'],
        'regular': ['"Source Sans Pro"', 'sans-serif'],
      }
      ,
      fontSize: {
        'fs-regular': ['1.125rem', '1.5'],      // 18px with line-height 1.5
        'fs-heading0': ['2rem', '1.3'],
        'fs-heading1': ['3.125rem', '1.3'],     // 50px with line-height 1.3
        'fs-heading2': ['2.5rem', '1.4'],       // 40px with line-height 1.4
        'fs-heading3': ['1.875rem', '1.5'],     // 30px with line-height 1.5
        'fs-heading4': ['1.5rem', '1.5'],       // 24px with line-height 1.5
      },
      colors: {
        'gold': {
          200: '#FFD700', // Light gold
          300: '#FFC300', // Medium gold
          400: '#FFB700', // Dark gold
        },
        'indigo': {
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
        },
        'teal': {
          100: '#A0F0E8', // Light teal for background gradient
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
      boxShadow: {
        'white-bottom': '0 1px 10px rgba(255, 255, 255, 0.1)',
        'custom-light-blue': '0 0 15px rgba(173, 216, 230, 0.7)',
      },
    },
  },
  plugins: [],
};
