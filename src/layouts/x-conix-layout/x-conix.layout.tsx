import React from 'react';
import { XConixLayoutProps } from './x-conix.type';
import { XConixTheme } from '../../next-core-ui';

export const XConixLayout: React.FC<XConixLayoutProps> = (props) => {
  const { systemConfig } = props;

  return <XConixTheme systemConfig={systemConfig} />;
};
