import React, { useRef } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { DrawerNavV1, NavBarV1, BreakLineV1, BreadcrumbsV1 } from '../../components';
import { Footer } from '../../views';
import { ContactForm } from '../../views/contact-form/contact-form.view';

interface IDynamicPageProps {
  systemConfig: Record<string, any>;
}

const DynamicPage = observer((props: IDynamicPageProps) => {
  const { systemConfig } = props;

  const initialWidthRef = useRef('100%');
  const initialPaddingRightRef = useRef('5%');

  return (
    <>
      <Head>
        <meta property="og:title" content="DQH Architectures - Trang Liên hệ" />

        <meta property="og:url" content="https://dqharchitects.vn/contact" />
        <meta property="og:image" />
        <title>DQH Architectures - Liên hệ</title>
      </Head>
      <section className="w-full flex flex-wrap">
        <DrawerNavV1 navItems={systemConfig?.rootLayout?.menu} />

        <NavBarV1 initialWidth={initialWidthRef} initialPaddingRight={initialPaddingRightRef} isHome={false} />
      </section>

      <section className="mt-20 md:mt-36 px-4 md:px-[8%] flex flex-wrap flex-col gap-6 md:gap-12">
        <BreadcrumbsV1 />

        <h1 className="font-bold md:text-6xl 2xl:text-8xl">Contact</h1>
      </section>

      <ContactForm inContactPage />

      <BreakLineV1 />

      <Footer />
    </>
  );
});

export default DynamicPage;
