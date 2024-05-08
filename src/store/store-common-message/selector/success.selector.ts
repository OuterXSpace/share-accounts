import { getStore } from '../store';

export const successSelector = () => {
  return getStore().success;
};
