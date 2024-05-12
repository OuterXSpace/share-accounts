export {};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          DEFAULT: '#1BA1E4',
          100: '#F0F0FF',
          200: '#6B7280',
          600: '#1BA1E4',
          700: '#271FE0',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#1BA1E4',
          100: '#F0F0FF',
          200: '#6B7280',
          600: '#1BA1E4',
          700: '#271FE0',
        },
      },
      borderColor: {
        primary: {
          DEFAULT: '#1BA1E4',
          100: '#F0F0FF',
          200: '#6B7280',
          600: '#1BA1E4',
          700: '#271FE0',
        },
      },
      fontWeight: {
        regular: 400,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sf: ['SF Pro Display', 'sans-serif'],
        svn: ['SVN', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
