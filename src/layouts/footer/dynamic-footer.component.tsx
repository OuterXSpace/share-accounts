import React from 'react';
import { FooterTheme02 } from '../../next-core-ui/share-account/src/layouts/footer/footer.layout';

export interface DynamicFooterProps {
  item: Record<string, any>;
  systemConfig: Record<string, any>;
  slug?: string;
}

export const DynamicFooter: React.FC<DynamicFooterProps> = (props) => {
  const { item, systemConfig, slug } = props;

  switch (item?.type) {
    case 'FOOTER_THEME_01':
      return <FooterTheme02 />;
    case 'FOOTER_NONE':
      return <div className="hidden" />;
    default:
      return <>Footer</>;
  }
};
