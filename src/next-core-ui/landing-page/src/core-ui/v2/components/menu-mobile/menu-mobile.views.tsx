import { useState } from 'react';
import Link from 'next/link';
import { ILandingPageMenuMobileV2Props } from './menu-mobile.type';

export const LandingPageMenuMobileV2: React.FC<ILandingPageMenuMobileV2Props> = (props) => {
  const { data, className } = props;
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  return (
    <nav
      className={`grid grid-cols-12 gap-4 mx-[5.5vw] top-[5vw] justify-end items-center bg-transparent z-3 transition-all ease-in-out duration-300 top-[5.5vw] fixed relative ${className}`}
    >
      <div
        className={`fixed top-0 left-0 z-[6] w-full h-screen bg-opacity-30 bg-[#050512] ${!isToggleMenu && 'hidden'}`}
        onClick={handleToggleMenu}
      />
      <div className="col-span-1">
        <Link href="/" aria-current="page" className="inline-block">
          <img
            src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662a07142a921dccb20fb20f_NEW-LOT-LOGO.svg"
            loading="lazy"
            alt="logo"
            className="min-w-[18vw] max-w-[18vw]"
          />
        </Link>
      </div>
      <div
        className="fixed flex right-[5vw] mix-blend-difference z-[50] overflow-hidden flex-col h-[5vw]"
        onClick={handleToggleMenu}
      >
        <div
          className={`text-right text-[3.6vw] tracking-[0.5vw] h-[5vw] flex flex-col uppercase transition-all ease duration-300 transform-perserve-3d ${
            isToggleMenu ? 'animation-close-menu-btn' : 'animation-open-menu-btn'
          }`}
        >
          menu
        </div>
        <div
          className={`text-right text-[3.6vw] tracking-[0.5vw] h-[5vw] flex flex-col uppercase transition-all ease duration-300 transform-perserve-3d ${
            isToggleMenu && 'animation-close-menu-btn'
          }`}
        >
          close
        </div>
      </div>
      <div
        className={`grid col-span-4-12 translate-x-full translate-y-full bg-white fixed gap-[2vw] p-[8vw] rounded-tl-[5vw] bottom-0 right-0 text-black z-[50] uppercase md:p-[4vw] ${
          isToggleMenu ? 'animation-open-menu' : 'animation-close-menu'
        } transition-all ease duration-300 transform-perserve-3d`}
      >
        <Link
          href="/"
          aria-current="page"
          className="z-10 no-underline pb-1 text-[6em] md:text-[3em] before:content-counter-link before:text-[#A2254B] before:rounded-[50vw] before:px-[1vw] before:text-[7px] before:border-[0.5px] before:border-[#A2254B] flex flex-col items-start linkCounter"
        >
          home
        </Link>
        <Link
          href="/"
          className="z-10 no-underline pb-1 text-[6em] md:text-[3em] before:content-counter-link before:text-[#A2254B] before:rounded-[50vw] before:px-[1vw] before:text-[7px] before:border-[0.5px] before:border-[#A2254B] flex flex-col items-start linkCounter"
        >
          about
        </Link>
        <Link
          href="/"
          className="z-10 no-underline pb-1 text-[6em] md:text-[3em] before:content-counter-link before:text-[#A2254B] before:rounded-[50vw] before:px-[1vw] before:text-[7px] before:border-[0.5px] before:border-[#A2254B] flex flex-col items-start linkCounter"
        >
          services
        </Link>
        <Link
          href="/"
          className="z-10 no-underline pb-1 text-[6em] md:text-[3em] before:content-counter-link before:text-[#A2254B] before:rounded-[50vw] before:px-[1vw] before:text-[7px] before:border-[0.5px] before:border-[#A2254B] flex flex-col items-start linkCounter"
        >
          crm
        </Link>
        <Link
          href="/"
          className="py-[3vw] px-[5vw] md:px-[3vw] md:py-[1.5vw] rounded-[1vw] transition-[background] duration-500 ease text-[2.9vw] text-white md:text-[3em] hover:!bg-[length:200%_200%] !bg-[length:100%_100%]"
          style={{
            background: 'linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%)',
          }}
        >
          <span>GET PROPOSAL</span>
        </Link>
      </div>
    </nav>
  );
};
