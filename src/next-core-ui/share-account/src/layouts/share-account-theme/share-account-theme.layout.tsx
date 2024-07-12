import dynamic from 'next/dynamic';
import { THEME } from '../../../../../constants/platform';
import { ShareAccountThemeProps } from './share-account-theme.type';
import { LoadingSpinner, NotFound } from '../../../../../components';
import { useMemo } from 'react';

const ShareAccountPageV1 = dynamic(() => import('../../pages').then((mod) => mod.ShareAccountPageV1), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const ShareAccountTheme: React.FC<ShareAccountThemeProps> = (props) => {
  const { systemConfig } = props;

  const renderTheme = useMemo(() => {
    return {
      SHARE_ACCOUNT_V1: <ShareAccountPageV1 systemConfig={systemConfig} />,
      NOT_FOUND: <NotFound />,
    };
  }, [systemConfig]);

  return renderTheme?.[THEME ?? 'NOT_FOUND'];
};
