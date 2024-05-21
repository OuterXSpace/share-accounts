import { useState, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const useDeviceSizes = () => {
  const [isMounted, setIsMounted] = useState(false);

  const isSmallMobile = useMediaQuery('(max-width: 359px)');
  const isMobile = useMediaQuery('(min-width: 360px) and (max-width: 539px)');
  const isSurfaceDuo = useMediaQuery('(min-width: 540px) and (max-width: 719px)');
  const isTablet = useMediaQuery('(min-width: 720px) and (max-width: 1023px)');
  const isSmallDesktop = useMediaQuery('(min-width: 1024px) and (max-width: 1439px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return {
    isSmallMobile,
    isMobile,
    isSurfaceDuo,
    isTablet,
    isSmallDesktop,
    isLargeDesktop,
  };
};
