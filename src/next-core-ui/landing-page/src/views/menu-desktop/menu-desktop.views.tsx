import React from 'react';
import { IMenuDesktop02Props } from './menu-desktop.type';

export const MenuDesktop02: React.FC<IMenuDesktop02Props> = (props) => {
  const { wuiHeaderContent } = props;

  return <nav className="menu">Menu</nav>;
};
