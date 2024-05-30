import React from 'react';
import { IMenuDesktop02Props } from './menu-desktop.type';
import Link from 'next/link';

export const MenuDesktop02: React.FC<IMenuDesktop02Props> = (props) => {
  const { systemConfigLandingPage } = props;

  return (
    <nav className={` w-full fixed top-0 z-50`}>
      <div className="bg-transparent h-[100px]">
        <div className="container grid grid-cols-[auto,auto] items-center gap-x-20 overflow-wrap-anywhere h-full">
          <Link href="/" className="flex flex-wrap items-center h-full min-h-0 cursor-pointer">
            <img
              width="97"
              height="17"
              src="https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg"
              className="custom-logo astra-logo-svg"
              alt="Video Editor"
            />
          </Link>
          <div className="flex flex-wrap justify-end">
            <ul className="list-none m-0 pl-0 relative self-center flex flex-wrap">
              {systemConfigLandingPage?.menuList?.map((item) => {
                const { id, label, link } = item;

                return (
                  <li key={id} className="menu">
                    <Link
                      href={link}
                      className="text-[#f9fdfe] text-[0.9375rem] text-no-underline px-[1em] inline-block transition-all duration-200 ease-linear"
                    >
                      <span className="">{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
