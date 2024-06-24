import { API } from '..';
import { IUserProfile } from '../../models';

export const fetchUserProfileApi = () => {
  return new Promise<IUserProfile>((resolve, reject) => {
    API.get<{
      data: IUserProfile;
    }>('/account/accounts/me/user-info')
      .then((res) => {
        resolve(res.data.data);
      })
      .catch(reject);
  });
};

export const fetchUserProfileByIdApi = (id: string) => {
  return new Promise<IUserProfile>((resolve, reject) => {
    API.get<IUserProfile>(`/account/accounts/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
