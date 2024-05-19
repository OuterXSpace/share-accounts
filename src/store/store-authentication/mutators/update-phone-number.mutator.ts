import { mutator } from 'satcheljs';
import { updatePhoneNumberAction } from '../action';
import { getStore } from '../store';

mutator(updatePhoneNumberAction, ({ phone }) => {
  getStore().phoneNumber = phone;
});
