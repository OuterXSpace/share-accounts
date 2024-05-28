export {};
const flowbite = require('flowbite-react/tailwind');
const THEME_CONFIG = require('./src/root-config/theme.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', flowbite.content()],
  theme: {
    extend: THEME_CONFIG,
  },
  plugins: [flowbite.plugin()],
};
