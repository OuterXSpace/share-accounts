import Head from 'next/head';
import { LandingPageV2Props } from './landing-page.type';
import { useDynamicRenderPage } from '../../../../../../../hooks';
import { useMemo } from 'react';
import { LoadingSpinner, NotFound } from '../../../../../../../components';
import dynamic from 'next/dynamic';

const LandingPageV2ThemeV1 = dynamic(() => import('../theme').then((mod) => mod.LandingPageV2ThemeV1), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const LandingPageV2: React.FC<LandingPageV2Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage, slugKey } = useDynamicRenderPage({ systemConfig });

  const renderPageWithDynamicRouter = useMemo(() => {
    if (slugConfigJSON?.theme === 'V1') {
      return <LandingPageV2ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />;
    }

<<<<<<< HEAD
    return (
      <>
        <meta property="og:title" content={seoData?.ogTitle} />
        <meta property="og:url" content={seoData?.ogUrl} />
        <meta property="og:image" content={seoData?.ogImage} />
        <title>{seoData?.ogTitle}</title>
      </>
    );
  }, [slug, systemConfig?.ldpSystemConfigPage]);
=======
    return <NotFound />;
  }, [slugConfigJSON, slugKey, systemConfig]);
>>>>>>> 8caea76aa937aa8f4fb1fed85e8a1076b3bf8281

  return (
    <>
      <Head>{renderSeoPage}</Head>
      {renderPageWithDynamicRouter}
    </>
  );
};
