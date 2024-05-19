import { getStore } from '../store';

export const fetchBalanceErrorSelector = () => {
  return getStore().fetchBalanceError.get();
};
