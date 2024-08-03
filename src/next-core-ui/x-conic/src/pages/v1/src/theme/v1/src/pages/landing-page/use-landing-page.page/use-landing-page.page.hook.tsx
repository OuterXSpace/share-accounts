import { useDispatch, useSelector } from 'react-redux';
import { useDeviceSizes } from '../../../../../../../../../../../../hooks';
import { cartActions, cartSliceKey, reducer, selectCart } from '../../../../../../../../../../../../store-tookit';
import { useInjectReducer } from '../../../../../../../../../../../../utils';
import {
  ExportSectionXConixV1ThemeV1,
  MenuDesktopXConixV1ThemeV1,
  MenuMobileXConixV1ThemeV1,
  FooterXConixTheme01,
  DialogCartXConixTheme01,
} from '../../../sections';
import { IUseXConixPageV1ThemeV1Props } from './use-landing-page.page.type';
import { useMemo } from 'react';

export const useXConixPageV1ThemeV1 = (props: IUseXConixPageV1ThemeV1Props) => {
  useInjectReducer({ key: cartSliceKey, reducer });

  const { systemConfig, slugConfigJSON, slugKey } = props;

  const cartState = useSelector(selectCart);

  const dispatch = useDispatch();

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
        <ExportSectionXConixV1ThemeV1
          key={id}
          data={childData}
          systemConfig={systemConfig}
          section={section}
          className={className}
          slugKey={slugKey}
        />
      );
    });
  }, [dataByTheme, slugConfigJSON, slugKey, systemConfig]);

  const renderMenu = useMemo(() => {
    if (isDevice?.isSmallDesktop || isDevice?.isLargeDesktop)
      if (!dataByTheme?.MENU_SECTION?.V1?.object?.desktop?.hiddenBySlug.includes(slugKey))
        return <MenuDesktopXConixV1ThemeV1 data={dataByTheme?.MENU_SECTION?.V1} />;

    if (!dataByTheme?.MENU_SECTION?.V1?.object?.mobile?.hiddenBySlug.includes(slugKey))
      return <MenuMobileXConixV1ThemeV1 data={dataByTheme?.MENU_SECTION?.V1} />;
  }, [dataByTheme?.MENU_SECTION?.V1, isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slugKey]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.V1?.object?.hiddenBySlug.includes(slugKey))
      return <FooterXConixTheme01 data={dataByTheme?.FOOTER_SECTION?.V1} />;
  }, [dataByTheme?.FOOTER_SECTION?.V1, slugKey]);

  const renderDrawCart = useMemo(() => {
    return (
      <DialogCartXConixTheme01
        isOpenCart={cartState?.dialogCart}
        handleCloseCart={() => dispatch(cartActions.openDialogCart(false))}
        handleOpenCart={() => dispatch(cartActions.openDialogCart(true))}
        position={isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? 'right' : 'left'}
      />
    );
  }, [cartState?.dialogCart, dispatch, isDevice?.isLargeDesktop, isDevice?.isSmallDesktop]);

  return {
    renderSections,
    renderMenu,
    renderFooter,
    renderDrawCart,
  };
};
