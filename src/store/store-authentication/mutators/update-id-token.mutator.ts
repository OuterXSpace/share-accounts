import { mutator } from 'satcheljs';
import { updateIdTokenAction } from '../action';
import { getStore } from '../store';

mutator(updateIdTokenAction, ({ idToken }) => {
  getStore().idToken = idToken;
});
