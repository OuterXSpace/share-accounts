import React, { useEffect, useMemo } from 'react';
import { NotFound } from '../../../../../../../../../../../../components';
import { useDeviceSizes } from '../../../../../../../../../../../../hooks';
import { IUseLandingPageV1ThemeV1Props } from './use-landing-page.page.type';
import { ExportSectionLandingPageV1ThemeV1, LandingPageMenuDesktopV1, LandingPageFooterV1 } from '../../../sections';
import { useRouter } from 'next/router';
import { doesPathExist } from './use-landing-page.until';

export const useLandingPageV1 = (props: IUseLandingPageV1ThemeV1Props) => {
  const { systemConfig, slugConfigJSON, slugKey, version } = props;

  const isDevice = useDeviceSizes();

  const router = useRouter();

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
          return <LandingPageMenuDesktopV1 data={dataByTheme?.MENU_SECTION?.[version]} slugKey={slugKey} />;

        default:
          return <div>Not found menu</div>;
      }
    // if (isDevice?.isSmallDesktop || isDevice?.isLargeDesktop)
    //   if (!dataByTheme?.MENU_SECTION?.[version]?.object?.desktop?.hiddenBySlug?.includes(slugKey))
    //     switch (version) {
    //       case 'V1':
    //         return <LandingPageMenuDesktopV1 data={dataByTheme?.MENU_SECTION?.[version]} />;

    //       default:
    //         return <div>Not found menu</div>;
    //     }

    // if (!dataByTheme?.MENU_SECTION?.[version]?.object?.mobile?.hiddenBySlug?.includes(slugKey))
    //   switch (version) {
    //     case 'V1':
    //       return <LandingPageMenuMobileV1 data={dataByTheme?.MENU_SECTION?.[version]} />;

    //     default:
    //       return <div>Not found menu</div>;
    //   }
  }, [dataByTheme?.MENU_SECTION, slugKey, version]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.[version]?.object?.hiddenBySlug?.includes(slugKey))
      switch (version) {
        case 'V1':
          return <LandingPageFooterV1 data={dataByTheme?.FOOTER_SECTION?.[version]} />;

        default:
          return <div>Not found footer</div>;
      }
  }, [dataByTheme?.FOOTER_SECTION, slugKey, version]);

  const renderClassReverseNav = useMemo(() => {
    if (
      doesPathExist(
        systemConfig?.ldpSystemConfigPage?.untilConfig?.[slugConfigJSON?.theme]?.REVERSE_NAV_CLASS?.object?.array,
        router?.asPath,
      )
    ) {
      return 'reverse-main-nav';
    }
    return 'body';
  }, [router?.asPath, slugConfigJSON?.theme, systemConfig?.ldpSystemConfigPage?.untilConfig]);

  useEffect(() => {
    document.body?.classList?.add(...[renderClassReverseNav]);
    return () => {
      document.body.classList.remove(...[renderClassReverseNav]);
    };
  }, [renderClassReverseNav]);

  return {
    renderSections,
    renderMenu,
    renderFooter,
  };
};
