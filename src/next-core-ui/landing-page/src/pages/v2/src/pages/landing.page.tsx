import Head from 'next/head';
import { LandingPageV2Props } from './landing-page.type';
import { useDynamicRenderPage } from '../../../../../../../hooks';
import { useMemo } from 'react';
import { NotFound } from '../../../../../../../components';
import { LandingPageV2ThemeV1 } from '../theme';

export const LandingPageV2: React.FC<LandingPageV2Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage, slugKey } = useDynamicRenderPage({ systemConfig });

  const renderPageWithDynamicRouter = useMemo(() => {
    if (slugConfigJSON?.theme === 'V1') {
      return <LandingPageV2ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />;
    }

    return <NotFound />;
  }, [slugConfigJSON, slugKey, systemConfig]);

  return (
    <>
      <Head>{renderSeoPage}</Head>
      {renderPageWithDynamicRouter}
    </>
  );
};
