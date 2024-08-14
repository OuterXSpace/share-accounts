import { useMemo } from 'react';
import { ISection, IUiConfigServerSide } from '../../../../../../../../../../models';
import { AloneVideo } from './alone-video';
import { Contact } from './contact';
import { DeepVideoBanner } from './deep-video-banner';
import { LoginPageShareAccountTheme01 } from './login';
import { NewCartText } from './news-cart-text';
import { NewCartTextAndImage } from './news-cart-text-and-image';
import { ProductImageList } from './product-image-list';
import { ProductVideoList } from './product-video-list';
import { ThreePanelFeatureSection } from './three-panel-feature';
import { PerspectivesGridSection } from './perspectives-grid';
import { SubscriberInterrupterSection } from './subscriber-interrupter';
import { GetInTouchSection } from './get-in-touch';
import { PreFooterSection } from './pre-footer';
import { HeroLandingSection } from './hero-landing';
import { AwardCarouselSection } from './award-carousel';
import { FormContactSection } from './form-contact';
import { OfficesSection } from './offices';
import { RichTextSection } from './rich-text';
import { PerspectivesArticleHero } from './perspectives-article-hero';
import { StaticPageSection } from './static-page';
import { DetailSection } from './detail';

export interface IExportSectionLandingPageV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  slugKey?: string;
  childItem?: ISection;
  style?: string;
}

export const ExportSectionLandingPageV1ThemeV1: React.FC<IExportSectionLandingPageV1ThemeV1Props> = (props) => {
  const { section, data, className, systemConfig, slugKey, childItem, style } = props;

  const renderSection = useMemo(() => {
    return {
      DEEP_VIDEO_BANNER_SECTION: <DeepVideoBanner data={data} className={className} style={style} />,
      NEW_CART_TEXT_SECTION: <NewCartText data={data} className={className} style={style} />,
      NEW_CART_TEXT_AND_IMAGE_SECTION: <NewCartTextAndImage data={data} className={className} style={style} />,
      PRODUCT_IMAGE_LIST_SECTION: <ProductImageList data={data} className={className} style={style} />,
      PRODUCT_VIDEO_LIST_SECTION: <ProductVideoList data={data} className={className} style={style} />,
      LOGIN_SECTION_SECTION: <LoginPageShareAccountTheme01 data={data} className={className} style={style} />,
      ALONE_VIDEO_SECTION: <AloneVideo data={data} className={className} style={style} />,
      THREE_PANEL_FEATURE_SECTION: <ThreePanelFeatureSection data={data} className={className} style={style} />,
      CONTACT_SECTION: <Contact data={data} className={className} style={style} />,
      PERSPECTIVES_GRID_SECTION: <PerspectivesGridSection data={data} className={className} style={style} />,
      SUBSCRIBER_INTERRUPTER_SECTION: <SubscriberInterrupterSection data={data} className={className} style={style} />,
      GET_IN_TOUCH_SECTION: <GetInTouchSection data={data} className={className} style={style} />,
      PRE_FOOTER_SECTION: <PreFooterSection data={data} className={className} style={style} />,
      FORM_CONTACT_SECTION: <FormContactSection data={data} className={className} style={style} />,
      HERO_LANDING_SECTION: <HeroLandingSection data={data} className={className} style={style} />,
      AWARD_CAROUSEL_SECTION: <AwardCarouselSection data={data} className={className} style={style} />,
      OFFICES_SECTION: <OfficesSection data={data} className={className} style={style} />,
      RICH_TEXT_SECTION: <RichTextSection data={data} className={className} style={style} />,
      PERSPECTIVES_ARTICLE_HERO: <PerspectivesArticleHero data={data} className={className} style={style} />,
      STATIC_PAGE_SECTION: <StaticPageSection data={data} className={className} style={style} />,
      DETAIL_SECTION: (
        <DetailSection
          data={data}
          systemConfig={systemConfig}
          section={section}
          className={className}
          childItem={childItem}
          slugKey={slugKey}
          style={style}
        />
      ),
      NOT_FOUND: <div>Not found section</div>,
    };
  }, [data, className, style, systemConfig, section, childItem, slugKey]);

  return renderSection[section ?? 'NOT_FOUND_SECTION'];
};
