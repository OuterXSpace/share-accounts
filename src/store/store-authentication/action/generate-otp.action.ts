import { action } from 'satcheljs';

export const generateOtpAction = action(
  'generateOtpAction',
  (countryCode?: string, phoneNumber?: string, captcha: string = '') => ({
    countryCode,
    phoneNumber,
    captcha,
  }),
);
