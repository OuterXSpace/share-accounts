import { mutator } from 'satcheljs';
import { updateContentAction } from '../actions';
import { getStore } from '../store';

mutator(updateContentAction, ({ contentId, version }) => {
  if (version == null) return;
  getStore().versions[contentId] = version;
});
