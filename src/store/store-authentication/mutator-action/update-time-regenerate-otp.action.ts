import dayjs from 'dayjs';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateTimeRegenerateOtpAction = mutatorAction('updateTimeRegenerateOtpAction', (time: dayjs.Dayjs) => {
  getStore().timeRegenerateOtp = time;
});
