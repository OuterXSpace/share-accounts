import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fragment, useEffect, useRef } from "react";
import Head from "next/head";
import { DrawerNav } from "@/components/drawer-nav/drawer-nav.component";
import { BriefIntro } from "@/components/brief-intro/brief-intro.component";
import { NavBar } from "@/components/nav-bar/nav-bar.component";
import { CarouselHeader } from "@/components/carousel-header/carousel-header.component";
import { ServiceHome } from "@/views/service-home/service-home.view";
import { SelectedProject } from "@/views/selected-project/selected-project.view";
import { Testimonial } from "@/views/testimonial/testimonial.view";
import { BreakLine } from "@/components/break-line/break-line.component";
import { ContactForm } from "@/views/contact-form/contact-form.view";
import { Footer } from "@/views";
import { useWindowDimensions } from "@/hooks/use-window-dimention";
import { VastProject } from "@/views/vast-project/vast-project.view";
import ButtonExploreAll from "@/components/button-explore-all/button-explore-all.component";
import { OurClients } from "@/views/our-clients/our-clients.view";

export default function Home() {
  const { width: widthScreen } = useWindowDimensions();
  const initialWidthRef = useRef("100%"); // Default value for initialWidth
  const initialPaddingRightRef = useRef("5%"); // Default value for initialPaddingRight

  useEffect(() => {
    // Update initialWidth and initialPaddingRight based on actual scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      initialWidthRef.current =
        widthScreen > 768 && scrollY <= 792 ? "41.6666666667%" : "100%";
      initialPaddingRightRef.current =
        scrollY > 792 && widthScreen > 768 ? "8%" : "5%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [widthScreen]);

  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content="DQH Architectures - Ngôi nhà ước mơ"
        />

        <meta property="og:url" content="https://dqharchitects.vn/" />
        <meta property="og:image" />
        <title>DQH Architectures</title>
      </Head>
      <section className="w-full flex flex-wrap">
        <DrawerNav />

        <div className="w-full md:w-5/12">
          <NavBar
            initialWidth={initialWidthRef}
            initialPaddingRight={initialPaddingRightRef}
          />
          {/* Pass props to NavBar */}
          <BriefIntro />
        </div>

        {/* 

        <FormattedMessage id="page.home.title"
          values={{ b: (info) => <b>{info}</b> }}
        />

        <br />

        <FormattedMessage id="page.home.description" /> */}

        <div className="w-full md:w-7/12 bg-white h-auto md:h-full">
          <CarouselHeader />
        </div>
      </section>

      <ServiceHome />

      <OurClients />

      <SelectedProject />

      <VastProject />

      <ButtonExploreAll />

      <Testimonial />

      <BreakLine />

      <ContactForm />

      <BreakLine />

      <Footer />
    </Fragment>
  );
}
