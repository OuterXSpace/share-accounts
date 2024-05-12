import { useEffect, useRef, useState } from 'react';
import { API } from '../../api';
import { API_UI_CONFIG_BASE_URL } from '../../constants/configuration.constant';
import { Language, useCurrentLanguage } from '../language';

/** @deprecated use **useUiContent** instead */
export const useContentConfig = <T = any>(lang: Language | undefined | null, uiConfigId: string) => {
  const { currentLanguage } = useCurrentLanguage();
  const loading = useRef<boolean | undefined>();
  const [contentData, setContentData] = useState<T | null>(null);
  const [errorCode, setErrorCode] = useState<number>();
  const language = lang || currentLanguage;

  useEffect(() => {
    if (!language || loading.current) {
      return;
    }
    loading.current = true;

    API.get(`${API_UI_CONFIG_BASE_URL}/${language}?section=${uiConfigId}`)
      .then((response) => {
        if (response.data) {
          setContentData(response.data);
        } else {
          setContentData(null);
        }
      })
      .catch((error) => {
        setErrorCode(error);
      })
      .finally(() => {
        loading.current = false;
      });
  }, [language, uiConfigId]);

  return { contentData, loading: loading.current, errorCode };
};
