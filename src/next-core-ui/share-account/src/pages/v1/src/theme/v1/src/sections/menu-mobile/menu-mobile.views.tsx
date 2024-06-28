import IonIcon from '@reacticons/ionicons';
import { IMenuMobileShareAccountV1ThemeV1Props } from './menu-mobile.type';
import { useState } from 'react';
import { Drawer } from 'flowbite-react';
import { MenuItemMobile01 } from './menu-item';

export const MenuMobileShareAccountV1ThemeV1: React.FC<IMenuMobileShareAccountV1ThemeV1Props> = (props) => {
  const { data, handleOpenCart } = props;

  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  const handleCloseMenu = () => setIsToggleMenu(false);

  return (
    <>
      {/* nav z-31 because backdrop drawer z-30 */}
      <nav className="bg-gradient-to-top-primary fixed top-0 lg:hidden menu-mobile w-full py-[10px] md:py-[15px] px-[10px] md:px-[40px] z-[31]">
        <div className="flex justify-between items-center">
          <button className="t-[15px] flex justify-center text-gray-3 z-11" onClick={handleToggleMenu}>
            {isToggleMenu ? (
              <IonIcon className="text-[55px]" name="close-outline" />
            ) : (
              <IonIcon className="text-[55px]" name="reorder-three-outline" />
            )}
          </button>
          <div className="col-12 h-[64px] flex justify-center items-center">
            <img src="https://79sodo.com/assets/home/wui/logo.gif" alt="logo icon" className="h-full" />
          </div>
        </div>
      </nav>
      <Drawer
        onClose={handleCloseMenu}
        open={isToggleMenu}
        position="left"
        className="bg-primary-darker lg:hidden fixed top-0 text-lg mt-[83px] md:mt-[94px] p-0"
      >
        <Drawer.Items className="menu-list">
          <ul>
            {data?.object?.mobile?.array?.map((item, index) => {
              const { id = index } = item;

              return (
                <MenuItemMobile01 key={id} item={item} closeToggle={handleToggleMenu} handleOpenCart={handleOpenCart} />
              );
            })}
          </ul>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
