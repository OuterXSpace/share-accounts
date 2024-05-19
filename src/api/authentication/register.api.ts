import { IRegisterResponseData } from '../../models';
import { API } from '../Api';

export const registerAPI = (email: string, username: string, password: string, fullName: string) => {
  return API.post<IRegisterResponseData>(
    '/account/user/register',
    {
      email,
      username,
      password,
      fullName,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'clean-request': 'no-clean',
      },
    },
  );
};
