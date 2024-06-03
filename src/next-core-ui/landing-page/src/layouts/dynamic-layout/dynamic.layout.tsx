import React from 'react';
import { DynamicTheme01Props } from './dynamic.type';
import { LandingPageV1 } from '../../pages';

export const DynamicTheme01: React.FC<DynamicTheme01Props> = (props) => {
  const { systemConfig } = props;

  return <LandingPageV1 systemConfig={systemConfig} />;
};
