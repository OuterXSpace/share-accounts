export {};
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          darker: '#520100',
          dark: '#a2060e',
          DEFAULT: '#ea000b',
          rgb: '234, 0, 11',
          light: '#ec1a23',
          lighter: '#f4575f',
        },
        secondary: {
          darker: '#d88e0d',
          dark: '#ff9500',
          DEFAULT: '#ffaa00',
          rgb: '255, 170, 0',
          light: '#ffb700',
          lighter: '#ffdc68',
        },
        accent: {
          darker: '#d88e0d',
          dark: '#ff9500',
          DEFAULT: '#ffaa00',
          rgb: '255, 170, 0',
          light: '#ffb700',
          lighter: '#ffdc68',
        },
        success: {
          DEFAULT: '#13d527',
          rgb: '19, 213, 39',
          dark: '#00ae11',
          darker: '#00ae11',
          light: '#eafbe7',
          lighter: '#eafbe7',
        },
        info: {
          DEFAULT: '#15b2d5',
          rgb: '21, 178, 213',
          dark: '#0f8ca8',
          darker: '#0f8ca8',
          light: '#4ebdd9',
          lighter: '#74d1e9',
        },
        caution: {
          DEFAULT: '#ffd000',
          dark: '#ffc300',
          darker: '#ffc300',
          rgb: '255, 208, 0',
          light: '#ffdd00',
          lighter: '#ffdd00',
        },
        error: {
          DEFAULT: '#ff401f',
          rgb: '255, 64, 31',
          dark: '#e0381b',
          darker: '#e0381b',
          light: '#ff5335',
          lighter: '#ff5335',
        },
        black: {
          DEFAULT: '#1d1d1d',
          1: '#2d2d2d',
          2: '#4d4d4d',
          3: '#6d6d6d',
        },
        gray: {
          1: '#8d8d8d',
          2: '#adadad',
          3: '#cdcdcd',
          4: '#e0e0e0',
          5: '#ffffffb3',
        },
        light: {
          1: '#efefef',
          2: '#f5f5f5',
          3: '#fafafa',
        },
        white: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        serif: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        monospace: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: (theme) => ({
        'gradient-to-top-primary': `linear-gradient(to top, ${theme('colors.primary.darker')}, ${theme(
          'colors.primary.dark',
        )})`,
        'gradient-to-top-secondary': 'linear-gradient(181.06deg, #e10000 0.91%, #a50000 99.09%)',
      }),
    },
  },
  plugins: [flowbite.plugin()],
};
