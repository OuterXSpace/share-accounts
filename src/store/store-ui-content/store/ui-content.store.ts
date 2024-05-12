import { observable } from 'mobx';
import { IUIContentStore } from './ui-content.type';
import { LocalStorageService } from '../../../configuration/local-storage';
import { CONFIGURATION } from '../../../constants';
import { createStore } from '../../create-store';

const initStore: IUIContentStore = {
  contents: observable.map(),
  versions: LocalStorageService.getItem(CONFIGURATION.UI_CONTENT_VERSIONS_LS_KEY, false) || {},
  errors: observable.map(),
};

export const getStore = createStore('UIContentStore', initStore);
