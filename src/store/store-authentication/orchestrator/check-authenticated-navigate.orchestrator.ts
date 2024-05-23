import { orchestrator } from 'satcheljs';
import { checkAuthenticatedNavigateAction, logOutAction } from '../action';
import { isLoginSelector, isMustVerifyPhoneSelector, loginUrlSelector } from '../selector';
import { goToVerifyPhone } from '../util';

orchestrator(
  checkAuthenticatedNavigateAction,
  ({ redirectUrl = window.location.href, isRedirectLogin = true, router }) => {
    if (!isLoginSelector()) {
      if (!isRedirectLogin) return;

      const loginUrl = loginUrlSelector();
      logOutAction(loginUrl ? `${loginUrl}${redirectUrl ? `?redirectUrl=${redirectUrl}` : ''}` : undefined, router);
      return;
    }

    if (isMustVerifyPhoneSelector()) goToVerifyPhone();
  },
);
