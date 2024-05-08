import { mutator } from 'satcheljs';
import { updateContentAction } from '../actions';
import { getStore } from '../store';

mutator(updateContentAction, ({ contentId, data }) => {
  getStore().contents.set(contentId, data);
});
