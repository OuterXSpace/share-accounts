import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const decreaseAvailableBalanceAction = mutatorAction('decreaseAvailableBalanceAction', (amount: number) => {
  const { balance } = getStore();
  if (!balance) return;
  getStore().balance = { ...balance, availableBalance: balance.availableBalance - amount };
});
