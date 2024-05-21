import { API } from '../Api';

export const verifyOtp = (data: { id: string; code: string }) => {
  return new Promise<void>((resolve, reject) => {
    API.post('/account/accounts/me/verify/submit-code', data)
      .then(() => resolve())
      .catch(reject);
  });
};
