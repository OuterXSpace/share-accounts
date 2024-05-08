import { orchestrator } from 'satcheljs';
import { LocalStorageService } from '../../../configuration/local-storage';
import { updateContentAction } from '../actions';
import { getStore } from '../store';
import { CONFIGURATION } from '../../../constants';

orchestrator(updateContentAction, ({ contentId, version, storeLocal }) => {
  if (storeLocal === false || version == null) return;

  const { versions } = getStore();
  LocalStorageService.setItem(CONFIGURATION.UI_CONTENT_VERSIONS_LS_KEY, { ...versions, [contentId]: version }, false);
});
