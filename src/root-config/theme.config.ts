const THEME_COLOR_CONFIG_01 = require('./theme-color/01.theme-color');

const THEME_COLOR_CONFIG = {
  THEME_COLOR_V1: THEME_COLOR_CONFIG_01,
};

module.exports = THEME_COLOR_CONFIG[process.env.NEXT_PUBLIC_THEME_COLOR];

export {};
