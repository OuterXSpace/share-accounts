import React from 'react';
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
        <ul className="flex gap-4  text-black font-bold items-center">
          {/* home */}
          <li className="flex gap-2 items-center">
            <AiFillAccountBook />
            <a href="#" className="uppercase">
              home
            </a>
          </li>
          {/* Danh mục */}
          <li className="flex gap-2 items-center relative">
            <AiFillAccountBook />
            <a href="#" className="uppercase">
              danh mục
            </a>
            <ul className="w-[60rem] top-10 left-[-19rem] right-0 absolute shadow-lg rounded-xl grid-cols-4 p-4 gap-4 border text-gray-400 font-normal bg-white z-10">
              <div className="flex gap-5">
                <li className="w-full">
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Danh mục</h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>Giải trí</li>
                    <li>Học tập</li>
                  </ul>
                </li>
                <li className="w-full">
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Thương hiệu</h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>Giải trí</li>
                    <li>Học tập</li>
                  </ul>
                </li>
                <li className="w-full">
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Tìm kiếm nhiều</h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>Giải trí</li>
                    <li>Học tập</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          {/* men */}
          <li className="flex gap-2 items-center">
            <AiFillAccountBook />
            <a href="#" className="uppercase">
              men's
            </a>
          </li>
          {/* women's */}
          <li className="flex gap-2 items-center">
            <AiFillAccountBook />
            <a href="#" className="uppercase">
              women's
            </a>
          </li>
          {/* jewelery */}
          <li className="flex gap-2 items-center">
            <AiFillAccountBook />
            <a href="#" className="uppercase">
              jewelery
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
