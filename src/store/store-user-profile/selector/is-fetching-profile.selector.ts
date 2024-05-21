import { getStore } from '../store';

export const isFetchingProfileSelector = () => {
  return getStore().isFetchingProfile;
};
