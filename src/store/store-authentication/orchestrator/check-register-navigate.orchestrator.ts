import { orchestrator } from 'satcheljs';
import { checkRegisterNavigateAction, logOutAction } from '../action';
import { isLoginSelector, isMustVerifyPhoneSelector, registerUrlSelector } from '../selector';
import { goToVerifyPhone } from '../util';

orchestrator(checkRegisterNavigateAction, () => {
  const isLogin = isLoginSelector();
  if (!isLogin) {
    logOutAction(registerUrlSelector());
    return;
  }

  const isMustVerifyPhone = isMustVerifyPhoneSelector();
  if (isMustVerifyPhone) goToVerifyPhone();
});
