import { ObservableMap, observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateLocalErrorAction = mutatorAction(
  'updateLocalErrorAction',
  (localErrorId: string, localErrorMessage: string | undefined) => {
    const store = getStore();

    const newLocalErrorMap = store.localErrors || new ObservableMap();

    newLocalErrorMap.set(localErrorId, observable.box(localErrorMessage));

    store.localErrors = newLocalErrorMap;
  },
);
