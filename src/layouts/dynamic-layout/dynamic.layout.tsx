import React from 'react';
import { DynamicLayoutProps } from './dynamic.type';
import { DynamicTheme } from '../../next-core-ui';

export const DynamicLayout: React.FC<DynamicLayoutProps> = (props) => {
  const { systemConfig, slug } = props;

  return <DynamicTheme systemConfig={systemConfig} slug={slug} />;
};
