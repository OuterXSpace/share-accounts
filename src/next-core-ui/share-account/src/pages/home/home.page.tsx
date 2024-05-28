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
  const { wuiWelcomePopup, productData, homeContent } = props;

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
        <SliderFull extraClassContainer="home-slide-container">
          {homeContent?.sliderHomeBanner.map((item) => {
            const { id, imageUrl, linkUrl } = item;

            return (
              <SwiperSlide key={id} className="w-full h-full  flex items-center home-slide">
                <Link href={linkUrl} className="w-full h-full">
                  <img src={imageUrl} alt={linkUrl} className="h-full w-full" />
                </Link>
              </SwiperSlide>
            );
          })}
        </SliderFull>
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
    </>
  );
};
