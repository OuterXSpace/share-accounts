import IonIcon from '@reacticons/ionicons';
import { IMenuMobileProps } from './menu-mobile.type';
import { useState } from 'react';
import { MenuItemMobile01 } from './menu-item';

export const MenuMobile: React.FC<IMenuMobileProps> = (props) => {
  const { wuiHeaderContent } = props;

  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  return (
    <main>
      <nav className="menu-mobile z-10 bg-gradient-to-top-primary w-full lg:hidden py-[10px] md:py-[15px] px-[10px] md:px-[40px] fixed top-0 left-1/2 -translate-x-1/2 text-lg">
        <button className="absolute t-[15px] flex justify-center text-gray-3" onClick={handleToggleMenu}>
          {isToggleMenu ? (
            <IonIcon className="text-[55px]" name="close-outline" />
          ) : (
            <IonIcon className="text-[55px]" name="reorder-three-outline" />
          )}
        </button>
        <div className="col-sm-12 h-[64px] flex justify-center items-center">
          <img src="https://79sodo.com/assets/home/wui/logo.gif" alt="logo icon" className="h-full" />
        </div>
      </nav>

      <div className="menu-list">
        <ul
          className={`fixed bg-primary-darker h-full w-4/5 z-10 mt-[80px] transition-all ${
            isToggleMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {wuiHeaderContent?.mobileMenus?.map((item, index) => {
            const { id = index } = item;

            return <MenuItemMobile01 key={id} item={item} closeToggle={handleToggleMenu} />;
          })}
        </ul>
      </div>
    </main>
  );
};
