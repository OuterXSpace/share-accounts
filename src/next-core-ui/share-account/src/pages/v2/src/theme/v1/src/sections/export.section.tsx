import { IUiConfigServerSide } from '../../../../../../../../../../models';
import {
  SliderHomeShareAccountTheme02,
  WelcomePopupShareAccountTheme02,
  ProductListShareAccountTheme02,
  NewImageTextSectionShareAccountTheme02,
  PromotionPageShareAccountTheme02,
  CartPageShareAccountTheme02,
  LoginPageShareAccountTheme02,
  RegisterPageShareAccountTheme02,
  ProfilePageShareAccountTheme02,
  ProductDetailPageShareAccountTheme02,
  CheckoutPageShareAccountTheme02,
} from '.';
import { StaticPageShareAccountTheme02 } from './static';
import { useMemo } from 'react';

export interface IExportSectionShareAccountV1ThemeV2Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  slugKey?: string;
}

export const ExportSectionShareAccountV1ThemeV2: React.FC<IExportSectionShareAccountV1ThemeV2Props> = (props) => {
  const { systemConfig, section, data, className, slugKey } = props;

  const renderSection = useMemo(() => {
    return {
      SLIDER_HOME_SECTION: <SliderHomeShareAccountTheme02 data={data} className={className} />,
      WELCOME_POPUP_SECTION: <WelcomePopupShareAccountTheme02 data={data} className={className} />,
      NEW_IMAGE_TEXT_SECTION: <NewImageTextSectionShareAccountTheme02 data={data} className={className} />,
      PROMOTION_SECTION: <PromotionPageShareAccountTheme02 data={data} className={className} />,
      STATIC_SECTION: <StaticPageShareAccountTheme02 data={data} className={className} />,
      LOGIN_SECTION: <LoginPageShareAccountTheme02 data={data} className={className} />,
      REGISTER_SECTION: <RegisterPageShareAccountTheme02 data={data} className={className} />,
      CHECKOUT_SECTION: <CheckoutPageShareAccountTheme02 data={data} className={className} />,
      PROFILE_SECTION: <ProfilePageShareAccountTheme02 data={data} className={className} slugKey={slugKey} />,
      CART_SECTION: (
        <CartPageShareAccountTheme02
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      ),
      PRODUCT_DETAIL_SECTION: (
        <ProductDetailPageShareAccountTheme02
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      ),
      PRODUCT_LIST_SECTION: (
        <ProductListShareAccountTheme02
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
