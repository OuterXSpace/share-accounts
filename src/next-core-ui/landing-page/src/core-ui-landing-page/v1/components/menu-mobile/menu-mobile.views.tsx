import { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import { Drawer } from 'flowbite-react';
import { ILandingPageMenuItemMobileV1Model, LandingPageMenuItemMobileV1 } from './menu-item';
import { ILandingPageMenuMobileV1Props } from './menu-mobile.type';
import Link from 'next/link';

export const LandingPageMenuMobileV1: React.FC<ILandingPageMenuMobileV1Props> = (props) => {
  const { data, className } = props;

  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  const handleCloseMenu = () => setIsToggleMenu(false);

  return (
    <div className={className}>
      {/* nav z-31 because backdrop drawer z-30 */}
      <nav className="bg-transparent fixed top-0 lg:hidden menu-mobile w-full py-[10px] md:py-[15px] px-[10px] md:px-[40px] z-[50]">
        <div className="flex justify-between items-center">
          <button className="t-[15px] flex justify-center text-gray-3" onClick={handleToggleMenu}>
            {isToggleMenu ? (
              <IonIcon className="text-[55px]" name="close-outline" />
            ) : (
              <IonIcon className="text-[55px]" name="reorder-three-outline" />
            )}
          </button>
          <div className="col-12 h-[64px] flex justify-center items-center">
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
        </div>
      </nav>
      <Drawer
        onClose={handleCloseMenu}
        open={isToggleMenu}
        position="left"
        className="bg-[#17191bf2] lg:hidden fixed top-0 text-lg pt-[80px] w-2/5"
      >
        <Drawer.Items className="menu-list">
          <ul>
            {data?.object?.array?.map((item: ILandingPageMenuItemMobileV1Model) => {
              const { id } = item;

              return <LandingPageMenuItemMobileV1 key={id} item={item} closeToggle={handleToggleMenu} />;
            })}
          </ul>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};
