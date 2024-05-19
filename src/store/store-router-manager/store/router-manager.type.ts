import { ObservableSet } from 'mobx';

export interface IRouterManagerStore {
  mainNavigationTabs: ObservableSet<string> | undefined;
  history: string[];
}
