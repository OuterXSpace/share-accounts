import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { observable } from 'mobx';

export const updateLoadingAction = mutatorAction('updateLoadingAction', (loading: boolean) => {
  const store = getStore();

  store.loading = observable.box(loading);
});
