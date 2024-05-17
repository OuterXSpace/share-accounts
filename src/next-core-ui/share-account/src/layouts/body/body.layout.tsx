import { ProfilePage, PaymentPage, LoginPage, RegisterPage, CartPage, HomePage } from '../../pages';

export interface BodyTheme02Props {
  item: Record<string, any>;
  systemConfig: Record<string, any>;
  slug?: string;
}

export const BodyTheme02: React.FC<BodyTheme02Props> = (props) => {
  const { item, systemConfig, slug } = props;

  switch (slug) {
    case 'PROFILE':
      return <ProfilePage />;
    case 'PROJECTS':
      return <PaymentPage />;
    case 'VIDEO':
      return <LoginPage />;
    case 'NEWS':
      return <RegisterPage />;
    case 'CONTACT':
      return <CartPage />;
    default:
      return <HomePage />;
  }
};
