import { observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsChangedPasswordSuccess = mutatorAction('updateIsChangedPasswordSuccess', (isSuccess: boolean) => {
  getStore().isChangedPasswordSuccess = observable.box(isSuccess);
});
