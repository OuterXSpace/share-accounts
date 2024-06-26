import { HomePageProps } from './home.type';
import { SliderFull } from '../../components/slider-full';
import { ProductList } from '../../components/product-list';
import { AnnouncementComponent, modalCustomTheme } from '../../../../../components';
import { Flowbite, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { wuiWelcomePopup, productData, homeContent } = props;

  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <main className="pt-[120px]">
      <SliderFull
        data={homeContent?.sliderHomeBanner}
        extraClassContainer="home-slide-container"
        extraClassSlider="home-slide"
      />
      <Flowbite theme={{ theme: modalCustomTheme }}>
        <Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            {wuiWelcomePopup?.enableType === 'V2' && (
              <AnnouncementComponent wuiWelcomePopup={wuiWelcomePopup?.data?.V2?.config?.bodyContent} />
            )}
            {wuiWelcomePopup?.enableType === 'V1' && (
              <img
                src={wuiWelcomePopup?.data?.V1?.config?.image}
                className="w-full h-full object-contain object-center"
                alt="well come"
              />
            )}
          </Modal.Body>
        </Modal>
      </Flowbite>
      <ProductList productData={productData} homeContent={homeContent} />
    </main>
  );
};
