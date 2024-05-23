/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IFooterTheme02Props } from './footer.type';

export const FooterTheme02: React.FC<IFooterTheme02Props> = () => {
  return (
    <footer className="mb-[77px] lg:mb-0">
      {/* footer tile */}
      <div className="bg-[#a2060e]">
        <div className="container lg:h-[110px] flex p-6 lg:px-6 lg:justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
          <div className="flex items-center gap-2 text-white">
            <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="phone" />
            Hotline
          </div>
          <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
          <div className="flex items-center gap-2 text-white">
            <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="mail" />
            shareaccount@gmail.com
          </div>
          <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
          <div className="flex items-center gap-2 text-white">
            <img src="https://miso88.com/assets/images/icons/wui-footer/icon-footerWork.png" alt="phone" />
            Hướng dẫn
          </div>
          <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
          <div className="flex items-center gap-2 text-white">
            <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="phone" />
            Chăm sóc khách hàng
          </div>
        </div>
      </div>
      {/* icon payment */}
      <div className="bg-[#520100]">
        <div className="container flex items-center justify-center py-10 lg:pb-10 ">
          <img
            src="https://gamikey.com/wp-content/uploads/2023/09/Zalo-PNG-3-300x90.png.webp"
            alt="payment"
            className="w-1/12 pr-2"
          />
          <img
            src="https://gamikey.com/wp-content/uploads/2023/09/Fanpage-PNG.png.webp"
            alt="payment"
            className="w-1/12 pr-2"
          />
          <img
            src="https://gamikey.com/wp-content/uploads/2023/09/Telegram-PNG.png.webp"
            alt="payment"
            className="w-1/12 pr-2"
          />
        </div>
      </div>
      {/* copyright */}
      <div className="bg-[#390100]">
        <div className="container flex justify-center">
          <div className="row">
            <div className="flex items-center justify-center p-2 uppercase text-sm text-white text-opacity-70">
              Copyright © shareaccount All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
