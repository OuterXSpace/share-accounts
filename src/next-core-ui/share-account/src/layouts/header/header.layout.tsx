import React, { useState } from 'react';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../views';
import { useMedia } from '../../../../../hooks';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = () => {
  const [isCategoryToggle, setIsCategoryToggle] = useState(false);

  const { isMobile } = useMedia();

  const handleCategoryToggle = () => {
    setIsCategoryToggle(!isCategoryToggle);
  };

  return isMobile ? (
    <MenuMobile />
  ) : (
    <MenuDesktop onClickCategoryToggle={handleCategoryToggle} isCategoryToggle={isCategoryToggle} />
  );
};
