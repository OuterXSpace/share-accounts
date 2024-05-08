import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Fragment, useRef } from "react";
import Head from "next/head";
import { DrawerNav } from "@/components/drawer-nav/drawer-nav.component";
import { NavBar } from "@/components/nav-bar/nav-bar.component";
import { Footer } from "@/views";
import { BreakLine } from "@/components/break-line/break-line.component";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs.component";
import { SelectedProject } from "@/views/selected-project/selected-project.view";
import { ContactForm } from "@/views/contact-form/contact-form.view";
import ButtonExploreAll from "@/components/button-explore-all/button-explore-all.component";

const content = [
  {
    title: "PROGRESS",
    description:
      "With a thorough understanding of time and attention to detail, we clearly outline a comprehensive construction plan for our clients. This allows for open discussion to ensure a smooth construction process that achieves the best possible quality and timely results.",
  },
  {
    title: "PASSION",
    description:
      "We are passionate about our work, honest in our offerings, courteous in our commitment to schedules and quality, and dedicated to protecting our clients' best interests.",
  },
  {
    title: "CREATIVITY",
    description:
      "Placing people at the center of our approach, we create projects that reflect the lifestyle and personal style of our clients. This is achieved through creative and trend-setting design tailored to their individual living preferences.",
  },
  {
    title: "QUALITY",
    description:
      "We deliver sincere, high-quality utility products. Our materials adhere to standards, and our pricing and designs match specifications. Honesty and quality drive our work, ensuring clients receive utility-focused products that meet promised standards and prices.",
  },
];

interface IContentSectionProps {
  title: string;
  description: string;
}

const founders = Array.from({ length: 6 }).fill(null);

const ContentSection: React.FC<IContentSectionProps> = ({
  title,
  description,
}) => (
  <div className="mt-12 flex flex-wrap flex-col gap-2 w-[calc(48%-8px)]">
    <h3 className="text-[26px] font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default function Introduction() {
  const initialWidthRef = useRef("100%");
  const initialPaddingRightRef = useRef("5%");

  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content="DQH Architectures - Trang giới thiệu"
        />

        <meta
          property="og:url"
          content="https://dqharchitects.vn/introduction"
        />
        <meta property="og:image" />
        <title>DQH Architectures - Giới thiệu</title>
      </Head>
      <section className="w-full flex flex-wrap">
        <DrawerNav />

        <NavBar
          initialWidth={initialWidthRef}
          initialPaddingRight={initialPaddingRightRef}
          isHome={false}
        />
      </section>

      <section className="relative mt-20 md:mt-36 px-4 md:px-[8%] flex flex-wrap flex-col gap-6 md:gap-12">
        <Breadcrumbs />

        <h1 className="font-bold md:text-6xl 2xl:text-8xl">Introduction</h1>

        <div className="w-full mt-20 flex flex-wrap items-start">
          <div className="h-full my-auto w-6/12 flex flex-wrap justify-center items-center">
            <p className="pr-32 text-[42px]">
              DQH ARCHITECTS is a full-service architectural, interior, and
              landscape design firm. With a team of talented and experienced
              young engineers, we always bring a unique, innovative,
              contemporary, and detail-oriented approach to each project.
            </p>
          </div>
          <div className="w-6/12 flex flex-col gap-6 flex-wrap justify-center items-center">
            <div className="w-full flex flex-wrap">
              <p className="text-[26px]">
                Through our extensive experience and deep connection with
                clients, we&apos;ve developed an unparalleled ability to grasp
                their dreams and aspirations for their living spaces. Our team
                dedicates themselves to translating these visions into
                realities, crafting homes that exceed expectations. We approach
                each project with utmost care, ensuring every detail aligns with
                the homeowner&apos;s lifestyle and preferences.
              </p>
            </div>
            <div className="w-full flex flex-wrap justify-between">
              {content.map((item, index) => (
                <ContentSection
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="my-8 w-full flex flex-wrap justify-between">
          {founders.map((_, index) => (
            <div
              key={index}
              className="flex flex-wrap flex-col gap-6 w-[30%] mt-24"
            >
              <div className="w-full pt-[100%] relative">
                <img
                  src="/assets/avatar_founder.jpg"
                  alt="Founder"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-[26px]">Quang, Vo Ngoc - Founder</p>
            </div>
          ))}
        </div>
      </section>

      <SelectedProject />

      <ButtonExploreAll />

      <BreakLine />

      <ContactForm />

      <BreakLine />

      <Footer />
    </Fragment>
  );
}
