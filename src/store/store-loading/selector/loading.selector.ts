import { getStore } from '../store';

export const loadingSelector = (): boolean => {
  return getStore().loading.get();
};
