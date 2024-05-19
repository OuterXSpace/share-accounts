import { API } from '../Api';

export const followUserProfiledApi = (id: string) => {
  return new Promise<void>((resolve, reject) => {
    API.get(`/v1/user-service/users/add-follower?userFollowId=${id}`)
      .then(() => {
        resolve();
      })
      .catch(reject);
  });
};
