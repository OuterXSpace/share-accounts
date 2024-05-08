import { computedFn } from 'mobx-utils';
import { getStore } from '../store';

export const contentSelector = computedFn(<T = any>(contentId: string | undefined): T | undefined => {
  if (!contentId) return undefined;
  return getStore().contents?.get(contentId);
});
