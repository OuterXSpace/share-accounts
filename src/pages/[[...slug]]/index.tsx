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
import { DynamicLayout } from '../../layouts';
import { CartProvider, LANDING_PAGE_MOCK } from '../../next-core-ui';

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

  switch (THEME) {
    case 'DYNAMIC_URL_THEME_01':
      return <DynamicLayout systemConfig={systemConfig} slug={slug} />;

    default:
      return (
        <CartProvider>
          <DynamicHeader item={contentPage?.header} systemConfig={systemConfig} slug={slug} />
          <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
          <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} />
        </CartProvider>
      );
  }
});

export default DynamicPage;

export const getServerSideProps = (async () => {
  let systemConfig: IUiConfigServerSide = {};

  if (THEME === 'THEME_01') {
    const sacHeaderContent = (await fetchUiContentApi({ contentId: 'sac-header-content' })) || {};
    const sacWelcomePopup = (await fetchUiContentApi({ contentId: 'sac-welcome-popup' })) || {};
    const sacStaticPage = (await fetchUiContentApi({ contentId: 'sac-static-pages-content' })) || {};
    const sacPromotion = (await fetchUiContentApi({ contentId: 'sac-promotion-content' })) || {};
    const sacProductData = (await fetchUiContentApi({ contentId: 'sac-products-data' })) || {};
    const sacHomeContent = (await fetchUiContentApi({ contentId: 'sac-home-page-content' })) || {};
    const sacFooterContent = (await fetchUiContentApi({ contentId: 'sac-footer-content' })) || {};

    systemConfig = {
      sacHeaderContent,
      sacWelcomePopup,
      sacStaticPage,
      sacPromotion,
      sacProductData,
      sacHomeContent,
      sacFooterContent,
    };
  }

  if (THEME === 'DYNAMIC_URL_THEME_01') {
    const ldpSystemConfigPage = (await fetchUiContentApi({ contentId: 'ldp-system-config-page' })) || LANDING_PAGE_MOCK;

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  return {
    props: {
      systemConfig,
    },
  };
}) satisfies GetServerSideProps<IServerSideProps>;
