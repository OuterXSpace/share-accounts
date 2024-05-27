import { mutator } from 'satcheljs';
import { updateRegisterUrlAction } from '../action';
import { getStore } from '../store';

mutator(updateRegisterUrlAction, ({ url }) => {
  getStore().registerUrl = url;
});
