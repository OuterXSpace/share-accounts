import { getStore } from '../store';

export const isChangedPasswordSuccessSelector = () => {
  return getStore().isChangedPasswordSuccess;
};
