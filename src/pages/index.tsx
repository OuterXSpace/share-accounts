import Head from 'next/head';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { DynamicBody } from '../layouts/body/dynamic-body.component';
import { DynamicFooter } from '../layouts/footer/dynamic-footer.component';
import { DynamicHeader } from '../layouts/header/dynamic-header.component';
import { GetServerSideProps } from 'next';
import { fetchUiContentApi } from '../store/store-ui-content/api';
import { rootLayoutConfig } from '../mocks';
import { useRouter } from 'next/router';

export interface BodyHomeProps {
  systemConfig: Record<string, any>;
  appShell: Record<string, any>;
}

const Home: React.FC<BodyHomeProps> = observer((props) => {
  const { systemConfig, appShell } = props;

  const router = useRouter();

  const slug =
    useMemo(() => {
      const str = router?.query?.slug;

      if (!str) return 'HOME';
    }, [router?.query?.slug]) || 'HOME';

  const seoHomePage = useMemo(() => systemConfig?.homePage?.seoHomePage, [systemConfig?.homePage?.seoHomePage]);

  const contentPage =
    useMemo(
      () => rootLayoutConfig?.rootLayout[appShell?.appShellConfig?.theme]?.contentTheme[slug]?.contentPage,
      [appShell?.appShellConfig?.theme, slug],
    ) || {};

  return (
    <>
      <Head>
        <meta property="og:title" content={seoHomePage?.metaSeo || 'DQH Architectures - Ngôi nhà ước mơ'} />
        <meta property="og:url" content={seoHomePage?.metaUrl || 'https://dqharchitects.vn/'} />
        <meta property="og:image" />
        <title>{seoHomePage?.title || 'DQH Architectures'}</title>
      </Head>

      <DynamicHeader item={contentPage?.header} systemConfig={systemConfig} slug={slug} />
      <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
      <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} />
    </>
  );
});

export default Home;

export const getServerSideProps = (async () => {
  const systemConfig: Record<string, any> = (await fetchUiContentApi({ contentId: 'ui-config' })) || {};

  const appShell = (await fetchUiContentApi({ contentId: 'app-shell-config' })) || {};

  return {
    props: {
      systemConfig,
      appShell,
    },
  };
}) satisfies GetServerSideProps<BodyHomeProps>;
