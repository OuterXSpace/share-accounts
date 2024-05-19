import { computedFn } from 'mobx-utils';
import { accessTokenSelector } from './access-token.selector';
import { checkTokenExpiredUtil } from '../util';

export const isLoginSelector = computedFn(() => {
  const token = accessTokenSelector();
  return !!token && !checkTokenExpiredUtil(token);
});
