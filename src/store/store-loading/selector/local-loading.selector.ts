import { getStore } from '../store';

export const localLoadingSelector = (processId: string | undefined) => {
  if (!processId) return false;

  return getStore().localLoading && getStore().localLoading[processId];
};
