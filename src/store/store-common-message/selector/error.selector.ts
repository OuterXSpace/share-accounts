import { getStore } from '../store';

export const errorSelector = () => {
  return getStore().error;
};
