import React from 'react';
import { ILandingPageMenuDesktopV1Props } from './menu-desktop.type';
import Link from 'next/link';
import { LandingPageMenuDesktopItemV1 } from './components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const LandingPageMenuDesktopV1: React.FC<ILandingPageMenuDesktopV1Props> = (props) => {
  const { data, className } = props;

  return (
    <nav className={`w-full fixed top-0 z-50 ${className}`}>
      <div className="bg-transparent h-[100px]">
        <div className="container ">
          <div className="p-3 flex flex-wrap justify-end">
            <ul className="list-none m-0 pl-0 relative self-center flex flex-wrap">
              <li className="menu">
                <Link
                  className="text-[#f9fdfe] text-[0.9375rem] text-no-underline px-[1em] inline-block transition-all duration-200 ease-linear"
                  href=""
                >
                  <span className="">News & Events</span>
                </Link>
              </li>
              <li className="menu">
                <Link
                  className="text-[#f9fdfe] text-[0.9375rem] text-no-underline px-[1em] inline-block transition-all duration-200 ease-linear"
                  href=""
                >
                  <span className="">Office</span>
                </Link>
              </li>
              <li className="menu">
                <Link
                  className="text-[#f9fdfe] text-[0.9375rem] text-no-underline px-[1em] inline-block transition-all duration-200 ease-linear"
                  href=""
                >
                  <span className="">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-[auto,auto] items-center gap-x-20 overflow-wrap-anywhere h-full pt-6 border-t-2 border-t-[#ffffff80]">
            <Link href="/" className="flex flex-wrap items-center h-full min-h-0 cursor-pointer">
              <LazyLoadImage
                src={data?.object?.logo}
                className="custom-logo astra-logo-svg h-[33px]"
                alt="Logo"
                effect="blur"
              />
            </Link>
            <div className="flex flex-wrap justify-end">
              <ul className="list-none m-0 pl-0 relative self-center flex flex-wrap">
                {data?.object?.desktop?.array?.map((item) => {
                  const { id, label, link } = item;

                  return <LandingPageMenuDesktopItemV1 key={id} label={label} link={link} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
