import { getStore } from '../store';

export const idTokenSelector = () => {
  try {
    return getStore().idToken;
  } catch (error) {
    return undefined;
  }
};
