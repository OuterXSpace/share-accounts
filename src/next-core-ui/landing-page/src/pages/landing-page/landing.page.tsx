/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import { LandingPageProps } from './landing-page.type';
import {
  DeepVideoBanner,
  NewCartText,
  NewCartTextAndImage,
  ProductImageList,
  AloneVideo,
  ProductVideoList,
  MenuDesktop02,
  MenuMobile02,
  Contact,
  Footer,
} from './components';
import { useDeviceSizes } from '../../../../../hooks';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export const LandingPageV1: React.FC<LandingPageProps> = (props) => {
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
              <MenuDesktop02 key={item?.id} data={data} className={item?.className} />
            ) : (
              <MenuMobile02 key={item?.id} data={data} className={item?.className} />
            );
          case 'DEEP_VIDEO_BANNER':
            return <DeepVideoBanner key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT':
            return <NewCartText key={item?.id} data={data} className={item?.className} />;
          case 'NEW_CART_TEXT_AND_IMAGE':
            return <NewCartTextAndImage key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_IMAGE_LIST':
            return <ProductImageList key={item?.id} data={data} className={item?.className} />;
          case 'PRODUCT_VIDEO_LIST':
            return <ProductVideoList key={item?.id} data={data} className={item?.className} />;
          case 'ALONE_VIDEO':
            return <AloneVideo key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <Contact key={item?.id} data={data} className={item?.className} />;
          case 'FOOTER':
            return <Footer key={item?.id} data={data} className={item?.className} />;
          default:
            return <div />;
        }
      };

      return renderItem();
    });
  }, [isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slug, systemConfig?.ldpSystemConfigPage]);

  return (
    <>
      <Head>
        <meta property="og:title" content="Nguyễn Trọng Nhân" />
        <meta property="og:url" content="/" />
        <meta property="og:image" />
        <title>Nguyễn Trọng Nhân</title>
      </Head>
      <main className="bg-[#000000]">{renderPage}</main>
    </>
  );
};
