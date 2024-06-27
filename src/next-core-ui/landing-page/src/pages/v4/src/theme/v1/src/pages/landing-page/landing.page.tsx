import { LandingPageV4ThemeV1Props } from './landing-page.type';
import {
  LandingPageMenuDesktopV4,
  LandingPageMenuMobileV4,
  FooterV4,
  NewsV4,
  NewsAndTopReadV4,
  SingleNewsCardV4,
  ContactV4,
  DetailPageV4ThemeV1,
  StaticSectionV4,
  ExchangesSectionV4,
  PriceSectionV4,
  ConvertPriceSectionV4,
  NewLetterSectionV4,
} from '../../sections';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useDeviceSizes } from '../../../../../../../../../../../hooks';

export const LandingPageV4ThemeV1: React.FC<LandingPageV4ThemeV1Props> = (props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const isDevice = useDeviceSizes();

  const pageDataConfigWithDynamicRouter = useMemo(() => {
    return systemConfig?.ldpSystemConfigPage?.systemConfig?.[router?.asPath];
  }, [router?.asPath, systemConfig?.ldpSystemConfigPage?.systemConfig]);

  const pageDetailDataConfigWithDynamicRouter = useMemo(() => {
    let str = '/';

    if (!router?.query?.slug) return;

    if (router?.query?.slug?.length === 1 && !!pageDataConfigWithDynamicRouter) return;

    if (router?.query?.slug?.length > 1) {
      str = router?.query?.slug[0];
    }

    return systemConfig?.ldpSystemConfigPage?.systemConfig?.[str];
  }, [pageDataConfigWithDynamicRouter, router?.query?.slug, systemConfig?.ldpSystemConfigPage?.systemConfig]);

  const renderPageDetailWithDynamicRouter = useMemo(() => {
    if (!pageDetailDataConfigWithDynamicRouter) return;

    return pageDetailDataConfigWithDynamicRouter?.slug?.array?.map((slugItem) => {
      const dataSlug = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[slugItem?.section]?.[slugItem?.data];

      return <DetailPageV4ThemeV1 key={slugItem?.id} data={dataSlug} className={slugItem?.className} />;
    });
  }, [pageDetailDataConfigWithDynamicRouter, systemConfig?.ldpSystemConfigPage?.dataConfig?.V1]);

  const renderSectionPageWithDynamicRouter = useMemo(() => {
    return pageDataConfigWithDynamicRouter?.array?.map((item) => {
      const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[item?.section]?.[item?.data];

      const renderItem = () => {
        switch (item?.section) {
          case 'SINGLE_NEWS_CARD':
            return <SingleNewsCardV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEWS':
            return <NewsV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_AND_TOP_READ':
            return <NewsAndTopReadV4 key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <ContactV4 key={item?.id} data={data} className={item?.className} />;
          case 'STATIC_SECTION':
            return <StaticSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'EXCHANGES_SECTION':
            return <ExchangesSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'PRICE_SECTION':
            return <PriceSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'CONVERT_PRICE_SECTION':
            return <ConvertPriceSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_LETTER':
            return <NewLetterSectionV4 key={item?.id} data={data} className={item?.className} />;
          default:
            return <div />;
        }
      };
      return renderItem();
    });
  }, [pageDataConfigWithDynamicRouter?.array, systemConfig?.ldpSystemConfigPage?.dataConfig?.V1]);

  return (
    <main className="bg-[#ffffff]">
      <div className="container wrap p-lg-0 pt-0 lg:pt-2">
        <div className="content pt-2">
          <main className="main">
            <div className="page-content max-w-full w-full">
              {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
                <LandingPageMenuDesktopV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
              ) : (
                <LandingPageMenuMobileV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
              )}
              {renderSectionPageWithDynamicRouter}
              {renderPageDetailWithDynamicRouter}
              <FooterV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};
