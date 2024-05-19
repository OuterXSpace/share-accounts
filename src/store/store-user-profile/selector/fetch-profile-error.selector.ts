import { getStore } from '../store';

export const fetchProfileErrorSelector = () => {
  return getStore().fetchProfileError.get();
};
