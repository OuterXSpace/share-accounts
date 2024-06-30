import { ILoginResponseData } from '../../models';
import { API } from '../Api';

export const loginAPI = (username: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  return API.post<{ data: ILoginResponseData }>('/account/user/signin', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
