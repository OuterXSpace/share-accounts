import { orchestrator } from 'satcheljs';
import { CoreLoadingStore } from '../../store-loading';
import { CoreUserProfileStore } from '../../store-user-profile';
import {
  logOutAction,
  updateIsMustVerifyPhoneAction,
  updatePhoneNumberAction,
  updateAccessTokenAction,
  updateIdTokenAction,
} from '../action';

let isLogout = false;

orchestrator(logOutAction, ({ redirectUrl = '/', router }) => {
  if (isLogout) return;
  isLogout = true;

  CoreLoadingStore.updateLoadingAction(true);

  // * clear data
  updatePhoneNumberAction(undefined);
  updateIsMustVerifyPhoneAction(false);
  updateIdTokenAction(undefined);
  updateAccessTokenAction(undefined);
  CoreUserProfileStore.updateProfileAction(undefined);
  CoreUserProfileStore.updateBalanceAction(undefined);

  setTimeout(() => {
    CoreLoadingStore.updateLoadingAction(false);
    router.push(redirectUrl);
    isLogout = false;
  }, 500);
});
