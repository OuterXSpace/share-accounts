import React from 'react';
import { DynamicThemeProps } from './dynamic.type';
import { LandingPageV1, LandingPageV2, LandingPageV3 } from '../../pages';
import { THEME } from '../../../../../constants/platform';

export const DynamicTheme: React.FC<DynamicThemeProps> = (props) => {
  const { systemConfig } = props;

  switch (THEME) {
    case 'DYNAMIC_THEME_01':
      return <LandingPageV1 systemConfig={systemConfig} />;

    case 'DYNAMIC_THEME_02':
      return <LandingPageV2 systemConfig={systemConfig} />;

    case 'DYNAMIC_THEME_03':
      return <LandingPageV3 systemConfig={systemConfig} />;

    default:
      return <div />;
  }
};
