import React from 'react';
import { ILandingPageMenuDesktopV2Props } from './menu-desktop.type';
import Link from 'next/link';
import { HoverUnderlineAnimation } from '../../animation/hover-underline';

export const LandingPageMenuDesktopV2: React.FC<ILandingPageMenuDesktopV2Props> = (props) => {
  const { data, className } = props;

  return (
    <nav className="flex h-[6.5vw] w-screen m-auto relative top-[5.5vw]">
      <div
        className={`flex justify-between items-center select-none  w-screen px-[5.5vw] transition-all duration-300 ease-in-out z-[3] ${className} fixed`}
      >
        <div>
          <Link href="/" aria-current="page" className="inline-block">
            <img
              src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662a07142a921dccb20fb20f_NEW-LOT-LOGO.svg"
              loading="lazy"
              alt="logo"
              className="min-w-[6vw] max-w-[6vw]"
            />
          </Link>
        </div>
        <div className="flex gap-[40px] items-center text-[0.7em] uppercase">
          <HoverUnderlineAnimation>
            <Link href="/" aria-current="page" className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw] ">
              home
            </Link>
          </HoverUnderlineAnimation>
          <HoverUnderlineAnimation>
            <Link href="/" className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw] ">
              about
            </Link>
          </HoverUnderlineAnimation>
          <HoverUnderlineAnimation>
            <Link href="/" className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw]">
              services
            </Link>
          </HoverUnderlineAnimation>
          <HoverUnderlineAnimation>
            <Link href="/" className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw]">
              crm
            </Link>
          </HoverUnderlineAnimation>
          <Link
            href="/"
            className="p-[1vw] px-[1.5vw] rounded-[0.3vw] transition-[background] duration-500 ease hover:!bg-[length:200%_200%] !bg-[length:100%_100%] text-[3.5vw] lg:text-[0.7vw]"
            style={{
              background: 'linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%)',
            }}
          >
            <span>GET PROPOSAL</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
