import React from 'react';
import { ShareAccountLayoutProps } from './share-account.type';
import { ShareAccountTheme } from '../../next-core-ui';

export const ShareAccountLayout: React.FC<ShareAccountLayoutProps> = (props) => {
  const { systemConfig } = props;

  return <ShareAccountTheme systemConfig={systemConfig} />;
};
