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
  CheckoutPageShareAccountTheme01,
} from '.';
import { StaticPageShareAccountTheme01 } from './static';
import { useMemo } from 'react';

export interface IExportSectionShareAccountV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  slugKey?: string;
}

export const ExportSectionShareAccountV1ThemeV1: React.FC<IExportSectionShareAccountV1ThemeV1Props> = (props) => {
  const { systemConfig, section, data, className, slugKey } = props;

  const renderSection = useMemo(() => {
    return {
      SLIDER_HOME_SECTION: <SliderHomeShareAccountTheme01 data={data} className={className} />,
      WELCOME_POPUP_SECTION: <WelcomePopupShareAccountTheme01 data={data} className={className} />,
      NEW_IMAGE_TEXT_SECTION: <NewImageTextSectionShareAccountTheme01 data={data} className={className} />,
      PROMOTION_SECTION: <PromotionPageShareAccountTheme01 data={data} className={className} />,
      STATIC_SECTION: <StaticPageShareAccountTheme01 data={data} className={className} />,
      LOGIN_SECTION: <LoginPageShareAccountTheme01 data={data} className={className} />,
      REGISTER_SECTION: <RegisterPageShareAccountTheme01 data={data} className={className} />,
      CHECKOUT_SECTION: <CheckoutPageShareAccountTheme01 data={data} className={className} />,
      PROFILE_SECTION: <ProfilePageShareAccountTheme01 data={data} className={className} slugKey={slugKey} />,
      CART_SECTION: (
        <CartPageShareAccountTheme01
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      ),
      PRODUCT_DETAIL_SECTION: (
        <ProductDetailPageShareAccountTheme01
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      ),
      PRODUCT_LIST_SECTION: (
        <ProductListShareAccountTheme01
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      ),
      NOT_FOUND_SECTION: <div>Not found section</div>,
    };
  }, [className, data, slugKey, systemConfig?.ldpSystemConfigPage?.products]);

  return renderSection[section ?? 'NOT_FOUND_SECTION'];
};
