import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsFetchingProfile = mutatorAction('updateIsFetchingProfile', (value: boolean) => {
  getStore().isFetchingProfile = value;
});
