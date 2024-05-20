/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IFooterTheme02Props } from './footer.type';

export const FooterTheme02: React.FC<IFooterTheme02Props> = () => {
  return (
    <footer className="mb-[77px] lg:mb-0">
      {/* footer tile */}
      <div className="lg:h-[110px] bg-[#a2060e] flex p-6 lg:px-6 lg:justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
        <div className="flex items-center gap-2 text-white">
          <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="phone" />
          Hotline
        </div>
        <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
        <div className="flex items-center gap-2 text-white">
          <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="mail" />
          miso88@gmail.com
        </div>
        <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
        <div className="flex items-center gap-2 text-white">
          <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="phone" />
          Hotline
        </div>
        <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
        <div className="flex items-center gap-2 text-white">
          <img src="https://miso88.com/assets/images/icons/wui-footer/icon-phone.png" alt="phone" />
          Chăm sóc khách hàng
        </div>
      </div>
      {/* icon payment */}
      <div className="mx-auto flex items-center justify-center flex-col gap-4 py-10 lg:pb-10 bg-[#520100]">
        <img src="https://miso88.com/assets/images/background/partner-logos.png" alt="payment" className="w-4/5" />
      </div>
      {/* copyright */}
      <div className="flex justify-center p-[8px] bg-[#390100]">
        <h4 className="text-gray-500 text-md lg:text-lg font-semibold uppercase">
          Copyright © Netflix All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
};
