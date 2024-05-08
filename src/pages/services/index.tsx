import React, { Fragment, useEffect, useRef } from "react";
import Head from "next/head";
import { DrawerNav } from "@/components/drawer-nav/drawer-nav.component";
import { NavBar } from "@/components/nav-bar/nav-bar.component";
import { UnderConstruction } from "@/views/under-construction/under-construction.view";
import { Footer } from "@/views";
import { BreakLine } from "@/components/break-line/break-line.component";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs.component";
import ButtonExploreAll from "@/components/button-explore-all/button-explore-all.component";
import { ContactForm } from "@/views/contact-form/contact-form.view";

export default function Services() {
  const initialWidthRef = useRef("100%");
  const initialPaddingRightRef = useRef("5%");

  return (
    <Fragment>
      <Head>
        <meta property="og:title" content="DQH Architectures - Trang dịch vụ" />

        <meta property="og:url" content="https://dqharchitects.vn/services" />
        <meta property="og:image" />
        <title>DQH Architectures - Dịch vụ</title>
      </Head>
      <section className="w-full flex flex-wrap">
        <DrawerNav />

        <NavBar
          initialWidth={initialWidthRef}
          initialPaddingRight={initialPaddingRightRef}
          isHome={false}
        />
      </section>

      <section className="mt-20 md:mt-36 px-4 md:px-[8%] flex flex-wrap flex-col gap-6 md:gap-12">
        <Breadcrumbs />

        <h1 className="font-bold md:text-6xl 2xl:text-8xl">Services</h1>
      </section>

      <section className="mt-20 md:mt-36 px-4 md:px-[8%] flex flex-wrap flex-col gap-6 md:gap-12">
        <div className="w-full flex flex-wrap items-end">
          <div className="w-6/12">
            <div className="w-7/12 max-h-[675px] overflow-hidden flex justify-center items-center">
              <img src="/assets/services/service_design.jpg" alt="Design" />
            </div>
          </div>
          <div className="w-6/12 flex flex-wrap flex-col gap-4 items-start">
            <h3 className="font-semibold text-[42px]">Design Consultancy</h3>
            <p className="text-[26px]">
              Design consulting is a widely popular service, especially in major
              cities as society develops and the demand for construction design
              increases. Experts and architects must listen to the client&apos;s
              needs and use their knowledge to guide design solutions. The
              consulting phase ensures sustainability, aesthetics,
              functionality, and client satisfaction. It is a crucial step
              before construction, requiring expert input to reduce risks and
              waste. DQH has been developing its consulting services, providing
              unique and practical designs that balance client interests and
              human needs. With over 11 years of experience, DQH delivers
              high-quality results and timely products, ensuring client
              satisfaction.
            </p>

            <ButtonExploreAll className="w-8/12 mt-12" />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-64 px-4 md:px-[8%] flex flex-wrap flex-col gap-6 md:gap-12">
        <div className="w-full flex flex-wrap flex-col items-start gap-8">
          <div className="w-4/12">
            <h3 className="font-semibold text-[42px]">
              Crafting comprehensive interior solutions for flats
            </h3>
          </div>
          <div className="w-full max-h-[850px] overflow-hidden flex justify-center items-center">
            <img src="/assets/services/service_interior.jpg" alt="Interior" />
          </div>
          <div className="w-5/12 flex flex-wrap flex-col gap-4 items-start">
            <p className="text-[26px]">
              Turnkey interior design and construction for apartments: Customers
              get expert advice to maximize space, save time by outsourcing all
              work, use premium materials, control costs, monitor progress, and
              enjoy long-term warranty - resulting in a perfect, cohesive home.
              The process includes consultation, design, manufacturing, and
              timely handover.
            </p>

            <ButtonExploreAll className="w-8/12 mt-12" />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-64 w-8/12 mx-auto flex flex-wrap flex-col gap-6 md:gap-12">
        <div className="w-full flex flex-wrap flex-col items-end gap-8">
          <div className="w-full max-h-[800px] overflow-hidden flex justify-center items-center">
            <img
              src="/assets/services/service_build.jpg"
              alt="Build Interior"
            />
          </div>
          <div className="w-9/12 flex flex-wrap flex-col gap-4 items-start">
            <h3 className="font-semibold text-[42px]">
              Design and build townhouse
            </h3>
            <p className="text-[26px]">
              Townhouses are often built on limited land or with similar
              layouts. So to make your living space unique, you need to choose a
              reputable and professional townhouse design and construction
              company. Check out DQH ARCHITECTS townhouse design and
              construction solutions right away to find more new ideas that can
              make your home space stand out.
            </p>

            <ButtonExploreAll className="w-5/12 mt-12" />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-64 md:mb-40 px-4 md:px-[8%] flex flex-wrap flex-col gap-6 md:gap-12">
        <div className="w-full flex flex-wrap items-start">
          <div className="w-8/12">
            <div className="w-10/12 max-h-[1050px] overflow-hidden flex justify-center items-center">
              <img
                src="/assets/services/service_construction.jpg"
                alt="Construction"
              />
            </div>
          </div>
          <div className="w-4/12 flex flex-wrap flex-col gap-4 items-start">
            <h3 className="font-semibold text-[42px]">
              Office Interior Design and Construction
            </h3>
            <p className="text-[26px]">
              Design consulting is a widely popular service, especially in major
              cities as society develops and the demand for construction design
              increases. Experts and architects must listen to the client&apos;s
              needs and use their knowledge to guide design solutions. The
              consulting phase ensures sustainability, aesthetics,
              functionality, and client satisfaction. It is a crucial step
              before construction, requiring expert input to reduce risks and
              waste. DQH has been developing its consulting services, providing
              unique and practical designs that balance client interests and
              human needs. With over 11 years of experience, DQH delivers
              high-quality results and timely products, ensuring client
              satisfaction.
            </p>

            <ButtonExploreAll className="w-8/12 mt-12" />
          </div>
        </div>
      </section>

      <BreakLine />

      <ContactForm />

      <BreakLine />

      <Footer />
    </Fragment>
  );
}
