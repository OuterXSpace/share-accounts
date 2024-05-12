import { createStore } from '../../create-store';
import { ILoadingStore } from './loading.type';
import { observable } from 'mobx';

const initStore: ILoadingStore = {
  loading: observable.box(false),
  localLoading: {},
};

export const getStore = createStore('coreLoadingStore', initStore);
