import React from 'react';
import { IMenuDesktopProps } from './menu-desktop.type';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';

const classNamePrefix = 'tt-header';

export const MenuDesktop: React.FC<IMenuDesktopProps> = () => {
  return (
    <nav className={`${classNamePrefix} w-full fixed top-0 z-50 bg-white`}>
      <div className={`${classNamePrefix}__top-nav border-b border-primary bg-gradient-to-top-primary h-[72px]`}>
        <div className="container flex items-center justify-between h-[72px]">
          <div className={`${classNamePrefix}__logo h-[72px]`}>
            <img src="https://79sodo.com/assets/home/wui/logo.gif" alt="logo icon" className="h-full" />
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark rounded-xl"
            >
              <IonIcon className="pr-1 text-base" name="person-outline" />
              Tài khoản
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-dark bg-white rounded-xl"
            >
              Giỏ hàng
              <IonIcon className="pl-1 text-base" name="cart-outline" />
            </Link>
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}-menu-bar-nav bg-primary-dark`}>
        <div className="container flex items-center justify-between h-[48px]">
          <div className="row">
            <div
              className={`${classNamePrefix}-bar__container  px-4 flex justify-between items-center gap-8 mx-auto max-w-screen-xl w-full`}
            >
              <Link
                href="/"
                className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full"
              >
                <span
                  className={`${classNamePrefix}-item__label min-w-max text-sm text-white text-opacity-90 uppercase font-semibold`}
                >
                  Trang chủ
                </span>
              </Link>
              <Link
                href="/"
                className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full"
              >
                <span
                  className={`${classNamePrefix}-item__label min-w-max text-sm text-white text-opacity-90 uppercase font-semibold`}
                >
                  Phim ảnh
                </span>
              </Link>
              <Link
                href="/"
                className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full"
              >
                <span
                  className={`${classNamePrefix}-item__label min-w-max text-sm text-white text-opacity-90 uppercase font-semibold`}
                >
                  Âm nhạc
                </span>
              </Link>
              <Link
                href="/"
                className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full"
              >
                <span
                  className={`${classNamePrefix}-item__label min-w-max text-sm text-white text-opacity-90 uppercase font-semibold`}
                >
                  Gải trí
                </span>
              </Link>
              <Link
                href="/"
                className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full"
              >
                <IonIcon className="pr-1 text-base text-white" name="gift-outline" />
                <span
                  className={`${classNamePrefix}-item__label min-w-max text-sm text-white text-opacity-90 uppercase font-semibold`}
                >
                  Khuyến mãi
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
