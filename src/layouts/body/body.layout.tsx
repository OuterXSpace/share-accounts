import React from 'react';
import { DynamicBodyProps } from './header.type';
import { BodyTheme01, BodyTheme02 } from '../../next-core-ui';

export const DynamicBody: React.FC<DynamicBodyProps> = (props) => {
  const { item, systemConfig, slug, wuiWelcomePopup, staticPage, promotion, productData, homeContent } = props;

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
          productData={productData}
          homeContent={homeContent}
        />
      );
    case 'BODY_THEME_02':
      return (
        <BodyTheme02
          item={item}
          systemConfig={systemConfig}
          slug={slug}
          wuiWelcomePopup={wuiWelcomePopup}
          staticPage={staticPage}
          promotion={promotion}
          productData={productData}
          homeContent={homeContent}
        />
      );
    default:
      return <div />;
  }
};
