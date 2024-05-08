import { orchestrator } from 'satcheljs';
import { LocalStorageService } from '../../../configuration/local-storage';
import { loadLocalContentAction, updateContentAction } from '../actions';
import { isHasContent } from '../selectors';

const loadedSet = new Set();
orchestrator(loadLocalContentAction, ({ contentId }) => {
  if (loadedSet.has(contentId)) return;
  loadedSet.add(contentId);

  // * check exist in store
  if (isHasContent(contentId)) return;

  const data = LocalStorageService.getItem(contentId);
  if (data) updateContentAction(contentId, data);
});
