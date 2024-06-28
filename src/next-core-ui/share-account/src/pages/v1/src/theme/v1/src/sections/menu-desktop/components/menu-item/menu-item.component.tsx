import { Popover } from 'flowbite-react';
import { useState } from 'react';
import { IMenuItemProps } from './menu-item.type';

import Link from 'next/link';
import { PopupLink } from '../../../../../../../../../../../../../components';
import { classNameStringify } from '../../../../../../../../../../../../../utils';

const classNamePrefix = 'header-menu-item';

export const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { item, submenu, className } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <PopupLink
      {...item}
      className={classNameStringify(`${classNamePrefix} ${className}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {submenu ? (
        <Popover
          trigger="hover"
          className={`${classNamePrefix}__submenu-switch-select left-1/2 transform translate-x-1/2 border-solid border-t-primary border-t py-0 px-4 bg-primary-transparent absolute top-full w-full h-max font-normal z-10`}
          content={
            <div
              className={`${classNamePrefix}__submenu-container ${submenu?.layout}-grid relative flex items-stretch whitespace-nowrap overflow-auto p-0 max-w-[1280px] w-full`}
            >
              {submenu?.submenuItems.map((submenuItem, submenuIndex) => {
                const { id: submenuItemId = submenuIndex } = submenuItem;
                return (
                  <div
                    className={`${classNamePrefix}__submenu-section-group inline-flex flex-col items-start border-r border-[#ffffff0d] px-4 py-2 min-w-max first-child:border-l first-child:border-[#ffffff0d]`}
                    key={submenuItemId}
                  >
                    <div className={`${classNamePrefix}__submenu-section-group-header flex items-center gap-16`}>
                      <PopupLink
                        {...submenuItem}
                        className={`${classNamePrefix}__submenu-section-group-link flex flex-col items-center cursor-pointer`}
                      >
                        {submenuItem.thumbnailUrl && (
                          <img
                            className={`${classNamePrefix}__submenu-section-group-thumbnail max-h-[160px] transition duration-500 ease-in-out bg-gradient-to-t hover:from-primary-darker hover:to-primary`}
                            src={submenuItem.thumbnailUrl}
                            alt=""
                          />
                        )}
                        {submenuItem.label && (
                          <span className={`${classNamePrefix}__submenu-section-group-label`}>{submenuItem.label}</span>
                        )}
                      </PopupLink>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        >
          <div className={`${classNamePrefix}__inner`}>
            <div className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full">
              <span
                className={`${classNamePrefix}-item__label min-w-max text-sm  ${
                  hovered ? 'text-accent' : 'text-white'
                } text-opacity-90 uppercase font-semibold`}
              >
                {item?.label}
              </span>
            </div>
          </div>
        </Popover>
      ) : (
        <Link href={item?.link ?? '/'} className={`${classNamePrefix}__inner`}>
          <div className="toto-popup-link header-menu-item header-menu-bar__menu-item relative flex items-center min-h-[48px] h-full">
            <span
              className={`${classNamePrefix}-item__label min-w-max text-sm  ${
                hovered ? 'text-accent' : 'text-white'
              } text-opacity-90 uppercase font-semibold`}
            >
              {item?.label}
            </span>
          </div>
        </Link>
      )}
    </PopupLink>
  );
};
