import Head from 'next/head';
import { LandingPageV4Props } from './landing-page.type';
import { useMemo } from 'react';
import { LandingPageV4ThemeV1, LandingPageV4ThemeV2, LandingPageV4ThemeV3 } from '../../theme';
import { LandingPageStyles } from './landing-page.style';
import { LandingPageStylesV1 } from './landing-page-v1.styles';
import { useDynamicRenderPage } from '../../../../../../../../hooks';
import { NotFound } from '../../../../../../../../components';

export const LandingPageV4: React.FC<LandingPageV4Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage, slugKey } = useDynamicRenderPage({ systemConfig });

  const renderPageWithDynamicRouter = useMemo(() => {
    if (slugConfigJSON?.theme === 'V1') {
      return <LandingPageV4ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />;
    }
    if (slugConfigJSON?.theme === 'V2') {
      return <LandingPageV4ThemeV2 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />;
    }

    if (slugConfigJSON?.theme === 'V3') {
      return <LandingPageV4ThemeV3 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />;
    }

    return <NotFound />;
  }, [slugConfigJSON, slugKey, systemConfig]);

  return (
    <>
      <Head>
        {renderSeoPage}
        <LandingPageStyles />
        <LandingPageStylesV1 />
      </Head>
      <div className="root">{renderPageWithDynamicRouter}</div>
    </>
  );
};
