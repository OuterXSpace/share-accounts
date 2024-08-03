import { IUiConfigServerSide } from '../../../../../../../../../../models';
import {
  SliderHomeXConixTheme01,
  WelcomePopupXConixTheme01,
  ProductListXConixTheme01,
  NewImageTextSectionXConixTheme01,
  PromotionPageXConixTheme01,
  CartXConixTheme01,
  LoginPageXConixTheme01,
  RegisterPageXConixTheme01,
  ProfilePageXConixTheme01,
  ProductDetailPageXConixTheme01,
  CheckoutPageXConixTheme01,
} from '.';
import { StaticPageXConixTheme01 } from './static';
import { useMemo } from 'react';

export interface IExportSectionXConixV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  slugKey?: string;
}

export const ExportSectionXConixV1ThemeV1: React.FC<IExportSectionXConixV1ThemeV1Props> = (props) => {
  const { systemConfig, section, data, className, slugKey } = props;

  const renderSection = useMemo(() => {
    return {
      SLIDER_HOME_SECTION: <SliderHomeXConixTheme01 data={data} className={className} />,
      WELCOME_POPUP_SECTION: <WelcomePopupXConixTheme01 data={data} className={className} />,
      NEW_IMAGE_TEXT_SECTION: <NewImageTextSectionXConixTheme01 data={data} className={className} />,
      PROMOTION_SECTION: <PromotionPageXConixTheme01 data={data} className={className} />,
      STATIC_SECTION: <StaticPageXConixTheme01 data={data} className={className} />,
      LOGIN_SECTION: <LoginPageXConixTheme01 data={data} className={className} />,
      REGISTER_SECTION: <RegisterPageXConixTheme01 data={data} className={className} />,
      CHECKOUT_SECTION: <CheckoutPageXConixTheme01 data={data} className={className} />,
      PROFILE_SECTION: <ProfilePageXConixTheme01 data={data} className={className} slugKey={slugKey} />,
      CART_SECTION: (
        <CartXConixTheme01 data={data} className={className} products={systemConfig?.ldpSystemConfigPage?.products} />
      ),
      PRODUCT_DETAIL_SECTION: (
        <ProductDetailPageXConixTheme01
          data={data}
          className={className}
          products={systemConfig?.ldpSystemConfigPage?.products}
        />
      ),
      PRODUCT_LIST_SECTION: (
        <ProductListXConixTheme01
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
