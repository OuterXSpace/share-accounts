import { HomePageProps } from './home.type';
import { SliderFull } from '../../components/slider-full';
import { ProductList } from '../../components/product-list';
import { AnnouncementComponent, modalCustomTheme } from '../../../../../components';
import { Flowbite, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { sacWelcomePopup, sacProductData, sacHomeContent } = props;

  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="Home page" />
        <meta property="og:url" content="/" />
        <meta property="og:image" />
        <title>Home page</title>
      </Head>
      <main className="pt-[80px] md:pt-[90px] lg:pt-[120px]">
        <SliderFull extraClassContainer="home-slide-container" className="h-full sm:h-[300px] lg:h-full">
          {sacHomeContent?.sliderHomeBanner.map((item) => {
            const { id, imageUrl, link, title } = item;

            return (
              <SwiperSlide key={id} className="w-full h-full flex items-center home-slide">
                <Link href={link} className="w-full ">
                  <img src={imageUrl} alt={title} className="h-full w-full" />
                </Link>
              </SwiperSlide>
            );
          })}
        </SliderFull>
        <Flowbite theme={{ theme: modalCustomTheme }}>
          <Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
              {sacWelcomePopup?.enableType === 'V2' && (
                <AnnouncementComponent wuiWelcomePopup={sacWelcomePopup?.data?.V2?.config?.bodyContent} />
              )}
              {sacWelcomePopup?.enableType === 'V1' && (
                <img
                  src={sacWelcomePopup?.data?.V1?.config?.image}
                  className="w-full h-full object-contain object-center"
                  alt="well come"
                />
              )}
            </Modal.Body>
          </Modal>
        </Flowbite>
        <ProductList sacProductData={sacProductData} sacHomeContent={sacHomeContent} />
      </main>
    </>
  );
};
