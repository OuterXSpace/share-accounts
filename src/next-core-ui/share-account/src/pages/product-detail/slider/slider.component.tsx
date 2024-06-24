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
    <div className="flex flex-col items-start">
      <img
        className="rounded-lg bg-white cursor-pointer object-cover mb-5 w-full h-[275px] md:w-[275px]"
        alt="product"
        src={isItemSelected?.imageUrl}
      />
      <div className="w-full">
        <Swiper
          ref={sliderRef}
          breakpoints={{
            320: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          modules={[Virtual, Pagination]}
          className="relative md:w-[275px] m-auto"
          effect="fade"
          spaceBetween={10}
          virtual
        >
          <div
            className="items-center flex justify-center rounded-lg cursor-pointer absolute z-10 w-9 h-9 
            bg-white hover:bg-gray-1 break-words transition duration-200
            border-none outline-none p-0 top-1/2 left-0 transform -translate-y-1/2"
            onClick={handlePrev}
          >
            <IonIcon className="text-[20px]" name="arrow-back-outline" />
          </div>
          {data?.map((item) => {
            const { imageUrl, id } = item;
            return (
              <SwiperSlide
                key={id}
                virtualIndex={id}
                className="cursor-pointer h-[52px] w-[52px]"
                onClick={() => setItemSelected(item)}
                onMouseMove={() => setItemSelected(item)}
              >
                <div className="rounded-lg h-full">
                  <img
                    className={`rounded-lg object-cover h-full w-full ${
                      isItemSelected?.id === id ? 'border-[3px] border-solid border-white' : ''
                    }`}
                    alt="product"
                    src={imageUrl}
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <div
            className="items-center flex justify-center rounded-lg cursor-pointer absolute z-10  w-9 h-9 
            bg-white hover:bg-gray-1 break-words transition duration-200
            border-none outline-none p-0 top-1/2 right-0 transform -translate-y-1/2"
            onClick={handleNext}
          >
            <IonIcon className="text-[20px]" name="arrow-forward-outline" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
