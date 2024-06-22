import { TitleSection } from '../title-section';
import { ServicesItem } from './components/services-item';
import { servicesSliderMock } from './services-slider.mock';
import { IServicesSliderProps } from './services-slider.type';
import { Splide, SplideTrack, SplideSlide, Options } from '@splidejs/react-splide';

const optionSplide: Options = {
  perPage: 3,
  perMove: 1,
  focus: 0,
  type: 'slide',
  gap: '5vw',
  arrows: false,
  pagination: false,
  speed: 1000,
  dragAngleThreshold: 60,
  autoWidth: false,
  rewind: false,
  rewindSpeed: 1000,
  waitForTransition: false,
  updateOnMove: true,
  trimSpace: true,
};

export const ServicesSlider: React.FC<IServicesSliderProps> = (props) => {
  const { data, className } = props;
  return (
    <main className="p-[5.5vw] overflow-y-hidden">
      <div className="mb-[13vw]">
        <TitleSection title="What we do" />
      </div>
      {/* services item */}
      <Splide
        aria-label="Service Splide"
        options={optionSplide}
        hasTrack={false}
        className="relative mb-[15vw] splide__service"
      >
        <SplideTrack className="overflow-visible">
          {servicesSliderMock.map((item) => {
            const { number, icon, title } = item;
            return (
              <SplideSlide key={number}>
                <ServicesItem number={number} icon={icon} title={title} />
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </main>
  );
};
