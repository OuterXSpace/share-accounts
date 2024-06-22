import React from 'react';

export const HomeSliderShareAccountStyles: React.FC = () => {
  return (
    <style global jsx>
      {`
        .home-slide-container .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
        }

        .home-slide::after {
          position: absolute;
          content: '';
          display: block;
          min-height: 100%;
          min-width: 100%;
          top: 0;
          left: 0;
          z-index: -1;
        }

        .home-slide-container .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background-color: white;
          width: 2rem;
          height: 0.2rem;
          border-radius: 15px;
        }

        .home-slide-container .swiper-pagination-bullet {
          background-color: white;
          width: 2rem;
          height: 0.2rem;
          border-radius: 15px;
        }
      `}
    </style>
  );
};
