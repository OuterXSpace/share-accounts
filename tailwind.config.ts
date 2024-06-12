const flowbite = require('flowbite-react/tailwind');
const THEME_CONFIG = require('./src/root-config/theme.config');
const PLUGIN_THEME_CONFIG = require('./src/root-config/plugin-theme.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', flowbite.content()],
  theme: {
    extend: THEME_CONFIG,
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities(PLUGIN_THEME_CONFIG);
    },
  ],
};

export {};
