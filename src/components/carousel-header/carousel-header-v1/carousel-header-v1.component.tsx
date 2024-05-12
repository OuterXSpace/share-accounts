import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeft } from '../../../svg/arrow-left.svg';
import { ArrowRight } from '../../../svg/arrow-right.svg';

export interface ICarouselHeaderProps {}

export const CarouselHeaderV1: React.FC<ICarouselHeaderProps> = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <Carousel
        className="carousel-header w-full"
        showArrows
        autoPlay
        showThumbs={false}
        infiniteLoop
        transitionTime={2000}
        showIndicators
        statusFormatter={(current, total) =>
          `${current < 10 ? `0${current}` : current}/${total < 10 ? `0${total}` : total}`
        }
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className="absolute h-2 -bottom-[32px] md:-bottom-[40px] left-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20"
              onClick={clickHandler}
            >
              <ArrowLeft />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className="absolute h-2 -bottom-[32px] md:-bottom-[40px] left-16 md:left-24 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20"
              onClick={clickHandler}
            >
              <ArrowRight />
            </div>
          );
        }}
      >
        <div className="w-full flex justify-center">
          <img src="/assets/home/header_slider_1.jpg" alt="Project1" />
        </div>
        <div className="w-full flex justify-center">
          <img src="/assets/home/header_slider_1.jpg" alt="Project1" />
        </div>
        <div className="w-full flex justify-center">
          <img src="/assets/home/header_slider_1.jpg" alt="Project1" />
        </div>
      </Carousel>
    </div>
  );
};
