import { Language } from '../configuration/language';

export interface ISystemConfigModel {
  currency?: string;
  languages?: Language[];
  defaultLanguage?: Language;
  agoraAppId?: string;
  phoneCountryCodes?: string[];
}
