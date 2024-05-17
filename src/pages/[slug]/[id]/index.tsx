import React, { useMemo } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';

export interface IDynamicPageChildProps {
  systemConfig: Record<string, any>;
  appShell: Record<string, any>;
}

const DynamicPageChild: React.FC<IDynamicPageChildProps> = observer((props) => {
  const { systemConfig, appShell } = props;

  const router = useRouter();

  const seoHomePage = useMemo(() => systemConfig?.homePage?.seoHomePage, [systemConfig?.homePage?.seoHomePage]);

  // const contentPage = useMemo(
  //   () => rootLayoutConfig?.rootLayout[appShell?.appShellConfig?.theme]?.contentTheme?.[slug]?.contentPage,
  //   [appShell?.appShellConfig?.theme],
  // );

  return (
    <>
      <Head>
        <meta property="og:title" content={seoHomePage?.metaSeo || 'DQH Architectures - Trang Liên hệ'} />
        <meta property="og:url" content={seoHomePage?.metaUrl || 'https://dqharchitects.vn/contact'} />
        <meta property="og:image" />
        <title>{seoHomePage?.title || 'DQH Architectures - Liên hệ'}</title>
      </Head>
      {/* <DynamicHeader item={contentPage?.header} systemConfig={systemConfig} slug={slug} />
      <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
      <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} /> */}
      Page child
    </>
  );
});

export default DynamicPageChild;
