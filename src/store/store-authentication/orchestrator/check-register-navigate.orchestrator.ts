import { orchestrator } from 'satcheljs';
import { checkRegisterNavigateAction, logOutAction } from '../action';
import { isLoginSelector, isMustVerifyPhoneSelector, registerUrlSelector } from '../selector';
import { goToVerifyPhone } from '../util';

orchestrator(checkRegisterNavigateAction, ({ router }) => {
  const isLogin = isLoginSelector();
  if (!isLogin) {
    logOutAction(registerUrlSelector(), router);
    return;
  }

  const isMustVerifyPhone = isMustVerifyPhoneSelector();
  if (isMustVerifyPhone) goToVerifyPhone();
});
