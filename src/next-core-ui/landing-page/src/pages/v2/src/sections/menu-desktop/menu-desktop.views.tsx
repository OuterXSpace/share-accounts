import React from 'react';
import { ILandingPageMenuDesktopV2Props } from './menu-desktop.type';
import Link from 'next/link';

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
          <Link
            href="/"
            aria-current="page"
            className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
          >
            home
          </Link>
          <Link
            href="/"
            className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
          >
            about
          </Link>
          <Link
            href="/"
            className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
          >
            services
          </Link>
          <Link
            href="/"
            className="z-10 no-underline pb-1 text-[3.5vw] lg:text-[0.7vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
          >
            crm
          </Link>
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
