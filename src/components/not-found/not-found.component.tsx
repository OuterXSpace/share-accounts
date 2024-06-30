import React from 'react';
import { NotFoundProps } from './not-found.type';

export const NotFound: React.FC<NotFoundProps> = (props) => {
  const { className, title = '404 Page Not Found.' } = props;
  return (
    <div className={`${className} min-h-screen flex items-center justify-center flex-col`}>
      <div className="font-bold text-black text-5xl md:text-6xl lg:text-7xl">
        4
        <span role="img" aria-label="Crying Face" className="text-4xl md:text-5xl lg:text-6xl">
          😢
        </span>
        4
      </div>
      <p className="text-base md:text-lg lg:text-xl text-black mt-4 lg:mt-8">{title}</p>
    </div>
  );
};
