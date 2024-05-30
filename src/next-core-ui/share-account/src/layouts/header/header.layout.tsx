import React, { useState } from 'react';
import { MenuDesktop, MenuMobile } from '../../views';
import { useDeviceSizes } from '../../../../../hooks';
import { IHeaderTheme01Props } from './header.type';
import { DrawerCart } from '../../components/drawer-cart';

export const HeaderTheme01: React.FC<IHeaderTheme01Props> = (props) => {
  const { systemConfig } = props;
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleCloseCart = () => setIsOpenCart(false);
  const handleOpenCart = () => setIsOpenCart(true);

  const isDevice = useDeviceSizes();
  return (
    <header>
      {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
        <MenuDesktop wuiHeaderContent={systemConfig?.sacHeaderContent} handleOpenCart={handleOpenCart} />
      ) : (
        <MenuMobile wuiHeaderContent={systemConfig?.sacHeaderContent} handleOpenCart={handleOpenCart} />
      )}
      <DrawerCart
        isOpenCart={isOpenCart}
        handleCloseCart={handleCloseCart}
        position={isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? 'right' : 'left'}
      />
    </header>
  );
};
