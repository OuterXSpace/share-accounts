import { ObservableSet } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const registerMainNavigationTabAction = mutatorAction('registerMainNavigationTabAction', (paths: string[]) => {
  const store = getStore();

  const newMainNavigationTabs = new ObservableSet(store.mainNavigationTabs);
  paths.forEach((path) => {
    newMainNavigationTabs.add(path);
  });

  store.mainNavigationTabs = newMainNavigationTabs;
});
