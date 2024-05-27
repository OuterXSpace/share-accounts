import { ISliderFullProps } from './slider-full.type';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

export const SliderFull: React.FC<ISliderFullProps> = (props) => {
  const { data, extraClassContainer, extraClassSlider } = props;

  return (
    <div className={`w-full lg:h-[40vh] xl:h-[60vh] flex items-center justify-center ${extraClassContainer}`}>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ type: 'bullets', clickable: true }}
        autoplay
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="w-full relative h-full"
        effect="fade"
      >
        {data.map((item) => {
          const { id, imageUrl, linkUrl } = item;
          return (
            <SwiperSlide
              key={id}
              className={`cursor-pointer w-full h-full flex items-center bg-cover ${extraClassSlider}`}
              style={{ backgroundImage: `url('${imageUrl}')` }}
            >
              <Link href={linkUrl} className="hidden" />
            </SwiperSlide>
          );
        })}
        <button className="swiper-button-next" />
        <button className="swiper-button-prev" />
      </Swiper>
    </div>
  );
};
