import { isMobileBrowser, languageReplace, accessTokenReplace } from '../../../utils';
import { AppHistory } from '../../store-router-manager';
import { accessTokenSelector } from '../selector';

export const backToRedirectUrl = (delay?: number) => {
  const url = new URL(window.location.href);
  let redirectUrl = url.searchParams.get('redirectUrl');

  if (redirectUrl) {
    const accessToken = accessTokenSelector();
    redirectUrl = accessTokenReplace(redirectUrl, accessToken);

    redirectUrl = languageReplace(redirectUrl);
  }

  const isMobile = isMobileBrowser();

  if (isMobile) {
    setTimeout(() => {
      AppHistory()?.push(redirectUrl ?? '/');
    }, Math.max(delay || 0, 0));
  } else {
    setTimeout(() => {
      window.location.href = redirectUrl ?? '/';
    }, Math.max(delay || 0, 0));
  }
};
