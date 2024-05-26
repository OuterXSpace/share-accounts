import React from 'react';
import { ITabPanelProps } from './tab-panel.type';

export const TabPane: React.FC<ITabPanelProps> = (props) => {
  const { children } = props;
  return <div className="py-[15px] px-[35px]">{children}</div>;
};
