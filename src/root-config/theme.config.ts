const THEME_COLOR_CONFIG_01 = require('./theme-color/01.theme-color');
const THEME_COLOR_CONFIG_02 = require('./theme-color/02.theme-color');
const THEME_COLOR_CONFIG_03 = require('./theme-color/03.theme-color');

const THEME_COLOR_CONFIG = {
  THEME_COLOR_01: THEME_COLOR_CONFIG_01,
  THEME_COLOR_02: THEME_COLOR_CONFIG_02,
  THEME_COLOR_03: THEME_COLOR_CONFIG_03,
};

module.exports = THEME_COLOR_CONFIG[process.env.NEXT_PUBLIC_THEME_COLOR];
