import { ObservableMap } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore, ISuccessMessage } from '../store';

export const updateLocalSuccessAction = mutatorAction(
  'updateLocalSuccessAction',
  (localSuccessId: string, message: ISuccessMessage) => {
    const store = getStore();

    const newLocalSuccessMap = store.localSuccesses || new ObservableMap();

    newLocalSuccessMap.set(localSuccessId, message);

    store.localSuccesses = newLocalSuccessMap;
  },
);
