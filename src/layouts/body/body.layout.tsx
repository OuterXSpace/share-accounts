import React from 'react';
import { DynamicBodyProps } from './header.type';
import { BodyTheme01 } from '../../next-core-ui';

export const DynamicBody: React.FC<DynamicBodyProps> = (props) => {
  const { item, systemConfig, slug, wuiWelcomePopup, staticPage, promotion } = props;

  switch (item?.type) {
    case 'BODY_THEME_01':
      return (
        <BodyTheme01
          item={item}
          systemConfig={systemConfig}
          slug={slug}
          wuiWelcomePopup={wuiWelcomePopup}
          staticPage={staticPage}
          promotion={promotion}
        />
      );
    default:
      return <div />;
  }
};
