import { ShareAccountPageV1ThemeV1Props } from './landing-page.type';
import {
  FooterShareAccountTheme01,
  MenuDesktopShareAccountV1ThemeV1,
  MenuMobileShareAccountV1ThemeV1,
} from '../../sections';
import { useMemo } from 'react';
import { useDeviceSizes } from '../../../../../../../../../../../hooks';
import { HomeSliderShareAccountStyles } from './home-slider.styles';
import { ExportSectionShareAccountV1ThemeV1 } from '../../sections/export.section';
import { useDynamicRenderPage } from '../../../../../../../../../../../hooks/use-dynamic-render-page';

export const ShareAccountPageV1ThemeV1: React.FC<ShareAccountPageV1ThemeV1Props> = (props) => {
  const { systemConfig } = props;

  const isDevice = useDeviceSizes();

  const { configParentOutput, configChildrenOutput } = useDynamicRenderPage({ systemConfig });

  const renderParentOutput = useMemo(() => {
    return configParentOutput?.array?.map((item) => {
      const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[item?.section]?.[item?.theme];
      return (
        <ExportSectionShareAccountV1ThemeV1
          key={item?.id}
          data={data}
          systemConfig={systemConfig}
          section={item?.section}
          className={item?.className}
        />
      );
    });
  }, [configParentOutput?.array, systemConfig]);

  const renderChildrenOutput = useMemo(() => {
    if (!configChildrenOutput) return;

    return configChildrenOutput?.slug?.array?.map((childItem) => {
      const childData = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[childItem?.section]?.[childItem?.theme];

      return (
        <ExportSectionShareAccountV1ThemeV1
          key={childItem?.id}
          data={childData}
          systemConfig={systemConfig}
          section={childItem?.section}
          className={childItem?.className}
        />
      );
    });
  }, [configChildrenOutput, systemConfig]);

  return (
    <main className="pt-[80px] md:pt-[90px] lg:pt-[120px]">
      <div className="page-content max-w-full w-full">
        {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
          <MenuDesktopShareAccountV1ThemeV1
            data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU_SECTION?.V1}
          />
        ) : (
          <MenuMobileShareAccountV1ThemeV1 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU_SECTION?.V1} />
        )}
        {renderParentOutput}
        {renderChildrenOutput}
        <FooterShareAccountTheme01 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.FOOTER_SECTION?.V1} />
        <HomeSliderShareAccountStyles />
      </div>
    </main>
  );
};
