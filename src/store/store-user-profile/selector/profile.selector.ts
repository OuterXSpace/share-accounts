import { getStore } from '../store';

export const profileSelector = () => {
  const { profile } = getStore();

  return profile;
};
