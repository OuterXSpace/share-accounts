import { mergePhoneNumber } from '../../utils';
import { IOtpResponseData } from '../../models/otp-response.model';
import { API } from '../Api';

/**
 * @deprecated
 */
export const generateOtp = (countryCode: string, phone: string, captcha: string) => {
  return new Promise<IOtpResponseData>((resolve, reject) => {
    API.post('/account/accounts/me/verify/gen-code', {
      phoneNumber: mergePhoneNumber(countryCode, phone),
      captcha,
    })
      .then((res) => resolve(res.data))
      .catch(reject);
  });
};

export const generateOtp2 = (phoneNumber: string, captcha: string) => {
  return new Promise<IOtpResponseData>((resolve, reject) => {
    API.post('/account/accounts/me/verify/gen-code', {
      phoneNumber,
      captcha,
    })
      .then((res) => resolve(res.data))
      .catch(reject);
  });
};
