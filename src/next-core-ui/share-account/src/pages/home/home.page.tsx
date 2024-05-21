import { HomePageProps } from './home.type';
import { SliderFull } from '../../components/slider-full';
import { swiperData } from './dummy.mock';
import { ProductList } from '../../components/product-list';

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main className="lg:pt-[110px] bg-[#f0f4ff]">
      {/* home slider */}
      <SliderFull data={swiperData} extraClassContainer="home-slide-container" extraClassSlider="home-slide" />
      <ProductList />
    </main>
  );
};
