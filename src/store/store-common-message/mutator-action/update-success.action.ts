import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { ITranslatorParams } from '../../../configuration/language';

export const updateSuccessAction = mutatorAction(
  'updateSuccessAction',
  (message?: string | ITranslatorParams, title?: string) => {
    getStore().success = { message, title };
  },
);
