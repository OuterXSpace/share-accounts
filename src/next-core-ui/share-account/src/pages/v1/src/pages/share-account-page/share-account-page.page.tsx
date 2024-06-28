import Head from 'next/head';
import { LandingPageV4Props } from './share-account-page.type';
import { useMemo } from 'react';
import { ShareAccountPageV1ThemeV1 } from '../../theme';
import { useDynamicRenderPage } from '../../../../../../../../hooks';

export const ShareAccountPageV1: React.FC<LandingPageV4Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage } = useDynamicRenderPage({ systemConfig });

  const renderPageFollowTheme = useMemo(() => {
    if (slugConfigJSON?.theme === 'V1') {
      return <ShareAccountPageV1ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} />;
    }

    return <div>Not found theme</div>;
  }, [slugConfigJSON, systemConfig]);

  return (
    <>
      <Head>{renderSeoPage}</Head>
      <div className="root">{renderPageFollowTheme}</div>
    </>
  );
};
