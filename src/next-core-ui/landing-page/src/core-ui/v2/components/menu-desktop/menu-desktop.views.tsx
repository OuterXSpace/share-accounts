import React from 'react';
import { ILandingPageMenuDesktopV2Props } from './menu-desktop.type';

export const LandingPageMenuDesktopV2: React.FC<ILandingPageMenuDesktopV2Props> = (props) => {
  const { data, className } = props;

  return (
    <nav
      className={`grid grid-cols-12 px-[5.5vw] min-w-screen m-auto justify-end items-center z-[3] h-[6.5vw] select-none top-[5.5vw] fixed relative transition-all duration-300 ease-in-out ${className} `}
    >
      <div className="col-span-1">
        <a id="pt-link" href="/" aria-current="page" className="w-inline-block w--current">
          <img
            src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662a07142a921dccb20fb20f_NEW-LOT-LOGO.svg"
            loading="lazy"
            alt="logo"
            className="min-w-[6vw] max-w-[6vw]"
          />
        </a>
      </div>
      <div className="col-start-8 col-end-13 flex justify-between items-center relative text-[0.7em] menu-hide font-pp-monument-extended-medium uppercase">
        <a href="/" aria-current="page" className="link w--current">
          home
        </a>
        <a href="./about.html" className="link">
          about
        </a>
        <a href="./services.html" className="link">
          services
        </a>
        <a href="./crm.html" className="link">
          crm
        </a>
        <a
          href="./contact.html"
          className="p-[1vw] px-[1.5vw] rounded-[0.3vw] transition-[background] duration-500 ease hover:!bg-[length:200%_200%] !bg-[length:100%_100%]"
          style={{
            background: 'linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%)',
          }}
        >
          <span>GET PROPOSAL</span>
        </a>
      </div>
    </nav>
  );
};
