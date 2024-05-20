import React, { useState } from 'react';
import { IHeaderTheme02Props } from './header.type';
import { MenuDesktop, MenuMobile } from '../../views';
import { useMediaQuery } from '../../../../../hooks';
import IonIcon from '@reacticons/ionicons';

export const HeaderTheme02: React.FC<IHeaderTheme02Props> = () => {
  const [isCategoryToggle, setIsCategoryToggle] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 600px)');

  const handleCategoryToggle = () => {
    setIsCategoryToggle(!isCategoryToggle);
  };

  return (
    <>
      {/*! newspaper popup */}
      <div id="newspaper" className="z-20 fixed w-screen h-screen hidden items-center justify-center">
        <div id="newspaperOverlay" className="z-10 fixed top-0 w-screen h-screen bg-[#00000066]" />
        <div
          id="newspaperBox"
          className="z-20 w-4/5 lg:w-3/6 h-2/5 lg:h-3/5 bg-white flex items-center rounded-md overflow-hidden border shadow-md"
        >
          <div className="hidden md:flex md:w-1/2 h-full">
            <img
              className="w-full h-full"
              src="https://azureapis.blob.core.windows.net/share-account/assets/images/newsletter.png"
              alt="newsletter"
            />
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-12 px-8 gap-4 relative">
            <button className="closeButton absolute top-4 right-4 text-2xl hover:text-red-500">
              <IonIcon name="close-circle-outline" />
            </button>
            <h3 className="text-xl font-bold text-gray-800">Subscribe Newsletter.</h3>
            <p className="text-md text-gray-600 font-semibold">
              Subscribe the <span className="text-lg font-semibold">Anon</span> to get latest products and discount
              update.
            </p>
            <input className="border p-2" type="email" placeholder="Email Address" />
            <button className="rounded-md self-center py-2 px-3 bg-gray-900 text-white hover:bg-red-500">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <header className="header w-full">
        {/*! topHeader */}
        <div className="top-header w-screen flex flex-col items-center justify-between border-b">
          <div className="flex w-full items-center justify-between p-4 md:px-20 border-b">
            <div className="icons hidden lg:flex items-center gap-2">
              <a
                className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
                href="#"
              >
                <IonIcon name="logo-instagram" />
              </a>
              <a
                className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
                href="#"
              >
                <IonIcon name="logo-linkedin" />
              </a>
              <a
                className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
                href="#"
              >
                <IonIcon name="logo-github" />
              </a>
            </div>
            <h3 className="text-gray-400 font-semibold text-xs">FREE SHIPPING THIS WEEK ORDER OVER - $55</h3>
            <div className="select hidden md:flex">
              <select className="mr-2 p-1 px-2 text-sm font-semibold" id="currency">
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
              </select>
              <select className="mr-2 p-1 px-2 text-sm font-semibold" id="language">
                <option value="Persian">English</option>
                <option value="English">Persian</option>
              </select>
            </div>
          </div>
          <div className="gap-4 flex flex-col sm:flex-row w-full items-center justify-between p-6 md:px-24">
            <h1 className="font-semibold text-4xl text-gray-600">Anon</h1>
            <form className="relative w-full sm:w-3/5">
              <input
                className="w-full h-full p-2 border rounded-xl"
                placeholder="Enter Your Product Name..."
                id="search"
                type="text"
              />
              <label className="absolute right-2 top-2" htmlFor="search">
                <i className="fa-solid fa-magnifying-glass cursor-pointer" />
              </label>
            </form>
            <div className="icons hidden mr-2 text-3xl md:flex gap-8 text-gray-600">
              <div className="relative">
                <IonIcon name="person-outline" />
              </div>
              <div className="relative">
                <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
                  0
                </span>
                <IonIcon name="heart-outline" />
              </div>
              <div className="relative">
                <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
                  0
                </span>
                <IonIcon name="bag-handle-outline" />
              </div>
            </div>
          </div>
        </div>
        {!isDesktop ? (
          <MenuMobile />
        ) : (
          <MenuDesktop onClickCategoryToggle={handleCategoryToggle} isCategoryToggle={isCategoryToggle} />
        )}
      </header>
    </>
  );
};
