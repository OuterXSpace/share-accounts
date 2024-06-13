import React from 'react';
import Head from 'next/head';
import { LandingPageV2Props } from './landing-page.type';
import { Component } from './section/common.page';
import { CommonJxsStyle } from './section/common-jsx.style';
import { GlobalPageStyles } from './section';

export const LandingPageTest: React.FC<LandingPageV2Props> = () => {
  const imageUrl =
    'https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662e2ed743a4ccf1e011041e_Preview%20(1).png';
  const imageWidth = '1200';
  const imageHeight = '630';
  return (
    <>
      <Head>
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
      </Head>
      <GlobalPageStyles />
      <CommonJxsStyle />
      <Component />
      {/* <CommonPageStyles /> */}

      <style global jsx>{`
        .splide__track {
          overflow: visible;
        }
        .splide__arrows,
        .splide__pagination {
          display: none;
        }
        .splide__slide {
          margin: unset !important;
          width: unset !important;
        }
      `}</style>
    </>
  );
};
