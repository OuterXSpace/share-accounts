import { getStore } from '../store';

export const historySelector = () => {
  return getStore().history;
};
