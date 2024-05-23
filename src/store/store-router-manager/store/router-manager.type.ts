import { ObservableSet } from 'mobx';
import { NextRouter } from 'next/router';

export interface IRouterManagerStore {
  mainNavigationTabs: ObservableSet<string> | undefined;
  history: NextRouter | undefined;
}
