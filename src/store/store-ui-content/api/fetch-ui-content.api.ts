import { API } from '../../../api';
import { Language } from '../../../configuration/language';
import { LocalStorageService } from '../../../configuration/local-storage';
import { CONFIGURATION } from '../../../constants';
import { API_UI_CONFIG_BASE_URL } from '../../../constants/configuration.constant';

type TLocalUIContentVersion = {
  [key: string]: number;
};

export function fetchUiContentApi<T>(params: { language?: Language; contentId: string }): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    const { language = 'vi', contentId } = params;

    const localVersion: TLocalUIContentVersion | undefined =
      LocalStorageService.getItem(CONFIGURATION.UI_CONTENT_VERSIONS_LS_KEY, false) || undefined;

    const uiContentCurrentVersion = localVersion?.[contentId] || 0;
    API.get<T>(`${API_UI_CONFIG_BASE_URL}/${language}?section=${contentId}`, {
      headers: {
        version: uiContentCurrentVersion.toString(),
      },
    })
      .then((response) => {
        if (response.data) {
          // update new version
          const newVersion = parseInt(response.headers.version, 10);
          LocalStorageService.setItem(
            CONFIGURATION.UI_CONTENT_VERSIONS_LS_KEY,
            { ...localVersion, [contentId]: newVersion },
            false,
          );
          LocalStorageService.setItem(contentId, response.data);

          resolve(response.data);
        } else {
          // load local content when server response is null
          const localContent: T | undefined = LocalStorageService.getItem(contentId) || undefined;
          resolve(localContent);
        }
      })
      .catch(reject);
  });
}
