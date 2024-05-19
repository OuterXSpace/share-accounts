import { mutator } from 'satcheljs';
import { updateLoginUrlAction } from '../action';
import { getStore } from '../store';

mutator(updateLoginUrlAction, ({ url }) => {
  getStore().loginUrl = url;
});
