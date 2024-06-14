import Head from 'next/head';
import { LandingPageV2Props } from './landing-page.type';
import { LandingPageMenuDesktopV2, LandingPageMenuMobileV2, ContactV2, FooterV2 } from '../../core-ui/v2/components';
import { useDeviceSizes } from '../../../../../hooks';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { ServicesSlider, ServicesSliderStylesV2 } from '../../core-ui/v2/components/services-slider';
import { LandingPageTest } from './test';
import { LandingPageStylesV2 } from './landing-page-v2.styles';

export const LandingPageV2: React.FC<LandingPageV2Props> = (props) => {
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
          case 'SERVICES_SLIDER':
            return <ServicesSlider key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <ContactV2 key={item?.id} data={data} className={item?.className} />;
          case 'FOOTER':
            return <FooterV2 key={item?.id} data={data} className={item?.className} />;
          case 'TEST_02':
            return <LandingPageTest />;
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
      <>
        <meta property="og:title" content={seoData?.ogTitle} />
        <meta property="og:url" content={seoData?.ogUrl} />
        <meta property="og:image" content={seoData?.ogImage} />
        <title>{seoData?.ogTitle}</title>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/dm-sans" />
      </>
    );
  }, [slug, systemConfig?.ldpSystemConfigPage]);

  return (
    <>
      <Head>{renderSeoPage}</Head>
      {/* style global landing page v2 */}
      <LandingPageStylesV2 />
      <ServicesSliderStylesV2 />
      {renderPage}
    </>
  );
};
