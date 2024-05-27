import { observable } from 'mobx';
import { IUserProfileStore } from './user-profile.type';
import { createStore } from '../../create-store';

const initStore: IUserProfileStore = {
  profile: undefined,
  isFetchingProfile: false,
  fetchProfileError: observable.box(undefined),

  balance: undefined,
  isFetchingBalance: false,
  fetchBalanceError: observable.box(undefined),
};

export const getStore = createStore('USER_PROFILE_STORE', initStore);
