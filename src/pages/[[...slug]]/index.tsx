import React from 'react';
import { observer } from 'mobx-react';
import { GOOGLE_APP_CLIENT_ID, THEME } from '../../constants/platform';
import { IUiConfigServerSide } from '../../models';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { NotFound } from '../../components';
import { DynamicLayout, ShareAccountLayout } from '../../layouts';
import { useUIContent } from '../../hooks';

export interface IServerSideProps {
  systemConfig: IUiConfigServerSide;
}

const DynamicPage: React.FC<IServerSideProps> = observer(() => {
  let systemConfig: IUiConfigServerSide = {};

  if (THEME === 'SHARE_ACCOUNT_V1') {
    const data = useUIContent<IUiConfigServerSide>('sac-system-config-page');
    systemConfig = {
      ldpSystemConfigPage: data?.content,
    };
  }
  if (THEME === 'DYNAMIC_PAGE_V1') {
    const data = useUIContent<IUiConfigServerSide>('ldp-system-config-page-v1');
    systemConfig = {
      ldpSystemConfigPage: data?.content,
    };
  }
  if (THEME === 'DYNAMIC_PAGE_V2') {
    const data = useUIContent<IUiConfigServerSide>('ldp-system-config-page-v2');
    systemConfig = {
      ldpSystemConfigPage: data?.content,
    };
  }
  if (THEME === 'DYNAMIC_PAGE_V3') {
    const data = useUIContent<IUiConfigServerSide>('ldp-system-config-page-v3');
    systemConfig = {
      ldpSystemConfigPage: data?.content,
    };
  }
  if (THEME === 'DYNAMIC_PAGE_V4') {
    const data = useUIContent<IUiConfigServerSide>('ldp-system-config-page-v4');
    systemConfig = {
      ldpSystemConfigPage: data?.content,
    };
  }

  switch (THEME) {
    case 'DYNAMIC_PAGE_V1':
    case 'DYNAMIC_PAGE_V2':
    case 'DYNAMIC_PAGE_V3':
    case 'DYNAMIC_PAGE_V4':
      return <DynamicLayout systemConfig={systemConfig} />;

    case 'SHARE_ACCOUNT_V1':
      return (
        <GoogleOAuthProvider clientId={GOOGLE_APP_CLIENT_ID}>
          <ShareAccountLayout systemConfig={systemConfig} />
        </GoogleOAuthProvider>
      );
    default:
      return <NotFound />;
  }
});

export default DynamicPage;
