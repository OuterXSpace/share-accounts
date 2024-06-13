import { TitleSection } from '../title-section';
import { ServicesItem } from './components/services-item';
import { IServicesSliderProps } from './services-slider.type';

export const ServicesSlider: React.FC<IServicesSliderProps> = (props) => {
  const { data, className } = props;
  return (
    <main className="p-[5.5vw]">
      <div className="mb-[13vw]">
        <TitleSection title="What we do" />
      </div>
      <ServicesItem number="01 / 06" />
    </main>
  );
};
