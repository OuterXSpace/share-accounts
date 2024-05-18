import React from 'react';
import { MenuTiles } from '../../constants/menu.constant';
import { IMenuDesktopProps } from './menu-desktop.type';
import { AiFillAccountBook } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { BsCart4 } from 'react-icons/bs';

export const MenuDesktop: React.FC<IMenuDesktopProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="gap-4 flex flex-col sm:flex-row w-full items-center justify-between p-6 md:px-24 border-b">
        {/* title */}
        <h1 className="font-semibold text-4xl text-gray-600">Anon</h1>
        <div className="flex gap-4 items-center">
          {/* icon */}
          <RxAvatar size={30} />
          <BsCart4 size={30} />
        </div>
      </div>
      <nav className="my-4 hidden lg:flex justify-center">
        <ul className="flex gap-4 uppercase text-black font-bold items-center">
          {MenuTiles.map((tile, index) => (
            <>
              <AiFillAccountBook />
              <li key={index}>{tile.title}</li>
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
};
