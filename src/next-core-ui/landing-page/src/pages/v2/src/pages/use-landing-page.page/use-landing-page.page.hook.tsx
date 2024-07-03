import { NotFound } from '../../../../../../../../components';
import { useDeviceSizes } from '../../../../../../../../hooks';
import {
  ExportSectionLandingPageV2ThemeV1,
  LandingPageFooterV2,
  LandingPageMenuDesktopV2,
  LandingPageMenuMobileV2,
} from '../../theme/v1/src/sections';
import { IUseLandingPageV2Props } from './use-landing-page.page.type';
import { useMemo } from 'react';

export const useLandingPageV2 = (props: IUseLandingPageV2Props) => {
  const { systemConfig, slugConfigJSON, slugKey, version } = props;

  const isDevice = useDeviceSizes();

  const dataByTheme = useMemo(
    () => systemConfig?.ldpSystemConfigPage?.dataConfig?.[slugConfigJSON?.theme],
    [slugConfigJSON?.theme, systemConfig?.ldpSystemConfigPage?.dataConfig],
  );

  const renderSections = useMemo(() => {
    if (!slugConfigJSON) return <NotFound />;

    return slugConfigJSON?.array?.map((childItem) => {
      const { id, section, className, theme } = childItem;

      const childData = dataByTheme?.[section]?.[theme];

      switch (version) {
        case 'V1':
          return (
            <ExportSectionLandingPageV2ThemeV1
              key={id}
              data={childData}
              systemConfig={systemConfig}
              section={section}
              className={className}
            />
          );
        default:
          return <NotFound />;
      }
    });
  }, [dataByTheme, slugConfigJSON, systemConfig, version]);

  const renderMenu = useMemo(() => {
    if (isDevice?.isSmallDesktop || isDevice?.isLargeDesktop)
      if (!dataByTheme?.MENU_SECTION?.[version]?.object?.desktop?.hiddenBySlug?.includes(slugKey))
        switch (version) {
          case 'V1':
            return <LandingPageMenuDesktopV2 data={dataByTheme?.MENU_SECTION?.[version]} />;

          default:
            return <div>Not found menu</div>;
        }

    if (!dataByTheme?.MENU_SECTION?.[version]?.object?.mobile?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return <LandingPageMenuMobileV2 data={dataByTheme?.MENU_SECTION?.[version]} />;

        default:
          return <div>Not found menu</div>;
      }
  }, [dataByTheme?.MENU_SECTION, isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slugKey, version]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.[version]?.object?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return <LandingPageFooterV2 data={dataByTheme?.FOOTER_SECTION?.[version]} />;

        default:
          return <div>Not found footer</div>;
      }
  }, [dataByTheme?.FOOTER_SECTION, slugKey, version]);

  return {
    renderSections,
    renderMenu,
    renderFooter,
  };
};
