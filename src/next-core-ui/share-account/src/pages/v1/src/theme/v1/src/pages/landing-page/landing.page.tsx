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

export const ShareAccountPageV1ThemeV1: React.FC<ShareAccountPageV1ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON } = props;

  const isDevice = useDeviceSizes();

  const renderSections = useMemo(() => {
    if (!slugConfigJSON) return <div>Notfound config page</div>;

    return slugConfigJSON?.array?.map((childItem) => {
      const { id, section, className, theme } = childItem;

      const childData = systemConfig?.ldpSystemConfigPage?.dataConfig?.[slugConfigJSON?.theme]?.[section]?.[theme];

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
  }, [slugConfigJSON, systemConfig]);

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
        {renderSections}
        <FooterShareAccountTheme01 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.FOOTER_SECTION?.V1} />
        <HomeSliderShareAccountStyles />
      </div>
    </main>
  );
};
