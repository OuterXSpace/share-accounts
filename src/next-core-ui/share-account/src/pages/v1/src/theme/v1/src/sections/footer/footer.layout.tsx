import React, { Fragment } from 'react';
import { IFooterTheme01Props } from './footer.type';
import Link from 'next/link';

export const FooterShareAccountTheme01: React.FC<IFooterTheme01Props> = (props) => {
  const { data } = props;

  return (
    <footer>
      {/* footer tile */}
      <div className="bg-primary-dark">
        <div className="container lg:h-[110px] flex p-6 lg:px-6 lg:justify-between lg:items-center flex-col lg:flex-row gap-4 lg:gap-0">
          {data?.object?.topContent?.map((item, index) => {
            const { link = '/', id = '', icon = '', title = '' } = item;
            return (
              <Fragment key={id}>
                <Link href={link} className="flex items-center gap-2 text-white">
                  <img src={icon} alt={title} />
                  {title}
                </Link>
                {index < Number(data?.object?.topContent?.length ?? 0) - 1 && (
                  <span className="h-[48px] w-[1.5px] bg-[#ff9500] hidden lg:block" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
      {/* icon payment */}
      <div className="bg-primary-darker">
        <div className="container flex items-center justify-center py-10 lg:pb-10 ">
          {data?.object?.midContent?.map((item) => {
            const { imageUrl = '', imageAlt = '', id = '', link = '/' } = item;
            return (
              <Link key={id} href={link} className="w-[100px]">
                <img src={imageUrl} alt={imageAlt} className="w-full" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* copyright */}
      <div className="bg-primary-dark">
        <div className="container flex justify-center">
          <div className="row">
            <div className="flex items-center justify-center p-2 uppercase text-sm text-white text-opacity-70">
              {data?.object?.bottomText}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
