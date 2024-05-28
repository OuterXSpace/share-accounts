import React from 'react';
import { DynamicBodyProps } from './header.type';
import { BodyTheme01, BodyTheme02 } from '../../next-core-ui';

export const DynamicBody: React.FC<DynamicBodyProps> = (props) => {
  const { item, systemConfig, slug } = props;

  switch (item?.type) {
    case 'BODY_THEME_01':
      return <BodyTheme01 item={item} systemConfig={systemConfig} slug={slug} />;
    case 'BODY_THEME_02':
      return <BodyTheme02 item={item} systemConfig={systemConfig} slug={slug} />;
    default:
      return <div />;
  }
};
