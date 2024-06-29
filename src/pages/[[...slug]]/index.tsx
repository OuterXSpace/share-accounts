import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { GOOGLE_APP_CLIENT_ID, THEME } from '../../constants/platform';
import { IUiConfigServerSide } from '../../models';
import crypto from 'crypto-js';
import { GetServerSideProps } from 'next';
import { fetchUiContentApi } from '../../store/store-ui-content/api';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ShareAccountLayout } from '../../layouts';

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

  switch (THEME) {
    case 'DYNAMIC_PAGE_V1':
    case 'DYNAMIC_PAGE_V2':
    case 'DYNAMIC_PAGE_V3':
    case 'DYNAMIC_PAGE_V4':
      return <ShareAccountLayout systemConfig={DATA_PROPS} slug={slug} />;

    case 'SHARE_ACCOUNT_V1':
      return (
        <GoogleOAuthProvider clientId={GOOGLE_APP_CLIENT_ID}>
          <ShareAccountLayout systemConfig={DATA_PROPS} slug={slug} />
        </GoogleOAuthProvider>
      );
    default:
      return <div>Not found</div>;
  }
});

export default DynamicPage;

export const getServerSideProps = (async () => {
  let systemConfig: IUiConfigServerSide = {};

  if (THEME === 'SHARE_ACCOUNT_V1') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'sac-system-config-page' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_PAGE_V1') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_PAGE_V2') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page-v2' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_PAGE_V3') {
    const ldpSystemConfigPage = await fetchUiContentApi({ contentId: 'ldp-system-config-page-v3' });

    systemConfig = {
      ldpSystemConfigPage,
    };
  }

  if (THEME === 'DYNAMIC_PAGE_V4') {
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
