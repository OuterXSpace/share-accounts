import { isLoginSelector } from '../selector';
import { goToLoginPage } from './go-to-login-page.util';

export function actionWithAuthPromise(callback: () => Promise<void>): Promise<void> {
  const isLogin = isLoginSelector();
  if (isLogin) {
    return callback();
  }
  goToLoginPage();
  return Promise.resolve();
}
