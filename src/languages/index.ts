import { LangService } from '../configuration/language';

import vi from './vi.json';
import en from './en.json';
import zh from './zh.json';

export const LANGUAGE_NAMESPACE = 'LANGUAGE_NAMESPACE';

export const initWuiLoginLanguage = () => {
  LangService.instance().addResourceBundle('vi', LANGUAGE_NAMESPACE, vi);
  LangService.instance().addResourceBundle('en', LANGUAGE_NAMESPACE, en);
  LangService.instance().addResourceBundle('zh', LANGUAGE_NAMESPACE, zh);
};
