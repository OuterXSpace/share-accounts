import axios from 'axios';
import i18next, { i18n, StringMap, TOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage';
import { LanguageModel } from './lang.type';

export const LOCAL_LANG_KEY = 'language';

export type Language = 'vi' | 'en' | 'zh' | 'zh-tw' | 'th' | 'id' | 'khm' | 'prt' | 'ko' | 'jp';

export const Languages: LanguageModel = {
  vi: 'Tiếng Việt',
  en: 'English',
  zh: '中国人',
  'zh-tw': '日本',
  th: 'ประเทศไทย',
  id: 'Indonesia',
  khm: '',
  prt: '',
  ko: '한국',
  jp: '日本',
};

export interface ILangResource {
  [x: string]: any;
}

// TODO: Task-01: implement cache

export class LangService {
  private static _instance: LangService;

  private _i18nInstance!: i18n;

  public readonly defaultLang: Language = 'vi';

  private readonly _commonNamespace: string = 'common';

  public currentLang$: BehaviorSubject<Language> = new BehaviorSubject(this.defaultLang);

  private constructor() {
    this.init();
  }

  public static instance(): LangService {
    if (!this._instance) {
      this._instance = new LangService();
    }

    return this._instance;
  }

  public getCommonNamespace = (): string => {
    return this._commonNamespace;
  };

  public getLangName(lang: Language): string | null {
    return Languages[lang.replace(/['"]+/g, '') as Language];
  }

  private async init(): Promise<void> {
    let initLanguage: Language | '' = LocalStorageService.getItem(LOCAL_LANG_KEY);
    // if (!initLanguage) LocalStorageService.setItem(LOCAL_LANG_KEY, this.defaultLang);
    initLanguage = initLanguage || this.defaultLang;

    this._i18nInstance = i18next.createInstance(
      {
        fallbackLng: initLanguage,
        defaultNS: this._commonNamespace,
      },
      (error, t) => {
        return t('translateError');
      },
    );

    this._i18nInstance.use(initReactI18next);
    this.currentLang$.next(initLanguage);
  }

  public async changeLanguage(lang: Language, callback?: (...args: any) => void): Promise<void> {
    this._i18nInstance.changeLanguage(lang, callback);
    this.currentLang$.next(lang);
    LocalStorageService.setItem(LOCAL_LANG_KEY, lang);
    window.location.reload();
  }

  public addResourceBundle(lang: Language, namespace: string, resources: any, deep?: boolean, overwrite?: boolean) {
    this._i18nInstance.addResourceBundle(lang, namespace, resources, deep, overwrite);
  }

  public getI18nInstance(): i18n {
    return this._i18nInstance;
  }

  public async loadResourceBundle(
    lang: Language,
    namespace: string,
    resourceStorageBase: string,
    deep?: boolean,
    overwrite?: boolean,
  ): Promise<ILangResource | null> {
    const resourceUrl = `${resourceStorageBase}/${namespace}/${lang}.json`.replace(/['"]+/g, '');

    return axios
      .get(decodeURI(resourceUrl))
      .then((response) => {
        if (response.data) {
          this.addResourceBundle(lang, namespace, response.data, deep, overwrite);
          return response.data as ILangResource;
        }
        return null;
      })
      .catch((error) => {
        throw error;
      });
  }

  public getLangFromLocalStorage(): Language {
    return LocalStorageService.getItem(LOCAL_LANG_KEY) || this.defaultLang;
  }

  public translate(key: string | string[], options?: TOptions<StringMap> | string) {
    return this.getI18nInstance().t(key, options);
  }

  public parseOptions(options?: TOptions<StringMap> | string): TOptions<StringMap> {
    return typeof options === 'string' ? { defaultValue: options } : { ...options };
  }

  public hasLocalLanguage(): boolean {
    const localLanguage = LocalStorageService.getItem(LOCAL_LANG_KEY);
    return !!localLanguage;
  }
}
