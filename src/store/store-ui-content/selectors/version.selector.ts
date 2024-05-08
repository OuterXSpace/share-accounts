import { computedFn } from 'mobx-utils';
import { getStore } from '../store';

export const versionSelector = computedFn((contentId: string): number => {
  return getStore().versions[contentId] || 0;
});
