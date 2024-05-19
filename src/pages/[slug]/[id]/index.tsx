import React, { useMemo } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { IDynamicPageProps } from '..';
import { DynamicHeader, DynamicBody, DynamicFooter } from '../../../layouts';
import { rootLayoutConfig } from '../../../mocks';
import { fetchUiContentApi } from '../../../store/store-ui-content/api';

export interface IDynamicPageChildProps {
  systemConfig: Record<string, any>;
  appShell: Record<string, any>;
}

const DynamicPageChild: React.FC<IDynamicPageChildProps> = observer((props) => {
  const { systemConfig, appShell } = props;

  const router = useRouter();

  const slug = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return '';

    if (typeof str === 'string') {
      return str.toLocaleUpperCase();
    }
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
        <meta property="og:title" content={seoHomePage?.metaSeo || 'DQH Architectures - Trang Liên hệ'} />
        <meta property="og:url" content={seoHomePage?.metaUrl || 'https://dqharchitects.vn/contact'} />
        <meta property="og:image" />
        <title>{seoHomePage?.title || 'DQH Architectures - Liên hệ'}</title>
      </Head>

      <DynamicHeader item={contentPage?.header} systemConfig={systemConfig} slug={slug} />
      <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
      <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} />
    </>
  );
});

export default DynamicPageChild;

export const getServerSideProps = (async () => {
  const systemConfig: Record<string, any> = (await fetchUiContentApi({ contentId: 'ui-config' })) || {};

  const appShell = (await fetchUiContentApi({ contentId: 'app-shell-config' })) || {};

  return {
    props: {
      systemConfig,
      appShell,
    },
  };
}) satisfies GetServerSideProps<IDynamicPageProps>;
