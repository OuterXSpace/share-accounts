import { computedFn } from 'mobx-utils';
import { getStore } from '../store';

export const localErrorSelector = computedFn((localErrorId: string) => {
  const store = getStore();

  return store.localErrors?.get(localErrorId);
});
