import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateHistoryAction = mutatorAction('updateHistoryAction', (history: string[]) => {
  const store = getStore();

  store.history = history;
});
