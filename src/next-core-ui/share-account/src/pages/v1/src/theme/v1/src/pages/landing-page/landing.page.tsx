import { ShareAccountPageV1ThemeV1Props } from './landing-page.type';
import {
  ExportSectionShareAccountV1ThemeV1,
  FooterShareAccountTheme01,
  MenuDesktopShareAccountV1ThemeV1,
  MenuMobileShareAccountV1ThemeV1,
} from '../../sections';
import { useMemo } from 'react';
import { useDeviceSizes } from '../../../../../../../../../../../hooks';
import { HomeSliderShareAccountStyles } from './home-slider.styles';

export const ShareAccountPageV1ThemeV1: React.FC<ShareAccountPageV1ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON } = props;

  const isDevice = useDeviceSizes();

  const dataByTheme = useMemo(
    () => systemConfig?.ldpSystemConfigPage?.dataConfig?.[slugConfigJSON?.theme],
    [slugConfigJSON?.theme, systemConfig?.ldpSystemConfigPage?.dataConfig],
  );

  const renderSections = useMemo(() => {
    if (!slugConfigJSON) return <div>Notfound config page</div>;

    return slugConfigJSON?.array?.map((childItem) => {
      const { id, section, className, theme } = childItem;

      const childData = dataByTheme?.[section]?.[theme];

      return (
        <ExportSectionShareAccountV1ThemeV1
          key={id}
          data={childData}
          systemConfig={systemConfig}
          section={section}
          className={className}
        />
      );
    });
  }, [dataByTheme, slugConfigJSON, systemConfig]);

  return (
    <main className="pt-[80px] md:pt-[90px] lg:pt-[120px]">
      <div className="page-content max-w-full w-full">
        {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
          <MenuDesktopShareAccountV1ThemeV1 data={dataByTheme?.MENU_SECTION?.V1} />
        ) : (
          <MenuMobileShareAccountV1ThemeV1 data={dataByTheme?.MENU_SECTION?.V1} />
        )}
        {renderSections}
        <FooterShareAccountTheme01 data={dataByTheme?.FOOTER_SECTION?.V1} />
        <HomeSliderShareAccountStyles />
      </div>
    </main>
  );
};
