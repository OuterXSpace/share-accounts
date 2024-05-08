import { observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateErrorAction = mutatorAction(
  'updateErrorAction',
  (contentId: string, value: string | number | undefined) => {
    const newMap = getStore().errors ?? observable.map();
    newMap.set(contentId, observable.box(value));
    getStore().errors = newMap;
  },
);
