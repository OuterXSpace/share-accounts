import { getStore } from '../store';

export const isHasContent = (contentId: string): boolean => {
  return getStore().contents.has(contentId);
};
