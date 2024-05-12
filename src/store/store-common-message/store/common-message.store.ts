import { observable } from 'mobx';
import { ICommonMessageStore } from './common-message.type';
import { createStore } from '../../create-store';

const initStore: ICommonMessageStore = {
  error: observable.box(undefined),
  success: undefined,
  toast: undefined,
  localErrors: undefined,
  localSuccesses: undefined,
};

export const getStore = createStore('CommonMessageStore', initStore);
