import React from 'react';
import { DynamicFooterProps } from './footer.type';
import { FooterTheme01 } from '../../next-core-ui';

export const DynamicFooter: React.FC<DynamicFooterProps> = (props) => {
  const { item, systemConfig, slug } = props;

  switch (item?.type) {
    case 'FOOTER_THEME_01':
      return <FooterTheme01 footerContent={systemConfig?.footerContent} />;
    case 'FOOTER_NONE':
      return <div className="hidden" />;
    default:
      return <div />;
  }
};
