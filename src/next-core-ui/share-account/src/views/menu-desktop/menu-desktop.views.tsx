import React from 'react';
import { IMenuDesktopProps } from './menu-desktop.type';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { loginUrlSelector, isLoginSelector } from '../../../../../store/store-authentication/selector';
import { Dropdown, DropdownItem } from 'flowbite-react';
import { logOutAction } from '../../../../../store/store-authentication/action';
import { useRouter } from 'next/router';
import { MenuItem } from './components';

const classNamePrefix = 'tt-header';

export const MenuDesktop: React.FC<IMenuDesktopProps> = (props) => {
  const { wuiHeaderContent, handleOpenCart } = props;

  const loginUrl = loginUrlSelector();

  const isLogin = isLoginSelector();

  const router = useRouter();

  return (
    <nav className={`${classNamePrefix} w-full fixed top-0 z-[39] bg-white`}>
      <div className={`${classNamePrefix}__top-nav border-b border-primary bg-gradient-to-top-primary h-[72px]`}>
        <div className="container flex items-center justify-between h-[72px]">
          <Link href="/" className="h-[72px] cursor-pointer">
            <img src="https://79sodo.com/assets/home/wui/logo.gif" alt="logo icon" className="h-full" />
          </Link>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-dark bg-white rounded-xl"
              onClick={handleOpenCart}
            >
              <IonIcon className="pr-1 text-base" name="cart-outline" />
              Giỏ hàng
            </button>
            {!isLogin ? (
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark rounded-xl"
              >
                <IonIcon className="pr-1 text-base" name="person-outline" />
                Đăng nhập
              </Link>
            ) : (
              <Dropdown
                label=""
                dismissOnClick={false}
                className="bg-[#053724e6] border-t-[1px] border-primary"
                renderTrigger={() => (
                  <button
                    className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark rounded-xl"
                    type="button"
                  >
                    <IonIcon className="pr-1 text-base" name="person-outline" />
                    Tài khoản
                  </button>
                )}
              >
                <DropdownItem className="bg-gradient-to-t hover:from-primary hover:to-primary-darker focus:from-primary focus:to-primary-darker w-[180px]">
                  <Link href="/profile" className="text-[#ffffffe6] font-base">
                    <IonIcon className="pr-1 text-base" name="person" />
                    Trang cá nhân
                  </Link>
                </DropdownItem>
                <DropdownItem className="bg-gradient-to-t hover:from-primary hover:to-primary-darker focus:from-primary focus:to-primary-darker w-[180px]">
                  <div className="text-[#ffffffe6] font-base" onClick={() => logOutAction(loginUrl, router)}>
                    <IonIcon className="pr-1 text-base" name="log-out" /> Đăng xuất
                  </div>
                </DropdownItem>
              </Dropdown>
            )}
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}-menu-bar-nav bg-primary-dark`}>
        <div className="container flex items-center justify-between h-[48px]">
          <div className="row">
            <div
              className={`${classNamePrefix}-bar__container  px-4 flex justify-between items-center gap-8 mx-auto max-w-screen-xl w-full`}
            >
              {wuiHeaderContent?.mainMenus?.map((item, index) => {
                const { id = index } = item;
                return <MenuItem key={id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
