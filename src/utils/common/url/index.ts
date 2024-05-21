import { LangService, Language } from '../../../configuration/language';
import { CoreAuthenticationStore } from '../../../store';

const DOMAIN_TOKEN = /{{domain}}/;
const ACCESS_TOKEN_TOKEN = /({{accessToken}})|({{token}})/;
const LANGUAGE_TOKEN = /{{language}}/;

export const mainDomainReplace = (url: string) => {
  return url.replace(DOMAIN_TOKEN, window.location.hostname);
};

export const accessTokenReplace = (url: string, token?: string) => {
  return url.replace(ACCESS_TOKEN_TOKEN, token || CoreAuthenticationStore.accessTokenSelector() || '');
};

export const languageReplace = (url: string, language?: Language) => {
  return url.replace(LANGUAGE_TOKEN, language || LangService.instance().getLangFromLocalStorage());
};
