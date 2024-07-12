import Head from 'next/head';
import { LandingPageV4Props } from './share-account-page.type';
import { useMemo } from 'react';
import { ShareAccountPageV1ThemeV1 } from '../../theme';
import { useDynamicRenderPage } from '../../../../../../../../hooks';
import { NotFound } from '../../../../../../../../components';

export const ShareAccountPageV1: React.FC<LandingPageV4Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage, slugKey } = useDynamicRenderPage({ systemConfig });

  const renderPageFollowTheme = useMemo(() => {
    return {
      V1: <ShareAccountPageV1ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />,
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
