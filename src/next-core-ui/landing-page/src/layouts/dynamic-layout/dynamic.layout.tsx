import React from 'react';
import { DynamicThemeProps } from './dynamic.type';
import { LandingPageV1, LandingPageV2, LandingPageV3, LandingPageV4 } from '../../pages';
import { THEME } from '../../../../../constants/platform';
import { LANDING_PAGE_MOCK } from '../../core-data';
import { LANDING_PAGE_MOCK_V2 } from '../../core-data/v2';

export const DynamicTheme: React.FC<DynamicThemeProps> = (props) => {
  const { systemConfig } = props;

  switch (THEME) {
    case 'DYNAMIC_THEME_01':
      return <LandingPageV1 systemConfig={systemConfig ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK }} />;

    case 'DYNAMIC_THEME_02':
      return <LandingPageV2 systemConfig={systemConfig ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK_V2 }} />;

    case 'DYNAMIC_THEME_03':
      return <LandingPageV3 systemConfig={systemConfig ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK }} />;

    case 'DYNAMIC_THEME_04':
      return <LandingPageV4 systemConfig={systemConfig ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK }} />;

    default:
      return <div />;
  }
};
