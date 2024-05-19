import { getStore } from '../store';

export const loginUrlSelector = () => {
  return getStore().loginUrl;
};
