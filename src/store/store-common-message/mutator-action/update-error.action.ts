import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { observable } from 'mobx';
import { ITranslatorParams } from '../../../configuration/language';

export const updateErrorAction = mutatorAction('updateErrorAction', (error?: string | ITranslatorParams) => {
  const store = getStore();

  store.error = observable.box(error);
});
