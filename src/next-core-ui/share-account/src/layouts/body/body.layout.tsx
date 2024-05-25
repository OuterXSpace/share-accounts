import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { ProfilePage, PaymentPage, LoginPage, RegisterPage, CartPage, HomePage } from '../../pages';
import { BodyTheme01Props } from './body.type';

export const BodyTheme01: React.FC<BodyTheme01Props> = (props) => {
  const { slug, item, systemConfig, wuiWelcomePopup } = props;

  const router = useRouter();

  const id = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return (str[1] ?? str[0])?.toLocaleUpperCase();
  }, [router?.query?.slug]);

  switch (slug) {
    case 'PROFILE':
      return <ProfilePage routerId={id} />;
    case 'PROJECTS':
      return <PaymentPage />;
    case 'CART':
      return <CartPage />;
    case 'LOGIN':
      return <LoginPage />;
    case 'REGISTER':
      return <RegisterPage />;
    case 'HOME':
      return <HomePage wuiWelcomePopup={wuiWelcomePopup} />;
    default:
      return <div />;
  }
};
