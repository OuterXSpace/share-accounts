import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIdOtpAction = mutatorAction('updateIdOtpAction', (id: string) => {
  getStore().idOtp = id;
});
