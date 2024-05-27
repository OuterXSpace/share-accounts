import { getStore } from '../store';

export const isMustVerifyPhoneSelector = () => {
  return getStore().isMustVerifyPhone;
};
