import { action } from 'mobx';
import { getRootStore } from 'satcheljs';

export const createStoreAction = action('createStore', <T>(key: string, initialState: T): void => {
  if (getRootStore().get(key)) {
    // throw new Error(`A store named ${key} has already been created.`);
    return;
  }
  getRootStore().set(key, initialState);
});

export const createStore = <T>(key: string, initialState: T): (() => T) => {
  createStoreAction<T>(key, initialState);
  return () => getRootStore().get(key) as T;
};
