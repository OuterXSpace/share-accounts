import { API } from '../Api';

export const loginGoogle = () => {
  return new Promise<string>((resolve, reject) => {
    API.get<string>('/account/signin/facebook')
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
