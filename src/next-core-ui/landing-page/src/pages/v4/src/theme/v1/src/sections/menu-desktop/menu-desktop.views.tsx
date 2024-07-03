import React from 'react';
import { ILandingPageMenuDesktopV4Props } from './menu-desktop.type';
import { BitCoinSliderV4 } from '../bit-coin-slider';
import Link from 'next/link';
import { LandingPageMenuDesktopItemV1 } from './components';

export const LandingPageMenuDesktopV4: React.FC<ILandingPageMenuDesktopV4Props> = (props) => {
  const { data, className } = props;

  return (
    <nav className={`${className}`}>
      <header className="z-50 relative w-full -mb-px py-2 border-b border-grey-200 [.dark_&]:border-dark-grey-500 bg-white [.dark_&]:bg-dark-grey-700 z-800 lg:py-4 lg:flex-nowrap main-header">
        <div className="container flex flex-wrap items-center justify-between lg:translate-x-0">
          <nav className="flex items-center lg:gap-x-10 px-full -mx-full">
            <Link data-el="main-logo" className="logo" href="/" title="BeInCrypto Việt Nam">
              <svg
                className="bic-svg-icon min-w-32 w-auto"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 2,
                }}
                viewBox="0 0 135 21"
              >
                <path
                  d="M54.295 1.258c0-.416.342-.758.758-.758h2.915c.416 0 .758.342.759.758v2.375c0 .416.343.759.759.759h2.297a.764.764 0 0 1 .758.758v10.702a.76.76 0 0 1-.756.756h-2.299a.763.763 0 0 0-.759.759v2.375a.761.761 0 0 1-.758.758h-2.916a.761.761 0 0 1-.758-.758v-2.918c0-.416.342-.758.758-.758h2.3a.763.763 0 0 0 .759-.758V5.687a.761.761 0 0 0-.757-.757h-2.303a.761.761 0 0 1-.757-.757V1.258Zm-21.147 0A.761.761 0 0 0 32.39.5h-2.919a.764.764 0 0 0-.758.758v2.375a.763.763 0 0 1-.759.759h-2.297a.764.764 0 0 0-.758.758v10.702a.76.76 0 0 0 .756.756h2.299c.416 0 .759.343.759.759v2.374a.764.764 0 0 0 .758.759h2.919a.761.761 0 0 0 .758-.758v-2.918a.761.761 0 0 0-.758-.758h-2.299a.763.763 0 0 1-.759-.758V5.689c0-.416.343-.759.759-.759h2.3a.761.761 0 0 0 .757-.757V1.258Zm7.872 4.489a.638.638 0 0 1 .633-.633h6.404a.635.635 0 0 1 .578.382l1.038 2.398a.633.633 0 0 0 .578.383H52.4c.346 0 .631.285.631.631v7.079a.636.636 0 0 1-.633.633h-2.717a.636.636 0 0 1-.633-.633V9.414a.637.637 0 0 0-.631-.633h-2.783a.637.637 0 0 0-.631.633v6.573a.636.636 0 0 1-.633.633h-2.717a.636.636 0 0 1-.633-.633V5.747ZM34.572 5.747a.638.638 0 0 1 .633-.633h2.718a.637.637 0 0 1 .632.633v10.24a.636.636 0 0 1-.632.633h-2.718a.636.636 0 0 1-.633-.633V5.747Z"
                  fill="#1760fa"
                  style={{ fillRule: 'nonzero' }}
                />
                <path
                  d="M8.02 10.546v.067c.54.187 1.011.527 1.359.98.364.49.552 1.09.531 1.701a3.104 3.104 0 0 1-1.03 2.388 3.56 3.56 0 0 1-2.49.928H0V5.1h6.183c.974 0 1.787.281 2.439.843a2.763 2.763 0 0 1 .98 2.198 2.573 2.573 0 0 1-.434 1.445 2.712 2.712 0 0 1-1.147.96H8.02Zm-2.403-2.92H2.834v2.045h2.783c.29.013.572-.101.773-.31.194-.19.305-.45.309-.722 0-.264-.104-.517-.289-.705a1.04 1.04 0 0 0-.793-.307v-.001Zm-2.783 6.476h3.023a1.09 1.09 0 0 0 .825-.343c.206-.205.324-.483.326-.774a.897.897 0 0 0-.326-.686 1.155 1.155 0 0 0-.825-.31H2.834v2.113Zm17.391 2.508h-8.97V5.1h8.97v2.745h-6.137v1.651h5.27v2.578h-5.27v1.787h6.137v2.749Zm55.266-4.807h2.901a5.425 5.425 0 0 1-1.825 3.623c-1.065.95-2.413 1.425-4.045 1.425-1.784 0-3.226-.572-4.325-1.716-1.099-1.145-1.649-2.564-1.65-4.26 0-1.702.55-3.132 1.649-4.29s2.54-1.741 4.326-1.751c1.592 0 2.92.469 3.983 1.407a5.36 5.36 0 0 1 1.852 3.52h-2.934A2.786 2.786 0 0 0 74.4 8.198a2.934 2.934 0 0 0-1.905-.578c-.95.011-1.7.326-2.25.945a3.355 3.355 0 0 0-.806 2.282 3.379 3.379 0 0 0 .824 2.3c.543.614 1.296.922 2.26.922a3.11 3.11 0 0 0 1.94-.601 2.851 2.851 0 0 0 1.028-1.666v.001Zm6.67 4.789h-2.833v-11.5h5.94c1.236 0 2.22.28 2.952.84.732.56 1.104 1.35 1.115 2.37 0 1.087-.377 1.9-1.132 2.438v.068c.984.24 1.476.978 1.476 2.213v3.571h-2.833V13.52c0-.424-.217-.635-.651-.634H82.16v3.707l.001-.001Zm0-8.753v2.54h2.867c.388.02.77-.102 1.074-.344.28-.238.433-.594.413-.961a1.086 1.086 0 0 0-.413-.909 1.656 1.656 0 0 0-1.063-.326h-2.878Zm15.484-2.746h3.142l-4.498 7.311v4.19h-2.832V12.42l-4.514-7.328h3.21l2.744 4.633 2.748-4.633v.001Zm9.726 0a3.924 3.924 0 0 1 2.889 1.165c.779.766 1.168 1.73 1.167 2.89 0 1.19-.395 2.17-1.184 2.937a3.936 3.936 0 0 1-2.867 1.148h-3.113v3.365h-2.831V5.093h5.939Zm-3.108 5.456h2.851c.373.01.735-.125 1.011-.377.279-.26.43-.63.412-1.011a1.176 1.176 0 0 0-.434-.944 1.42 1.42 0 0 0-.995-.377h-2.845v2.71-.001Zm7.45-5.456h10.284v2.744h-3.726v8.754h-2.832V7.839h-3.726V5.093Zm20.627 10.041c-1.121 1.143-2.591 1.715-4.412 1.717-1.82.002-3.29-.57-4.409-1.716-1.122-1.156-1.683-2.576-1.683-4.26 0-1.683.561-3.113 1.683-4.29 1.12-1.167 2.59-1.751 4.409-1.751 1.82 0 3.29.584 4.412 1.75 1.121 1.168 1.682 2.598 1.682 4.292 0 1.693-.561 3.112-1.682 4.258Zm-4.412-1.064c.974 0 1.752-.315 2.335-.945a3.236 3.236 0 0 0 .875-2.283 3.19 3.19 0 0 0-.875-2.282c-.572-.631-1.35-.946-2.335-.945-.984 0-1.768.316-2.352.945a3.231 3.231 0 0 0-.858 2.282 3.274 3.274 0 0 0 .858 2.283c.584.63 1.368.945 2.352.945Z"
                  fill="#0e1620"
                  style={{ fillRule: 'nonzero' }}
                />
              </svg>
            </Link>
            <div
              className="fixed top-0 left-0 z-50 hidden w-full h-screen overflow-auto bg-white [.dark_&]:bg-dark-grey-700 lg:h-auto lg:block lg:bg-transparent lg:static lg:overflow-visible lg:rounded-0"
              data-el="bic-mobile-nav"
            >
              <div className="flex items-center justify-between px-5 py-6 border-b lg:hidden border-b-grey-200 [.dark_&]:border-b-dark-grey-500">
                <Link data-el="main-logo" className="logo" href="/" title="BeInCrypto Việt Nam">
                  <svg
                    className="bic-svg-icon max-w-28 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    style={{
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      strokeLinejoin: 'round',
                      strokeMiterlimit: 2,
                    }}
                    viewBox="0 0 135 21"
                  >
                    <path
                      d="M54.295 1.258c0-.416.342-.758.758-.758h2.915c.416 0 .758.342.759.758v2.375c0 .416.343.759.759.759h2.297a.764.764 0 0 1 .758.758v10.702a.76.76 0 0 1-.756.756h-2.299a.763.763 0 0 0-.759.759v2.375a.761.761 0 0 1-.758.758h-2.916a.761.761 0 0 1-.758-.758v-2.918c0-.416.342-.758.758-.758h2.3a.763.763 0 0 0 .759-.758V5.687a.761.761 0 0 0-.757-.757h-2.303a.761.761 0 0 1-.757-.757V1.258Zm-21.147 0A.761.761 0 0 0 32.39.5h-2.919a.764.764 0 0 0-.758.758v2.375a.763.763 0 0 1-.759.759h-2.297a.764.764 0 0 0-.758.758v10.702a.76.76 0 0 0 .756.756h2.299c.416 0 .759.343.759.759v2.374a.764.764 0 0 0 .758.759h2.919a.761.761 0 0 0 .758-.758v-2.918a.761.761 0 0 0-.758-.758h-2.299a.763.763 0 0 1-.759-.758V5.689c0-.416.343-.759.759-.759h2.3a.761.761 0 0 0 .757-.757V1.258Zm7.872 4.489a.638.638 0 0 1 .633-.633h6.404a.635.635 0 0 1 .578.382l1.038 2.398a.633.633 0 0 0 .578.383H52.4c.346 0 .631.285.631.631v7.079a.636.636 0 0 1-.633.633h-2.717a.636.636 0 0 1-.633-.633V9.414a.637.637 0 0 0-.631-.633h-2.783a.637.637 0 0 0-.631.633v6.573a.636.636 0 0 1-.633.633h-2.717a.636.636 0 0 1-.633-.633V5.747ZM34.572 5.747a.638.638 0 0 1 .633-.633h2.718a.637.637 0 0 1 .632.633v10.24a.636.636 0 0 1-.632.633h-2.718a.636.636 0 0 1-.633-.633V5.747Z"
                      fill="#1760fa"
                      style={{ fillRule: 'nonzero' }}
                    />
                    <path
                      d="M8.02 10.546v.067c.54.187 1.011.527 1.359.98.364.49.552 1.09.531 1.701a3.104 3.104 0 0 1-1.03 2.388 3.56 3.56 0 0 1-2.49.928H0V5.1h6.183c.974 0 1.787.281 2.439.843a2.763 2.763 0 0 1 .98 2.198 2.573 2.573 0 0 1-.434 1.445 2.712 2.712 0 0 1-1.147.96H8.02Zm-2.403-2.92H2.834v2.045h2.783c.29.013.572-.101.773-.31.194-.19.305-.45.309-.722 0-.264-.104-.517-.289-.705a1.04 1.04 0 0 0-.793-.307v-.001Zm-2.783 6.476h3.023a1.09 1.09 0 0 0 .825-.343c.206-.205.324-.483.326-.774a.897.897 0 0 0-.326-.686 1.155 1.155 0 0 0-.825-.31H2.834v2.113Zm17.391 2.508h-8.97V5.1h8.97v2.745h-6.137v1.651h5.27v2.578h-5.27v1.787h6.137v2.749Zm55.266-4.807h2.901a5.425 5.425 0 0 1-1.825 3.623c-1.065.95-2.413 1.425-4.045 1.425-1.784 0-3.226-.572-4.325-1.716-1.099-1.145-1.649-2.564-1.65-4.26 0-1.702.55-3.132 1.649-4.29s2.54-1.741 4.326-1.751c1.592 0 2.92.469 3.983 1.407a5.36 5.36 0 0 1 1.852 3.52h-2.934A2.786 2.786 0 0 0 74.4 8.198a2.934 2.934 0 0 0-1.905-.578c-.95.011-1.7.326-2.25.945a3.355 3.355 0 0 0-.806 2.282 3.379 3.379 0 0 0 .824 2.3c.543.614 1.296.922 2.26.922a3.11 3.11 0 0 0 1.94-.601 2.851 2.851 0 0 0 1.028-1.666v.001Zm6.67 4.789h-2.833v-11.5h5.94c1.236 0 2.22.28 2.952.84.732.56 1.104 1.35 1.115 2.37 0 1.087-.377 1.9-1.132 2.438v.068c.984.24 1.476.978 1.476 2.213v3.571h-2.833V13.52c0-.424-.217-.635-.651-.634H82.16v3.707l.001-.001Zm0-8.753v2.54h2.867c.388.02.77-.102 1.074-.344.28-.238.433-.594.413-.961a1.086 1.086 0 0 0-.413-.909 1.656 1.656 0 0 0-1.063-.326h-2.878Zm15.484-2.746h3.142l-4.498 7.311v4.19h-2.832V12.42l-4.514-7.328h3.21l2.744 4.633 2.748-4.633v.001Zm9.726 0a3.924 3.924 0 0 1 2.889 1.165c.779.766 1.168 1.73 1.167 2.89 0 1.19-.395 2.17-1.184 2.937a3.936 3.936 0 0 1-2.867 1.148h-3.113v3.365h-2.831V5.093h5.939Zm-3.108 5.456h2.851c.373.01.735-.125 1.011-.377.279-.26.43-.63.412-1.011a1.176 1.176 0 0 0-.434-.944 1.42 1.42 0 0 0-.995-.377h-2.845v2.71-.001Zm7.45-5.456h10.284v2.744h-3.726v8.754h-2.832V7.839h-3.726V5.093Zm20.627 10.041c-1.121 1.143-2.591 1.715-4.412 1.717-1.82.002-3.29-.57-4.409-1.716-1.122-1.156-1.683-2.576-1.683-4.26 0-1.683.561-3.113 1.683-4.29 1.12-1.167 2.59-1.751 4.409-1.751 1.82 0 3.29.584 4.412 1.75 1.121 1.168 1.682 2.598 1.682 4.292 0 1.693-.561 3.112-1.682 4.258Zm-4.412-1.064c.974 0 1.752-.315 2.335-.945a3.236 3.236 0 0 0 .875-2.283 3.19 3.19 0 0 0-.875-2.282c-.572-.631-1.35-.946-2.335-.945-.984 0-1.768.316-2.352.945a3.231 3.231 0 0 0-.858 2.282 3.274 3.274 0 0 0 .858 2.283c.584.63 1.368.945 2.352.945Z"
                      fill="#0e1620"
                      style={{ fillRule: 'nonzero' }}
                    />
                  </svg>
                </Link>
                <button
                  data-el="bic-c-hamburger-close"
                  data-target_menu="[data-el='bic-mobile-nav']"
                  type="button"
                  aria-label="Hamburger close"
                >
                  <svg
                    className="bic-svg-icon w-6 h-6 z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M15.8 5.14a.66.66 0 0 0 0-.95.68.68 0 0 0-.95 0L10 9.06 5.15 4.2a.68.68 0 0 0-.95 0 .66.66 0 0 0 0 .94L9.04 10 4.2 14.86a.66.66 0 0 0 0 .95c.27.26.7.25.96 0L10 10.94l4.85 4.85c.26.26.69.27.95 0a.66.66 0 0 0 0-.94L10.96 10l4.86-4.86Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="bic-main-nav-wrap">
                <ul
                  id="menu-fast-links"
                  className="bic-main-nav items-start flex-col lg:flex-row flex lg:items-center gap-x-6 py-1.5 border border-transparent"
                >
                  {data?.object?.desktop?.array?.map((item) => {
                    const { id, label, link } = item;
                    return <LandingPageMenuDesktopItemV1 key={id} label={label} link={link} />;
                  })}
                </ul>
              </div>
            </div>
          </nav>
          {/* lang */}
          <div className="flex items-center header-meta gap-x-5 lg:gap-x-3 flex-grow lg:justify-end">
            <div className="flex gap-x-2 flex-grow justify-end">
              <button
                className="block"
                type="button"
                data-el="bic-search-header-toggle"
                data-form_selector="[data-el='bic-search-header-form']"
                aria-label="Search"
              >
                <svg
                  className="bic-svg-icon w-6 h-6"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 17.0724L13.6311 12.7036C14.6972 11.4019 15.2208 9.74121 15.0936 8.06177C14.9665 6.38607 14.2034 4.81885 12.9541 3.69299C11.7085 2.56339 10.0739 1.95744 8.39071 2.00233C6.70749 2.04347 5.10656 2.7317 3.91709 3.92115C2.72762 5.10686 2.04311 6.70774 2.00197 8.39092C1.96082 10.0741 2.56678 11.7049 3.69266 12.9542C4.82229 14.1998 6.38581 14.9665 8.06154 15.0937C9.73728 15.2209 11.4018 14.6972 12.7035 13.6312L17.0724 18L18 17.0724ZM3.3261 8.56298C3.3261 7.17529 3.87969 5.84371 4.85969 4.85999C5.84344 3.87627 7.17505 3.32643 8.56277 3.32643C9.95049 3.32643 11.2821 3.88001 12.2658 4.85999C13.2496 5.84371 13.7994 7.17529 13.7994 8.56298C13.7994 9.95067 13.2458 11.2822 12.2658 12.266C11.2821 13.2497 9.95049 13.7995 8.56277 13.7995C7.17505 13.7995 5.84344 13.246 4.86343 12.2622C3.88343 11.2785 3.32984 9.95441 3.3261 8.56298Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <form
                className="hidden overflow-hidden lg:flex lg:gap-x-2 lg:w-0 lg:h-0"
                data-el="bic-search-header-form"
                data-analytics='{"en": "search", "ec": "web:desktop:search", "el": "main-header-search", "ev": ""}'
                role="search"
                method="get"
                target="_top"
                action="/"
              >
                <div data-el="bic-c-search" className="bic-c-search md:ml-2.5 lg:flex-grow">
                  <div className="py-2 px-3.5 border text-grey-600  flex items-center bg-grey-100 border-transparent  focus-within:bg-white focus-within:border-blue-600  rounded-md gap-x-2.5 acfo:border-blue-600 ">
                    <label
                      htmlFor="bic-c-search-75fbdca1-c0d1-448c-a939-8963319484fd"
                      className="mb-0"
                      aria-label="Tìm kiếm"
                    >
                      <svg
                        className="bic-svg-icon w-5 h-5"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 17.0724L13.6311 12.7036C14.6972 11.4019 15.2208 9.74121 15.0936 8.06177C14.9665 6.38607 14.2034 4.81885 12.9541 3.69299C11.7085 2.56339 10.0739 1.95744 8.39071 2.00233C6.70749 2.04347 5.10656 2.7317 3.91709 3.92115C2.72762 5.10686 2.04311 6.70774 2.00197 8.39092C1.96082 10.0741 2.56678 11.7049 3.69266 12.9542C4.82229 14.1998 6.38581 14.9665 8.06154 15.0937C9.73728 15.2209 11.4018 14.6972 12.7035 13.6312L17.0724 18L18 17.0724ZM3.3261 8.56298C3.3261 7.17529 3.87969 5.84371 4.85969 4.85999C5.84344 3.87627 7.17505 3.32643 8.56277 3.32643C9.95049 3.32643 11.2821 3.88001 12.2658 4.85999C13.2496 5.84371 13.7994 7.17529 13.7994 8.56298C13.7994 9.95067 13.2458 11.2822 12.2658 12.266C11.2821 13.2497 9.95049 13.7995 8.56277 13.7995C7.17505 13.7995 5.84344 13.246 4.86343 12.2622C3.88343 11.2785 3.32984 9.95441 3.3261 8.56298Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <input
                      id="bic-c-search-75fbdca1-c0d1-448c-a939-8963319484fd"
                      name="s"
                      type="search"
                      placeholder=""
                      className="w-full p-0 bg-transparent border-none appearance-none p4 p4--ns placeholder:text-grey-600  peer focus:outline-none focus:border-none focus:ring-0 text-dark-grey-700 "
                    />
                    <button
                      className="hidden w-5 h-5 peer peer-focus:block hover:block acfo:block"
                      type="button"
                      aria-label="Clear"
                    >
                      <svg
                        className="bic-svg-icon w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M15.8 5.14a.66.66 0 0 0 0-.95.68.68 0 0 0-.95 0L10 9.06 5.15 4.2a.68.68 0 0 0-.95 0 .66.66 0 0 0 0 .94L9.04 10 4.2 14.86a.66.66 0 0 0 0 .95c.27.26.7.25.96 0L10 10.94l4.85 4.85c.26.26.69.27.95 0a.66.66 0 0 0 0-.94L10.96 10l4.86-4.86Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="submit"
                      className="w-5 h-5 font-sans font-bold leading-5 text-white rounded min-w-5  bg-grey-400 peer-focus:hidden text-3 "
                    >
                      /
                    </button>
                  </div>
                </div>
                <button
                  data-el="bic-search-header-form-close"
                  className="absolute block lg:static top-5 right-5"
                  type="button"
                  aria-label="Close search"
                >
                  <svg
                    className="bic-svg-icon w-6 h-6 z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M15.8 5.14a.66.66 0 0 0 0-.95.68.68 0 0 0-.95 0L10 9.06 5.15 4.2a.68.68 0 0 0-.95 0 .66.66 0 0 0 0 .94L9.04 10 4.2 14.86a.66.66 0 0 0 0 .95c.27.26.7.25.96 0L10 10.94l4.85 4.85c.26.26.69.27.95 0a.66.66 0 0 0 0-.94L10.96 10l4.86-4.86Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div
              className="relative bic-c-language-selector hidden lg:block"
              data-el="bic-c-language-selector"
              data-dropdown-placement="bottom-center"
            >
              <button
                className="uppercase s3 lg:p3 lg:p3--medium cursor-pointer "
                data-el="bic-c-language-selector-cta"
                type="button"
              >
                Tiếng Việt
              </button>
              <div
                id="bic-c-language-selector-d1c07a12-20c4-455f-8024-8ad3ed6c2438"
                data-el="bic-c-language-selector-dropdown"
                className="z-30 hidden px-3 py-4 absolute divide-y rounded-lg shadow-menu divide-grey-100 w-44 [.dark_&]:divide-grey-700 bg-white"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: 0,
                  transform: 'translate3d(1260px, 31px, 0px)',
                }}
                data-popper-placement="bottom-center"
              >
                <ul className="overflow-y-auto max-h-64 lg:max-h-none p4 p4--ns text-grey-700">
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"beincrypto.com","iso":"en_US","native_name":"English"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="en"
                      href="/"
                      hrefLang="en"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      English
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BitCoinSliderV4 />
    </nav>
  );
};
