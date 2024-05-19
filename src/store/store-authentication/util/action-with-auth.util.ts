import { isLoginSelector } from '../selector';
import { goToLoginPage } from './go-to-login-page.util';

export function actionWithAuth(callback: () => void) {
  const isLogin = isLoginSelector();
  if (isLogin) {
    callback();
  } else {
    goToLoginPage();
  }
}
