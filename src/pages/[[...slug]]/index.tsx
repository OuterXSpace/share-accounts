import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { DynamicHeader } from '../../layouts/header/header.layout';
import { DynamicFooter } from '../../layouts/footer/footer.layout';
import { useRouter } from 'next/router';
import { DynamicBody } from '../../layouts/body/body.layout';
import { THEME } from '../../constants/platform';
import { IUiConfigServerSide } from '../../models';
import { ROOT_LAYOUT_CONFIG } from '../../root-config';
import { DynamicLayout } from '../../layouts';
import { CartProvider, LANDING_PAGE_MOCK } from '../../next-core-ui';
import crypto from 'crypto-js';
import { GetServerSideProps } from 'next';
import { fetchUiContentApi } from '../../store/store-ui-content/api';

export interface IServerSideProps {
  systemConfig: IUiConfigServerSide;
}

const SECRET_DATA = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';

const DynamicPage: React.FC<IServerSideProps> = observer((props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const DATA_PROPS = useMemo(() => {
    const bytes = crypto.AES.decrypt(systemConfig, SECRET_DATA);

    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  }, [systemConfig]);

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
      return <DynamicLayout systemConfig={DATA_PROPS ?? { ldpSystemConfigPage: LANDING_PAGE_MOCK }} slug={slug} />;

    default:
      return (
        <CartProvider>
          <DynamicHeader item={contentPage?.header} systemConfig={DATA_PROPS} slug={slug} />
          <DynamicBody item={contentPage?.body} systemConfig={DATA_PROPS} slug={slug} />
          <DynamicFooter item={contentPage?.footer} systemConfig={DATA_PROPS} slug={slug} />
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

  systemConfig = crypto.AES.encrypt(JSON.stringify(systemConfig), SECRET_DATA).toString();

  return {
    props: {
      systemConfig,
    },
  };
}) satisfies GetServerSideProps<IServerSideProps>;
