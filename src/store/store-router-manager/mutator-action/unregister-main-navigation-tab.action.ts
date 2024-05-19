import { ObservableSet } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const unregisterMainNavigationTabAction = mutatorAction(
  'unregisterMainNavigationTabAction',
  (paths: string[]) => {
    const store = getStore();

    const newMainNavigationTabs = new ObservableSet(store.mainNavigationTabs);
    paths.forEach((path) => {
      newMainNavigationTabs.delete(path);
    });

    store.mainNavigationTabs = newMainNavigationTabs;
  },
);
