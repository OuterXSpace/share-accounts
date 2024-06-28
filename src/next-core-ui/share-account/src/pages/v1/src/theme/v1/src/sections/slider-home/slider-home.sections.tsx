import React from 'react';
import { ISliderHomeShareAccountTheme01Props } from './slider-home.sections.type';
import Link from 'next/link';
import { SliderFull } from '../../components/slider-full';
import { SwiperSlide } from 'swiper/react';

export const SliderHomeShareAccountTheme01: React.FC<ISliderHomeShareAccountTheme01Props> = (props) => {
  const { data } = props;

  return (
    <SliderFull extraClassContainer="home-slide-container" className="h-full sm:h-[300px] lg:h-full">
      {data?.object?.sliderHomeBanner.map((item) => {
        const { id, imageUrl, link, title } = item;

        return (
          <SwiperSlide key={id} className="w-full h-full flex items-center home-slide">
            <Link href={link} className="w-full ">
              <img src={imageUrl} alt={title} className="object-cover max-h-[500px] w-full" />
            </Link>
          </SwiperSlide>
        );
      })}
    </SliderFull>
  );
};
