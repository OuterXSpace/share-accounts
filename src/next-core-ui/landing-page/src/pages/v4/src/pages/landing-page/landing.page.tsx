import Head from 'next/head';
import { LandingPageV4Props } from './landing-page.type';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { LandingPageV4ThemeV1, LandingPageV4ThemeV2, LandingPageV4ThemeV3 } from '../../theme';
import { LandingPageStyles } from './landing-page.style';
import { LandingPageStylesV1 } from './landing-page-v1.styles';

export const LandingPageV4: React.FC<LandingPageV4Props> = (props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const pageDataConfigWithDynamicRouter = useMemo(() => {
    return systemConfig?.ldpSystemConfigPage?.systemConfig?.[router?.asPath];
  }, [router?.asPath, systemConfig?.ldpSystemConfigPage?.systemConfig]);

  const renderSeoPageWithDynamicRouter = useMemo(() => {
    const seoData = systemConfig?.ldpSystemConfigPage?.seoData?.[router?.asPath];

    return (
      <>
        <meta property="og:title" content={seoData?.ogTitle} />
        <meta property="og:url" content={seoData?.ogUrl} />
        <meta property="og:image" content={seoData?.ogImage} />
        <title>{seoData?.ogTitle}</title>
      </>
    );
  }, [router?.asPath, systemConfig?.ldpSystemConfigPage?.seoData]);

  const renderPageWithDynamicRouter = useMemo(() => {
    if (pageDataConfigWithDynamicRouter?.theme === 'V2') {
      return <LandingPageV4ThemeV2 systemConfig={systemConfig} />;
    }

    if (pageDataConfigWithDynamicRouter?.theme === 'V3') {
      return <LandingPageV4ThemeV3 systemConfig={systemConfig} />;
    }

    return <LandingPageV4ThemeV1 systemConfig={systemConfig} />;
  }, [pageDataConfigWithDynamicRouter?.theme, systemConfig]);

  return (
    <>
      <Head>
        {renderSeoPageWithDynamicRouter}
        <LandingPageStyles />
        <LandingPageStylesV1 />
      </Head>
      <div className="root">{renderPageWithDynamicRouter}</div>
    </>
  );
};
