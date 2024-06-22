import Head from 'next/head';
import { LandingPageV3Props } from './landing-page.type';
import {
  DeepVideoBannerV3,
  NewCartTextV3,
  NewCartTextAndImageV3,
  ProductImageListV3,
  AloneVideoV3,
  ProductVideoListV3,
  LandingPageMenuDesktopV3,
  LandingPageMenuMobileV3,
  ContactV3,
  FooterV3,
} from '../sections';
import { useDeviceSizes } from '../../../../../../../hooks';
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
              <LandingPageMenuDesktopV3 key={item?.id} data={data} className={item?.className} />
            ) : (
              <LandingPageMenuMobileV3 key={item?.id} data={data} className={item?.className} />
            );
          case 'DEEP_VIDEO_BANNER':
            return <DeepVideoBannerV3 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT':
            return <NewCartTextV3 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT_AND_IMAGE':
            return <NewCartTextAndImageV3 key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_IMAGE_LIST':
            return <ProductImageListV3 key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_VIDEO_LIST':
            return <ProductVideoListV3 key={item?.id} data={data} className={item?.className} />;
          case 'ALONE_VIDEO':
            return <AloneVideoV3 key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <ContactV3 key={item?.id} data={data} className={item?.className} />;
          case 'FOOTER':
            return <FooterV3 key={item?.id} data={data} className={item?.className} />;
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
