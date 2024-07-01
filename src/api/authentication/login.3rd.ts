import { ILoginResponseData } from '../../models';
import { API } from '../Api';

export const login3rdAPI = (typeLogin: 'google' | 'facebook', token: string) => {
  const formData = new URLSearchParams();
  formData.append('typeLogin', typeLogin);
  formData.append('token', token);

  return API.post<{ data: ILoginResponseData }>('/account/user/signin-3rd', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
