import { i18n, TOptions, StringMap } from 'i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangService, Language } from './language.service';

export interface ITranslatorParams {
  key: string;
  options?: TOptions<StringMap> | string;
}

export interface ITranslator {
  translator: <K>(key: (K & string) | string[], options?: TOptions<StringMap> | string) => string;
  i18n?: i18n;
  ready?: boolean;
}

export const useLangTranslation = (namespace?: string | string[]): ITranslator => {
  const mergeNameSpace = useMemo(() => {
    const _commonNamespace = LangService.instance().getCommonNamespace();
    if (typeof namespace === 'string') {
      return [namespace, _commonNamespace];
    }

    if (namespace) {
      return [...namespace, _commonNamespace];
    }

    return _commonNamespace;
  }, [namespace]);

  const { t, i18n, ready } = useTranslation(mergeNameSpace, {
    i18n: LangService.instance().getI18nInstance(),
    useSuspense: false,
  });

  const translator = useCallback(
    (key: string | string[], options?: TOptions<StringMap> | string): string => {
      let tOptions: TOptions;
      if (typeof options === 'string') {
        tOptions = {
          defaultValue: t(key, {
            ns: LangService.instance().getCommonNamespace(),
            defaultValue: options ?? key,
          }),
        };
      } else {
        tOptions = {
          ...options,
          defaultValue: t(key, {
            ns: LangService.instance().getCommonNamespace(),
            defaultValue: options?.defaultValue ?? key,
          }),
        };
      }

      return t(key, tOptions);
    },
    [t],
  );

  return {
    translator,
    i18n,
    ready,
  };
};

export const useCurrentLanguage = (): { currentLanguage?: Language } => {
  const [currentLang, setCurrentLang] = useState<Language>();

  useEffect(() => {
    const subscription = LangService.instance().currentLang$.subscribe((data) => {
      if (data) {
        setCurrentLang(data);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { currentLanguage: currentLang };
};
