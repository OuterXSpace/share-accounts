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
import { ToastProvider } from '../../components';

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
    case 'DYNAMIC_THEME_01':
    case 'DYNAMIC_THEME_02':
    case 'DYNAMIC_THEME_03':
    case 'DYNAMIC_THEME_04':
      return (
        <ToastProvider>
          <DynamicLayout systemConfig={systemConfig ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK }} slug={slug} />
        </ToastProvider>
      );

    default:
      return (
        <ToastProvider>
          <CartProvider>
            <DynamicHeader item={contentPage?.header} systemConfig={systemConfig} slug={slug} />
            <DynamicBody item={contentPage?.body} systemConfig={systemConfig} slug={slug} />
            <DynamicFooter item={contentPage?.footer} systemConfig={systemConfig} slug={slug} />
          </CartProvider>
        </ToastProvider>
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

  if (THEME === 'DYNAMIC_THEME_01') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_THEME_02') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page-v2' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_THEME_03') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page-v3' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_THEME_04') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page-v4' });

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
