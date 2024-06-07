import Head from 'next/head';
import { LandingPageV3Props } from './landing-page.type';
import {
  DeepVideoBannerV2,
  NewCartTextV2,
  NewCartTextAndImageV2,
  ProductImageListV2,
  AloneVideoV2,
  ProductVideoListV2,
  LandingPageMenuDesktopV2,
  LandingPageMenuMobileV2,
  ContactV2,
  FooterV2,
} from '../../core-ui/v2/components';
import { useDeviceSizes } from '../../../../../hooks';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export const LandingPageV3: React.FC<LandingPageV3Props> = (props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const slug = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return str[0].toLocaleUpperCase();
  }, [router?.query?.slug]);

  const isDevice = useDeviceSizes();

  const renderPage = useMemo(() => {
    const uiConfig = systemConfig?.ldpSystemConfigPage?.systemConfig?.[slug];

    return uiConfig?.map((item) => {
      const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.[item?.type]?.[item?.data];

      const renderItem = () => {
        switch (item?.type) {
          case 'MENU':
            return isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
              <LandingPageMenuDesktopV2 key={item?.id} data={data} className={item?.className} />
            ) : (
              <LandingPageMenuMobileV2 key={item?.id} data={data} className={item?.className} />
            );
          case 'DEEP_VIDEO_BANNER':
            return <DeepVideoBannerV2 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT':
            return <NewCartTextV2 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT_AND_IMAGE':
            return <NewCartTextAndImageV2 key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_IMAGE_LIST':
            return <ProductImageListV2 key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_VIDEO_LIST':
            return <ProductVideoListV2 key={item?.id} data={data} className={item?.className} />;
          case 'ALONE_VIDEO':
            return <AloneVideoV2 key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <ContactV2 key={item?.id} data={data} className={item?.className} />;
          case 'FOOTER':
            return <FooterV2 key={item?.id} data={data} className={item?.className} />;
          default:
            return <div />;
        }
      };

      return renderItem();
    });
  }, [isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slug, systemConfig?.ldpSystemConfigPage]);

  const renderSeoPage = useMemo(() => {
    const seoData = systemConfig?.ldpSystemConfigPage?.seoData?.[slug];

    return (
      <Head>
        <meta property="og:title" content={seoData?.ogTitle} />
        <meta property="og:url" content={seoData?.ogUrl} />
        <meta property="og:image" content={seoData?.ogImage} />
        <title>{seoData?.ogTitle}</title>
      </Head>
    );
  }, [slug, systemConfig?.ldpSystemConfigPage]);

  return (
    <>
      {renderSeoPage}
      <main className={`${systemConfig?.ldpSystemConfigPage?.className ? 'bg-[#000000]' : ''}`}>{renderPage}</main>
    </>
  );
};
