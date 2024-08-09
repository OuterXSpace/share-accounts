import React, { useMemo } from 'react';
import { DynamicThemeProps } from './dynamic.type';
import { THEME } from '../../../../../constants/platform';
import dynamic from 'next/dynamic';
import { LoadingSpinner, NotFound } from '../../../../../components';
import { LANDING_PAGE_MOCK } from '../../core-data';

const LandingPageV1 = dynamic(() => import('../../pages').then((mod) => mod.LandingPageV1), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const DynamicTheme: React.FC<DynamicThemeProps> = (props) => {
  const { systemConfig } = props;

  const renderTheme = useMemo(() => {
    return {
      DYNAMIC_PAGE_V1: <LandingPageV1 systemConfig={systemConfig ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK }} />,
      NOT_FOUND: <NotFound />,
    };
  }, [systemConfig]);

  return renderTheme?.[THEME ?? 'NOT_FOUND'];
};
