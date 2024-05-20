import React from 'react';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../views';
import { useMediaQuery } from '../../../../../hooks';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return <header>{!isDesktop ? <MenuMobile /> : <MenuDesktop />}</header>;
};
