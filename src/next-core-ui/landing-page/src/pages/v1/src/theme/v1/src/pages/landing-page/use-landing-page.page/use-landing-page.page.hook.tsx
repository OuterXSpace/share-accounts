import React, { useMemo } from 'react';
import { NotFound } from '../../../../../../../../../../../../components';
import { useDeviceSizes } from '../../../../../../../../../../../../hooks';
import { IUseLandingPageV1ThemeV1Props } from './use-landing-page.page.type';
import {
  ExportSectionLandingPageV1ThemeV1,
  LandingPageMenuDesktopV1,
  LandingPageMenuMobileV1,
  LandingPageFooterV1,
} from '../../../sections';

export const useLandingPageV1 = (props: IUseLandingPageV1ThemeV1Props) => {
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
            <ExportSectionLandingPageV1ThemeV1
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
            return <LandingPageMenuDesktopV1 data={dataByTheme?.MENU_SECTION?.[version]} />;

          default:
            return <div>Not found menu</div>;
        }

    if (!dataByTheme?.MENU_SECTION?.[version]?.object?.mobile?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return <LandingPageMenuMobileV1 data={dataByTheme?.MENU_SECTION?.[version]} />;

        default:
          return <div>Not found menu</div>;
      }
  }, [dataByTheme?.MENU_SECTION, isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slugKey, version]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.[version]?.object?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return <LandingPageFooterV1 data={dataByTheme?.FOOTER_SECTION?.[version]} />;

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
