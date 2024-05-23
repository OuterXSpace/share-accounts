import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { NextRouter } from 'next/router';

export const updateHistoryAction = mutatorAction('updateHistoryAction', (history: NextRouter) => {
  const store = getStore();

  store.history = history;
});
