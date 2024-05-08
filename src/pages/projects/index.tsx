import React, { Fragment, useEffect, useRef } from "react";
import Head from "next/head";
import { DrawerNav } from "@/components/drawer-nav/drawer-nav.component";
import { NavBar } from "@/components/nav-bar/nav-bar.component";
import { UnderConstruction } from "@/views/under-construction/under-construction.view";
import { Footer } from "@/views";
import { BreakLine } from "@/components/break-line/break-line.component";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs.component";

export default function Projects() {
  const initialWidthRef = useRef("100%");
  const initialPaddingRightRef = useRef("5%");

  return (
    <Fragment>
      <Head>
        <meta property="og:title" content="DQH Architectures - Trang dự án" />

        <meta property="og:url" content="https://dqharchitects.vn/projects" />
        <meta property="og:image" />
        <title>DQH Architectures - Dự án</title>
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

        <h1 className="font-bold md:text-6xl 2xl:text-8xl">Projects</h1>

        <UnderConstruction />
      </section>

      <BreakLine />

      <Footer />
    </Fragment>
  );
}
