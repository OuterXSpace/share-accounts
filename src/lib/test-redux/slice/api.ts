import { API } from '../../../api';

export const fetchTestApi = (name: string) => {
  return new Promise<Record<string, any>>((resolve, reject) => {
    API.get<Record<string, any>>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
