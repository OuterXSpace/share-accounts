import React from 'react';
import { MenuDesktop, MenuMobile } from '../../views';
import { useDeviceSizes } from '../../../../../hooks';
import { IHeaderTheme01Props } from './header.type';

export const HeaderTheme01: React.FC<IHeaderTheme01Props> = (props) => {
  const { systemConfig } = props;

  const isDevice = useDeviceSizes();
  return (
    <header>
      {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
        <MenuDesktop wuiHeaderContent={systemConfig?.wuiHeaderContent} />
      ) : (
        <MenuMobile />
      )}
    </header>
  );
};
