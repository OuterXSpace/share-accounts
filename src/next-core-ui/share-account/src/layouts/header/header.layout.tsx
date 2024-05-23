import React from 'react';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../views';
import { useDeviceSizes } from '../../../../../hooks';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = (props) => {
  const { wuiHeaderContent } = props;

  const isDevice = useDeviceSizes();
  return (
    <header>
      {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
        <MenuDesktop wuiHeaderContent={wuiHeaderContent} />
      ) : (
        <MenuMobile />
      )}
    </header>
  );
};
