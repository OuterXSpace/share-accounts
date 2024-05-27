import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { HomePage02 } from '../../pages';
import { BodyTheme02Props } from './body.type';

export const BodyTheme02: React.FC<BodyTheme02Props> = (props) => {
  const { slug, item, systemConfig, wuiWelcomePopup, staticPage, promotion, productData, homeContent } = props;

  const router = useRouter();

  const id = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return (str[1] ?? str[0])?.toLocaleUpperCase();
  }, [router?.query?.slug]);

  switch (slug) {
    case 'HOME':
      return <HomePage02 wuiWelcomePopup={wuiWelcomePopup} productData={productData} homeContent={homeContent} />;
    default:
      return <div />;
  }
};
