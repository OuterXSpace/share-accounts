import { API } from '../Api';

export function changePasswordApi(password: string, newPassword: string) {
  return new Promise<void>((resolve, reject) => {
    API.post('/accounts/password', { currentPassword: password, newPassword })
      .then(() => resolve())
      .catch(reject);
  });
}
