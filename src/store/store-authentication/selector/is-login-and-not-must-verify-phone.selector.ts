import { computedFn } from 'mobx-utils';
import { isLoginSelector } from './is-login.selector';
import { isMustVerifyPhoneSelector } from './is-must-verify-phone.selector';

export const isLoginAndNotMustVerifyPhoneSelector = computedFn(() => {
  return isLoginSelector() && !isMustVerifyPhoneSelector();
});
