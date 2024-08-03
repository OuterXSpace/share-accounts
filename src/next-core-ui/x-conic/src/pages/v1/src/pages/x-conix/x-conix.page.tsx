import Head from 'next/head';
import { XConixPageV1Props } from './x-conix.type';
import { useMemo } from 'react';
import { XConixPageV1ThemeV1 } from '../../theme';
import { useDynamicRenderPage } from '../../../../../../../../hooks';
import { NotFound } from '../../../../../../../../components';

export const XConixPageV1: React.FC<XConixPageV1Props> = (props) => {
  const { systemConfig } = props;

  const { slugConfigJSON, renderSeoPage, slugKey } = useDynamicRenderPage({ systemConfig });

  const renderPageFollowTheme = useMemo(() => {
    return {
      V1: <XConixPageV1ThemeV1 systemConfig={systemConfig} slugConfigJSON={slugConfigJSON} slugKey={slugKey} />,
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
