// import { GetServerSideProps } from 'next';
// import crypto from 'crypto-js';
// import { fetchUiContentApi } from '../../store/store-ui-content/api';
// import { IRootSystemConfig } from '../../models/system-config/root-system-config';
import { observer } from 'mobx-react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { LoadingSpinner, NotFound } from '../../components';
import { THEME } from '../../constants/platform';
import { IUiConfigServerSide } from '../../models';
import { cbtSystemConfigPageMock } from '../../root-config/ui-config/cbt-system-config-page.ui-config';

// const SECRET_DATA = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';

const DynamicLayout = dynamic(() => import('../../layouts').then((mod) => mod.DynamicLayout), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export interface IServerSideProps {
  systemConfig: IUiConfigServerSide;
}

const DynamicPage: React.FC<IServerSideProps> = observer(() => {
  // const { systemConfig } = props;

  // const DATA_PROPS = useMemo(() => {
  //   const bytes = crypto.AES.decrypt(systemConfig, SECRET_DATA);

  //   return JSON.parse(bytes.toString(crypto.enc.Utf8));
  // }, [systemConfig]);

  // const renderTheme = useMemo(() => {
  //   return {
  //     DYNAMIC_PAGE_V1: <DynamicLayout systemConfig={DATA_PROPS} />,

  //     NOT_FOUND: <NotFound />,
  //   };
  // }, [DATA_PROPS]);

  const renderTheme = useMemo(() => {
    return {
      DYNAMIC_PAGE_V1: <DynamicLayout systemConfig={cbtSystemConfigPageMock} />,

      NOT_FOUND: <NotFound />,
    };
  }, []);

  return renderTheme?.[THEME ?? 'NOT_FOUND'];
});

export default DynamicPage;

// export const getServerSideProps = (async () => {
//   let systemConfig: IUiConfigServerSide = {};

//   const uiConfigService = {
//     DYNAMIC_PAGE_V1: 'cbt-system-config-page',
//   };

//   const ldpSystemConfigPage = await fetchUiContentApi({ contentId: uiConfigService[THEME] });

//   systemConfig = {
//     ldpSystemConfigPage: ldpSystemConfigPage as IRootSystemConfig,
//   };

//   systemConfig = crypto.AES.encrypt(JSON.stringify(systemConfig), SECRET_DATA).toString();

//   return {
//     props: {
//       systemConfig,
//     },
//   };
// }) satisfies GetServerSideProps<IServerSideProps>;
