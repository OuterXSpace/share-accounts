import { CONFIGURATION } from '../../../constants';

import { systemConfigSelector } from './system-config.selector';

export const languagesSelector = () => {
  return systemConfigSelector()?.languages || CONFIGURATION.DEFAULT_LANGUAGES;
};
