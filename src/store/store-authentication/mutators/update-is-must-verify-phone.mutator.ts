import { mutator } from 'satcheljs';
import { updateIsMustVerifyPhoneAction } from '../action';
import { getStore } from '../store';

mutator(updateIsMustVerifyPhoneAction, ({ value }) => {
  getStore().isMustVerifyPhone = value;
});
