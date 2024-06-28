import React from 'react';
import { THEME } from '../../../../../constants/platform';
import { ShareAccountThemeProps } from './share-account-theme.type';
import { ShareAccountPageV1 } from '../../pages';

export const ShareAccountTheme: React.FC<ShareAccountThemeProps> = (props) => {
  const { systemConfig } = props;

  switch (THEME) {
    case 'SHARE_ACCOUNT_V1':
      return <ShareAccountPageV1 systemConfig={systemConfig} />;
    default:
      return <div />;
  }
};
