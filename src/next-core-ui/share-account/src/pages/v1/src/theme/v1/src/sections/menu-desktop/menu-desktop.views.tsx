import React, { useContext } from 'react';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { Dropdown, DropdownItem } from 'flowbite-react';
import { useRouter } from 'next/router';
import { MenuItem } from './components';
import { CartContext } from '../../context/cart-context';
import { logOutAction } from '../../../../../../../../../../../store/store-authentication/action';
import {
  loginUrlSelector,
  isLoginSelector,
} from '../../../../../../../../../../../store/store-authentication/selector';
import { IMenuDesktopShareAccountV1ThemeV1Props } from './menu-desktop.type';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const classNamePrefix = 'tt-header';

export const MenuDesktopShareAccountV1ThemeV1: React.FC<IMenuDesktopShareAccountV1ThemeV1Props> = (props) => {
  const { data, handleOpenCart } = props;
  const { initialState } = useContext(CartContext);
  const { totalQuantity } = initialState;

  const loginUrl = loginUrlSelector();

  const isLogin = isLoginSelector();

  const router = useRouter();

  return (
    <nav className={`${classNamePrefix} w-full fixed top-0 z-[39] bg-white`}>
      <div className={`${classNamePrefix}__top-nav border-b border-primary bg-gradient-to-top-primary h-[72px]`}>
        <div className="container flex items-center justify-between h-[72px]">
          <Link href="/" className="cursor-pointer">
            <LazyLoadImage
              className="h-[70px]"
              src="https://79sodo.com/assets/home/wui/logo.gif"
              alt="logo icon"
              effect="blur"
            />
          </Link>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center justify-center px-5 py-3 font-semibold text-sm text-dark bg-white hover:bg-gray-1 break-words transition duration-200 rounded-xl"
              onClick={handleOpenCart}
            >
              Giỏ hàng
              <div className="relative">
                <IonIcon className="pl-1 text-[20px]" name="cart-outline" />
                <div className="absolute top-[-10px] right-[-10px]">
                  <div className="min-h-[20px] min-w-[20px] bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                    <span>{totalQuantity}</span>
                  </div>
                </div>
              </div>
            </button>
            {!isLogin ? (
              <Link
                href="/login"
                className="flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark hover:bg-primary-darker break-words transition duration-200 rounded-xl"
              >
                <IonIcon className="pr-1 text-[20px]" name="person-outline" />
                Đăng nhập
              </Link>
            ) : (
              <Dropdown
                label=""
                dismissOnClick={false}
                className="bg-[#053724e6] border-t-[1px] border-primary"
                renderTrigger={() => (
                  <button
                    className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark hover:bg-primary-darker break-words transition duration-200 rounded-xl"
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
              {data?.object?.desktopMenus?.map((item, index) => {
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
