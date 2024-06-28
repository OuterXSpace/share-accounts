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
  const { systemConfig, slugConfigJSON, slugKey } = props;

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

  const renderMenu = useMemo(() => {
    if (isDevice?.isSmallDesktop || isDevice?.isLargeDesktop)
      if (!dataByTheme?.MENU_SECTION?.V1?.object?.desktop?.hiddenBySlug.includes(slugKey))
        return <MenuDesktopShareAccountV1ThemeV1 data={dataByTheme?.MENU_SECTION?.V1} />;

    if (!dataByTheme?.MENU_SECTION?.V1?.object?.mobile?.hiddenBySlug.includes(slugKey))
      return <MenuMobileShareAccountV1ThemeV1 data={dataByTheme?.MENU_SECTION?.V1} />;
  }, [dataByTheme?.MENU_SECTION?.V1, isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slugKey]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.V1?.object?.hiddenBySlug.includes(slugKey))
      return <FooterShareAccountTheme01 data={dataByTheme?.FOOTER_SECTION?.V1} />;
  }, [dataByTheme?.FOOTER_SECTION?.V1, slugKey]);

  return (
    <main className="pt-[80px] md:pt-[90px] lg:pt-[120px]">
      <div className="page-content max-w-full w-full">
        {renderMenu}
        {renderSections}
        {renderFooter}
        <HomeSliderShareAccountStyles />
      </div>
    </main>
  );
};
