import { isLoginSelector } from '../selector';
import { goToLoginPage } from './go-to-login-page.util';
import { AppHistory } from '../../store-router-manager';

export function navigateWithAuth(path: string, history?: NextRouter, options?: { replace?: boolean }) {
  const isLogin = isLoginSelector();

  const actionHistory = history || AppHistory();

  if (isLogin) {
    switch (options?.replace) {
      case true:
        actionHistory.push(path);
        break;
      default:
        actionHistory.push(path);
        break;
    }
  } else {
    goToLoginPage();
  }
}
