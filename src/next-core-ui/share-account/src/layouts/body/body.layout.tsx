import { useRouter } from 'next/router';
import { ProfilePage, PaymentPage, LoginPage, RegisterPage, CartPage, HomePage } from '../../pages';
import { useMemo } from 'react';

export interface BodyTheme02Props {
  item: Record<string, any>;
  systemConfig: Record<string, any>;
  slug?: string;
}

export const BodyTheme02: React.FC<BodyTheme02Props> = (props) => {
  const { item, systemConfig, slug } = props;

  const router = useRouter();

  const id = useMemo(() => {
    const str = router?.query?.id;

    if (!str) return '';

    if (typeof str === 'string') {
      return str.toLocaleUpperCase();
    }
    return str[0].toLocaleUpperCase();
  }, [router?.query?.id]);

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
    default:
      return <HomePage />;
  }
};
