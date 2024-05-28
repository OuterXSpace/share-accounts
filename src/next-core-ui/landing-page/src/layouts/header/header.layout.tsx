import React from 'react';
import { useDeviceSizes } from '../../../../../hooks';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../../../share-account';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = (props) => {
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
