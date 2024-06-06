import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { ProfilePage, LoginPage, RegisterPage, CartPage, HomePage, PromotionPage, CheckoutPage } from '../../pages';
import { BodyTheme01Props } from './body.type';
import { ProductDetailPage } from '../../pages/product-detail';
import { StaticPage } from '../../pages/static';

export const BodyTheme01: React.FC<BodyTheme01Props> = (props) => {
  const { slug, systemConfig } = props;

  const { sacWelcomePopup, sacStaticPage, sacPromotion, sacHomeContent, sacProductData } = systemConfig;

  const router = useRouter();

  const id = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return (str[1] ?? str[0])?.toLocaleUpperCase();
  }, [router?.query?.slug]);

  switch (slug) {
    case 'HOME':
      return (
        <HomePage sacWelcomePopup={sacWelcomePopup} sacProductData={sacProductData} sacHomeContent={sacHomeContent} />
      );
    case 'PRODUCT':
      return <ProductDetailPage routerId={id} sacProductData={sacProductData} />;
    case 'PROFILE':
      return <ProfilePage routerId={id} />;
    case 'CART':
      return <CartPage sacProductData={sacProductData} />;
    case 'PAGES':
      return <StaticPage routerId={id} sacStaticPage={sacStaticPage} />;
    case 'PROMOTION':
      return <PromotionPage sacPromotion={sacPromotion} />;
    case 'LOGIN':
      return <LoginPage />;
    case 'REGISTER':
      return <RegisterPage />;
    case 'CHECKOUT':
      return <CheckoutPage />;
    default:
      return <div />;
  }
};
