import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { ProfilePage, LoginPage, RegisterPage, CartPage, HomePage, PromotionPage } from '../../pages';
import { BodyTheme01Props } from './body.type';
import { ProductDetailPage } from '../../pages/product-detail';
import { StaticPage } from '../../pages/static';

export const BodyTheme01: React.FC<BodyTheme01Props> = (props) => {
  const { slug, systemConfig } = props;

  const { wuiWelcomePopup, staticPage, promotion, productData, homeContent } = systemConfig;

  const router = useRouter();

  const id = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return (str[1] ?? str[0])?.toLocaleUpperCase();
  }, [router?.query?.slug]);

  switch (slug) {
    case 'HOME':
      return <HomePage wuiWelcomePopup={wuiWelcomePopup} productData={productData} homeContent={homeContent} />;
    case 'PRODUCT':
      return <ProductDetailPage routerId={id} productData={productData} />;
    case 'PROFILE':
      return <ProfilePage routerId={id} />;
    case 'CART':
      return <CartPage productData={productData} />;
    case 'PAGES':
      return <StaticPage routerId={id} staticPage={staticPage} />;
    case 'PROMOTION':
      return <PromotionPage promotion={promotion} />;
    case 'LOGIN':
      return <LoginPage />;
    case 'REGISTER':
      return <RegisterPage />;
    default:
      return <div />;
  }
};
