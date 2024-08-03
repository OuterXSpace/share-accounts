import { useDispatch, useSelector } from 'react-redux';
import { useDeviceSizes } from '../../../../../../../../../../../../hooks';
import { cartActions, cartSliceKey, reducer, selectCart } from '../../../../../../../../../../../../store-tookit';
import { useInjectReducer } from '../../../../../../../../../../../../utils';
import {
  ExportSectionShareAccountV1ThemeV2,
  MenuDesktopShareAccountV1ThemeV2,
  MenuMobileShareAccountV1ThemeV2,
  FooterShareAccountTheme02,
  DialogCartShareAccountTheme02,
} from '../../../sections';
import { IUseShareAccountPageV1ThemeV2Props } from './use-landing-page.page.type';
import { useMemo } from 'react';

export const useShareAccountPageV1ThemeV2 = (props: IUseShareAccountPageV1ThemeV2Props) => {
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
        <ExportSectionShareAccountV1ThemeV2
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
        return <MenuDesktopShareAccountV1ThemeV2 data={dataByTheme?.MENU_SECTION?.V1} />;

    if (!dataByTheme?.MENU_SECTION?.V1?.object?.mobile?.hiddenBySlug.includes(slugKey))
      return <MenuMobileShareAccountV1ThemeV2 data={dataByTheme?.MENU_SECTION?.V1} />;
  }, [dataByTheme?.MENU_SECTION?.V1, isDevice?.isLargeDesktop, isDevice?.isSmallDesktop, slugKey]);

  const renderFooter = useMemo(() => {
    if (!dataByTheme?.FOOTER_SECTION?.V1?.object?.hiddenBySlug.includes(slugKey))
      return <FooterShareAccountTheme02 data={dataByTheme?.FOOTER_SECTION?.V1} />;
  }, [dataByTheme?.FOOTER_SECTION?.V1, slugKey]);

  const renderDrawCart = useMemo(() => {
    return (
      <DialogCartShareAccountTheme02
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
