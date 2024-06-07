import Head from 'next/head';
import { LandingPageV4Props } from './landing-page.type';
import {
  DeepVideoBannerV4,
  NewCartTextV4,
  NewCartTextAndImageV4,
  ProductImageListV4,
  AloneVideoV4,
  ProductVideoListV4,
  LandingPageMenuDesktopV4,
  LandingPageMenuMobileV4,
  ContactV4,
  FooterV4,
} from '../../core-ui/v4/components';
import { useDeviceSizes } from '../../../../../hooks';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export const LandingPageV4: React.FC<LandingPageV4Props> = (props) => {
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
              <LandingPageMenuDesktopV4 key={item?.id} data={data} className={item?.className} />
            ) : (
              <LandingPageMenuMobileV4 key={item?.id} data={data} className={item?.className} />
            );
          case 'DEEP_VIDEO_BANNER':
            return <DeepVideoBannerV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT':
            return <NewCartTextV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT_AND_IMAGE':
            return <NewCartTextAndImageV4 key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_IMAGE_LIST':
            return <ProductImageListV4 key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_VIDEO_LIST':
            return <ProductVideoListV4 key={item?.id} data={data} className={item?.className} />;
          case 'ALONE_VIDEO':
            return <AloneVideoV4 key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <ContactV4 key={item?.id} data={data} className={item?.className} />;
          case 'FOOTER':
            return <FooterV4 key={item?.id} data={data} className={item?.className} />;
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
