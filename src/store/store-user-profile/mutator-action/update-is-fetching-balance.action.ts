import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsFetchingBalance = mutatorAction('updateIsFetchingBalance', (value: boolean) => {
  getStore().isFetchingBalance = value;
});
