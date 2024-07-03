import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SplashScreenProps } from './loading-more.type';

export const SplashScreen: React.FC<SplashScreenProps> = (props) => {
  const { className = 'bg-[#2a2c30]', logo } = props;
  return (
    <div className={`${className} fixed inset-0 z-50 flex justify-center items-center h-screen`}>
      <div className="flex justify-center items-center">
        <LazyLoadImage className="h-auto max-w-full bg-transparent" src={logo} alt="splash" effect="blur" />
      </div>
    </div>
  );
};
