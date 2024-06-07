import React from 'react';
import { ILandingPageMenuDesktopV3Props } from './menu-desktop.type';
import Link from 'next/link';
import { LandingPageMenuDesktopItemV1 } from './components';

export const LandingPageMenuDesktopV3: React.FC<ILandingPageMenuDesktopV3Props> = (props) => {
  const { data, className } = props;

  return (
    <nav className={`w-full fixed top-0 z-50 ${className}`}>
      <div className="bg-transparent h-[100px]">
        <div className="container grid grid-cols-[auto,auto] items-center gap-x-20 overflow-wrap-anywhere h-full">
          <Link href="/" className="flex flex-wrap items-center h-full min-h-0 cursor-pointer">
            <img
              width="97"
              height="17"
              src={data?.object?.logo}
              className="custom-logo astra-logo-svg"
              alt="Video Editor"
            />
          </Link>
          <div className="flex flex-wrap justify-end">
            <ul className="list-none m-0 pl-0 relative self-center flex flex-wrap">
              {data?.object?.array?.map((item) => {
                const { id, label, link } = item;

                return <LandingPageMenuDesktopItemV1 key={id} label={label} link={link} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
