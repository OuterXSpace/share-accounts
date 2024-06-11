import { LandingPageV4ThemeV3Props } from './landing-page.type';
import {
  NewsV4,
  NewsAndTopReadV4,
  SingleNewsCardV4,
  ContactV4,
  DetailPageV4ThemeV3,
  StaticSectionV4,
  ExchangesSectionV4,
  PriceSectionV4,
  ConvertPriceSectionV4,
  NewLetterSectionV4,
} from '../../sections';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useDeviceSizes } from '../../../../../../../../../../../hooks';
import Link from 'next/link';

export const LandingPageV4ThemeV3: React.FC<LandingPageV4ThemeV3Props> = (props) => {
  const { systemConfig } = props;

  const router = useRouter();

  const isDevice = useDeviceSizes();

  const pageDataConfigWithDynamicRouter = useMemo(() => {
    return systemConfig?.ldpSystemConfigPage?.systemConfig?.[router?.asPath];
  }, [router?.asPath, systemConfig?.ldpSystemConfigPage?.systemConfig]);

  const pageDetailDataConfigWithDynamicRouter = useMemo(() => {
    let str = '/';

    if (!router?.query?.slug) return;

    if (router?.query?.slug?.length === 1 && !!pageDataConfigWithDynamicRouter) return;

    if (router?.query?.slug?.length > 1) {
      str = router?.query?.slug[0];
    }

    return systemConfig?.ldpSystemConfigPage?.systemConfig?.[str];
  }, [pageDataConfigWithDynamicRouter, router?.query?.slug, systemConfig?.ldpSystemConfigPage?.systemConfig]);

  const renderPageDetailWithDynamicRouter = useMemo(() => {
    if (!pageDetailDataConfigWithDynamicRouter) return;

    return pageDetailDataConfigWithDynamicRouter?.slug?.array?.map((slugItem) => {
      const dataSlug = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[slugItem?.section]?.[slugItem?.data];

      return <DetailPageV4ThemeV3 key={slugItem?.id} data={dataSlug} className={slugItem?.className} />;
    });
  }, [pageDetailDataConfigWithDynamicRouter, systemConfig?.ldpSystemConfigPage?.dataConfig?.V1]);

  const renderSectionPageWithDynamicRouter = useMemo(() => {
    return pageDataConfigWithDynamicRouter?.array?.map((item) => {
      const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[item?.section]?.[item?.data];

      const renderItem = () => {
        switch (item?.section) {
          case 'SINGLE_NEWS_CARD':
            return <SingleNewsCardV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEWS':
            return <NewsV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_AND_TOP_READ':
            return <NewsAndTopReadV4 key={item?.id} data={data} className={item?.className} />;
          case 'CONTACT':
            return <ContactV4 key={item?.id} data={data} className={item?.className} />;
          case 'GRADIENT_BANNER1':
            return <StaticSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'EXCHANGES_SECTION':
            return <ExchangesSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'PRICE_SECTION':
            return <PriceSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'CONVERT_PRICE_SECTION':
            return <ConvertPriceSectionV4 key={item?.id} data={data} className={item?.className} />;
          case 'NEW_LETTER':
            return <NewLetterSectionV4 key={item?.id} data={data} className={item?.className} />;
          default:
            return <div />;
        }
      };
      return renderItem();
    });
  }, [pageDataConfigWithDynamicRouter?.array, systemConfig?.ldpSystemConfigPage?.dataConfig?.V1]);

  // return (
  //   <main className="page-template page-template-template-clean-with-coins template-clean-with-coins page page-id-164 bg-white overflow-x-hidden scroll-smooth text-dark-grey-700 app-data index-data singular-data page-data page-164-data page-about-data template-clean-with-coins-data about non-amp page-about-us dark page-about-us dark">
  //     <div className="container wrap p-lg-0 pt-0 lg:pt-2">
  //       <div className="content pt-2">
  //         <main className="main">
  //           <div className="page-content max-w-full w-full">
  //             {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
  //               <LandingPageMenuDesktopV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
  //             ) : (
  //               <LandingPageMenuMobileV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
  //             )}
  //             {renderSectionPageWithDynamicRouter}
  //             {renderPageDetailWithDynamicRouter}
  //             <FooterV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
  //           </div>
  //         </main>
  //       </div>
  //     </div>
  //   </main>
  // );

  const renderTestPage = () => {
    switch ('about') {
      case 'about':
        return <Component />;

      default:
        return <div />;
    }
  };
  return renderTestPage();
};

