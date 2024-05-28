import { ISliderFullProps } from './slider-full.type';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

export const SliderFull: React.FC<ISliderFullProps> = (props) => {
  const { children, extraClassContainer } = props;

  return (
    <div className={`w-full h-[40vh] xl:h-[60vh] flex items-center justify-center ${extraClassContainer}`}>
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
        {children}
        <button className="swiper-button-next" />
        <button className="swiper-button-prev" />
      </Swiper>
    </div>
  );
};
