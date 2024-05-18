import React, { useState, useEffect } from 'react';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../views';
import { useMediaQuery } from 'usehooks-ts';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = () => {
  const [isCategoryToggle, setIsCategoryToggle] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const isDesktopScreen = useMediaQuery('(min-width: 1024px)');

  const handleCategoryToggle = () => {
    setIsCategoryToggle(!isCategoryToggle);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {isDesktopScreen ? (
        <MenuDesktop onClickCategoryToggle={handleCategoryToggle} isCategoryToggle={isCategoryToggle} />
      ) : (
        <MenuMobile />
      )}
    </div>
  );
};
