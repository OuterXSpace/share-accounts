import { observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateFetchProfileError = mutatorAction(
  'updateFetchProfileError',
  (error: string | undefined | unknown) => {
    getStore().fetchProfileError = observable.box(error);
  },
);
