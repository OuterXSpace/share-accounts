import { API } from '../Api';

export const loginFacebook = () => {
  return new Promise<string>((resolve, reject) => {
    API.get<string>('/account/signin/google')
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
