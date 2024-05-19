import { getStore } from '../store';

export const registerUrlSelector = () => {
  return getStore().registerUrl;
};
