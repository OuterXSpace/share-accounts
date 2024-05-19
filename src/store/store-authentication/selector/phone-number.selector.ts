import { getStore } from '../store';

export const phoneNumberSelector = () => {
  try {
    return getStore().phoneNumber;
  } catch {
    return undefined;
  }
};
