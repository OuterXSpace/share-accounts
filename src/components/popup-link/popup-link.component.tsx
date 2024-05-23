import React, { useCallback, useMemo } from 'react';
import { IPopupLinkProps } from './popup-link.type';
import { CoreAuthenticationStore } from '../../store';
import { mainDomainReplace, accessTokenReplace, languageReplace } from '../../utils';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const PopupLink: React.FC<IPopupLinkProps> = (props) => {
  const {
    title,
    authenRequired,
    link,
    popupHeight,
    popupWidth,
    children,
    disablePopup,
    className,
    target = '_self',
    disabled,
    routeLink,
    ...restAnchorProps
  } = props;

  const router = useRouter();

  const popupLink = useMemo(() => {
    if (routeLink) return;
    if (!link) return '#';

    return mainDomainReplace(link).split('?')[0];
  }, [link, routeLink]);

  const handleOpenLink = useCallback(
    (ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      if (disabled) return;

      // * check auth
      if (authenRequired && !CoreAuthenticationStore.isLoginAndNotMustVerifyPhoneSelector()) {
        CoreAuthenticationStore.checkAuthenticatedNavigateAction();
        return;
      }

      let url = routeLink ?? link;
      if (!url) return;

      url = mainDomainReplace(url);
      if (authenRequired) url = accessTokenReplace(url); // * replace token if authen required
      url = languageReplace(url);

      // * route link
      if (routeLink) router.push(url);
      // * open with target
      else if (disablePopup) window.open(url, target);
      else {
        // * open popup
        const innerWidth = popupWidth ?? 320;
        const innerHeight = popupHeight ?? 640;
        const popupWindow = window.open(url, title, `innerWidth=${innerWidth},innerHeight=${innerHeight},popup=1`);
        if (!popupWindow) return;

        popupWindow.focus();
        popupWindow.moveTo(
          Math.max((window.innerWidth - innerWidth) / 2, 0),
          Math.max((window.innerHeight - innerHeight) / 2, 0),
        );
      }
    },
    [authenRequired, disablePopup, disabled, link, popupHeight, popupWidth, routeLink, router, target, title],
  );

  return (
    <Link
      href={popupLink}
      onClick={handleOpenLink}
      className={`toto-popup-link ${className} ${
        disabled ? 'disabled cursor-not-allowed filter grayscale-100 opacity-70' : ''
      }`}
      {...restAnchorProps}
    >
      {children}
    </Link>
  );
};
