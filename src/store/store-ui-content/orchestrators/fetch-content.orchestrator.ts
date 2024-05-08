import { orchestrator } from 'satcheljs';
import { fetchContentAction, updateContentAction } from '../actions';
import { versionSelector } from '../selectors';
import { updateErrorAction } from '../mutator-actions';
import { CoreLoadingStore } from '../../store-loading';
import { API } from '../../../api';
import { LangService } from '../../../configuration/language';
import { API_UI_CONFIG_BASE_URL } from '@/constants/configuration.constant';

const isFetchedSet = new Set();

orchestrator(fetchContentAction, async ({ contentId, language, force }) => {
  if (!force && isFetchedSet.has(contentId)) return;

  if (CoreLoadingStore.localLoadingSelector(contentId)) return;

  CoreLoadingStore.updateLocalLoadingAction(contentId, true);

  try {
    let _language = language;
    if (!_language) _language = LangService.instance().getLangFromLocalStorage() ?? LangService.instance().defaultLang;
    const version = force ? '0' : versionSelector(contentId).toString();
    const response = await API.get(`${API_UI_CONFIG_BASE_URL}/${_language}/${contentId}`, {
      headers: {
        version,
      },
    });
    // * mark fetched
    isFetchedSet.add(contentId);

    // * check null
    if (response.data == null) return;

    const newVersion = Number(response.headers.version) || 0;
    updateContentAction(contentId, response.data, newVersion, true);
  } catch (error) {
    updateErrorAction(contentId, error as string);
  } finally {
    CoreLoadingStore.updateLocalLoadingAction(contentId, false);
  }
});
