import { HomePageProps } from './home.type';
import { SliderFull } from '../../components/slider-full';
import { swiperData } from './dummy.mock';
import { ProductList } from '../../components/product-list';
import { AnnouncementComponent, modalCustomTheme } from '../../../../../components';
import { Flowbite, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { wuiWelcomePopup } = props;

  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <main className="pt-[120px]">
      <SliderFull data={swiperData} extraClassContainer="home-slide-container" extraClassSlider="home-slide" />
      <Flowbite theme={{ theme: modalCustomTheme }}>
        <Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <AnnouncementComponent wuiWelcomePopup={wuiWelcomePopup?.data?.V2?.config?.bodyContent} />
          </Modal.Body>
        </Modal>
      </Flowbite>
      <ProductList />
    </main>
  );
};
