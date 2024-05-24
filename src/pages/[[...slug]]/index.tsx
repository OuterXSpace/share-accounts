import React, { useMemo } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { DynamicHeader } from '../../layouts/header/header.layout';
import { DynamicFooter } from '../../layouts/footer/footer.layout';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { rootLayoutConfig } from '../../mocks';
import { fetchUiContentApi } from '../../store/store-ui-content/api';
import { DynamicBody } from '../../layouts/body/body.layout';

export interface IDynamicPageProps {
  systemConfig?: Record<string, any>;
  appShell?: Record<string, any>;
  wuiHeaderContent?: Record<string, any>;
}

const DynamicPage: React.FC<IDynamicPageProps> = observer((props) => {
  const { systemConfig, appShell, wuiHeaderContent } = props;

  const router = useRouter();

  const slug = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return str[0].toLocaleUpperCase();
  }, [router?.query?.slug]);

  const seoHomePage = useMemo(() => systemConfig?.homePage?.seoHomePage, [systemConfig?.homePage?.seoHomePage]);

  const contentPage = useMemo(
    () => rootLayoutConfig?.rootLayout[appShell?.appShellConfig?.theme]?.contentTheme?.[slug]?.contentPage,
    [appShell?.appShellConfig?.theme, slug],
  );

  return (
    <>
      <Head>
        <meta property="og:title" content={seoHomePage?.metaSeo} />
        <meta property="og:url" content={seoHomePage?.metaUrl} />
        <meta property="og:image" />
        <title>{seoHomePage?.title}</title>
      </Head>
      <DynamicHeader
        item={contentPage?.header}
        systemConfig={systemConfig}
        slug={slug}
        wuiHeaderContent={wuiHeaderContent}
      />
      <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
      <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} />
    </>
  );
});

export default DynamicPage;

export const getServerSideProps = (async () => {
  const systemConfig: Record<string, any> = (await fetchUiContentApi({ contentId: 'ui-config' })) || {};

  const appShell = (await fetchUiContentApi({ contentId: 'app-shell-config' })) || {};

  const wuiHeaderContent = (await fetchUiContentApi({ contentId: 'wui-header-content' })) || {};

  return {
    props: {
      systemConfig,
      appShell,
      wuiHeaderContent,
    },
  };
}) satisfies GetServerSideProps<IDynamicPageProps>;
