import dynamic from 'next/dynamic';
import { THEME } from '../../../../../constants/platform';
import { ShareAccountThemeProps } from './share-account-theme.type';
import { LoadingSpinner, NotFound } from '../../../../../components';

const ShareAccountPageV1 = dynamic(() => import('../../pages').then((mod) => mod.ShareAccountPageV1), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const ShareAccountTheme: React.FC<ShareAccountThemeProps> = (props) => {
  const { systemConfig } = props;

  switch (THEME) {
    case 'SHARE_ACCOUNT_V1':
      return <ShareAccountPageV1 systemConfig={systemConfig} />;

    default:
      return <NotFound />;
  }
};