export const Component: React.FC = () => {
  return (
    <div className="page-template page-template-template-clean-with-coins template-clean-with-coins page page-id-164 bg-white overflow-x-hidden scroll-smooth text-dark-grey-700 app-data index-data singular-data page-data page-164-data page-about-data template-clean-with-coins-data about non-amp page-about-us dark page-about-us dark">
      <header className="relative w-full -mb-px py-2 border-b border-grey-200 [.dark_&]:border-dark-grey-500 bg-white [.dark_&]:bg-dark-grey-700 z-800 lg:py-4 lg:flex-nowrap main-header ">
        <div className="container flex flex-wrap items-center justify-between lg:translate-x-0">
          <nav className="flex items-center lg:gap-x-10 px-full -mx-full">
            <Link data-el="main-logo" className="logo" href="https://beincrypto.com/" title="BeInCrypto">
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
                <Link data-el="main-logo" className="logo" href="https://beincrypto.com/" title="BeInCrypto">
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
                  </svg>{' '}
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
                  </svg>{' '}
                </button>
              </div>
              <div className="bic-main-nav-wrap">
                <ul
                  id="menu-fast-links"
                  className="bic-main-nav items-start flex-col lg:flex-row flex lg:items-center gap-x-6 py-1.5 border border-transparent"
                >
                  <li
                    id="menu-item-140529"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140529 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "learn"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="https://beincrypto.com/learn/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Learn
                      </span>
                    </Link>
                    <Link
                      className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                      href="https://beincrypto.com/learn/"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10.808 3.744 4.502 4.804L2 8.641l.028 1.416 13.339.03-4.532 4.866.963 1.047L18 9.349l-6.23-6.682-.962 1.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    id="menu-item-330019"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-330019 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "news"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="/news/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        News
                      </span>
                    </Link>
                    <div
                      className=" flex items-center transition-all lg:hidden bic-dropdown-icon -z-10"
                      role="presentation"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10 10.794 4.363-4.504a.945.945 0 0 1 1.362 0 .984.984 0 0 1 0 1.365L10 13.565l-5.725-5.91a.984.984 0 0 1 0-1.365.945.945 0 0 1 1.362 0L10 10.794Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <ul className="hidden mt-3 lg:mt-0 top-full w-full lg:w-auto dropdown-menu flex-wrap lg:group-hover:flex sub-menu lg:absolute w-fit lg:p-4 rounded-lg lg:shadow-menu lg:bg-white [.dark_&]:lg:bg-dark-grey-500 z-50 depth_0">
                      <li
                        id="menu-item-96098"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96098 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
                      >
                        <Link
                          data-el="main-menu-item"
                          data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "opinion"}'
                          className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                          href="https://beincrypto.com/opinion/"
                        >
                          Opinion
                        </Link>
                        <Link
                          className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                          href="https://beincrypto.com/opinion/"
                        />
                      </li>
                      <li
                        id="menu-item-90352"
                        className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-90352 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
                      >
                        <Link
                          data-el="main-menu-item"
                          data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "bitcoin"}'
                          className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                          href="https://beincrypto.com/bitcoin-news/"
                        >
                          Bitcoin
                        </Link>
                        <Link
                          className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                          href="https://beincrypto.com/bitcoin-news/"
                        />
                      </li>
                      <li
                        id="menu-item-90353"
                        className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-90353 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
                      >
                        <Link
                          data-el="main-menu-item"
                          data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "altcoins"}'
                          className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                          href="https://beincrypto.com/altcoin-news/"
                        >
                          Altcoins
                        </Link>
                        <Link
                          className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                          href="https://beincrypto.com/altcoin-news/"
                        />
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-91935"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-91935 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "press-releases"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="https://beincrypto.com/press-releases/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Press Releases
                      </span>
                    </Link>
                    <Link
                      className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                      href="https://beincrypto.com/press-releases/"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10.808 3.744 4.502 4.804L2 8.641l.028 1.416 13.339.03-4.532 4.866.963 1.047L18 9.349l-6.23-6.682-.962 1.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    id="menu-item-329870"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-329870 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "rankings"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="#"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Rankings
                      </span>
                    </Link>
                    <div
                      className=" flex items-center transition-all lg:hidden bic-dropdown-icon -z-10"
                      role="presentation"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10 10.794 4.363-4.504a.945.945 0 0 1 1.362 0 .984.984 0 0 1 0 1.365L10 13.565l-5.725-5.91a.984.984 0 0 1 0-1.365.945.945 0 0 1 1.362 0L10 10.794Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <ul className="hidden mt-3 lg:mt-0 top-full w-full lg:w-auto dropdown-menu flex-wrap lg:group-hover:flex sub-menu lg:absolute w-fit lg:p-4 rounded-lg lg:shadow-menu lg:bg-white [.dark_&]:lg:bg-dark-grey-500 z-50 depth_0">
                      <li
                        id="menu-item-292116"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-292116 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
                      >
                        <Link
                          data-el="main-menu-item"
                          data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "convert"}'
                          className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                          href="/convert/"
                        >
                          Convert
                        </Link>
                        <Link
                          className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                          href="/convert/"
                        />
                      </li>
                      <li
                        id="menu-item-73451"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73451 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
                      >
                        <Link
                          data-el="main-menu-item"
                          data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "exchanges"}'
                          className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                          href="https://beincrypto.com/exchanges/"
                        >
                          Exchanges
                        </Link>
                        <Link
                          className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                          href="https://beincrypto.com/exchanges/"
                        />
                      </li>
                      <li
                        id="menu-item-73102"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73102 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
                      >
                        <Link
                          data-el="main-menu-item"
                          data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "prices"}'
                          className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                          href="https://beincrypto.com/price/"
                        >
                          Prices
                        </Link>
                        <Link
                          className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                          href="https://beincrypto.com/price/"
                        />
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-214335"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-214335 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "web3-jobs"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="https://beincrypto.com/jobs/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Web3 Jobs
                      </span>
                    </Link>
                    <Link
                      className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                      href="https://beincrypto.com/jobs/"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10.808 3.744 4.502 4.804L2 8.641l.028 1.416 13.339.03-4.532 4.866.963 1.047L18 9.349l-6.23-6.682-.962 1.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    id="menu-item-385818"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385818 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "advertise"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="https://beincrypto.com/sales/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Advertise
                      </span>
                    </Link>
                    <Link
                      className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                      href="https://beincrypto.com/sales/"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10.808 3.744 4.502 4.804L2 8.641l.028 1.416 13.339.03-4.532 4.866.963 1.047L18 9.349l-6.23-6.682-.962 1.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    id="menu-item-504467"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-504467 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "learn-to-earn"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="https://beincrypto.com/learn-to-earn/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Learn-to-Earn
                      </span>
                    </Link>
                    <Link
                      className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                      href="https://beincrypto.com/learn-to-earn/"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10.808 3.744 4.502 4.804L2 8.641l.028 1.416 13.339.03-4.532 4.866.963 1.047L18 9.349l-6.23-6.682-.962 1.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    id="menu-item-493139"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-493139 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative"
                  >
                    <Link
                      data-el="main-menu-item"
                      data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "main-menu", "ev": "newsletters"}'
                      className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
                      href="https://beincrypto.com/newsletters/"
                    >
                      <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
                        Newsletters
                      </span>
                    </Link>
                    <Link
                      className=" z-10 flex items-center transition-all hover:no-underline lg:hidden bic-dropdown-icon"
                      href="https://beincrypto.com/newsletters/"
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m10.808 3.744 4.502 4.804L2 8.641l.028 1.416 13.339.03-4.532 4.866.963 1.047L18 9.349l-6.23-6.682-.962 1.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="block lg:hidden">
                <div className="flex px-5 py-4 border-t gap-x-2 border-y-grey-200 [.dark_&]:border-y-dark-grey-500">
                  <div
                    className="relative bic-c-language-selector lg:hidden block bg-grey-200 px-3 rounded-7xl [.dark_&]:bg-dark-grey-500"
                    data-el="bic-c-language-selector"
                    data-dropdown-placement="top-start"
                  >
                    <button
                      className="uppercase s3 lg:p3 lg:p3--medium cursor-pointer "
                      data-el="bic-c-language-selector-cta"
                      type="button"
                    >
                      English
                    </button>
                    <div
                      id="bic-c-language-selector-830df437-a032-4be9-8e41-5bf1cec068a6"
                      data-el="bic-c-language-selector-dropdown"
                      className="z-30 hidden px-3 py-4 absolute divide-y rounded-lg shadow-menu divide-grey-100 w-44 [.dark_&]:divide-grey-700 bg-white"
                      style={{
                        position: 'absolute',
                        inset: 'auto auto 0px 0px',
                        margin: 0,
                        transform: 'translate3d(-85px, -54px, 0px)',
                      }}
                      data-popper-placement="top-start"
                    >
                      <ul className="overflow-y-auto max-h-64 lg:max-h-none p4 p4--ns text-grey-700">
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"es.beincrypto.com","iso":"es_ES","native_name":"Espa\u00f1ol"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="es"
                            href="//es.beincrypto.com"
                            hrefLang="es"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Español
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"ru.beincrypto.com","iso":"ru_RU","native_name":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="ru"
                            href="//ru.beincrypto.com"
                            hrefLang="ru"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Русский
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"tr.beincrypto.com","iso":"tr_TR","native_name":"T\u00fcrk\u00e7e"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="tr"
                            href="//tr.beincrypto.com"
                            hrefLang="tr"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Türkçe
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"kr.beincrypto.com","iso":"ko_KR","native_name":"\ud55c\uad6d\uc5b4"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="ko"
                            href="//kr.beincrypto.com"
                            hrefLang="ko"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            한국어
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"vn.beincrypto.com","iso":"vi","native_name":"Ti\u1ebfng Vi\u1ec7t"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="vi"
                            href="//vn.beincrypto.com"
                            hrefLang="vi"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Tiếng Việt
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"de.beincrypto.com","iso":"de_DE","native_name":"Deutsch"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="de"
                            href="//de.beincrypto.com"
                            hrefLang="de"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Deutsch
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"br.beincrypto.com","iso":"pt_BR","native_name":"Portugu\u00eas"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="pt"
                            href="//br.beincrypto.com"
                            hrefLang="pt"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Português
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"fr.beincrypto.com","iso":"fr_FR","native_name":"Fran\u00e7ais"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="fr"
                            href="//fr.beincrypto.com"
                            hrefLang="fr"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Français
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"pl.beincrypto.com","iso":"pl_PL","native_name":"Polski"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="pl"
                            href="//pl.beincrypto.com"
                            hrefLang="pl"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Polski
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"id.beincrypto.com","iso":"id_ID","native_name":"Bahasa Indonesia"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="id"
                            href="//id.beincrypto.com"
                            hrefLang="id"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Bahasa Indonesia
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"th.beincrypto.com","iso":"th","native_name":"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="th"
                            href="//th.beincrypto.com"
                            hrefLang="th"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            ภาษาไทย
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"ar.beincrypto.com","iso":"ar","native_name":"\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="ar"
                            href="//ar.beincrypto.com"
                            hrefLang="ar"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            اَلْعَرَبِيَّةُ
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"jp.beincrypto.com","iso":"ja","native_name":"\u65e5\u672c\u8a9e"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="ja"
                            href="//jp.beincrypto.com"
                            hrefLang="ja"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            日本語
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"it.beincrypto.com","iso":"it_IT","native_name":"Italiano"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="it"
                            href="//it.beincrypto.com"
                            hrefLang="it"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Italiano
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"nl.beincrypto.com","iso":"nl_NL","native_name":"Dutch"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="nl"
                            href="//nl.beincrypto.com"
                            hrefLang="nl"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Dutch
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"dk.beincrypto.com","iso":"da_DK","native_name":"Dansk"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="da"
                            href="//dk.beincrypto.com"
                            hrefLang="da"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Dansk
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"fi.beincrypto.com","iso":"fi","native_name":"Suomi"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="fi"
                            href="//fi.beincrypto.com"
                            hrefLang="fi"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Suomi
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"no.beincrypto.com","iso":"nb_NO","native_name":"Norsk"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="nb"
                            href="//no.beincrypto.com"
                            hrefLang="nb"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Norsk
                          </Link>
                        </li>
                        <li
                          data-el="bic-c-language-selector-item"
                          data-lang='{"url":"se.beincrypto.com","iso":"sv_SE","native_name":"Svenska"}'
                          className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                        >
                          <Link
                            className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                            data-value="sv"
                            href="//se.beincrypto.com"
                            hrefLang="sv"
                            target="_self"
                            data-wpel-link="ignore"
                          >
                            Svenska
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
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
                </svg>{' '}
              </button>
              <form
                className="hidden overflow-hidden lg:flex lg:gap-x-2 lg:w-0 lg:h-0"
                data-el="bic-search-header-form"
                data-analytics='{"en": "search", "ec": "web:desktop:search", "el": "main-header-search", "ev": ""}'
                role="search"
                method="get"
                target="_top"
                action="https://beincrypto.com"
                noValidate=""
              >
                <div data-el="bic-c-search" className="bic-c-search md:ml-2.5 lg:flex-grow">
                  <div className="py-2 px-3.5 border text-grey-600  flex items-center bg-grey-100 border-transparent  focus-within:bg-white focus-within:border-blue-600  rounded-md gap-x-2.5 acfo:border-blue-600 ">
                    <label
                      htmlFor="bic-c-search-de3fb916-703b-4695-9b46-5b6a43c72cc2"
                      className="mb-0"
                      aria-label="Search"
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
                      id="bic-c-search-de3fb916-703b-4695-9b46-5b6a43c72cc2"
                      name="s"
                      type="search"
                      placeholder=""
                      className="w-full p-0 bg-transparent border-none appearance-none p4 p4--ns placeholder:text-grey-600  peer focus:outline-none focus:border-none focus:ring-0 text-dark-grey-700 "
                    />
                    <button
                      className="hidden w-5 h-5 peer peer-focus:block hover:block acfo:block"
                      type="button"
                      onclick="this.previousElementSibling.value='';this.previousElementSibling.focus()"
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
                      </svg>{' '}
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
                  </svg>{' '}
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
                English
              </button>
              <div
                id="bic-c-language-selector-0f1ad5e4-f427-4407-aca4-e9ca129e0051"
                data-el="bic-c-language-selector-dropdown"
                className="z-30 hidden px-3 py-4 absolute divide-y rounded-lg shadow-menu divide-grey-100 w-44 [.dark_&]:divide-grey-700 bg-white"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: 0,
                  transform: 'translate3d(1268.5px, 31px, 0px)',
                }}
                data-popper-placement="bottom-center"
              >
                <ul className="overflow-y-auto max-h-64 lg:max-h-none p4 p4--ns text-grey-700">
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"es.beincrypto.com","iso":"es_ES","native_name":"Espa\u00f1ol"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="es"
                      href="//es.beincrypto.com"
                      hrefLang="es"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Español
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"ru.beincrypto.com","iso":"ru_RU","native_name":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="ru"
                      href="//ru.beincrypto.com"
                      hrefLang="ru"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Русский
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"tr.beincrypto.com","iso":"tr_TR","native_name":"T\u00fcrk\u00e7e"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="tr"
                      href="//tr.beincrypto.com"
                      hrefLang="tr"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Türkçe
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"kr.beincrypto.com","iso":"ko_KR","native_name":"\ud55c\uad6d\uc5b4"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="ko"
                      href="//kr.beincrypto.com"
                      hrefLang="ko"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      한국어
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"vn.beincrypto.com","iso":"vi","native_name":"Ti\u1ebfng Vi\u1ec7t"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="vi"
                      href="//vn.beincrypto.com"
                      hrefLang="vi"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Tiếng Việt
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"de.beincrypto.com","iso":"de_DE","native_name":"Deutsch"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="de"
                      href="//de.beincrypto.com"
                      hrefLang="de"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Deutsch
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"br.beincrypto.com","iso":"pt_BR","native_name":"Portugu\u00eas"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="pt"
                      href="//br.beincrypto.com"
                      hrefLang="pt"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Português
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"fr.beincrypto.com","iso":"fr_FR","native_name":"Fran\u00e7ais"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="fr"
                      href="//fr.beincrypto.com"
                      hrefLang="fr"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Français
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"pl.beincrypto.com","iso":"pl_PL","native_name":"Polski"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="pl"
                      href="//pl.beincrypto.com"
                      hrefLang="pl"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Polski
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"id.beincrypto.com","iso":"id_ID","native_name":"Bahasa Indonesia"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="id"
                      href="//id.beincrypto.com"
                      hrefLang="id"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Bahasa Indonesia
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"th.beincrypto.com","iso":"th","native_name":"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="th"
                      href="//th.beincrypto.com"
                      hrefLang="th"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      ภาษาไทย
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"ar.beincrypto.com","iso":"ar","native_name":"\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="ar"
                      href="//ar.beincrypto.com"
                      hrefLang="ar"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      اَلْعَرَبِيَّةُ
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"jp.beincrypto.com","iso":"ja","native_name":"\u65e5\u672c\u8a9e"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="ja"
                      href="//jp.beincrypto.com"
                      hrefLang="ja"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      日本語
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"it.beincrypto.com","iso":"it_IT","native_name":"Italiano"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="it"
                      href="//it.beincrypto.com"
                      hrefLang="it"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Italiano
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"nl.beincrypto.com","iso":"nl_NL","native_name":"Dutch"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="nl"
                      href="//nl.beincrypto.com"
                      hrefLang="nl"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Dutch
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"dk.beincrypto.com","iso":"da_DK","native_name":"Dansk"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="da"
                      href="//dk.beincrypto.com"
                      hrefLang="da"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Dansk
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"fi.beincrypto.com","iso":"fi","native_name":"Suomi"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="fi"
                      href="//fi.beincrypto.com"
                      hrefLang="fi"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Suomi
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"no.beincrypto.com","iso":"nb_NO","native_name":"Norsk"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="nb"
                      href="//no.beincrypto.com"
                      hrefLang="nb"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Norsk
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"se.beincrypto.com","iso":"sv_SE","native_name":"Svenska"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-grey-100"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      data-value="sv"
                      href="//se.beincrypto.com"
                      hrefLang="sv"
                      target="_self"
                      data-wpel-link="ignore"
                    >
                      Svenska
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block lg:hidden">
              <button
                type="button"
                data-target_menu='[data-el="bic-mobile-nav"]'
                data-el="bic-c-hamburger-toggle"
                aria-label="Toggle Navigation"
                aria-expanded="false"
                className=" [&.active>div:nth-child(1)]:rotate-45 [&.active>div:nth-child(1)]:translate-y-2.5 [&.active>div:nth-child(2)]:opacity-0 [&.active>div:nth-child(3)]:-rotate-45 [&.active>div:nth-child(3)]:-translate-y-2.25 z-20 flex flex-col justify-between h-5 cursor-pointer min-w-6 select-none"
              >
                <span
                  aria-hidden="true"
                  className="w-full h-px transition-all rounded-sm select-none bg-dark-grey-700 [.dark_&]:bg-white"
                />
                <span
                  aria-hidden="true"
                  className="w-full h-px transition-all rounded-sm select-none bg-dark-grey-700 [.dark_&]:bg-white"
                />
                <span
                  aria-hidden="true"
                  className="w-full h-px transition-all rounded-sm select-none bg-dark-grey-700 [.dark_&]:bg-white"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        data-el="bic-coin-slider"
        className="overflow-hidden md:overflow-visible relative flex align-middle w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-2 border-grey-200 border-t border-b bg-white [.dark_&]:bg-dark-grey-700 [.dark_&]:border-dark-grey-500"
      >
        <div className="container">
          <div className="w-full">
            <div className="flex justify-between w-full gap-4 bic-c-coins-list sans" data-el="coins-list-widget">
              <template className="hidden" data-el="coin-template" />
              <div className="hidden" data-el="coin-spiner">
                <div className="flex items-center justify-center w-full h-5 lg:h-6">
                  <div className="w-4 h-4 -mt-2 lg:w-5 lg:h-5 lg:-mt-1">
                    <svg
                      className="bic-svg-icon inline animate-spin bic-svg-loader w-3 h-3"
                      aria-hidden="true"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        className="fill-grey-100"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        className="fill-grey-300"
                      />
                    </svg>{' '}
                  </div>
                </div>
              </div>
              <div className="relative flex items-center w-full overflow-hidden">
                <div
                  className="w-full overflow-hidden scroll-hidden swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                  data-el="coins-wrapper-parent"
                >
                  <div
                    className="flex items-center w-full h-full gap-4 sw-wrp lg:gap-0"
                    data-el="coins-wrapper"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "btc"}'
                      href="/price/bitcoin/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline swiper-slide-active"
                      title="Bitcoin"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                          alt="Bitcoin"
                          title="Bitcoin"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">btc</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $69611
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.56%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "eth"}'
                      href="/price/ethereum/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline swiper-slide-next"
                      title="Ethereum"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                          alt="Ethereum"
                          title="Ethereum"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">eth</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $3687.73
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.43%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "usdt"}'
                      href="/price/tether/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="Tether"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png"
                          alt="Tether"
                          title="Tether"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">usdt</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                        $0.999797
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5  rotate-180"
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.01%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "bnb"}'
                      href="/price/binancecoin/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="BNB"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
                          alt="BNB"
                          title="BNB"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">bnb</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                        $666.6
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5  rotate-180"
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.98%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "sol"}'
                      href="/price/solana/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="Solana"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/4128/small/solana.png"
                          alt="Solana"
                          title="Solana"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">sol</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $160.07
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        1.63%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "steth"}'
                      href="/price/staked-ether/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="Lido Staked Ether"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png"
                          alt="Lido Staked Ether"
                          title="Lido Staked Ether"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">steth</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $3686.06
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.41%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "usdc"}'
                      href="/price/usd-coin/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="USDC"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
                          alt="USDC"
                          title="USDC"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">usdc</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $0.999843
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.02%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "xrp"}'
                      href="/price/ripple/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="XRP"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png"
                          alt="XRP"
                          title="XRP"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">xrp</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $0.498816
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        1.25%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "doge"}'
                      href="/price/dogecoin/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="Dogecoin"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png"
                          alt="Dogecoin"
                          title="Dogecoin"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">doge</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $0.145804
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        0.32%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                    <Link
                      data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "ton"}'
                      href="/price/the-open-network/"
                      className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                      title="Toncoin"
                      style={{ marginRight: 16 }}
                    >
                      <span className="inline-block min-w-4 lg:min-w-5">
                        <img
                          loading="lazy"
                          className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                          src="https://assets.coingecko.com/coins/images/17980/small/ton.PNG"
                          alt="Toncoin"
                          title="Toncoin"
                          width="20px"
                          height="20px"
                        />
                      </span>
                      <span className="uppercase">ton</span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                        $7.11
                        <svg
                          width={6}
                          height={6}
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1.5 mr-0.5 "
                        >
                          <path
                            d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                            className="fill-currentColor"
                          />
                        </svg>
                        3.29%
                      </span>
                      <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                        Record Not Found
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-5 h-full bg-gradient-r-l-white [.dark_&]:bg-gradient-r-l-dark" />
              </div>
              <div className="relative flex gap-4">
                <Link
                  href="#"
                  className="items-center text-3 leading-4.5 font-normal whitespace-nowrap text-blue-700 [.dark_&]:text-blue-500 hidden lg:inline-flex "
                  data-el="coins-dropdown"
                >
                  Edit
                  <i className="ml-2">
                    <svg
                      className="bic-svg-icon w-4 h-4 fill-blue-700 [.dark_&]:text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 26"
                      width={24}
                      height={26}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="m12.12 15.604 6.085-6.1a.792.792 0 0 1 1.123 0c.31.31.31.814 0 1.125l-7.208 7.226-7.207-7.226a.797.797 0 0 1 0-1.126.792.792 0 0 1 1.122 0l6.085 6.101Z"
                        clipRule="evenodd"
                      />
                    </svg>{' '}
                  </i>
                </Link>
                <Link
                  href="/price/"
                  className="inline-flex items-center text-3 leading-4.5 font-normal whitespace-nowrap text-blue-700 [.dark_&]:text-blue-500"
                >
                  See More
                </Link>
                <div
                  className="absolute z-10 w-56 p-2 overflow-hidden bg-white rounded-lg top-9 shadow-menu -translate-x-1/3 lg:-translate-x-3/4 hidden"
                  data-el="dropdown"
                >
                  <div className="relative">
                    <i className="absolute left-3 top-2.5 text-grey-600">
                      <svg
                        className="bic-svg-icon w-4 h-4 fill-grey-600"
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
                      </svg>{' '}
                    </i>
                    <i className="absolute cursor-pointer right-3 top-3 text-grey-600" data-el="search-clear">
                      <svg
                        className="bic-svg-icon w-3 h-3 fill-grey-600"
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
                      </svg>{' '}
                    </i>
                    <input
                      className="w-full py-2 pl-10 text-3.5 font-normal leading-5 border rounded-md border-blue-700 pr-11 font-body h-9 outline-0 placeholder-grey-600 text-dark-grey-700"
                      autoComplete="off"
                      type="search"
                      data-el="bic-coins-widget-search"
                      name="bic-coins-widget-search"
                      defaultValue=""
                      placeholder="Search Coins"
                    />
                  </div>
                  <div>
                    <div
                      className="relative pl-2 my-2 overflow-y-auto h-60 bic-scroll-coins"
                      data-el="dropdown-elem-wraper"
                    >
                      <label
                        data-analytics='{"en": "coin-select-box", "ec": "web:desktop:coin-select-box", "el": "main-header-coin-select-box", "ev": ""}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer hidden"
                        data-el="dropdown-elem-template"
                        data-value=""
                      >
                        <input data-place="coin_id" type="checkbox" name="coin_id" defaultValue="" className="mr-3" />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          alt="Loading Coin..."
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        />
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600" />
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"btc"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"bitcoin","custom_id":"bitcoin","name":"Bitcoin","logo":"https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400","symbol":"btc"}'
                        title="Bitcoin"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="bitcoin"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400"
                          alt="Bitcoin"
                          title="Bitcoin"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Bitcoin
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          btc
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"eth"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"ethereum","custom_id":"ethereum","name":"Ethereum","logo":"https://coin-images.coingecko.com/coins/images/279/small/ethereum.png?1696501628","symbol":"eth"}'
                        title="Ethereum"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="ethereum"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/279/small/ethereum.png?1696501628"
                          alt="Ethereum"
                          title="Ethereum"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Ethereum
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          eth
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"usdt"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"tether","custom_id":"tether","name":"Tether","logo":"https://coin-images.coingecko.com/coins/images/325/small/Tether.png?1696501661","symbol":"usdt"}'
                        title="Tether"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="tether"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/325/small/Tether.png?1696501661"
                          alt="Tether"
                          title="Tether"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Tether
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          usdt
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"bnb"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"binancecoin","custom_id":"binancecoin","name":"BNB","logo":"https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970","symbol":"bnb"}'
                        title="BNB"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="binancecoin"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970"
                          alt="BNB"
                          title="BNB"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          BNB
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          bnb
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"sol"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"solana","custom_id":"solana","name":"Solana","logo":"https://coin-images.coingecko.com/coins/images/4128/small/solana.png?1696504756","symbol":"sol"}'
                        title="Solana"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="solana"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                          alt="Solana"
                          title="Solana"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Solana
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          sol
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"steth"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"staked-ether","custom_id":"staked-ether","name":"Lido Staked Ether","logo":"https://coin-images.coingecko.com/coins/images/13442/small/steth_logo.png?1696513206","symbol":"steth"}'
                        title="Lido Staked Ether"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="staked-ether"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/13442/small/steth_logo.png?1696513206"
                          alt="Lido Staked Ether"
                          title="Lido Staked Ether"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Lido Staked Ether
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          steth
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"usdc"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"usd-coin","custom_id":"usd-coin","name":"USDC","logo":"https://coin-images.coingecko.com/coins/images/6319/small/usdc.png?1696506694","symbol":"usdc"}'
                        title="USDC"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="usd-coin"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/6319/small/usdc.png?1696506694"
                          alt="USDC"
                          title="USDC"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          USDC
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          usdc
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"xrp"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"ripple","custom_id":"ripple","name":"XRP","logo":"https://coin-images.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1696501442","symbol":"xrp"}'
                        title="XRP"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="ripple"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1696501442"
                          alt="XRP"
                          title="XRP"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          XRP
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          xrp
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"doge"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"dogecoin","custom_id":"dogecoin","name":"Dogecoin","logo":"https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png?1696501409","symbol":"doge"}'
                        title="Dogecoin"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="dogecoin"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png?1696501409"
                          alt="Dogecoin"
                          title="Dogecoin"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Dogecoin
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          doge
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"ton"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"the-open-network","custom_id":"the-open-network","name":"Toncoin","logo":"https://coin-images.coingecko.com/coins/images/17980/small/ton_symbol.png?1696517498","symbol":"ton"}'
                        title="Toncoin"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="the-open-network"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/17980/small/ton_symbol.png?1696517498"
                          alt="Toncoin"
                          title="Toncoin"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Toncoin
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          ton
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"ada"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"cardano","custom_id":"cardano","name":"Cardano","logo":"https://coin-images.coingecko.com/coins/images/975/small/cardano.png?1696502090","symbol":"ada"}'
                        title="Cardano"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="cardano"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/975/small/cardano.png?1696502090"
                          alt="Cardano"
                          title="Cardano"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Cardano
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          ada
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"shib"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"shiba-inu","custom_id":"shiba-inu","name":"Shiba Inu","logo":"https://coin-images.coingecko.com/coins/images/11939/small/shiba.png?1696511800","symbol":"shib"}'
                        title="Shiba Inu"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="shiba-inu"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/11939/small/shiba.png?1696511800"
                          alt="Shiba Inu"
                          title="Shiba Inu"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Shiba Inu
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          shib
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"avax"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"avalanche-2","custom_id":"avalanche-2","name":"Avalanche","logo":"https://coin-images.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png?1696512369","symbol":"avax"}'
                        title="Avalanche"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="avalanche-2"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png?1696512369"
                          alt="Avalanche"
                          title="Avalanche"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Avalanche
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          avax
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"wbtc"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"wrapped-bitcoin","custom_id":"wrapped-bitcoin","name":"Wrapped Bitcoin","logo":"https://coin-images.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1696507857","symbol":"wbtc"}'
                        title="Wrapped Bitcoin"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="wrapped-bitcoin"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1696507857"
                          alt="Wrapped Bitcoin"
                          title="Wrapped Bitcoin"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          Wrapped Bitcoin
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          wbtc
                        </span>
                      </label>
                      <label
                        data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"trx"}'
                        className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                        data-el="dropdown-elem"
                        data-value='{"id":"tron","custom_id":"tron","name":"TRON","logo":"https://coin-images.coingecko.com/coins/images/1094/small/tron-logo.png?1696502193","symbol":"trx"}'
                        title="TRON"
                        data-issponsored={0}
                      >
                        <input
                          data-place="coin_id"
                          type="checkbox"
                          name="coin_id"
                          defaultValue="tron"
                          className="mr-3"
                        />
                        <img
                          fetchpriority="low"
                          loading="lazy"
                          data-place="logo"
                          className="mr-2 max-w-4 max-h-4 min-w-4"
                          src="https://coin-images.coingecko.com/coins/images/1094/small/tron-logo.png?1696502193"
                          alt="TRON"
                          title="TRON"
                        />
                        <span
                          data-place="name"
                          className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                        >
                          TRON
                        </span>
                        <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                          trx
                        </span>
                      </label>
                    </div>
                    <div
                      data-el="spinner"
                      className="hidden absolute bottom-0 left-0 w-full h-[calc(100%-52px)] items-center justify-center bg-black/30"
                    >
                      <div>
                        <svg
                          className="bic-svg-icon inline animate-spin bic-svg-loader w-5 h-5"
                          aria-hidden="true"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            className="fill-grey-100"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            className="fill-grey-300"
                          />
                        </svg>{' '}
                      </div>
                    </div>
                  </div>
                  <div className="bg-grey-100 h-9 flex px-4 text-grey-700 items-center -mx-2 -mb-2 text-3 leading-4.5 font-normal">
                    <i className="mr-2">
                      <svg
                        className="bic-svg-icon w-3 h-3 fill-grey-600"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C13.3135 4 16 6.6865 16 10C16 13.3135 13.3135 16 10 16ZM9.30668 6.60049V10.1569C9.30668 10.4046 9.43885 10.6334 9.65331 10.7573C9.86785 10.8811 10.1322 10.8811 10.3467 10.7573C10.5612 10.6334 10.6933 10.4044 10.6933 10.1568V6.60041C10.6933 6.35265 10.5612 6.12388 10.3467 6C10.1322 5.8762 9.86783 5.8762 9.65331 6C9.43885 6.12388 9.30668 6.35274 9.30668 6.60049ZM10 11.8334C9.77903 11.8334 9.56699 11.9211 9.41071 12.0774C9.25444 12.2337 9.16662 12.4457 9.16662 12.6667C9.16662 12.8877 9.25443 13.0996 9.41071 13.256C9.56699 13.4123 9.77903 13.5 10 13.5C10.221 13.5 10.433 13.4123 10.5893 13.256C10.7456 13.0996 10.8334 12.8877 10.8334 12.6667C10.8334 12.4457 10.7456 12.2337 10.5893 12.0774C10.433 11.9211 10.221 11.8334 10 11.8334Z"
                          fill="currentColor"
                        />
                      </svg>{' '}
                    </i>
                    You can only choose 10 coins
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container wrap p-lg-0 " role="document">
        <div className="content pt-2">
          <main className="main" id="bic-main-content">
            <div
              data-el="bic-clean-template-with-coins"
              className="bic-clean-template-with-coins pt-8 md:pt-28 flex flex-wrap flex-row w-full"
            >
              <div className="page-content max-w-full w-full">
                <div
                  data-el="bic-b-gradient-banner"
                  id="block_1c7177c15264ec38ba4b0b486d628d99"
                  className="lg:!mb-36 !mb-18 bg-bic-gradient-radial-blue md:min-h-96 rounded-4xl px-5 md:px-6 py-8 flex md:gap-x-6 justify-between relative mb-5"
                >
                  <div className="flex flex-col justify-between text-white md:w-[calc(100%-664px)]">
                    <h1 className="h2 md:hrt6 order-1">What is BE[IN]CRYPTO about?</h1>
                    <figure className="block md:hidden order-3 -mb-13 md:mb-18">
                      <img
                        decoding="async"
                        className="lazy "
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-360x293.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-850x692.png 850w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-768x626.png 768w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-150x122.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver.png 1105w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver.png"
                        alt="What is BE[IN]CRYPTO about?"
                        width={1105}
                        height={900}
                      />
                    </figure>
                    <div className="order-2 my-5 md:my-18 md:mb-0">
                      <div className="flex flex-col gap-y-3 p2 [&_p:last-child]:mb-0 [&+div]:mt-10">
                        <p>
                          BE[IN]CRYPTO was created to unite and set you free from the hands, pockets, and minds of a
                          controlling monetary system.
                        </p>
                        <p>
                          Here, we create educational content and products for all things crypto that will help you to
                          pave your way in Web3.
                        </p>
                      </div>
                    </div>
                  </div>
                  <figure className="md:min-h-96 hidden md:block -mb-16">
                    <img
                      decoding="async"
                      className="lazy -mt-16 md:max-w-[552px] h-[calc(100%+64px)] entered loaded"
                      loading="lazy"
                      src="https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver.png"
                      data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-360x293.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-850x692.png 850w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-768x626.png 768w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-150x122.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver.png 1105w"
                      data-src="https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver.png"
                      alt="What is BE[IN]CRYPTO about?"
                      width={1105}
                      height={900}
                      data-ll-status="loaded"
                      srcSet="https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-360x293.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-850x692.png 850w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-768x626.png 768w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver-150x122.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/bic-logo-silver.png 1105w"
                    />
                  </figure>
                </div>
                <section
                  data-el="bic-b-hr-mission-block"
                  id="block_afabfa6cf74343b47ff74eef478a1cf1"
                  className="bic-b-hr-mission-block relative lg:!mb-36 !mb-18"
                >
                  <div className="flex gap-x-28 flex-wrap md:flex-nowrap mb-10 md:mb-15 items-center">
                    <h2 className="h3 md:h1 md:flex-1 w-full  ">
                      It doesn’t matter if you’re new to crypto or an expert
                    </h2>
                  </div>
                  <div
                    data-el="bic-b-hr-mission-block-slider"
                    className="grid md:grid-cols-2 grid-cols-1 gap-x-7.5 md:gap-y-7.5 md:gap-x-5 gap-y-5 md:flex-wrap"
                  >
                    <div
                      data-el="bic-b-hr-mission-block-slider-card"
                      className="border border-grey-50 p-5 md:p-6 pb-8 bg-grey-50 [.dark_&]:bg-dark-grey-500 [.dark_&]:border-dark-grey-500 rounded-2xxl w-full"
                    >
                      <div className="flex gap-x-1.25 md:gap-x-4">
                        <div className="">
                          <svg
                            className="bic-svg-icon min-w-4 md:min-w-5 h-fit mt-1.75 md:mt-3 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            width={20}
                            height={20}
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                              clipRule="evenodd"
                            />
                          </svg>{' '}
                        </div>
                        <div>
                          <h3 className="md:h3 h8 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 mb-4">
                            Our mission is to <span>empower your&nbsp;web3 journey</span>
                          </h3>
                          <div className="!mb-0 p3 md:p2 [&_p:last-child]:!mb-0 [.dark_&_:is(ol,ul)_li]:before:text-lime-600 [&_:is(ol,ul)_li]:before:text-blue-600 [&_:is(ol,ul)_li]:before:content-['→'] [&_:is(ol,ul)_li]:before:mr-5 [&_:is(ol,ul)_li]:inline-flex [&_:is(ol,ul)_li]:mb-3 [&_:is(ol,ul)_li:last-child]:mb-0">
                            <p className="font-sans">
                              Our goal is to share the most accurate, trustworthy, insightful,&nbsp;and transparent
                              information that grants everyone&nbsp;access to&nbsp;a&nbsp;free and open economy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-el="bic-b-hr-mission-block-slider-card"
                      className="border border-grey-50 p-5 md:p-6 pb-8 bg-grey-50 [.dark_&]:bg-dark-grey-500 [.dark_&]:border-dark-grey-500 rounded-2xxl w-full"
                    >
                      <div className="flex gap-x-1.25 md:gap-x-4">
                        <div className="">
                          <svg
                            className="bic-svg-icon min-w-4 md:min-w-5 h-fit mt-1.75 md:mt-3 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            width={20}
                            height={20}
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                              clipRule="evenodd"
                            />
                          </svg>{' '}
                        </div>
                        <div>
                          <h3 className="md:h3 h8 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 mb-4">
                            We are among <span>the Top #3 crypto news outlets</span>
                          </h3>
                          <div className="!mb-0 p3 md:p2 [&_p:last-child]:!mb-0 [.dark_&_:is(ol,ul)_li]:before:text-lime-600 [&_:is(ol,ul)_li]:before:text-blue-600 [&_:is(ol,ul)_li]:before:content-['→'] [&_:is(ol,ul)_li]:before:mr-5 [&_:is(ol,ul)_li]:inline-flex [&_:is(ol,ul)_li]:mb-3 [&_:is(ol,ul)_li:last-child]:mb-0">
                            <p className="font-sans">
                              BeInCrypto is one of the world’s most reliable sources of&nbsp;information about crypto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-el="bic-b-achievements-cards"
                  id="block_b964a6d4dcce6b8d9e19a7614d09f267"
                  className="lg:!mb-36 !mb-18"
                >
                  <h2 className="mb-8 md:mb-15 h3 md:h1">Check out some of our achievements</h2>
                  <div data-el="bic-b-achievements-cards">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-9 gap-y-5 md:gap-y-7.5">
                      <div
                        data-el="bic-b-achievements-cards-card"
                        className="py-6 px-5 md:py-8 md:px-6 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-xl w-full md:basis-1/3"
                      >
                        <h3 className="text-20 md:text-21 font-bold text-blue-600 [.dark_&]:text-lime-600 mb-4 lg:mb-10">
                          16
                        </h3>
                        <div className="!mb-0 s1 s1--medium md:h6 md:h6--medium [&_p:last-child]:!mb-0">
                          <p className="font-sans">languages of unique content</p>
                        </div>
                      </div>
                      <div
                        data-el="bic-b-achievements-cards-card"
                        className="py-6 px-5 md:py-8 md:px-6 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-xl w-full md:basis-1/3"
                      >
                        <h3 className="text-20 md:text-21 font-bold text-blue-600 [.dark_&]:text-lime-600 mb-4 lg:mb-10">
                          Top 3
                        </h3>
                        <div className="!mb-0 s1 s1--medium md:h6 md:h6--medium [&_p:last-child]:!mb-0">
                          <p className="font-sans">crypto publishers in the world</p>
                        </div>
                      </div>
                      <div
                        data-el="bic-b-achievements-cards-card"
                        className="py-6 px-5 md:py-8 md:px-6 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-xl w-full md:basis-1/3"
                      >
                        <h3 className="text-20 md:text-21 font-bold text-blue-600 [.dark_&]:text-lime-600 mb-4 lg:mb-10">
                          11M
                        </h3>
                        <div className="!mb-0 s1 s1--medium md:h6 md:h6--medium [&_p:last-child]:!mb-0">
                          <p className="font-sans">monthly page views</p>
                        </div>
                      </div>
                      <div
                        data-el="bic-b-achievements-cards-card"
                        className="py-6 px-5 md:py-8 md:px-6 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-xl w-full md:basis-1/3"
                      >
                        <h3 className="text-20 md:text-21 font-bold text-blue-600 [.dark_&]:text-lime-600 mb-4 lg:mb-10">
                          4M+
                        </h3>
                        <div className="!mb-0 s1 s1--medium md:h6 md:h6--medium [&_p:last-child]:!mb-0">
                          <p className="font-sans">new users every month</p>
                        </div>
                      </div>
                      <div
                        data-el="bic-b-achievements-cards-card"
                        className="py-6 px-5 md:py-8 md:px-6 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-xl w-full md:basis-1/3"
                      >
                        <h3 className="text-20 md:text-21 font-bold text-blue-600 [.dark_&]:text-lime-600 mb-4 lg:mb-10">
                          200+
                        </h3>
                        <div className="!mb-0 s1 s1--medium md:h6 md:h6--medium [&_p:last-child]:!mb-0">
                          <p className="font-sans">rockstars working worldwide</p>
                        </div>
                      </div>
                      <div
                        data-el="bic-b-achievements-cards-card"
                        className="py-6 px-5 md:py-8 md:px-6 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-xl w-full md:basis-1/3"
                      >
                        <h3 className="text-20 md:text-21 font-bold text-blue-600 [.dark_&]:text-lime-600 mb-4 lg:mb-10">
                          35%
                        </h3>
                        <div className="!mb-0 s1 s1--medium md:h6 md:h6--medium [&_p:last-child]:!mb-0">
                          <p className="font-sans">of our employees are female</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-el="bic-b-hr-products-cards"
                  id="block_2d69d66e9497bd9899eae08d154833c5"
                  className="bic-b-hr-products-cards relative lg:!mb-36 !mb-18"
                >
                  <div className="flex flex-wrap md:flex-nowrap md:gap-x-8 gap-y-5 mb-8 md:mb-15">
                    <h2 className="mb-0 h3 md:h1 md:basis-1/2 flex-1">We build products that navigate through Web3</h2>
                    <div className="!mb-0 p3 md:p2 [&_p:last-child]:!mb-0 md:basis-1/2">
                      <p>
                        We are much more than a media publication. We want to pave the way for everyone – from crypto
                        newbies to experts – to access the most accurate and transparent information within the crypto
                        realm.
                      </p>
                      <p>
                        That’s why we’ve developed educational products and tools and have&nbsp;4&nbsp;more products
                        inside our digital nomad backpack:
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-9 md:gap-y-7.5 gap-y-5 md:flex-wrap">
                    <div
                      data-el="bic-b-hr-products-cards-slider-card"
                      className="p-6 min-h-52 md:min-h-75 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-3xl w-full"
                    >
                      <div className="flex h-full relative">
                        <Link href="https://beincrypto.com" target="_blank" className="hover:no-underline w-full">
                          {' '}
                          <div className="flex flex-col h-full justify-between gap-x-1.25 md:gap-x-9">
                            <h3 className="md:h1 h4 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 uppercase">
                              NEWS
                            </h3>
                            <div className="">
                              <button
                                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-ghost gap-x-2 btn-1 py-1 border-transparent text-blue-600 hover:text-blue-700 btn-ghost text-blue-600 hover:text-blue-700 dark:text-lime-600 dark:hover:text-lime-700
              disabled:text-grey-100
              bic-c-button-primary-lime      disabled:cursor-not-allowed "
                                type="button"
                              >
                                <span>Explore</span>
                                <svg
                                  className="bic-svg-icon w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                  width={20}
                                  height={20}
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <figure className="!m-0  md:-ml-5 flex-1">
                            <img
                              decoding="async"
                              className="lazy absolute right-0 -bottom-3 md:bottom-auto md:top-0 md:mt-14 max-w-44 md:max-w-full md:max-h-[175px] max-h-[160px] object-contain w-auto entered loaded"
                              loading="lazy"
                              src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-1.png"
                              data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/product-item-1-360x295.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-1-150x123.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-1.png 525w"
                              data-src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-1.png"
                              alt="NEWS"
                              width={525}
                              height={430}
                              data-ll-status="loaded"
                              srcSet="https://beincrypto.com/wp-content/uploads/2024/02/product-item-1-360x295.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-1-150x123.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-1.png 525w"
                            />
                          </figure>
                        </Link>{' '}
                      </div>
                    </div>
                    <div
                      data-el="bic-b-hr-products-cards-slider-card"
                      className="p-6 min-h-52 md:min-h-75 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-3xl w-full"
                    >
                      <div className="flex h-full relative">
                        <Link
                          href="https://beincrypto.com/learn/"
                          target="_blank"
                          className="hover:no-underline w-full"
                        >
                          {' '}
                          <div className="flex flex-col h-full justify-between gap-x-1.25 md:gap-x-9">
                            <h3 className="md:h1 h4 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 uppercase">
                              Learn
                            </h3>
                            <div className="">
                              <button
                                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-ghost gap-x-2 btn-1 py-1 border-transparent text-blue-600 hover:text-blue-700 btn-ghost text-blue-600 hover:text-blue-700 dark:text-lime-600 dark:hover:text-lime-700
              disabled:text-grey-100
              bic-c-button-primary-lime      disabled:cursor-not-allowed "
                                type="button"
                              >
                                <span>Explore</span>
                                <svg
                                  className="bic-svg-icon w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                  width={20}
                                  height={20}
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <figure className="!m-0  md:-ml-5 flex-1">
                            <img
                              decoding="async"
                              className="lazy absolute right-0 -bottom-3 md:bottom-auto md:top-0 md:mt-14 max-w-44 md:max-w-full md:max-h-[175px] max-h-[160px] object-contain w-auto entered loaded"
                              loading="lazy"
                              src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-2.png"
                              data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/product-item-2-318x360.png 318w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-2-150x170.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-2.png 371w"
                              data-src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-2.png"
                              alt="Learn"
                              width={371}
                              height={420}
                              data-ll-status="loaded"
                              srcSet="https://beincrypto.com/wp-content/uploads/2024/02/product-item-2-318x360.png 318w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-2-150x170.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-2.png 371w"
                            />
                          </figure>
                        </Link>{' '}
                      </div>
                    </div>
                    <div
                      data-el="bic-b-hr-products-cards-slider-card"
                      className="p-6 min-h-52 md:min-h-75 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-3xl w-full"
                    >
                      <div className="flex h-full relative">
                        <Link
                          href="https://beincrypto.com/be-verified/"
                          target="_blank"
                          className="hover:no-underline w-full"
                        >
                          {' '}
                          <div className="flex flex-col h-full justify-between gap-x-1.25 md:gap-x-9">
                            <h3 className="md:h1 h4 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 uppercase">
                              BEVERIFIED
                            </h3>
                            <div className="">
                              <button
                                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-ghost gap-x-2 btn-1 py-1 border-transparent text-blue-600 hover:text-blue-700 btn-ghost text-blue-600 hover:text-blue-700 dark:text-lime-600 dark:hover:text-lime-700
              disabled:text-grey-100
              bic-c-button-primary-lime      disabled:cursor-not-allowed "
                                type="button"
                              >
                                <span>Explore</span>
                                <svg
                                  className="bic-svg-icon w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                  width={20}
                                  height={20}
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <figure className="!m-0  md:-ml-5 flex-1">
                            <img
                              decoding="async"
                              className="lazy absolute right-0 -bottom-3 md:bottom-auto md:top-0 md:mt-14 max-w-44 md:max-w-full md:max-h-[175px] max-h-[160px] object-contain w-auto entered loaded"
                              loading="lazy"
                              src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-3.png"
                              data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/product-item-3-360x327.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-3-150x136.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-3.png 455w"
                              data-src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-3.png"
                              alt="BEVERIFIED"
                              width={455}
                              height={413}
                              data-ll-status="loaded"
                              srcSet="https://beincrypto.com/wp-content/uploads/2024/02/product-item-3-360x327.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-3-150x136.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-3.png 455w"
                            />
                          </figure>
                        </Link>{' '}
                      </div>
                    </div>
                    <div
                      data-el="bic-b-hr-products-cards-slider-card"
                      className="p-6 min-h-52 md:min-h-75 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-3xl w-full"
                    >
                      <div className="flex h-full relative">
                        <Link
                          href="https://beincrypto.com/price/"
                          target="_blank"
                          className="hover:no-underline w-full"
                        >
                          {' '}
                          <div className="flex flex-col h-full justify-between gap-x-1.25 md:gap-x-9">
                            <h3 className="md:h1 h4 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 uppercase">
                              RANKINGS
                            </h3>
                            <div className="">
                              <button
                                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-ghost gap-x-2 btn-1 py-1 border-transparent text-blue-600 hover:text-blue-700 btn-ghost text-blue-600 hover:text-blue-700 dark:text-lime-600 dark:hover:text-lime-700
              disabled:text-grey-100
              bic-c-button-primary-lime      disabled:cursor-not-allowed "
                                type="button"
                              >
                                <span>Explore</span>
                                <svg
                                  className="bic-svg-icon w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                  width={20}
                                  height={20}
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <figure className="!m-0  md:-ml-5 flex-1">
                            <img
                              decoding="async"
                              className="lazy absolute right-0 -bottom-3 md:bottom-auto md:top-0 md:mt-14 max-w-44 md:max-w-full md:max-h-[175px] max-h-[160px] object-contain w-auto entered loaded"
                              loading="lazy"
                              src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-4.png"
                              data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/product-item-4-360x334.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-4-150x139.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-4.png 437w"
                              data-src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-4.png"
                              alt="RANKINGS"
                              width={437}
                              height={406}
                              data-ll-status="loaded"
                              srcSet="https://beincrypto.com/wp-content/uploads/2024/02/product-item-4-360x334.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-4-150x139.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-4.png 437w"
                            />
                          </figure>
                        </Link>{' '}
                      </div>
                    </div>
                    <div
                      data-el="bic-b-hr-products-cards-slider-card"
                      className="p-6 min-h-52 md:min-h-75 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-3xl w-full"
                    >
                      <div className="flex h-full relative">
                        <Link href="https://beincrypto.com/jobs/" target="_blank" className="hover:no-underline w-full">
                          {' '}
                          <div className="flex flex-col h-full justify-between gap-x-1.25 md:gap-x-9">
                            <h3 className="md:h1 h4 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 uppercase">
                              JOBS
                            </h3>
                            <div className="">
                              <button
                                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-ghost gap-x-2 btn-1 py-1 border-transparent text-blue-600 hover:text-blue-700 btn-ghost text-blue-600 hover:text-blue-700 dark:text-lime-600 dark:hover:text-lime-700
              disabled:text-grey-100
              bic-c-button-primary-lime      disabled:cursor-not-allowed "
                                type="button"
                              >
                                <span>Explore</span>
                                <svg
                                  className="bic-svg-icon w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                  width={20}
                                  height={20}
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <figure className="!m-0  md:-ml-5 flex-1">
                            <img
                              decoding="async"
                              className="lazy absolute right-0 -bottom-3 md:bottom-auto md:top-0 md:mt-14 max-w-44 md:max-w-full md:max-h-[175px] max-h-[160px] object-contain w-auto entered loaded"
                              loading="lazy"
                              src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-5.png"
                              data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/product-item-5-360x252.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-5-150x105.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-5.png 468w"
                              data-src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-5.png"
                              alt="JOBS"
                              width={468}
                              height={328}
                              data-ll-status="loaded"
                              srcSet="https://beincrypto.com/wp-content/uploads/2024/02/product-item-5-360x252.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-5-150x105.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-5.png 468w"
                            />
                          </figure>
                        </Link>{' '}
                      </div>
                    </div>
                    <div
                      data-el="bic-b-hr-products-cards-slider-card"
                      className="p-6 min-h-52 md:min-h-75 bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-3xl w-full"
                    >
                      <div className="flex h-full relative">
                        <Link
                          href="https://beincrypto.com/learn-to-earn/youhodler/"
                          target="_blank"
                          className="hover:no-underline w-full"
                        >
                          {' '}
                          <div className="flex flex-col h-full justify-between gap-x-1.25 md:gap-x-9">
                            <h3 className="md:h1 h4 [&_span]:text-blue-600 [.dark_&_span]:text-lime-600 uppercase">
                              LEARN <br />
                              TO EARN
                            </h3>
                            <div className="">
                              <button
                                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-ghost gap-x-2 btn-1 py-1 border-transparent text-blue-600 hover:text-blue-700 btn-ghost text-blue-600 hover:text-blue-700 dark:text-lime-600 dark:hover:text-lime-700
              disabled:text-grey-100
              bic-c-button-primary-lime      disabled:cursor-not-allowed "
                                type="button"
                              >
                                <span>Explore</span>
                                <svg
                                  className="bic-svg-icon w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                  width={20}
                                  height={20}
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <figure className="!m-0  md:-ml-5 flex-1">
                            <img
                              decoding="async"
                              className="lazy absolute right-0 -bottom-3 md:bottom-auto md:top-0 md:mt-14 max-w-44 md:max-w-full md:max-h-[175px] max-h-[160px] object-contain w-auto entered loaded"
                              loading="lazy"
                              src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-6.png"
                              data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/product-item-6-360x307.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-6-150x128.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-6.png 451w"
                              data-src="https://beincrypto.com/wp-content/uploads/2024/02/product-item-6.png"
                              alt="LEARN TO EARN"
                              width={451}
                              height={384}
                              data-ll-status="loaded"
                              srcSet="https://beincrypto.com/wp-content/uploads/2024/02/product-item-6-360x307.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-6-150x128.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/product-item-6.png 451w"
                            />
                          </figure>
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-el="bic-b-hr-qr-code-banner"
                  id="block_b7c6293b5745606182b53f24ca62569a"
                  className="bic-b-hr-qr-code-banner bg-blue-600 [.dark_&]:bg-lime-600 rounded-4xl text-white [.dark_&]:text-dark-grey-700 py-8 md:px-8 px-5 lg:!mb-36 !mb-18"
                >
                  <div className="flex justify-between items-center">
                    <div className="max-w-185 flex flex-col gap-y-6 md:gap-y-8">
                      <h2 className="md:h1 h7">
                        Do you wanna learn the ins and outs of getting a job in the blockchain and crypto world?
                      </h2>
                      <div className=" hidden md:inline-flex">
                        <Link
                          className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-extra-large gap-x-2.5 s1 px-5 py-3.5 rounded-lg btn-extra-large bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary w-full md:w-fit uppercase"
                          href="https://t.me/BeInCryptoCommunity"
                          target="_blank"
                        >
                          <svg
                            className="w-8 h-8"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7.713-2.094c-.778.323-2.334.993-4.666 2.01-.378.15-.577.297-.595.441-.03.244.275.34.69.47l.175.056c.408.133.958.288 1.243.294.26.006.549-.101.868-.32 2.179-1.471 3.303-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.226 1.241-1.846 1.817a19.172 19.172 0 0 0-.546.522c-.38.366-.664.64.016 1.088.326.216.588.394.848.571.285.194.569.387.937.629.093.061.183.124.27.186.331.237.63.449.997.416.214-.02.435-.221.547-.82.265-1.418.786-4.487.907-5.752a1.41 1.41 0 0 0-.014-.315.337.337 0 0 0-.114-.217.522.522 0 0 0-.31-.093c-.301.005-.762.166-2.984 1.09Z"
                              fill="currentColor"
                            />
                          </svg>
                          We got you covered
                        </Link>
                      </div>
                      <div className="md:hidden block">
                        <Link
                          className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary w-full md:w-fit uppercase"
                          href="https://t.me/BeInCryptoCommunity"
                          target="_blank"
                        >
                          <svg
                            className="w-8 h-8"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7.713-2.094c-.778.323-2.334.993-4.666 2.01-.378.15-.577.297-.595.441-.03.244.275.34.69.47l.175.056c.408.133.958.288 1.243.294.26.006.549-.101.868-.32 2.179-1.471 3.303-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.226 1.241-1.846 1.817a19.172 19.172 0 0 0-.546.522c-.38.366-.664.64.016 1.088.326.216.588.394.848.571.285.194.569.387.937.629.093.061.183.124.27.186.331.237.63.449.997.416.214-.02.435-.221.547-.82.265-1.418.786-4.487.907-5.752a1.41 1.41 0 0 0-.014-.315.337.337 0 0 0-.114-.217.522.522 0 0 0-.31-.093c-.301.005-.762.166-2.984 1.09Z"
                              fill="currentColor"
                            />
                          </svg>
                          We got you covered
                        </Link>
                      </div>
                    </div>
                    <img
                      decoding="async"
                      className="lazy hidden md:block md:w-75 md:h-75 rounded-xl entered loaded"
                      loading="lazy"
                      src="https://beincrypto.com/wp-content/uploads/2023/08/qr-code.png"
                      data-srcset="https://beincrypto.com/wp-content/uploads/2023/08/qr-code-360x360.png 360w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-850x850.png 850w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-768x768.png 768w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-96x96.png 96w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-150x150.png 150w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code.png 1147w"
                      data-src="https://beincrypto.com/wp-content/uploads/2023/08/qr-code.png"
                      alt="Do you wanna learn the ins and outs of getting a job in the blockchain and crypto world?"
                      width={1147}
                      height={1147}
                      data-ll-status="loaded"
                      srcSet="https://beincrypto.com/wp-content/uploads/2023/08/qr-code-360x360.png 360w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-850x850.png 850w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-768x768.png 768w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-96x96.png 96w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code-150x150.png 150w, https://beincrypto.com/wp-content/uploads/2023/08/qr-code.png 1147w"
                    />
                  </div>
                </section>
                <section
                  data-el="bic-b-hr-teammates-block"
                  id="block_f0a04d088eae99d49a2d4f06e3c9f965"
                  className="bic-b-hr-teammates-block lg:!mb-36 !mb-18"
                >
                  <div className="mb-8 md:mb-10">
                    <h2 className="mb-5 md:mb-8 h3 md:h1">Meet our teammates</h2>
                    <div className="p2 [&_p]:p2 [&_p:last-child]:!mb-0">
                      <p>We’re 200+ Satoshi fans divided into 9 different teams, spread across 60+ countries.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-4">
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Alena.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Alena-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Alena-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Alena-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Alena.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Alena.jpg.optimal.jpg"
                        alt="Alena"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Alena-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Alena-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Alena-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Alena.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Alena</h4>
                        <div className="md:p4 p5">CEO &amp; Founder</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Alevtina.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Alevtina-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Alevtina-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Alevtina-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Alevtina.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Alevtina.jpg.optimal.jpg"
                        alt="Alevtina"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Alevtina-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Alevtina-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Alevtina-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Alevtina.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Alevtina</h4>
                        <div className="md:p4 p5">Head of Customer Success</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Ali.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Ali-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Ali-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Ali-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Ali.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Ali.jpg.optimal.jpg"
                        alt="Ali"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Ali-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Ali-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Ali-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Ali.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Ali</h4>
                        <div className="md:p4 p5">Global Head of News</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Arina.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Arina-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Arina-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Arina-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Arina.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Arina.jpg.optimal.jpg"
                        alt="Arina"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Arina-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Arina-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Arina-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Arina.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Arina</h4>
                        <div className="md:p4 p5">HR Director</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Dani.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Dani-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Dani-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Dani-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Dani.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Dani.jpg.optimal.jpg"
                        alt="Dani"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Dani-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Dani-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Dani-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Dani.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Dani</h4>
                        <div className="md:p4 p5">Co-Founder, Head of R&amp;D</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Daniel.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Daniel-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Daniel-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Daniel-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Daniel.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Daniel.jpg.optimal.jpg"
                        alt="Daniel"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Daniel-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Daniel-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Daniel-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Daniel.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Daniel</h4>
                        <div className="md:p4 p5">Sales Director</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Evgeny.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Evgeny-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Evgeny-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Evgeny-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Evgeny.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Evgeny.jpg.optimal.jpg"
                        alt="Evgeny"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Evgeny-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Evgeny-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Evgeny-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Evgeny.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Evgeny</h4>
                        <div className="md:p4 p5">Lead Data Analyst</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Jessica.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Jessica-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Jessica-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Jessica-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Jessica.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Jessica.jpg.optimal.jpg"
                        alt="Jessica"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Jessica-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Jessica-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Jessica-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Jessica.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Jessica</h4>
                        <div className="md:p4 p5">Head of Global Growth</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Norikazu.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Norikazu-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Norikazu-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Norikazu-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Norikazu.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Norikazu.jpg.optimal.jpg"
                        alt="Norikazu"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Norikazu-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Norikazu-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Norikazu-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Norikazu.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Norikazu</h4>
                        <div className="md:p4 p5">Marketing Director</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Varvara.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Varvara-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Varvara-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Varvara-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Varvara.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Varvara.jpg.optimal.jpg"
                        alt="Varvara"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Varvara-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Varvara-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Varvara-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Varvara.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Varvara</h4>
                        <div className="md:p4 p5">Chief Design Officer</div>
                      </div>
                    </div>
                    <div className="bg-grey-50 [.dark_&]:bg-dark-grey-500 rounded-2xxl">
                      <img
                        decoding="async"
                        className="lazy rounded-2xxl aspect-square object-cover entered loaded"
                        loading="lazy"
                        src="https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii.jpg.optimal.jpg"
                        data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii.jpg.optimal.jpg 406w"
                        data-src="https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii.jpg.optimal.jpg"
                        alt="Yevhenii"
                        width={406}
                        height={406}
                        data-ll-status="loaded"
                        srcSet="https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii-360x360.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii-96x96.jpg.optimal.jpg 96w, https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii-150x150.jpg.optimal.jpg 150w, https://beincrypto.com/wp-content/uploads/2024/02/Yevhenii.jpg.optimal.jpg 406w"
                      />
                      <div className="px-2.5 py-3 md:py-5 md:px-4">
                        <h4 className="s3 md:h8">Yevhenii</h4>
                        <div className="md:p4 p5">Head of Product</div>
                      </div>
                    </div>
                    <Link
                      href="/careers/"
                      target=""
                      className="s3 rounded-2xxl text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white [.dark_&]:text-lime-600 [.dark_&]:border-lime-600 [.dark_&]:hover:bg-lime-600 [.dark_&]:hover:text-dark-grey-700 flex items-center justify-center hover:no-underline"
                    >
                      <span className="flex items-center gap-x-2.5">
                        Join our team{' '}
                        <svg
                          className="bic-svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          width={20}
                          height={20}
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="m10.808 4.132 4.502 5.044L2 9.273l.028 1.487 13.339.032-4.532 5.109.963 1.099L18 10.016 11.77 3l-.962 1.132Z"
                            clipRule="evenodd"
                          />
                        </svg>{' '}
                      </span>
                    </Link>
                  </div>
                </section>
                <section
                  data-el="bic-b-hr-timeline-block"
                  id="block_51f02d42c9a4a555506e2022d3d20aaa"
                  className="bic-b-hr-timeline-block lg:!mb-36 !mb-18"
                >
                  <h2 className="mb-8 md:mb-16 h3 md:h1">BE[IN]CRYPTO timeline</h2>
                  <div className="[&_.bic-timeline-last-row_.timeline-line-break]:hidden [&_.bic-timeline-last-row_.bic-timeline-item-last]:pb-0 md:pt-9 relative">
                    <div className="mobile-timeline-line-track absolute top-0 left-7 block md:hidden [.dark_&]:text-lime-600 text-blue-600 [.dark_&]:border-lime-600 border-blue-600 border-l-3 w-0.75 h-[calc(100%-10px)] border-dashed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width={20}
                        style={{
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                          strokeLinejoin: 'round',
                          strokeMiterlimit: 2,
                        }}
                        viewBox="0 0 13 19"
                        className="absolute -bottom-1 -translate-x-1/2 rtl:translate-x-1/2 -left-px rtl:right-0.5"
                      >
                        <path
                          d="m9 1082 8.66-15H.34L9 1082Zm-1.5-25.05v10.02h3v-10.02h-3Z"
                          style={{ fill: 'currentColor', fillRule: 'nonzero' }}
                          transform="matrix(.75 0 0 .75 -.255 -792.713)"
                        />
                      </svg>
                    </div>
                    <div className=" grid overflow-hidden md:-mt-9 grid-cols-1 md:even:grid-cols-[180px_1fr_auto] md:odd:grid-cols-[auto_1fr_77px]">
                      <div className="overflow-hidden hidden md:block">
                        <div className="md:mt-8 md:-ml-6">
                          <svg
                            className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                            width={400}
                            height={18}
                            viewBox="0 0 400 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                              fill="currentColor"
                            />
                          </svg>{' '}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[minmax(390px,_1fr)_160px_minmax(390px,_1fr)]">
                        <div className="overflow-hidden hidden">
                          <div className="mt-[25px] -ml-4 mt-6 rotate-180 rtl:rotate-0 rtl:[&_svg]:translate-x-[57%] ">
                            <svg
                              className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                              width={400}
                              height={18}
                              viewBox="0 0 400 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                fill="currentColor"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                        <div className=" bic-timeline-item overflow-hidden grid grid-cols-[60px_1fr] md:min-h gap-x-5 md:block pb-8 md:pb-0">
                          <div className="relative">
                            <div className="item-index hidden md:block absolute -z-10 top-1/2 -translate-y-1/2  rotate-180 rtl:rotate-0 -right-6">
                              <svg
                                className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                                width={400}
                                height={18}
                                viewBox="0 0 400 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                  fill="currentColor"
                                />
                              </svg>{' '}
                            </div>
                            <div className="py-2 px-3 md:py-3.5 md:px-5 rounded-7xl md:mb-9 s3 md:h3 text-white bg-blue-600 [.dark_&]:bg-lime-600 text-center md:max-w-34 [.dark_&]:text-dark-grey-700">
                              2018
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-2 md:mb-3 h7 h7--bold uppercase">September</div>
                            <div className="p4 md:p2">
                              <p>
                                Alena Afanaseva and a team of four make her dream of creating a trustworthy crypto media
                                outlet available to everyone a reality: BeInCrypto is launched 🚀
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden hidden md:block ">
                          <div className="mt-[25px] -ml-4 mt-6 rotate-180 rtl:rotate-0 rtl:[&_svg]:translate-x-[57%]">
                            <svg
                              className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                              width={400}
                              height={18}
                              viewBox="0 0 400 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                fill="currentColor"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                        <div className=" bic-timeline-item overflow-hidden grid grid-cols-[60px_1fr] md:min-h gap-x-5 md:block pb-8 md:pb-0">
                          <div className="relative">
                            <div className="item-index hidden md:block absolute -z-10 top-1/2 -translate-y-1/2  rotate-180 rtl:rotate-0 -right-6">
                              <svg
                                className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                                width={400}
                                height={18}
                                viewBox="0 0 400 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                  fill="currentColor"
                                />
                              </svg>{' '}
                            </div>
                            <div className="py-2 px-3 md:py-3.5 md:px-5 rounded-7xl md:mb-9 s3 md:h3 text-white bg-blue-600 [.dark_&]:bg-lime-600 text-center md:max-w-34 [.dark_&]:text-dark-grey-700">
                              2019
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-2 md:mb-3 h7 h7--bold uppercase">October</div>
                            <div className="p4 md:p2">
                              <p>
                                BeInCrypto broadens its horizons by providing original content in Spanish, Portuguese,
                                Russian, and Turkish through dedicated pages, with the goal of offering Web3 content in
                                more languages than any other publisher. BeInCrypto reaches 1 million monthly active
                                users.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:mt-8 hidden md:block rtl:rotate-180 rtl:[.dark_&]:bg-dark-grey-700 rtl:bg-white z-10">
                        <svg
                          className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                          width={165}
                          height={385}
                          viewBox="0 0 165 385"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.22816e-06 383C21.4055 383 42.6013 378.073 62.3774 368.499C82.1535 358.926 100.122 344.893 115.258 327.204C130.394 309.514 142.401 288.514 150.592 265.401C158.784 242.289 163 217.517 163 192.5C163 167.483 158.784 142.711 150.592 119.599C142.401 96.4863 130.394 75.4857 115.258 57.7961C100.122 40.1066 82.1535 26.0745 62.3774 16.5009C42.6013 6.92742 21.4055 1.99999 1.39887e-05 1.99999"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeDasharray="10 10"
                          />
                        </svg>{' '}
                      </div>
                    </div>
                    <div className=" grid overflow-hidden md:-mt-9 grid-cols-1 md:even:grid-cols-[180px_1fr_auto] md:odd:grid-cols-[auto_1fr_77px]">
                      <div className="md:mt-8 rotate-180 rtl:rotate-0 hidden md:block timeline-line-break rtl:[.dark_&]:bg-dark-grey-700 rtl:bg-white rtl:z-10">
                        <svg
                          className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                          width={165}
                          height={385}
                          viewBox="0 0 165 385"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.22816e-06 383C21.4055 383 42.6013 378.073 62.3774 368.499C82.1535 358.926 100.122 344.893 115.258 327.204C130.394 309.514 142.401 288.514 150.592 265.401C158.784 242.289 163 217.517 163 192.5C163 167.483 158.784 142.711 150.592 119.599C142.401 96.4863 130.394 75.4857 115.258 57.7961C100.122 40.1066 82.1535 26.0745 62.3774 16.5009C42.6013 6.92742 21.4055 1.99999 1.39887e-05 1.99999"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeDasharray="10 10"
                          />
                        </svg>{' '}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(390px,_1fr)_160px_minmax(390px,_1fr)] md:-mr-[77px]">
                        <div className="overflow-hidden hidden md:block">
                          <div className="mt-[25px] -ml-4 ">
                            <svg
                              className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                              width={400}
                              height={18}
                              viewBox="0 0 400 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                fill="currentColor"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                        <div className=" bic-timeline-item overflow-hidden grid grid-cols-[60px_1fr] md:min-h gap-x-5 md:block pb-8 md:pb-0">
                          <div className="relative">
                            <div className="item-index hidden md:block absolute -z-10 top-1/2 -translate-y-1/2  -right-[146px] rtl:right-[88px] rtl:[&_svg]:translate-x-[59%] rtl:rotate-180 rtl:max-w-none">
                              <svg
                                className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                                width={400}
                                height={18}
                                viewBox="0 0 400 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                  fill="currentColor"
                                />
                              </svg>{' '}
                            </div>
                            <div className="py-2 px-3 md:py-3.5 md:px-5 rounded-7xl md:mb-9 s3 md:h3 text-white bg-blue-600 [.dark_&]:bg-lime-600 text-center md:max-w-34 [.dark_&]:text-dark-grey-700">
                              2021
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-2 md:mb-3 h7 h7--bold uppercase">March</div>
                            <div className="p4 md:p2">
                              <p>
                                BeInCrypto joins the “Trust Project,” ensuring transparency, accuracy, and fairness in
                                reporting. BeInCrypto expands to 13 languages, leading the industry with the most
                                extensive language coverage in crypto news publishing.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden hidden md:block ">
                          <div className="mt-[25px] -ml-4">
                            <svg
                              className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                              width={400}
                              height={18}
                              viewBox="0 0 400 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                fill="currentColor"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                        <div className=" bic-timeline-item overflow-hidden grid grid-cols-[60px_1fr] md:min-h gap-x-5 md:block pb-8 md:pb-0">
                          <div className="relative">
                            <div className="item-index hidden md:block absolute -z-10 top-1/2 -translate-y-1/2 right-auto left-34 overflow-hidden max-w-20 -right-[146px] rtl:right-[88px] rtl:[&_svg]:translate-x-[59%] rtl:rotate-180 rtl:max-w-none">
                              <svg
                                className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                                width={400}
                                height={18}
                                viewBox="0 0 400 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                  fill="currentColor"
                                />
                              </svg>{' '}
                            </div>
                            <div className="py-2 px-3 md:py-3.5 md:px-5 rounded-7xl md:mb-9 s3 md:h3 text-white bg-blue-600 [.dark_&]:bg-lime-600 text-center md:max-w-34 [.dark_&]:text-dark-grey-700">
                              2020
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-2 md:mb-3 h7 h7--bold uppercase">December</div>
                            <div className="p4 md:p2">
                              <p>
                                BeInCrypto steps beyond news media, launching Learn to empower Web3 journeys with
                                tailored education. It offers real-time trackers to compare and rank cryptocurrencies,
                                exchanges, wallets, and credit cards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden opacity-0 hidden md:block">
                        <div className="md:mt-8 md:-ml-6">
                          <svg
                            className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                            width={400}
                            height={18}
                            viewBox="0 0 400 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                              fill="currentColor"
                            />
                          </svg>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="bic-timeline-last-row grid overflow-hidden md:-mt-9 grid-cols-1 md:even:grid-cols-[180px_1fr_auto] md:odd:grid-cols-[auto_1fr_77px]">
                      <div className="overflow-hidden hidden md:block">
                        <div className="max-w-[21px] mt-[24.5px] overflow-hidden ml-auto rotate-180 rtl:rotate-0 rtl:[&_svg]:translate-x-[95%]">
                          <svg
                            className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                            width={400}
                            height={18}
                            viewBox="0 0 400 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                              fill="currentColor"
                            />
                          </svg>{' '}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[minmax(390px,_1fr)_160px_minmax(390px,_1fr)]">
                        <div className="overflow-hidden hidden">
                          <div className="mt-[25px] -ml-4 mt-6 rotate-180 rtl:rotate-0 rtl:[&_svg]:translate-x-[57%] ml-0 rtl:rotate-180 rtl:[&_svg]:translate-x-[10%]">
                            <svg
                              className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                              width={400}
                              height={18}
                              viewBox="0 0 400 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                fill="currentColor"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                        <div className=" bic-timeline-item overflow-hidden grid grid-cols-[60px_1fr] md:min-h gap-x-5 md:block pb-8 md:pb-0">
                          <div className="relative">
                            <div className="item-index hidden md:block absolute -z-10 top-1/2 -translate-y-1/2  rotate-180 rtl:rotate-0 -right-6">
                              <svg
                                className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                                width={400}
                                height={18}
                                viewBox="0 0 400 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                  fill="currentColor"
                                />
                              </svg>{' '}
                            </div>
                            <div className="py-2 px-3 md:py-3.5 md:px-5 rounded-7xl md:mb-9 s3 md:h3 text-white bg-blue-600 [.dark_&]:bg-lime-600 text-center md:max-w-34 [.dark_&]:text-dark-grey-700">
                              2022
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-2 md:mb-3 h7 h7--bold uppercase">July</div>
                            <div className="p4 md:p2">
                              <p>
                                BeInCrypto launches its career platform for job seekers and employers committed to
                                building innovative and thriving workplaces that drive success in Web3.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden hidden md:block ">
                          <div className="mt-[25px] -ml-4 mt-6 rotate-180 rtl:rotate-0 rtl:[&_svg]:translate-x-[57%]">
                            <svg
                              className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                              width={400}
                              height={18}
                              viewBox="0 0 400 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                fill="currentColor"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                        <div className="bic-timeline-item-last bic-timeline-item overflow-hidden grid grid-cols-[60px_1fr] md:min-h gap-x-5 md:block pb-8 md:pb-0">
                          <div className="relative">
                            <div className="item-index hidden md:block absolute -z-10 top-1/2 -translate-y-1/2  rotate-180 rtl:rotate-0 -right-6">
                              <svg
                                className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                                width={400}
                                height={18}
                                viewBox="0 0 400 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                                  fill="currentColor"
                                />
                              </svg>{' '}
                            </div>
                            <div className="py-2 px-3 md:py-3.5 md:px-5 rounded-7xl md:mb-9 s3 md:h3 text-white bg-blue-600 [.dark_&]:bg-lime-600 text-center md:max-w-34 [.dark_&]:text-dark-grey-700">
                              2023
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-2 md:mb-3 h7 h7--bold uppercase">February</div>
                            <div className="p4 md:p2">
                              <p>
                                With over 60 markets in 14 languages, BeInCrypto solidifies its position as the #1
                                crypto media organization by coverage. BeInCrypto launches a consultancy arm focused on
                                HR and talent management to support businesses transitioning to Web3.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden hidden md:block">
                        <div className="mt-[25px] md:ml-0 rotate-180 rtl:rotate-0 rtl:[&_svg]:translate-x-[55%]">
                          <svg
                            className="bic-svg-icon [.dark_&]:text-lime-600 text-blue-600"
                            width={400}
                            height={18}
                            viewBox="0 0 400 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 8.99997L15 17.6602L15 0.339712L0 8.99997ZM400 7.5L395 7.5L395 10.5L400 10.5L400 7.5ZM385 7.5L375 7.5L375 10.5L385 10.5L385 7.5ZM365 7.5L355 7.5L355 10.5L365 10.5L365 7.5ZM345 7.5L335 7.49999L335 10.5L345 10.5L345 7.5ZM325 7.49999L315 7.49999L315 10.5L325 10.5L325 7.49999ZM305 7.49999L295 7.49999L295 10.5L305 10.5L305 7.49999ZM285 7.49999L275 7.49999L275 10.5L285 10.5L285 7.49999ZM265 7.49999L255 7.49999L255 10.5L265 10.5L265 7.49999ZM245 7.49999L235 7.49999L235 10.5L245 10.5L245 7.49999ZM225 7.49998L215 7.49998L215 10.5L225 10.5L225 7.49998ZM205 7.49998L195 7.49998L195 10.5L205 10.5L205 7.49998ZM185 7.49998L175 7.49998L175 10.5L185 10.5L185 7.49998ZM165 7.49998L155 7.49998L155 10.5L165 10.5L165 7.49998ZM145 7.49998L135 7.49998L135 10.5L145 10.5L145 7.49998ZM125 7.49998L115 7.49998L115 10.5L125 10.5L125 7.49998ZM105 7.49997L95 7.49997L95 10.5L105 10.5L105 7.49997ZM85 7.49997L75 7.49997L75 10.5L85 10.5L85 7.49997ZM65 7.49997L55 7.49997L55 10.5L65 10.5L65 7.49997ZM45 7.49997L35 7.49997L35 10.5L45 10.5L45 7.49997ZM25 7.49997L15 7.49997L15 10.5L25 10.5L25 7.49997Z"
                              fill="currentColor"
                            />
                          </svg>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-el="bic-b-hr-awards-block"
                  id="block_881e5d4b56eb00580a03d2c47624c2c3"
                  className="lg:!mb-36 !mb-18"
                >
                  <h2 className="mb-8 md:mb-15 h3 md:h1">BE[IN]CRYPTO rocks</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="rounded-xl py-5 px-3 md:py-8 md:px-6 [.dark_&]:bg-dark-grey-500 bg-grey-50 text-center">
                      <Link
                        href="https://uk.advfn.com/newspaper/advfnnews/59202/winners-of-the-advfn-international-financial-awards-2021-announced"
                        target="_blank"
                      >
                        {' '}
                        <img
                          decoding="async"
                          className="lazy object-contain mb-5 md:mb-6 w-full h-13 md:h-32 entered loaded"
                          loading="lazy"
                          src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1.png"
                          data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1.png 620w"
                          data-src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1.png"
                          alt="Best Website for Crypto News"
                          width={620}
                          height={260}
                          data-ll-status="loaded"
                          srcSet="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-1.png 620w"
                        />
                        <div className="text-blue-600 [.dark_&]:text-lime-600 s2 md:h6 mb-2 md:mb-4">2021</div>
                        <div className="s3 md:h5 s3--normal-case">Best Website for Crypto News</div>
                      </Link>{' '}
                    </div>
                    <div className="rounded-xl py-5 px-3 md:py-8 md:px-6 [.dark_&]:bg-dark-grey-500 bg-grey-50 text-center">
                      <Link href="https://blockchaineconomy.istanbul/en" target="_blank">
                        {' '}
                        <img
                          decoding="async"
                          className="lazy object-contain mb-5 md:mb-6 w-full h-13 md:h-32 entered loaded"
                          loading="lazy"
                          src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png"
                          data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png 620w"
                          data-src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png"
                          alt="Main #Media Parter"
                          width={620}
                          height={260}
                          data-ll-status="loaded"
                          srcSet="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png 620w"
                        />
                        <div className="text-blue-600 [.dark_&]:text-lime-600 s2 md:h6 mb-2 md:mb-4">2022</div>
                        <div className="s3 md:h5 s3--normal-case">Main #Media Parter</div>
                      </Link>{' '}
                    </div>
                    <div className="rounded-xl py-5 px-3 md:py-8 md:px-6 [.dark_&]:bg-dark-grey-500 bg-grey-50 text-center">
                      <Link
                        href="https://beincrypto.com/beincrypto-ceo-to-deliver-labitconf-2022-awards/"
                        target="_blank"
                      >
                        {' '}
                        <img
                          decoding="async"
                          className="lazy object-contain mb-5 md:mb-6 w-full h-13 md:h-32 entered loaded"
                          loading="lazy"
                          src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3.png"
                          data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3.png 620w"
                          data-src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3.png"
                          alt="Host of Labitconf Awards"
                          width={620}
                          height={260}
                          data-ll-status="loaded"
                          srcSet="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-3.png 620w"
                        />
                        <div className="text-blue-600 [.dark_&]:text-lime-600 s2 md:h6 mb-2 md:mb-4">2022</div>
                        <div className="s3 md:h5 s3--normal-case">Host of Labitconf Awards</div>
                      </Link>{' '}
                    </div>
                    <div className="rounded-xl py-5 px-3 md:py-8 md:px-6 [.dark_&]:bg-dark-grey-500 bg-grey-50 text-center">
                      <Link href="https://beconomydubai.com/" target="_blank">
                        {' '}
                        <img
                          decoding="async"
                          className="lazy object-contain mb-5 md:mb-6 w-full h-13 md:h-32 entered loaded"
                          loading="lazy"
                          src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png"
                          data-srcset="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png 620w"
                          data-src="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png"
                          alt="Main #Media Parter"
                          width={620}
                          height={260}
                          data-ll-status="loaded"
                          srcSet="https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-360x151.png 360w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2-150x63.png 150w, https://beincrypto.com/wp-content/uploads/2024/02/hr-awards-2.png 620w"
                        />
                        <div className="text-blue-600 [.dark_&]:text-lime-600 s2 md:h6 mb-2 md:mb-4">2022</div>
                        <div className="s3 md:h5 s3--normal-case">Main #Media Parter</div>
                      </Link>{' '}
                    </div>
                  </div>
                </section>
                <section
                  className="bic-news-card-custom bic-news-card-custom-row mt-15 container mb-0 lg:mb-20 lg:mt-40 relative overflow-hidden"
                  id="block_22bc8f5021905b275fd0ba09a0c53d6c"
                  data-el='"bic-b-custom-news-card"'
                >
                  <div className="">
                    <div className="mb-8 md:mb-15">
                      <h2 className="h3 md:h1 lg:container">You might be interested in</h2>
                    </div>
                    <div className="w-auto h-auto">
                      <div className="">
                        <div className="w-auto h-auto" data-style="row" data-el="bic-news-card-swiper">
                          <ul className="swiper-wrapper unstyled-content-list flex !list-none lg:gap-x-5">
                            <li className="lg:max-w-77.5 min-w-60 swiper-slide max-w-full lg:mr-0">
                              <div data-el="bic-c-news-big" className="flex w-full flex-col h-auto ">
                                <div className="shrink-0 rounded-lg md:rounded-xl mb-2.5 md:mb-3 max-w-full overflow-hidden">
                                  <Link href="https://beincrypto.com/beincrypto-ceo-reflects-company-after-five-years/">
                                    <img
                                      decoding="async"
                                      fetchpriority="high"
                                      className="lazy object-cover aspect-video w-full entered loaded"
                                      data-sizes=""
                                      src="https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva.png"
                                      data-src="https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva.png"
                                      data-srcset="https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva-360x203.png 360w, https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva-850x478.png 850w, https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva-768x432.png 768w, https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva.png 1280w"
                                      alt="BeInCrypto CEO Alena Afanaseva Talks to Forbes on International Women’s Day"
                                      width={310}
                                      height={196}
                                      data-ll-status="loaded"
                                      srcSet="https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva-360x203.png 360w, https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva-850x478.png 850w, https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva-768x432.png 768w, https://beincrypto.com/wp-content/uploads/2023/03/EN_Alena_Afanaseva.png 1280w"
                                    />
                                  </Link>
                                </div>
                                <div className="flex flex-col justify-between w-full lg:h-full">
                                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-dark-grey-700 p4  mb-1 gap-x-3">
                                    <Link
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      href="https://beincrypto.com/markets/"
                                    >
                                      Markets
                                    </Link>
                                    <Link
                                      href="https://beincrypto.com/news/"
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      title="News Report"
                                      style={{ color: '#e25500' }}
                                    >
                                      <span className="tpw tpw_style1 tpw_5686 " style={{ color: '#e25500' }}>
                                        News Report
                                      </span>
                                    </Link>
                                  </div>
                                  <h5 className="h-full s2 s2--medium mb-2 lg:s1 lg:s1--medium">
                                    <Link
                                      href="https://beincrypto.com/beincrypto-ceo-reflects-company-after-five-years/"
                                      className="hover:no-underline"
                                    >
                                      BeInCrypto CEO Alena Afanaseva Talks to Forbes on International Women’s Day
                                    </Link>
                                  </h5>
                                  <div className="flex items-center text-grey-700 [.dark_&]:text-white p5 gap-x-4">
                                    <span className="inline-flex items-center">
                                      <svg
                                        className="bic-svg-icon mr-1"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                                          fill="currentColor"
                                        />
                                      </svg>{' '}
                                      <span className="font-normal body">2 mins</span>
                                    </span>
                                    <time className="date whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      Mar 08, 2023
                                    </time>{' '}
                                    <time className="ago whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      1 year ago
                                    </time>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="lg:max-w-77.5 min-w-60 swiper-slide max-w-full lg:mr-0">
                              <div data-el="bic-c-news-big" className="flex w-full flex-col h-auto ">
                                <div className="shrink-0 rounded-lg md:rounded-xl mb-2.5 md:mb-3 max-w-full overflow-hidden">
                                  <Link href="https://beincrypto.com/women-in-crypto-closing-the-gender-gap-in-a-bro-culture-industry/">
                                    <img
                                      decoding="async"
                                      className="lazy object-cover aspect-video w-full entered loaded"
                                      data-sizes=""
                                      src="https://beincrypto.com/wp-content/uploads/2022/12/Cover-site.png"
                                      data-src="https://beincrypto.com/wp-content/uploads/2022/12/Cover-site.png"
                                      data-srcset="https://beincrypto.com/wp-content/uploads/2022/12/Cover-site-360x203.png 360w, https://beincrypto.com/wp-content/uploads/2022/12/Cover-site-850x478.png 850w, https://beincrypto.com/wp-content/uploads/2022/12/Cover-site-768x432.png 768w, https://beincrypto.com/wp-content/uploads/2022/12/Cover-site.png 1280w"
                                      alt="Women in Crypto: Closing The Gender Gap in a ‘Bro-Culture’ Industry"
                                      width={310}
                                      height={196}
                                      data-ll-status="loaded"
                                      srcSet="https://beincrypto.com/wp-content/uploads/2022/12/Cover-site-360x203.png 360w, https://beincrypto.com/wp-content/uploads/2022/12/Cover-site-850x478.png 850w, https://beincrypto.com/wp-content/uploads/2022/12/Cover-site-768x432.png 768w, https://beincrypto.com/wp-content/uploads/2022/12/Cover-site.png 1280w"
                                    />
                                  </Link>
                                </div>
                                <div className="flex flex-col justify-between w-full lg:h-full">
                                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-dark-grey-700 p4  mb-1 gap-x-3">
                                    <Link
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      href="https://beincrypto.com/markets/"
                                    >
                                      Markets
                                    </Link>
                                    <Link
                                      href="https://beincrypto.com/opinion/"
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      title="Opinion"
                                      style={{ color: '#676767' }}
                                    >
                                      <span className="tpw tpw_style1 tpw_6a05 " style={{ color: '#676767' }}>
                                        Opinion
                                      </span>
                                    </Link>
                                  </div>
                                  <h5 className="h-full s2 s2--medium mb-2 lg:s1 lg:s1--medium">
                                    <Link
                                      href="https://beincrypto.com/women-in-crypto-closing-the-gender-gap-in-a-bro-culture-industry/"
                                      className="hover:no-underline"
                                    >
                                      Women in Crypto: Closing The Gender Gap in a ‘Bro-Culture’ Industry
                                    </Link>
                                  </h5>
                                  <div className="flex items-center text-grey-700 [.dark_&]:text-white p5 gap-x-4">
                                    <span className="inline-flex items-center">
                                      <svg
                                        className="bic-svg-icon mr-1"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                                          fill="currentColor"
                                        />
                                      </svg>{' '}
                                      <span className="font-normal body">6 mins</span>
                                    </span>
                                    <time className="date whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      Dec 21, 2022
                                    </time>{' '}
                                    <time className="ago whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      1 year ago
                                    </time>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="lg:max-w-77.5 min-w-60 swiper-slide max-w-full lg:mr-0">
                              <div data-el="bic-c-news-big" className="flex w-full flex-col h-auto ">
                                <div className="shrink-0 rounded-lg md:rounded-xl mb-2.5 md:mb-3 max-w-full overflow-hidden">
                                  <Link href="https://beincrypto.com/female-leadership-critical-web3-success/">
                                    <img
                                      decoding="async"
                                      className="lazy object-cover aspect-video w-full entered loaded"
                                      data-sizes=""
                                      src="https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins.png"
                                      data-src="https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins.png"
                                      data-srcset="https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins-360x203.png 360w, https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins-850x478.png 850w, https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins-768x432.png 768w, https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins.png 1280w"
                                      alt="The Untapped Potential of Female Leadership Is Critical for Web3 and Crypto Long-Term Success "
                                      width={310}
                                      height={196}
                                      data-ll-status="loaded"
                                      srcSet="https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins-360x203.png 360w, https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins-850x478.png 850w, https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins-768x432.png 768w, https://beincrypto.com/wp-content/uploads/2023/03/bic_women_crypto_coins.png 1280w"
                                    />
                                  </Link>
                                </div>
                                <div className="flex flex-col justify-between w-full lg:h-full">
                                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-dark-grey-700 p4  mb-1 gap-x-3">
                                    <Link
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      href="https://beincrypto.com/markets/"
                                    >
                                      Markets
                                    </Link>
                                    <Link
                                      href="https://beincrypto.com/opinion/"
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      title="Opinion"
                                      style={{ color: '#676767' }}
                                    >
                                      <span className="tpw tpw_style1 tpw_6a05 " style={{ color: '#676767' }}>
                                        Opinion
                                      </span>
                                    </Link>
                                  </div>
                                  <h5 className="h-full s2 s2--medium mb-2 lg:s1 lg:s1--medium">
                                    <Link
                                      href="https://beincrypto.com/female-leadership-critical-web3-success/"
                                      className="hover:no-underline"
                                    >
                                      The Untapped Potential of Female Leadership Is Critical for Web3 and Crypto
                                      Long-Term Success&nbsp;
                                    </Link>
                                  </h5>
                                  <div className="flex items-center text-grey-700 [.dark_&]:text-white p5 gap-x-4">
                                    <span className="inline-flex items-center">
                                      <svg
                                        className="bic-svg-icon mr-1"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                                          fill="currentColor"
                                        />
                                      </svg>{' '}
                                      <span className="font-normal body">4 mins</span>
                                    </span>
                                    <time className="date whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      Mar 30, 2023
                                    </time>{' '}
                                    <time className="ago whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      1 year ago
                                    </time>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="lg:max-w-77.5 min-w-60 swiper-slide max-w-full lg:mr-0">
                              <div data-el="bic-c-news-big" className="flex w-full flex-col h-auto ">
                                <div className="shrink-0 rounded-lg md:rounded-xl mb-2.5 md:mb-3 max-w-full overflow-hidden">
                                  <Link href="https://beincrypto.com/beincrypto-ceo-alena-afanaseva-talks-web3-jobs/">
                                    <img
                                      decoding="async"
                                      loading="lazy"
                                      className="lazy object-cover aspect-video w-full entered loaded"
                                      data-sizes=""
                                      src="https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto-.jpg.optimal.jpg"
                                      data-src="https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto-.jpg.optimal.jpg"
                                      data-srcset="https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto--360x203.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto--850x478.jpg.optimal.jpg 850w, https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto--768x432.jpg.optimal.jpg 768w, https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto-.jpg.optimal.jpg 1280w"
                                      alt="BeInCrypto CEO Alena Afanaseva Talks Web3 Jobs in Keynote at LABITCONF 2022"
                                      width={310}
                                      height={196}
                                      data-ll-status="loaded"
                                      srcSet="https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto--360x203.jpg.optimal.jpg 360w, https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto--850x478.jpg.optimal.jpg 850w, https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto--768x432.jpg.optimal.jpg 768w, https://beincrypto.com/wp-content/uploads/2022/11/Alena-Afanaseva-CEO-BeInCrypto-.jpg.optimal.jpg 1280w"
                                    />
                                  </Link>
                                </div>
                                <div className="flex flex-col justify-between w-full lg:h-full">
                                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-dark-grey-700 p4  mb-1 gap-x-3">
                                    <Link
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      href="https://beincrypto.com/markets/"
                                    >
                                      Markets
                                    </Link>
                                    <Link
                                      href="https://beincrypto.com/news/"
                                      className="whitespace-nowrap hover:underline [.dark_&]:text-white"
                                      title="News Report"
                                      style={{ color: '#e25500' }}
                                    >
                                      <span className="tpw tpw_style1 tpw_5686 " style={{ color: '#e25500' }}>
                                        News Report
                                      </span>
                                    </Link>
                                  </div>
                                  <h5 className="h-full s2 s2--medium mb-2 lg:s1 lg:s1--medium">
                                    <Link
                                      href="https://beincrypto.com/beincrypto-ceo-alena-afanaseva-talks-web3-jobs/"
                                      className="hover:no-underline"
                                    >
                                      BeInCrypto CEO Alena Afanaseva Talks Web3 Jobs in Keynote at LABITCONF 2022
                                    </Link>
                                  </h5>
                                  <div className="flex items-center text-grey-700 [.dark_&]:text-white p5 gap-x-4">
                                    <span className="inline-flex items-center">
                                      <svg
                                        className="bic-svg-icon mr-1"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                                          fill="currentColor"
                                        />
                                      </svg>{' '}
                                      <span className="font-normal body">4 mins</span>
                                    </span>
                                    <time className="date whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      Nov 14, 2022
                                    </time>{' '}
                                    <time className="ago whitespace-nowrap" dateTime="2018-08-21T12:17:56+00:00">
                                      2 years ago
                                    </time>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="text-dark-grey-700 border-grey-300 swiper-button-prev left-0 hidden rounded-full border bg-white">
                            <svg
                              className="bic-svg-icon relative -left-px -rotate-180 text-dark-grey-700"
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="none"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="m9.435 8-3.603 3.49c-.31.3-.31.79 0 1.09a.787.787 0 0 0 1.092 0L11.652 8 6.924 3.42a.788.788 0 0 0-1.092 0c-.31.3-.31.79 0 1.09L9.435 8Z"
                                clipRule="evenodd"
                              />
                            </svg>{' '}
                          </div>
                          <div className="border-grey-300 swiper-button-next text-dark-grey-700 hidden rounded-full border bg-white">
                            <svg
                              className="bic-svg-icon relative -right-px text-dark-grey-700"
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="none"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="m9.435 8-3.603 3.49c-.31.3-.31.79 0 1.09a.787.787 0 0 0 1.092 0L11.652 8 6.924 3.42a.788.788 0 0 0-1.092 0c-.31.3-.31.79 0 1.09L9.435 8Z"
                                clipRule="evenodd"
                              />
                            </svg>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center justify-center">
                    <Link
                      className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 dark:bg-lime-600 dark:hover:bg-lime-700 bic-c-button-primary-lime dark:text-dark-grey-700 dark:border-lime-600 dark:hover:border-lime-700 uppercase"
                      href="/news/"
                      target=""
                    >
                      <span>More Articles</span>
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="container relative z-20 footer [.dark_&]:text-white text-dark-grey-700">
        <footer className="px-6 pt-10 pb-10 mt-10 lg:mt-12 rounded-2xl lg:pt-11 lg:pb-15 lg:px-12 bg-grey-100 [.dark_&]:bg-dark-grey-500">
          <Link
            href="https://beincrypto.com"
            className="inline-block pb-12 m-0 bic-logo lg:pb-13"
            aria-label="BeInCrypto"
          >
            <svg
              className="bic-svg-icon w-full max-w-34 footer-logo"
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
            </svg>{' '}
          </Link>
          <div className="flex flex-wrap footer-content lg:justify-between">
            <div className="bic-newsletter w-full lg:max-w-[530px]">
              <p className="s3 inline-flex items-center m-0 mb-5 uppercase lg:mb-8 gap-x-1.5 [.dark_&]:text-grey-400 text-grey-600">
                <svg
                  className="bic-svg-icon  w-4 h-4"
                  width={12}
                  height={12}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 12 12"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit={2}
                >
                  <path
                    d="m10 4 1.273 4.727L16 10l-4.727 1.273L10 16l-1.273-4.727L4 10l4.727-1.273L10 4Z"
                    transform="translate(-4 -4)"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>{' '}
                Stay up to date on crypto
              </p>
              <div className="">
                <h3 className="mb-4 lg:mb-6 h4 lg:hrt6 block">Join our newsletter</h3>
                <Link
                  className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 dark:bg-lime-600 dark:hover:bg-lime-700 bic-c-button-primary-lime dark:text-dark-grey-700 dark:border-lime-600 dark:hover:border-lime-700 w-full md:max-w-60"
                  href="https://beincrypto.com/newsletters/"
                  target="_blank"
                >
                  <span>Subscribe</span>
                </Link>
              </div>
            </div>
            <div className="w-full footer-menu mt-15 lg:mt-0 lg:max-w-[490px]">
              <div className="menu-main-footer-menu-container">
                <ul id="menu-main-footer-menu" className="footer-menu flex flex-wrap lg:flex-nowrap lg:justify-between">
                  <li
                    id="menu-item-280564"
                    className="w-1/2 last:w-full lg:w-auto lg:last:w-auto last:mt-9 lg:last:mt-0 [&:last-child>.sub-menu]:grid [&:last-child>.sub-menu]:grid-cols-2 lg:[&:last-child>.sub-menu]:block"
                  >
                    <h2 className="menu-title s3 text-grey-600  mb-5 lg:mb-6 ">Company</h2>
                    <nav className="sub-menu">
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "about-us"}'
                        href="https://beincrypto.com/about/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2  active text-blue-600 [.dark_&]:text-lime-600"
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          About Us
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "our-authors"}'
                        href="https://beincrypto.com/our-authors/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Our Authors
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "careers-%f0%9f%9a%80"}'
                        href="https://beincrypto.com/careers/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Careers 🚀
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "our-team"}'
                        href="https://beincrypto.com/our-team/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Our Team
                        </span>
                      </Link>
                    </nav>
                  </li>
                  <li
                    id="menu-item-280569"
                    className="w-1/2 last:w-full lg:w-auto lg:last:w-auto last:mt-9 lg:last:mt-0 [&:last-child>.sub-menu]:grid [&:last-child>.sub-menu]:grid-cols-2 lg:[&:last-child>.sub-menu]:block"
                  >
                    <h2 className="menu-title s3 text-grey-600  mb-5 lg:mb-6 ">Products</h2>
                    <nav className="sub-menu">
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "news"}'
                        href="/news/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          News
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "cryptocurrencies"}'
                        href="/price/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Cryptocurrencies
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "exchanges"}'
                        href="/exchanges/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Exchanges
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "learn"}'
                        href="https://beincrypto.com/learn/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Learn
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "newsletters"}'
                        href="https://beincrypto.com/newsletters/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Newsletters
                        </span>
                        <span className="p6 p6--ns py-1 px-1.5 rounded bg-dark-grey-700 text-lime-600 [.dark_&]:bg-blue-400 [.dark_&]:text-dark-grey-700">
                          NEW
                        </span>
                      </Link>
                    </nav>
                  </li>
                  <li
                    id="menu-item-280573"
                    className="w-1/2 last:w-full lg:w-auto lg:last:w-auto last:mt-9 lg:last:mt-0 [&:last-child>.sub-menu]:grid [&:last-child>.sub-menu]:grid-cols-2 lg:[&:last-child>.sub-menu]:block"
                  >
                    <h2 className="menu-title s3 text-grey-600  mb-5 lg:mb-6 ">Resources</h2>
                    <nav className="sub-menu">
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "advertise"}'
                        target="_blank"
                        href="/sales/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Advertise
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "remote-jobs"}'
                        target="_blank"
                        href="/jobs/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Remote Jobs
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "contact"}'
                        href="https://beincrypto.com/contact/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Contact
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "the-trust-project"}'
                        href="https://beincrypto.com/trust-project/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          The Trust Project
                        </span>
                      </Link>
                      <Link
                        data-el="footer-menu-item"
                        data-analytics='{"en": "menu", "ec": "web:desktop:menu", "el": "footer-menu", "ev": "verification-methodology"}'
                        href="https://beincrypto.com/methodology/"
                        className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                      >
                        <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                          Verification Methodology
                        </span>
                      </Link>
                    </nav>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-inherit flex flex-col flex-wrap items-center py-6 text-center lg:grid lg:grid-cols-3 lg:flex-row lg:py-4.5 gap-y-6 lg:gap-y-0 lg:text-left">
          <small className="order-3 inline-block font-sans text-3 font-medium leading-4 lg:order-1 lg:text-3.5 lg:leading-5">
            © 2024 BeInNews Academy.
          </small>
          <div className="order-2 lg:justify-self-center">
            <ul
              id="menu-policies-pages"
              className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-x-7 lg:gap-x-10"
            >
              <li
                id="menu-item-280563"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-280563"
              >
                <Link href="https://beincrypto.com/terms-and-conditions/">
                  <span
                    data-el="policies-menu"
                    data-analytics='{"en": "menu", "ec": "web:<?php echo e(DEVICE_STRING); ?>:menu", "el": "policies-menu", "ev": ""}'
                    className="flex items-center text-3 font-medium leading-5 normal-case lg:text-3.5"
                  >
                    Terms
                  </span>
                </Link>
              </li>
              <li
                id="menu-item-280561"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-280561"
              >
                <Link rel="privacy-policy" href="https://beincrypto.com/privacy-policy/">
                  <span
                    data-el="policies-menu"
                    data-analytics='{"en": "menu", "ec": "web:<?php echo e(DEVICE_STRING); ?>:menu", "el": "policies-menu", "ev": ""}'
                    className="flex items-center text-3 font-medium leading-5 normal-case lg:text-3.5"
                  >
                    Privacy
                  </span>
                </Link>
              </li>
              <li
                id="menu-item-280562"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-280562"
              >
                <Link href="https://beincrypto.com/disclaimer/">
                  <span
                    data-el="policies-menu"
                    data-analytics='{"en": "menu", "ec": "web:<?php echo e(DEVICE_STRING); ?>:menu", "el": "policies-menu", "ev": ""}'
                    className="flex items-center text-3 font-medium leading-5 normal-case lg:text-3.5"
                  >
                    Disclaimer
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center order-1 w-full pl-0 ml-0 gap-x-5 lg:gap-x-4 lg:order-3 lg:justify-end">
            <Link
              data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "footer-social", "ev": "twitter"}'
              href="https://twitter.com/beincrypto"
              className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
              target="_blank"
              aria-label="Follow on twitter"
            >
              <i className="icon-twitter" />
            </Link>
            <Link
              data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "footer-social", "ev": "facebook"}'
              href="https://www.facebook.com/beincrypto"
              className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
              target="_blank"
              aria-label="Follow on facebook"
            >
              <i className="icon-facebook" />
            </Link>
            <Link
              data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "footer-social", "ev": "youtube"}'
              href="https://www.youtube.com/c/Beincrypto"
              className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
              target="_blank"
              aria-label="Follow on youtube"
            >
              <i className="icon-youtube" />
            </Link>
            <Link
              data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "footer-social", "ev": "instagram"}'
              href="https://www.instagram.com/beincrypto/"
              className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
              target="_blank"
              aria-label="Follow on instagram"
            >
              <i className="icon-instagram" />
            </Link>
            <Link
              data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "footer-social", "ev": "telegram"}'
              href="https://t.me/BeInCryptoCommunity"
              className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
              target="_blank"
              aria-label="Follow on telegram"
            >
              <i className="icon-telegram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
