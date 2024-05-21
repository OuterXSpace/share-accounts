import { ISliderFullProps } from './slider-full.type';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const SliderFull: React.FC<ISliderFullProps> = (props) => {
  const { data, extraClassContainer, extraClassSlider } = props;
  return (
    <div
      className={`w-full lg:h-[40vh] xl:h-[60vh] lg:mt-[30px] flex items-center justify-center ${extraClassContainer}`}
    >
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
          const { title, avatar, info, button } = item;
          return (
            <SwiperSlide
              key={title}
              className={`cursor-pointer w-full h-full flex items-center bg-cover ${extraClassSlider}`}
              style={{ backgroundImage: `url('${avatar}')` }}
            >
              <div className="w-full lg:ml-10 p-10 lg:bg-transparent rounded-xl flex flex-col justify-start items-start gap-2 ml-4">
                <h3 className="text-red-500 text-lg font-semibold lg:font-bold lg:text-xl">{title}</h3>
                <h1 className="text-white text-2xl lg:text-4xl font-extrabold">{info}</h1>
                <button className="font-semibold px-3 py-2 text-xs text-white bg-red-500 rounded-xl" type="button">
                  {button}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
        <button className="swiper-button-next" />
        <button className="swiper-button-prev" />
      </Swiper>
    </div>
  );
};
