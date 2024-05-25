import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import { AnnouncementProp } from './announcement.type';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const AnnouncementComponent: React.FC<AnnouncementProp> = (props) => {
  const { wuiWelcomePopup } = props;

  return (
    <div className="toto-announcement-welcome flex flex-col overflow-visible w-full">
      <Swiper
        pagination={{
          clickable: true,
          bulletClass:
            'transform rotate-45 transition-all duration-300 ease-linear border border-white w-2 h-2 bg-transparent bg-none',
          bulletActiveClass: 'bg-white',
        }}
        autoplay
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="w-full relative h-full"
        effect="fade"
      >
        {wuiWelcomePopup?.map((item) => {
          const { imageUrl, id, link } = item;
          return (
            <SwiperSlide key={id} className="cursor-pointer w-full h-full flex items-center bg-cover">
              <div className="toto-announcement-welcome__swiper-slide flex justify-center items-center h-auto">
                <Link href={link} className="toto-popup-link  ">
                  <img className="w-full h-full object-contain object-center" alt="" src={imageUrl} width="100%" />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
