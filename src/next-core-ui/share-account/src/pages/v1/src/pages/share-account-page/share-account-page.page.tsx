import Head from 'next/head';
import { LandingPageV4Props } from './share-account-page.type';
import { useMemo } from 'react';
import { ShareAccountPageV1ThemeV1 } from '../../theme';
import { useDynamicRenderPage } from '../../../../../../../../hooks';

export const ShareAccountPageV1: React.FC<LandingPageV4Props> = (props) => {
  const { systemConfig } = props;

  const { configParentOutput, configChildrenOutput, renderSeoPage } = useDynamicRenderPage({systemConfig});

  const renderPageFollowTheme = useMemo(() => {
    if (configParentOutput?.theme || configChildrenOutput?.theme === 'V1') {
      return <ShareAccountPageV1ThemeV1 systemConfig={systemConfig} />;
    }

    return <div>Not found theme</div>;
  }, [configChildrenOutput?.theme, configParentOutput?.theme, systemConfig]);

  return (
    <>
      <Head>{renderSeoPage}</Head>
      <div className="root">{renderPageFollowTheme}</div>
    </>
  );
};
