import React from 'react';
import { DynamicLayoutProps } from './dyanmic.type';
import { THEME } from '../../constants/platform';
import { DynamicTheme01 } from '../../next-core-ui';

export const DynamicLayout: React.FC<DynamicLayoutProps> = (props) => {
  const { systemConfig, slug } = props;

  switch (THEME) {
    case 'DYNAMIC_URL_THEME_01':
      return <DynamicTheme01 systemConfig={systemConfig} slug={slug} />;
    default:
      return <div />;
  }
};
