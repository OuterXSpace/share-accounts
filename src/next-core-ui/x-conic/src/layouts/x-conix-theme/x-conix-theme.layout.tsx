import dynamic from 'next/dynamic';
import { THEME } from '../../../../../constants/platform';
import { XConixThemeProps } from './x-conix-theme.type';
import { LoadingSpinner, NotFound } from '../../../../../components';
import { useMemo } from 'react';

const XConixPageV1 = dynamic(() => import('../../pages').then((mod) => mod.XConixPageV1), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const XConixTheme: React.FC<XConixThemeProps> = (props) => {
  const { systemConfig } = props;

  const renderTheme = useMemo(() => {
    return {
      X_CONIX_V1: <XConixPageV1 systemConfig={systemConfig} />,
      NOT_FOUND: <NotFound />,
    };
  }, [systemConfig]);

  return renderTheme?.[THEME ?? 'NOT_FOUND'];
};
