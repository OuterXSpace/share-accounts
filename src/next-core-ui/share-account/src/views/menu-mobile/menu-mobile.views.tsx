import IonIcon from '@reacticons/ionicons';
import { IMenuMobileProps } from './menu-mobile.type';
import { MENU_NAV } from '../mocks/menu.mock';
import Link from 'next/link';
import { TIonIconName } from '../../../../../models';

export const MenuMobile: React.FC<IMenuMobileProps> = () => {
  return (
    <div className="mobileNavbar">
      {/* ? navbar button */}
      <div
        style={{ boxShadow: '0 0 0.3rem lightgray' }}
        className="z-10 bg-white w-96 lg:hidden flex justify-around items-center p-4 border rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 text-lg"
      >
        {MENU_NAV?.map((item) => {
          const { id, icon, href, number } = item;
          return (
            <Link key={id} type="button" href={href}>
              {number ? (
                <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
                  0
                </span>
              ) : (
                ''
              )}
              <IonIcon name={icon as TIonIconName} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
