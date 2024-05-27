import { SliderProps } from './slider.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Pagination } from 'swiper/modules';
import { useRef, useCallback, useState, useEffect } from 'react';
import IonIcon from '@reacticons/ionicons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const Slider: React.FC<SliderProps> = (props) => {
  const { data } = props;

  const sliderRef = useRef(null);

  const [isItemSelected, setItemSelected] = useState<Record<string, any>>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    data && setItemSelected(data[0]);
  }, [data]);

  return (
    <div className="slider-container">
      <img
        className="rounded-lg bg-white cursor-pointer object-contain mb-5 h-[360px]"
        alt=""
        src={isItemSelected?.imageUrl}
        width="540px"
        height="360px"
      />
      <div className="w-[540px] relative">
        <div
          className="items-center flex justify-center rounded-lg cursor-pointer absolute z-10 transform-none w-9 h-9 bg-white border-none outline-none p-0 top-[15px] right-[504px]"
          onClick={handlePrev}
        >
          <IonIcon className="text-[20px]" name="arrow-back-outline" />
        </div>
        <Swiper
          ref={sliderRef}
          slidesPerView={5}
          modules={[Virtual, Pagination]}
          className="flex slider-item"
          effect="fade"
          spaceBetween={10}
          virtual
        >
          {data?.map((item) => {
            const { imageUrl, id } = item;
            return (
              <SwiperSlide
                key={id}
                virtualIndex={id}
                className="cursor-pointer"
                onMouseMove={() => setItemSelected(item)}
              >
                <div className="rounded-lg bg-white object-cove w-[96px] h-[64px]">
                  <img
                    className={`rounded-lg object-cover w-[96px] h-[64px] ${
                      isItemSelected?.id === id ? 'border-[3px] border-solid border-white' : ''
                    }`}
                    alt=""
                    src={imageUrl}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="items-center flex justify-center rounded-lg cursor-pointer absolute z-10 transform-none w-9 h-9 bg-white border-none outline-none p-0 top-[15px] right-[4px]"
          onClick={handleNext}
        >
          <IonIcon className="text-[20px]" name="arrow-forward-outline" />
        </div>
      </div>
    </div>
  );
};
