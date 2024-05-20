import IonIcon from '@reacticons/ionicons';
import { IMenuMobileProps } from './menu-mobile.type';
import { MENU_NAV } from '../mocks/menu.mock';
import Link from 'next/link';
import { TIonIconName } from '../../../../../models';

export const MenuMobile: React.FC<IMenuMobileProps> = () => {
  return (
    <nav
      style={{ boxShadow: '0 0 0.3rem lightgray' }}
      className="z-10 bg-red-900 w-full lg:hidden flex justify-around items-center p-4 fixed bottom-0 left-1/2 -translate-x-1/2 text-lg text-white"
    >
      <Link href="/">
        <div className="flex flex-col items-center">
          <IonIcon name="home-outline" />
          <span className="uppercase text-[12px]">Trang chủ</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col items-center">
          <img
            src="https://gamikey.com/wp-content/uploads/2022/03/Netflix-e1689902508512-150x150.png.webp"
            alt="netflix icon"
            className="w-[18px]"
          />
          <span className="uppercase text-[12px]">Netflix</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col items-center">
          <IonIcon name="person-outline" />
          <span className="uppercase text-[12px]">Tài khoản</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col items-center">
          <div className="relative h-[18px]">
            <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
              0
            </span>
            <IonIcon name="bag-handle-outline" />
          </div>
          <span className="uppercase text-[12px]">Giỏ hàng</span>
        </div>
      </Link>
    </nav>
  );
};
