import React from 'react';
import { MenuDesktop02, MenuMobile02 } from '../../views';
import { useDeviceSizes } from '../../../../../hooks';
import { IHeaderTheme02Props } from './header.type';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = (props) => {
  const { wuiHeaderContent } = props;

  const isDevice = useDeviceSizes();

  return (
    <header>
      {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
        <MenuDesktop02 wuiHeaderContent={wuiHeaderContent} />
      ) : (
        <MenuMobile02 />
      )}
    </header>
  );
};
