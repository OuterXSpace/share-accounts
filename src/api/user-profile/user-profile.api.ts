import { API } from '..';
import { IUserProfile } from '../../models';

export const fetchUserProfileApi = () => {
  return new Promise<IUserProfile>((resolve, reject) => {
    API.get<{
      data: IUserProfile;
    }>('/v1/user-service/me')
      .then((res) => {
        resolve(res.data.data);
      })
      .catch(reject);
  });
};

export const fetchUserProfileByIdApi = (id: string) => {
  return new Promise<IUserProfile>((resolve, reject) => {
    API.get<IUserProfile>(`/v1/user-service/users/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
