import React from 'react';
import { IMenuDesktopProps } from './menu-desktop.type';
import IonIcon from '@reacticons/ionicons';
import Link from 'next/link';

export const MenuDesktop: React.FC<IMenuDesktopProps> = () => {
  return (
    <nav className="menu-desktop w-full fixed top-0 z-50 bg-white">
      <div className="w-screen flex flex-col items-center border-b border-slate-200 border-solid">
        <div className="gap-[100px] flex flex-col sm:flex-row w-full items-center   xl:px-[300px] lg:px-[170px]">
          <h1 className="font-semibold text-4xl text-red-600 uppercase">Netflix</h1>
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center lg:gap-[50px] xl:gap-[100px] font-sm font-bold text-gray-600 w-full">
              {/* trang chủ */}
              <Link href="/">
                <li className="relative group hover:text-red-600 cursor-pointer py-6">
                  <div className="flex flex-col items-center gap-1">
                    <IonIcon name="home-outline" className="text-[30px]" />
                    <span className="uppercase text-[12px]">Trang chủ</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out group-hover:w-full" />
                  </div>
                </li>
              </Link>
              {/* netflix */}
              <Link href="/">
                <li className="relative group hover:text-red-600 cursor-pointer py-6">
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="https://gamikey.com/wp-content/uploads/2022/03/Netflix-e1689902508512-150x150.png.webp"
                      alt="netflix icon"
                      className="w-[30px]"
                    />
                    <span className="uppercase text-[12px]">Netflix</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out group-hover:w-full" />
                    <ul className="group-hover:flex absolute top-[6.3rem] shadow-lg rounded-xl hidden grid-cols-4 p-4 gap-4 border text-gray-400 font-normal bg-white z-10 lg:w-[60rem] xl:w-[70rem] xl:left-[-25.5rem] lg:left-[-30.5rem]">
                      <li>
                        <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Electronics</h3>
                        <ul className="flex flex-col items-start justify-start gap-2">
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <img
                              src="https://azureapis.blob.core.windows.net/share-account/assets/images/electronics-banner-1.jpg"
                              alt="pic"
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Men's</h3>
                        <ul className="flex flex-col items-start justify-start gap-2">
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <img
                              src="https://azureapis.blob.core.windows.net/share-account/assets/images/electronics-banner-2.jpg"
                              alt="pic"
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Women's</h3>
                        <ul className="flex flex-col items-start justify-start gap-2">
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <img
                              src="https://azureapis.blob.core.windows.net/share-account/assets/images/mens-banner.jpg"
                              alt="pic"
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Electronics</h3>
                        <ul className="flex flex-col items-start justify-start gap-2">
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <span> Desktop </span>
                          </li>
                          <li>
                            <img
                              src="https://azureapis.blob.core.windows.net/share-account/assets/images/womens-banner.jpg"
                              alt="pic"
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </Link>
              {/* tài khoản */}
              <Link href="/">
                <li className="relative group hover:text-red-600 cursor-pointer py-6">
                  <div className="flex flex-col items-center gap-1">
                    <IonIcon name="person-outline" className="text-[30px]" />
                    <span className="uppercase text-[12px]">Tài khoản</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out group-hover:w-full" />
                  </div>
                </li>
              </Link>
              {/* giỏ hàng */}
              <Link href="/">
                <li className="relative group hover:text-red-600 cursor-pointer py-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
                        0
                      </span>
                      <IonIcon name="bag-handle-outline" className="text-[30px]" />
                    </div>
                    <span className="uppercase text-[12px]">Giỏ hàng</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out group-hover:w-full" />
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
