import Head from 'next/head';
import { LandingPageV4Props } from './landing-page.type';
import {
  LandingPageMenuDesktopV4,
  LandingPageMenuMobileV4,
  FooterV4,
  NewsV4,
  NewsAndTopReadV4,
  SingleNewsCardV4,
  NewDetailV4,
  ContactV4,
} from '../../sections';
import { useDeviceSizes } from '../../../../../../../../hooks';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export const LandingPageV4: React.FC<LandingPageV4Props> = (props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const isDevice = useDeviceSizes();

  const pageId = useMemo(() => {
    return router?.asPath;
  }, [router?.asPath]);

  const pageConfig = useMemo(
    () => systemConfig?.ldpSystemConfigPage?.systemConfig?.[pageId],
    [pageId, systemConfig?.ldpSystemConfigPage?.systemConfig],
  );

  const renderPage = useMemo(() => {
    if (pageConfig?.type === 'V2') {
      return (
        <main className="bg-[#ffffff]">
          <div className="container wrap p-lg-0 pt-0 lg:pt-2">
            <div className="content pt-2">
              <main className="main">
                <div className="page-content max-w-full w-full">
                  {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
                    <LandingPageMenuDesktopV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V2?.MENU?.V1} />
                  ) : (
                    <LandingPageMenuMobileV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V2?.MENU?.V1} />
                  )}
                  {pageConfig?.array?.map((item) => {
                    const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.V2?.[item?.type]?.[item?.data];

                    const renderItem = () => {
                      switch (item?.type) {
                        case 'SINGLE_NEWS_CARD':
                          return <SingleNewsCardV4 key={item?.id} data={data} className={item?.className} />;
                        case 'NEWS':
                          return <NewsV4 key={item?.id} data={data} className={item?.className} />;
                        case 'NEW_AND_TOP_READ':
                          return <NewsAndTopReadV4 key={item?.id} data={data} className={item?.className} />;
                        case 'CONTACT':
                          return <ContactV4 key={item?.id} data={data} className={item?.className} />;

                        default:
                          return (
                            <NewDetailV4
                              key={item?.id}
                              data={data}
                              className={item?.className}
                              systemConfig={systemConfig}
                            />
                          );
                      }
                    };

                    return renderItem();
                  })}
                  <FooterV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V2?.MENU?.V1} />
                </div>
              </main>
            </div>
          </div>
        </main>
      );
    }

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
                {pageConfig?.array?.map((item) => {
                  const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[item?.type]?.[item?.data];

                  const renderItem = () => {
                    switch (item?.type) {
                      case 'SINGLE_NEWS_CARD':
                        return <SingleNewsCardV4 key={item?.id} data={data} className={item?.className} />;
                      case 'NEWS':
                        return <NewsV4 key={item?.id} data={data} className={item?.className} />;
                      case 'NEW_AND_TOP_READ':
                        return <NewsAndTopReadV4 key={item?.id} data={data} className={item?.className} />;
                      case 'CONTACT':
                        return <ContactV4 key={item?.id} data={data} className={item?.className} />;

                      default:
                        return (
                          <NewDetailV4
                            key={item?.id}
                            data={data}
                            className={item?.className}
                            systemConfig={systemConfig}
                          />
                        );
                    }
                  };

                  return renderItem();
                })}
                <FooterV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
              </div>
            </main>
          </div>
        </div>
      </main>
    );
  }, [isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, pageConfig, systemConfig]);

  const renderSeoPage = useMemo(() => {
    const seoData = systemConfig?.ldpSystemConfigPage?.seoData?.[pageId];

    return (
      <Head>
        <meta property="og:title" content={seoData?.ogTitle} />
        <meta property="og:url" content={seoData?.ogUrl} />
        <meta property="og:image" content={seoData?.ogImage} />
        <title>{seoData?.ogTitle}</title>
      </Head>
    );
  }, [pageId, systemConfig?.ldpSystemConfigPage]);

  return (
    <div className="root">
      {renderSeoPage}
      {renderPage}
    </div>
  );
};
