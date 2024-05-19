import { getStore } from '../store';

export const mainNavigationTabsSelector = () => {
  return getStore().mainNavigationTabs;
};
