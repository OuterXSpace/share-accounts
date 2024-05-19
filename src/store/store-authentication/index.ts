import './orchestrator';
import './mutators';
import * as CoreAuthenticationStore from './export';
import { CoreUserProfileStore } from '../store-user-profile';
import { setApiAccessToken } from '../../api';

if (CoreAuthenticationStore.isLoginAndNotMustVerifyPhoneSelector()) {
  setApiAccessToken(CoreAuthenticationStore.accessTokenSelector());
  CoreUserProfileStore.fetchProfileAction();
}

export { CoreAuthenticationStore };
