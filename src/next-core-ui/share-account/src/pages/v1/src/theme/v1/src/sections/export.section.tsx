import { IUiConfigServerSide } from '../../../../../../../../../../models';
import {
  SliderHomeShareAccountTheme01,
  WelcomePopupShareAccountTheme01,
  ProductListShareAccountTheme01,
  NewImageTextSectionShareAccountTheme01,
  PromotionPageShareAccountTheme01,
  CartPageShareAccountTheme01,
  LoginPageShareAccountTheme01,
  RegisterPageShareAccountTheme01,
  ProfilePageShareAccountTheme01,
  ProductDetailPageShareAccountTheme01,
} from '.';
import { StaticPageShareAccountTheme01 } from './static';

export interface IExportSectionShareAccountV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  // section?:
  //   | 'SLIDER_HOME_SECTION'
  //   | 'WELCOME_POPUP_SECTION'
  //   | 'PRODUCT_LIST_SECTION'
  //   | 'NEW_IMAGE_TEXT_SECTION'
  //   | 'PROMOTION_SECTION'
  //   | 'STATIC_SECTION'
  //   | 'CART_SECTION'
  //   | 'LOGIN_SECTION'
  //   | 'REGISTER_SECTION'
  //   | 'PROFILE_SECTION'
  //   | 'PRODUCT_DETAIL_SECTION';
}

export const ExportSectionShareAccountV1ThemeV1: React.FC<IExportSectionShareAccountV1ThemeV1Props> = (props) => {
  const { systemConfig, section, data, className } = props;

  switch (section) {
    case 'SLIDER_HOME_SECTION':
      return <SliderHomeShareAccountTheme01 data={data} className={className} />;
    case 'WELCOME_POPUP_SECTION':
      return <WelcomePopupShareAccountTheme01 data={data} className={className} />;
    case 'PRODUCT_LIST_SECTION':
      return (
        <ProductListShareAccountTheme01
          data={data}
          products={systemConfig?.ldpSystemConfigPage?.products}
          className={className}
        />
      );
    case 'NEW_IMAGE_TEXT_SECTION':
      return <NewImageTextSectionShareAccountTheme01 data={data} className={className} />;
    case 'PROMOTION_SECTION':
      return <PromotionPageShareAccountTheme01 data={data} className={className} />;
    case 'STATIC_SECTION':
      return <StaticPageShareAccountTheme01 data={data} className={className} />;
    case 'CART_SECTION':
      return (
        <CartPageShareAccountTheme01
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      );
    case 'LOGIN_SECTION':
      return <LoginPageShareAccountTheme01 data={data} className={className} />;
    case 'REGISTER_SECTION':
      return <RegisterPageShareAccountTheme01 data={data} className={className} />;
    case 'PROFILE_SECTION':
      return <ProfilePageShareAccountTheme01 data={data} className={className} />;
    case 'PRODUCT_DETAIL_SECTION':
      return (
        <ProductDetailPageShareAccountTheme01
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      );
    default:
      return <div>Not found section</div>;
  }
};
