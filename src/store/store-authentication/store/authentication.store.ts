import { observable } from 'mobx';
import { IAuthenticationStore } from './authentication.type';
import { CONFIGURATION } from '../../../constants';

import { LocalStorageService } from '../../../configuration/local-storage';
import { createStore } from '../../create-store';

const initStore: IAuthenticationStore = {
  idToken: LocalStorageService.getItem(CONFIGURATION.ID_TOKEN_LS_KEY) || undefined,
  accessToken: LocalStorageService.getItem(CONFIGURATION.ACCESS_TOKEN_LS_KEY) || undefined,
  loginUrl: LocalStorageService.getItem(CONFIGURATION.LOGIN_URL_LS_KEY) || '/account/signin',
  registerUrl: LocalStorageService.getItem(CONFIGURATION.REGISTER_URL_LS_KEY) || '/account/signup',
  phoneNumber: LocalStorageService.getItem(CONFIGURATION.PHONE_NUMBER_LS_KEY) || undefined,
  isMustVerifyPhone: LocalStorageService.getItem<boolean>(CONFIGURATION.IS_MUST_VERIFY_PHONE_LS_KEY, false) === true,
  idOtp: undefined,
  timeRegenerateOtp: undefined,
  isChangedPasswordSuccess: observable.box(undefined),
};

export const getStore = createStore('CoreAuthenticationStore', initStore);
