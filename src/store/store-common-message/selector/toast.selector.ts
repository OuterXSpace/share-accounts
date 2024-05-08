import { getStore } from '../store';

export const toastSelector = () => {
  return getStore().toast;
};
