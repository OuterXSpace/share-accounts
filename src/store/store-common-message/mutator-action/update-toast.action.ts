import { mutatorAction } from 'satcheljs';
import { getStore, TToastType } from '../store';

export const updateToastAction = mutatorAction(
  'UPDATE_TOAST_ACTION',
  ({ type, message, title }: { type: TToastType; message?: string; title?: string }) => {
    getStore().toast = { type, message, title };
  },
);
