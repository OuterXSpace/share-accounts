import { useState } from 'react';
import { IMenuMobile02Props } from './menu-mobile.type';
import IonIcon from '@reacticons/ionicons';
import { MenuItemMobile02 } from './menu-item';
import Link from 'next/link';

export const MenuMobile02: React.FC<IMenuMobile02Props> = (props) => {
  const { data, className } = props;

  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };
  return (
    <div className={className}>
      <nav className="menu-mobile z-20 bg-transparent w-full lg:hidden py-[10px] md:py-[15px] px-[20px] fixed top-0 left-1/2 -translate-x-1/2 text-lg">
        <button className="absolute z-20 t-[15px] flex justify-center text-gray-3" onClick={handleToggleMenu}>
          {isToggleMenu ? (
            <IonIcon className="text-[55px]" name="close-outline" />
          ) : (
            <IonIcon className="text-[55px]" name="reorder-three-outline" />
          )}
        </button>
        <div className="col-sm-12 h-[64px] flex justify-center items-center">
          <Link href="/" className="flex flex-wrap items-center h-full min-h-0 cursor-pointer">
            <img
              width="97"
              height="17"
              src={data?.object?.logo}
              className="custom-logo astra-logo-svg"
              alt="Video Editor"
            />
          </Link>
        </div>
      </nav>

      <div className="menu-list">
        <ul
          className={`fixed bg-[#17191bf2] h-full w-2/5 z-10 pt-[80px] transition-all ${
            isToggleMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {data?.object?.array?.map((item) => {
            const { id } = item;

            return <MenuItemMobile02 key={id} item={item} closeToggle={handleToggleMenu} />;
          })}
        </ul>
      </div>
    </div>
  );
};
