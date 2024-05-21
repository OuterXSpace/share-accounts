import { getStore } from '../store';

export const isFetchingBalanceSelector = () => {
  return getStore().isFetchingBalance;
};
