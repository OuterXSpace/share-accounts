import { ILoginResponseData } from '../../models';
import { API } from '../Api';

export const loginAPI = (email: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append('username', email);
  formData.append('password', password);

  return API.post<{ data: ILoginResponseData }>('/account/user/signin', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
