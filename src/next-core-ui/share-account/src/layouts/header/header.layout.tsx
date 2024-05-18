import React from 'react';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../views';
import { useMediaQuery } from 'usehooks-ts';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = () => {
  const isDesktopScreen = useMediaQuery('(min-width: 1024px)');
  return isDesktopScreen ? <MenuDesktop /> : <MenuMobile />;
};
