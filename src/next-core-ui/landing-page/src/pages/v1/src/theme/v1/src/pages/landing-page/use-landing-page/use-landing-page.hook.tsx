import React, { useMemo } from 'react';
import { NotFound } from '../../../../../../../../../../../../components';
import { IUseLandingPageV1ThemeV1Props } from './use-landing-page.type';
import { ExportSectionLandingPageV1ThemeV1, LandingPageMenuDesktopV1, LandingPageFooterV1 } from '../../../sections';

export const useLandingPageV1 = (props: IUseLandingPageV1ThemeV1Props) => {
  const { systemConfig, slugConfigJSON, slugKey, version } = props;

  const dataByTheme = useMemo(
    () => systemConfig?.ldpSystemConfigPage?.dataConfig?.[slugConfigJSON?.theme],
    [slugConfigJSON?.theme, systemConfig?.ldpSystemConfigPage?.dataConfig],
  );

  const renderSections = useMemo(() => {
    if (!slugConfigJSON) return <NotFound />;

    return slugConfigJSON?.array?.map((childItem) => {
      const { id, section, className, theme, style } = childItem;

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
              slugKey={slugKey}
              childItem={childItem}
              style={style}
            />
          );
        default:
          return <NotFound />;
      }
    });
  }, [dataByTheme, slugConfigJSON, slugKey, systemConfig, version]);

  const renderMenu = useMemo(() => {
    if (!dataByTheme?.MENU_SECTION?.[version]?.object?.desktop?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return (
            <LandingPageMenuDesktopV1
              data={dataByTheme?.MENU_SECTION?.[version]}
              slugKey={slugKey}
              propsParent={props}
            />
          );

        default:
          return <div>Not found menu</div>;
      }
  }, [dataByTheme?.MENU_SECTION, props, slugKey, version]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.[version]?.object?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return <LandingPageFooterV1 data={dataByTheme?.FOOTER_SECTION?.[version]} propsParent={props} />;

        default:
          return <div>Not found footer</div>;
      }
  }, [dataByTheme?.FOOTER_SECTION, props, slugKey, version]);

  return {
    renderSections,
    renderMenu,
    renderFooter,
  };
};
