import Head from 'next/head';
import { useMemo } from 'react';
import { NotFound } from '../../../../../../../components';
import { useDynamicRenderPage } from '../../../../../../../hooks';
import { LandingPageV1Props } from './landing-page.type';
import { LandingPageV1ThemeV1 } from '../theme';

export const LandingPageV1: React.FC<LandingPageV1Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage, slugKey } = useDynamicRenderPage({ systemConfig });

  const renderPageFollowTheme = useMemo(() => {
    return {
      V1: <LandingPageV1ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />,
      'NOT-FOUND': <NotFound />,
    };
  }, [systemConfig, slugConfigJSON, slugKey]);

  return (
    <>
      <Head>{renderSeoPage}</Head>
      <div className="root">{renderPageFollowTheme?.[slugConfigJSON?.theme ?? 'NOT-FOUND']}</div>
    </>
  );
};
