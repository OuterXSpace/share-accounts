import { orchestrator } from 'satcheljs';
import { checkAuthenticatedAction, logOutAction } from '../action';
import { isLoginSelector, isMustVerifyPhoneSelector, loginUrlSelector } from '../selector';
import { goToVerifyPhone } from '../util';

/**
 * @deprecated
 */
orchestrator(checkAuthenticatedAction, ({ redirectUrl }) => {
  const isLogin = isLoginSelector();
  if (!isLogin) {
    const loginUrl = loginUrlSelector();
    logOutAction(loginUrl ? `${loginUrl}${redirectUrl ? `?redirectUrl=${redirectUrl}` : ''}` : undefined);
    return;
  }

  const isMustVerifyPhone = isMustVerifyPhoneSelector();
  if (isMustVerifyPhone) goToVerifyPhone();
});
