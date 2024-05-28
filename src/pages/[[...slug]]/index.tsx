import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { DynamicHeader } from '../../layouts/header/header.layout';
import { DynamicFooter } from '../../layouts/footer/footer.layout';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { fetchUiContentApi } from '../../store/store-ui-content/api';
import { DynamicBody } from '../../layouts/body/body.layout';
import { THEME } from '../../constants/platform';
import { IUiConfigServerSide } from '../../models';
import { ROOT_LAYOUT_CONFIG } from '../../root-config';

export interface IServerSideProps {
  systemConfig: IUiConfigServerSide;
}

const DynamicPage: React.FC<IServerSideProps> = observer((props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const slug = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return str[0].toLocaleUpperCase();
  }, [router?.query?.slug]);

  const contentPage = useMemo(() => ROOT_LAYOUT_CONFIG?.rootLayout[THEME]?.contentTheme?.[slug]?.contentPage, [slug]);

  return (
    <>
      <DynamicHeader item={contentPage?.header} systemConfig={systemConfig} slug={slug} />
      <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
      <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} />
    </>
  );
});

export default DynamicPage;

export const getServerSideProps = (async () => {
  let systemConfig: IUiConfigServerSide = {};

  if (THEME === 'THEME_01') {
    const appShell = (await fetchUiContentApi({ contentId: 'app-shell-config' })) || {};
    const wuiHeaderContent = (await fetchUiContentApi({ contentId: 'wui-header-content' })) || {};
    const wuiWelcomePopup = (await fetchUiContentApi({ contentId: 'wui-welcome-popup' })) || {};
    const staticPage = (await fetchUiContentApi({ contentId: 'static-pages-content' })) || {};
    const promotion = (await fetchUiContentApi({ contentId: 'promotion-content' })) || {};
    const productData = (await fetchUiContentApi({ contentId: 'products-data' })) || {};
    const homeContent = (await fetchUiContentApi({ contentId: 'home-page-content' })) || {};
    const footerContent = (await fetchUiContentApi({ contentId: 'footer-content' })) || {};

    systemConfig = {
      appShell,
      wuiHeaderContent,
      wuiWelcomePopup,
      staticPage,
      promotion,
      productData,
      homeContent,
      footerContent,
    };
  }

  return {
    props: {
      systemConfig,
    },
  };
}) satisfies GetServerSideProps<IServerSideProps>;
