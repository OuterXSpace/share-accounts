import { observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateFetchBalanceError = mutatorAction(
  'updateFetchBalanceError',
  (error: string | undefined | unknown) => {
    getStore().fetchBalanceError = observable.box(error);
  },
);
