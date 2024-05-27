import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { IBalance } from '../../../configuration/balance';

export const updateBalanceAction = mutatorAction('updateBalanceAction', (balance: IBalance | undefined) => {
  getStore().balance = balance;
});
