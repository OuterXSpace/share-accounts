import { systemConfigSelector } from './system-config.selector';

export const defaultLanguageSelector = () => {
  return systemConfigSelector()?.defaultLanguage;
};
