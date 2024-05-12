import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { DrawerNavV1, NavBarV1, BriefIntroV1, CarouselHeaderV1, BreakLineV1, ButtonExploreAllV1 } from '../components';
import { useWindowDimensions } from '../hooks';
import { ContactForm } from '../views/contact-form/contact-form.view';
import { OurClients } from '../views/our-clients/our-clients.view';
import { SelectedProject } from '../views/selected-project/selected-project.view';
import { ServiceHome } from '../views/service-home/service-home.view';
import { Testimonial } from '../views/testimonial/testimonial.view';
import { VastProject } from '../views/vast-project/vast-project.view';

const Home = observer((props: { systemConfig: Record<string, any> }) => {
  const { systemConfig } = props;

  const { width: widthScreen } = useWindowDimensions();

  const initialWidthRef = useRef('100%');

  const initialPaddingRightRef = useRef('5%');

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      initialWidthRef.current = widthScreen > 768 && scrollY <= 792 ? '41.6666666667%' : '100%';
      initialPaddingRightRef.current = scrollY > 792 && widthScreen > 768 ? '8%' : '5%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [widthScreen]);

  return (
    <>
      <Head>
        <meta property="og:title" content="DQH Architectures - Ngôi nhà ước mơ" />
        <meta property="og:url" content="https://dqharchitects.vn/" />
        <meta property="og:image" />
        <title>DQH Architectures</title>
      </Head>
      <section className="w-full flex flex-wrap">
        <DrawerNavV1 navItems={systemConfig?.rootLayout?.menu} />
        <div className="w-full md:w-5/12">
          <NavBarV1 initialWidth={initialWidthRef} initialPaddingRight={initialPaddingRightRef} />
          <BriefIntroV1 />
        </div>
        <div className="w-full md:w-7/12 bg-white h-auto md:h-full">
          <CarouselHeaderV1 />
        </div>
      </section>
      <ServiceHome />
      <OurClients />
      <SelectedProject />
      <VastProject />
      <ButtonExploreAllV1 />
      <Testimonial />
      <BreakLineV1 />
      <ContactForm />
      <BreakLineV1 />
    </>
  );
});

export default Home;
