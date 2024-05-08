import { observable } from 'mobx';
import { createStore } from 'satcheljs';
import { ICommonMessageStore } from './common-message.type';

const initStore: ICommonMessageStore = {
  error: observable.box(undefined),
  success: undefined,
  toast: undefined,
  localErrors: undefined,
  localSuccesses: undefined,
};

export const getStore = createStore('CommonMessageStore', initStore);
