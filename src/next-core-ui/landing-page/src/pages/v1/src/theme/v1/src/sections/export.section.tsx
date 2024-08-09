import { useMemo } from 'react';
import { IUiConfigServerSide } from '../../../../../../../../../../models';
import { AloneVideo } from './alone-video';
import { Contact } from './contact';
import { DeepVideoBanner } from './deep-video-banner';
import { LoginPageShareAccountTheme01 } from './login';
import { NewCartText } from './news-cart-text';
import { NewCartTextAndImage } from './news-cart-text-and-image';
import { ProductImageList } from './product-image-list';
import { ProductVideoList } from './product-video-list';

export interface IExportSectionLandingPageV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  slugKey?: string;
}

export const ExportSectionLandingPageV1ThemeV1: React.FC<IExportSectionLandingPageV1ThemeV1Props> = (props) => {
  const { systemConfig, section, data, className, slugKey } = props;

  const renderSection = useMemo(() => {
    return {
      DEEP_VIDEO_BANNER_SECTION: <DeepVideoBanner data={data} className={className} />,
      NEW_CART_TEXT_SECTION: <NewCartText data={data} className={className} />,
      NEW_CART_TEXT_AND_IMAGE_SECTION: <NewCartTextAndImage data={data} className={className} />,
      PRODUCT_IMAGE_LIST_SECTION: <ProductImageList data={data} className={className} />,
      PRODUCT_VIDEO_LIST_SECTION: <ProductVideoList data={data} className={className} />,
      LOGIN_SECTION_SECTION: <LoginPageShareAccountTheme01 data={data} className={className} />,
      ALONE_VIDEO_SECTION: <AloneVideo data={data} className={className} />,
      CONTACT_SECTION: <Contact data={data} className={className} />,
      NOT_FOUND: <div>Not found section</div>,
    };
  }, [className, data]);

  return renderSection[section ?? 'NOT_FOUND_SECTION'];
};
