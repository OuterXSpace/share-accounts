const PLUGIN_THEME_CONFIG_04 = require('./plugin-theme/04.plugin-theme');

const PLUGIN_THEME_CONFIG = {
  PLUGIN_THEME_V4: PLUGIN_THEME_CONFIG_04,
};

module.exports = PLUGIN_THEME_CONFIG[process.env.NEXT_PUBLIC_PLUGIN_THEME];

export {};
