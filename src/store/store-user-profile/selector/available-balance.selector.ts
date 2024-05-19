import { getStore } from '../store';

export const availableBalanceSelector = () => {
  const { balance } = getStore();
  return balance?.availableBalance;
};
