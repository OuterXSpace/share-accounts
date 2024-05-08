import { computedFn } from 'mobx-utils';
import { getStore } from '../store';

export const localSuccessSelector = computedFn((localSuccessId: string) => {
  const store = getStore();

  return store.localSuccesses?.get(localSuccessId);
});
