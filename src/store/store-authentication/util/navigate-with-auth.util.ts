import { isLoginSelector } from '../selector';
import { goToLoginPage } from './go-to-login-page.util';
import { AppHistory } from '../../store-router-manager';
import { NextRouter } from 'next/router';

export function navigateWithAuth(path: string, history?: NextRouter, options?: { replace?: boolean }) {
  const isLogin = isLoginSelector();

  const actionHistory = history || AppHistory();

  if (isLogin) {
    switch (options?.replace) {
      case true:
        actionhistory?.push(path);
        break;
      default:
        actionhistory?.push(path);
        break;
    }
  } else {
    goToLoginPage();
  }
}
