import React from 'react';
import { BodyTheme02 } from '../../next-core-ui/share-account/src/layouts/body/body.layout';

export interface DynamicBodyProps {
  item: Record<string, any>;
  systemConfig: Record<string, any>;
  slug?: string;
}

export const DynamicBody: React.FC<DynamicBodyProps> = (props) => {
  const { item, systemConfig, slug } = props;

  switch (item?.type) {
    case 'BODY_THEME_01':
      return <BodyTheme02 item={item} systemConfig={systemConfig} slug={slug} />;
    default:
      return <>Body</>;
  }
};
