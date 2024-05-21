import { createStore } from '../../create-store';
import { IRouterManagerStore } from './router-manager.type';

const initStore: IRouterManagerStore = {
  mainNavigationTabs: undefined,
  history: [],
};

export const getStore = createStore<IRouterManagerStore>('RouterManagerStore', initStore);
