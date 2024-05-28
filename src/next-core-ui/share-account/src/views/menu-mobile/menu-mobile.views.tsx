import IonIcon from '@reacticons/ionicons';
import { IMenuMobileProps } from './menu-mobile.type';
import { useState } from 'react';

const classNamePrefix = 'tt-header';

export const MenuMobile: React.FC<IMenuMobileProps> = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  return (
    <>
      <nav
        style={{ boxShadow: '0 0 0.3rem lightgray' }}
        className="menu-mobile z-10 bg-red-900 w-full lg:hidden flex justify-between items-center py-[10px] md:py-[15px] px-[10px] md:px-[40px] fixed top-0 left-1/2 -translate-x-1/2 text-lg text-white"
      >
        {/* nav menu */}
        <button
          style={{ boxShadow: '0px 0px 0px 4px rgb(239 79 2 / 24%)' }}
          className="flex justify-center rounded-[50%] bg-red-500 p-2"
          onClick={handleToggleMenu}
        >
          {isToggleMenu ? (
            <IonIcon className="text-[30px]" name="close-outline" />
          ) : (
            <IonIcon className="text-[30px]" name="reorder-three-outline" />
          )}
        </button>
        {/* icon */}
        <div className={`${classNamePrefix}__logo h-[64px]`}>
          <img src="https://79sodo.com/assets/home/wui/logo.gif" alt="logo icon" className="h-full" />
        </div>
      </nav>
      <ul
        className={`fixed bg-red-500 h-full w-full z-10 mt-[80px] transition-all ${
          isToggleMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* trang chủ */}
        <li className="uppercase text-white flex py-[10px] md:py-[15px] px-[10px] md:px-[40px] justify-between items-center border-gray-400 border-b">
          <div className="flex justify-center gap-2 items-center">
            <IonIcon name="home-outline" className="text-[24px]" />
            <span className="uppercase text-[13px]">Trang chủ</span>
          </div>
          <IonIcon name="chevron-forward-outline" className="text-[24px]" />
        </li>
        {/* tài khoản */}
        <li className="uppercase text-white flex py-[10px] md:py-[15px] px-[10px] md:px-[40px] justify-between items-center border-gray-400 border-b">
          <div className="flex justify-center gap-2 items-center">
            <img
              src="https://gamikey.com/wp-content/uploads/2022/03/Netflix-e1689902508512-150x150.png.webp"
              alt="netflix icon"
              className="w-[24px]"
            />
            <span className="uppercase text-[13px]">Netflix</span>
          </div>
          <IonIcon name="chevron-forward-outline" className="text-[24px]" />
        </li>
        <li className="uppercase text-white flex py-[10px] md:py-[15px] px-[10px] md:px-[40px] justify-between items-center border-gray-400 border-b">
          <div className="flex justify-center gap-2 items-center">
            <IonIcon name="person-outline" className="text-[24px]" />
            <span className="uppercase text-[13px]">Tài khoản</span>
          </div>
          <IonIcon name="chevron-forward-outline" className="text-[24px]" />
        </li>
        <li className="uppercase text-white flex py-[10px] md:py-[15px] px-[10px] md:px-[40px] justify-between items-center">
          <div className="flex justify-center gap-2 items-center">
            <IonIcon name="bag-handle-outline" className="text-[24px]" />
            <span className="uppercase text-[13px]">Giỏ hàng</span>
          </div>
          <IonIcon name="chevron-forward-outline" className="text-[24px]" />
        </li>
      </ul>
    </>
  );
};
