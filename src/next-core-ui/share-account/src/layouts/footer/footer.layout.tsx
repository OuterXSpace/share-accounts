/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IFooterTheme01Props } from './footer.type';
import Link from 'next/link';

export const FooterTheme01: React.FC<IFooterTheme01Props> = (props) => {
  const { footerContent } = props;

  return (
    <footer className="mb-[77px] lg:mb-0">
      {/* footer tile */}
      <div className="bg-[#a2060e]">
        <div className="container lg:h-[110px] flex p-6 lg:px-6 lg:justify-between lg:items-center flex-col lg:flex-row gap-4 lg:gap-0">
          {footerContent?.topContent?.map((item, index) => {
            const { hrefLink = '/', id = '', iconUrl = '', title = '' } = item;
            return (
              <>
                <Link key={id} href={hrefLink} className="flex items-center gap-2 text-white">
                  <img src={iconUrl} alt="" />
                  {title}
                </Link>
                {index < Number(footerContent?.topContent?.length ?? 0) - 1 && (
                  <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* icon payment */}
      <div className="bg-[#520100]">
        <div className="container flex items-center justify-center py-10 lg:pb-10 ">
          {footerContent?.midContent?.map((item) => {
            const { imageUrl = '', imageAlt = '', id = '', hrefLink = '/' } = item;
            return (
              <Link key={id} href={hrefLink} className="w-1/12 pr-2">
                <img src={imageUrl} alt={imageAlt} className="w-full" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* copyright */}
      <div className="bg-[#390100]">
        <div className="container flex justify-center">
          <div className="row">
            <div className="flex items-center justify-center p-2 uppercase text-sm text-white text-opacity-70">
              {footerContent?.botContent?.title}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
