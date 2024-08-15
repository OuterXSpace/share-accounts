import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { doesPathExist } from './use-menu.until';
import { IUseMenuProps } from './use-menu.type';

const SCROLL_THRESHOLD = 100;
const REVERSE_NAV_CLASS = 'reverse-main-nav';
const HEADER_FIXED = 'header-fixed';

export const useMenu = (props: IUseMenuProps) => {
  const { systemConfig, slugConfigJSON } = props;

  const headerRef = useRef(null);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const router = useRouter();

  const renderClassReverseNav = useMemo(() => {
    if (
      doesPathExist(
        systemConfig?.ldpSystemConfigPage?.untilConfig?.[slugConfigJSON?.theme]?.REVERSE_NAV_CLASS?.object?.array,
        router?.asPath,
      )
    ) {
      return REVERSE_NAV_CLASS;
    }
    return '';
  }, [router?.asPath, slugConfigJSON?.theme, systemConfig?.ldpSystemConfigPage?.untilConfig]);

  useEffect(() => {
    if (!renderClassReverseNav) return;

    document.body?.classList?.add(...[renderClassReverseNav]);
    return () => {
      document.body.classList.remove(...[renderClassReverseNav]);
    };
  }, [renderClassReverseNav]);

  useEffect(() => {
    const onScroll = () => {
      const headerInitHeight = headerRef.current.offsetHeight;

      if (typeof window !== 'undefined') {
        const top = window.pageYOffset || document.documentElement.scrollTop;

        if (top > SCROLL_THRESHOLD) {
          if (!isHeaderFixed) {
            headerRef.current.classList.add(HEADER_FIXED);
            if (document.body.classList.contains(REVERSE_NAV_CLASS)) {
              headerRef.current.nextElementSibling.style.paddingTop = `${headerInitHeight}px`;
            }
            setIsHeaderFixed(true);
          }
        } else if (isHeaderFixed) {
          headerRef.current.classList.remove(HEADER_FIXED);
          if (document.body.classList.contains(REVERSE_NAV_CLASS)) {
            headerRef.current.nextElementSibling.style.paddingTop = '';
          }
          setIsHeaderFixed(false);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHeaderFixed, renderClassReverseNav]);

  return { headerRef, isHeaderFixed };
};
