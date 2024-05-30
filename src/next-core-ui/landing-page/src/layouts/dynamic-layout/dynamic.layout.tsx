import React from 'react';
import { HomePage02 } from '../../pages';
import { DynamicTheme01Props } from './dynamic.type';

export const DynamicTheme01: React.FC<DynamicTheme01Props> = (props) => {
  const { systemConfig } = props;

  return <HomePage02 systemConfig={systemConfig} />;
};
