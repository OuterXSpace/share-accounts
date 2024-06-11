import { LandingPageV4ThemeV2Props } from './landing-page.type';

export const LandingPageV4ThemeV2: React.FC<LandingPageV4ThemeV2Props> = (props) => {
  const { systemConfig } = props;

  // const router = useRouter();

  // const isDevice = useDeviceSizes();

  // const pageDataConfigWithDynamicRouter = useMemo(() => {
  //   return systemConfig?.ldpSystemConfigPage?.systemConfig?.[router?.asPath];
  // }, [router?.asPath, systemConfig?.ldpSystemConfigPage?.systemConfig]);

  // return (
  //   <main className="page-template page-template-template-custom-empty-with-footer template-custom-empty-with-footer page page-id-95991 bg-white overflow-x-hidden scroll-smooth text-dark-grey-700 app-data index-data singular-data page-data page-95991-data page-beincrypto-sales-data template-custom-empty-with-footer-data beincrypto-sales non-amp dark !bg-dark-grey-700 dark !bg-dark-grey-700">
  //     <main className="container">
  //       <div className="page-content max-w-full w-full">
  //         {isDevice?.isSmallDesktop || isDevice?.isLargeDesktop ? (
  //           <LandingPageMenuDesktopV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
  //         ) : (
  //           <LandingPageMenuMobileV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
  //         )}
  //         {pageDataConfigWithDynamicRouter?.array?.map((item) => {
  //           const data = systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.[item?.section]?.[item?.data];

  //           const renderItem = () => {
  //             switch (item?.section) {
  //               case 'SINGLE_NEWS_CARD':
  //                 return <SingleNewsCardV4 key={item?.id} data={data} className={item?.className} />;
  //               case 'NEWS':
  //                 return <NewsV4 key={item?.id} data={data} className={item?.className} />;
  //               case 'NEW_AND_TOP_READ':
  //                 return <NewsAndTopReadV4 key={item?.id} data={data} className={item?.className} />;
  //               case 'CONTACT':
  //                 return <ContactV4 key={item?.id} data={data} className={item?.className} />;
  //               default:
  //                 return <div />;
  //             }
  //           };
  //           return renderItem();
  //         })}
  //         <FooterV4 data={systemConfig?.ldpSystemConfigPage?.dataConfig?.V1?.MENU?.V1} />
  //       </div>
  //     </main>
  //   </main>
  // );

  return (
    <div className="page-template page-template-template-custom-empty-with-footer template-custom-empty-with-footer page page-id-95991 bg-white overflow-x-hidden scroll-smooth text-dark-grey-700 app-data index-data singular-data page-data page-95991-data page-beincrypto-sales-data template-custom-empty-with-footer-data beincrypto-sales non-amp dark !bg-dark-grey-700 dark !bg-dark-grey-700">
      <Component />
    </div>
  );
};

export const Component: React.FC = (props) => {
  return (
    <div className="container">
      <section
        data-el="bic-sales-header"
        id="block_64ec8c09663e0"
        className="relative pb-5.5 mb-8 max-w-full lg:pb-10 lg:mb-10 [&_.bgweb]:-top-1/4 [&_.bgweb]:lg:-top-2/4 "
      >
        <div className="relative z-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:mb-16 bg-dark-grey-700 border-dark-grey-700">
          <div className="container flex items-center justify-between py-4">
            <a data-el="main-logo" href="https://vn.beincrypto.com/" title="BeInCrypto Việt Nam">
              <svg
                className="bic-svg-icon w-28 h-5 lg:w-48 lg:h-7"
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
            </a>
            <div className="flex items-center gap-3 lg:gap-5">
              <div
                className="relative bic-c-language-selector rounded-full px-3 bg-dark-grey-500 lg:px-1 lg:rounded-none lg:bg-dark-grey-700"
                data-el="bic-c-language-selector"
                data-dropdown-placement="bottom-end"
              >
                <button
                  className="uppercase s3 lg:p3 lg:p3--medium cursor-pointer text-white"
                  data-el="bic-c-language-selector-cta"
                  type="button"
                >
                  Tiếng Việt
                </button>
                <div
                  id="bic-c-language-selector-44d58383-a245-4856-b707-f8299bf037b7"
                  data-el="bic-c-language-selector-dropdown"
                  className="z-30 hidden px-3 py-4 absolute divide-y rounded-lg shadow-menu divide-grey-100 w-44 [.dark_&]:divide-grey-700 bg-dark-grey-500 -right-3 lg:-right-1"
                  style={{
                    position: 'absolute',
                    inset: '0px 0px auto auto',
                    margin: 0,
                    transform: 'translate3d(-295.5px, 52px, 0px)',
                  }}
                  data-popper-placement="bottom-end"
                >
                  <ul className="overflow-y-auto max-h-64 lg:max-h-none p4 p4--ns text-white">
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"beincrypto.com\/sales\/\r","iso":"en_US","native_name":"English"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="en"
                        href="//beincrypto.com/sales/
"
                        hrefLang="en"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        English
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"br.beincrypto.com\/beincrypto-vendas\/\r","iso":"pt_BR","native_name":"Portugu\u00eas"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="pt"
                        href="//br.beincrypto.com/beincrypto-vendas/
"
                        hrefLang="pt"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Português
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"es.beincrypto.com\/beincrypto-ventas\/\r","iso":"es_ES","native_name":"Espa\u00f1ol"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="es"
                        href="//es.beincrypto.com/beincrypto-ventas/
"
                        hrefLang="es"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Español
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"ru.beincrypto.com\/beincrypto-sales-marketing\/\r","iso":"ru_RU","native_name":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="ru"
                        href="//ru.beincrypto.com/beincrypto-sales-marketing/
"
                        hrefLang="ru"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Русский
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"tr.beincrypto.com\/beincrypto-satis-ve-pazarlama\/\r","iso":"tr_TR","native_name":"T\u00fcrk\u00e7e"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="tr"
                        href="//tr.beincrypto.com/beincrypto-satis-ve-pazarlama/
"
                        hrefLang="tr"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Türkçe
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"kr.beincrypto.com\/consulting\/\r","iso":"ko_KR","native_name":"\ud55c\uad6d\uc5b4"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="ko"
                        href="//kr.beincrypto.com/consulting/
"
                        hrefLang="ko"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        한국어
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"de.beincrypto.com\/verkaufsseite\/\r","iso":"de_DE","native_name":"Deutsch"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="de"
                        href="//de.beincrypto.com/verkaufsseite/
"
                        hrefLang="de"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Deutsch
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"fr.beincrypto.com\/beincrypto-publicite\/\r","iso":"fr_FR","native_name":"Fran\u00e7ais"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="fr"
                        href="//fr.beincrypto.com/beincrypto-publicite/
"
                        hrefLang="fr"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Français
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"pl.beincrypto.com\/wspolpraca-beincrypto\/\r","iso":"pl_PL","native_name":"Polski"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="pl"
                        href="//pl.beincrypto.com/wspolpraca-beincrypto/"
                        hrefLang="pl"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Polski
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"id.beincrypto.com\/pasang-iklan\/\r","iso":"id_ID","native_name":"Bahasa Indonesia"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="id"
                        href="//id.beincrypto.com/pasang-iklan/"
                        hrefLang="id"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        Bahasa Indonesia
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"th.beincrypto.com\/sales\/\r","iso":"th","native_name":"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="th"
                        href="//th.beincrypto.com/sales/"
                        hrefLang="th"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        ภาษาไทย
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"ar.beincrypto.com\/sales\/","iso":"ar","native_name":"\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="ar"
                        href="//ar.beincrypto.com/sales/"
                        hrefLang="ar"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        اَلْعَرَبِيَّةُ
                      </a>
                    </li>
                    <li
                      data-el="bic-c-language-selector-item"
                      data-lang='{"url":"jp.beincrypto.com\/beincrypto%e3%82%bb%e3%83%bc%e3%83%ab%e3%82%b9\/\r","iso":"ja","native_name":"\u65e5\u672c\u8a9e"}'
                      className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                    >
                      <a
                        className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                        data-value="ja"
                        href="//jp.beincrypto.com/beincrypto%e3%82%bb%e3%83%bc%e3%83%ab%e3%82%b9/
"
                        hrefLang="ja"
                        target="_self"
                        data-wpel-link="ignore"
                      >
                        日本語
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime hidden lg:block"
                href="#sales-contact"
                target=""
              >
                <span>Yêu cầu trải nghiệm</span>
              </a>
              <a
                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-small gap-x-2 btn-3 px-3 py-1.5 rounded-md btn-small bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime lg:hidden"
                href="#sales-contact"
                target=""
              >
                <span>Yêu cầu trải nghiệm</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-6/12 rtl:lg:mr-0 rtl:lg:ml-20 lg:mr-20 lg:pr-1">
            <h2 className="h3 lg:hrt4 lg:mb-3 mb-2 uppercase [&_span]:text-blue-600 dark-span-highlight-lime">
              GROWTH<span>[IN]</span>CRYPTO
            </h2>
            <div className="lg:h8 lg:h8--medium lg:h8--normal-case text-grey-400 lg:w-3/4 lg:mb-10 mb-5 p3 [&_span]:text-blue-600 dark-span-highlight-lime">
              <span>Gia tăng sự hiện diện cho dự án tiền điện tử</span>, tối đa hóa lợi nhuận và hỗ trợ sự phát triển
              Web3 trên toàn cầu
            </div>
            <a
              className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime w-full lg:w-auto dark-btn-lime"
              href="#sales-contact"
              target=""
            >
              <span>Tìm hiểu thêm</span>
            </a>
          </div>
          <div className="w-7/12 mb-6 lg:mb-0 lg:w-6/12 lg:-mt-9">
            <figure>
              <img
                decoding="async"
                className="lazy block entered loaded"
                loading="lazy"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/1_TopHeaderBlock_Dark.png"
                data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/1_TopHeaderBlock_Dark-360x271.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/1_TopHeaderBlock_Dark.png 427w"
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/1_TopHeaderBlock_Dark.png"
                alt="GROWTH[IN]CRYPTO"
                width={427}
                height={321}
                data-ll-status="loaded"
                srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/09/1_TopHeaderBlock_Dark-360x271.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/1_TopHeaderBlock_Dark.png 427w"
              />
            </figure>
          </div>
          <svg
            className="bic-svg-icon bgweb absolute w-full h-auto max-w-full -z-10 rtl:lg:-translate-x-3/4 lg:translate-x-3/4 text-blue-600 dark-text-lime md:w-[856px] md:h-[803px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 856 803"
            width={856}
            height={803}
          >
            <path
              fill="currentColor"
              d="M854.814 310.14c-3.995-25.569-17.756-44.967-36.267-61.658a341.815 341.815 0 0 0-42.969-31.561c-40.795-26.367-87.005-56.241-89.047-114.259v-.666h-.666c-29.652-2.264-49.229-23.393-68.139-43.856l-6.437-6.881a207.294 207.294 0 0 0-31.073-28.631c-13.716-9.5-26.634-13.317-39.64-11.586a123.587 123.587 0 0 0-36.312 12.873 146.983 146.983 0 0 1-30.274 11.763c-34.757 7.813-64.099-5.238-98.857-23.127a114.66 114.66 0 0 0-79.902-9.144 124.296 124.296 0 0 0-67.829 44.39 181.026 181.026 0 0 0-19.842 35.29 457.386 457.386 0 0 0-4.439 9.543l-.932-.266a181.436 181.436 0 0 0-1.554 5.282 102.11 102.11 0 0 1-20.997 29.431 79.9 79.9 0 0 1-22.773 14.826 78.13 78.13 0 0 1-31.073 6.436 85.363 85.363 0 0 1-48.83-15.714l-.62-.399-.444.577a178.879 178.879 0 0 0-20.42 35.245l-.71 1.376a138.436 138.436 0 0 0-3.862 10.077 159.255 159.255 0 0 0-7.014 27.788h-.354l-.444 1.465h.576a155.963 155.963 0 0 0-1.642 19.842c-.131 6.878.18 13.758.932 20.597l-.222 1.509h.533a185.41 185.41 0 0 0 27.478 75.773c4.971 7.99 10.654 15.892 16.07 23.571 12.118 16.912 24.592 34.402 31.073 54.377 8.523 26.102 16.601 74.797-24.948 107.912a279.323 279.323 0 0 1-23.75 16.557l-8.878 5.638-.754-.267-.4 1.066a122.108 122.108 0 0 0-32.892 29.785C2.343 598.096-.366 639.955.035 680.261v.444H.39a168.677 168.677 0 0 0 51.315 20.819h.754a123.679 123.679 0 0 0 48.83 0c10.032-1.953 19.976-4.794 29.609-7.502a245.394 245.394 0 0 1 45.544-9.766c31.073-2.663 67.651 5.771 110.976 25.791 32.538 14.915 62.679 35.112 91.843 54.688l4.75 3.151c16.203 10.876 34.58 23.216 53.845 30.008a81.965 81.965 0 0 0 27.345 5.105 59.394 59.394 0 0 0 31.606-8.878c25.391-15.448 30.008-48.207 33.737-74.575 2.042-14.116 4.438-24.858 14.027-34.668a93.84 93.84 0 0 1 46.033-23.349c36.355-7.857 70.58 4.439 104.671 38.175l.489.444.532-.4a90.997 90.997 0 0 0 29.343-38.752l.266.222.888-1.287-.578-.355a154.824 154.824 0 0 0 8.568-46.432c.489-9.455.577-19.088.71-28.853v-7.68c.267-19.309 1.51-39.684 8.878-58.372 5.904-14.915 16.957-27.522 27.567-39.951 3.284-3.773 6.702-7.635 9.854-11.497l4.439-5.416c34.713-41.859 77.461-94.017 68.583-151.235Zm-49.273 124.824a414.047 414.047 0 0 0-43.636 4.439c8.878-11.32 17.135-22.95 24.77-35.024a424.99 424.99 0 0 1 43.946-5.327 377.808 377.808 0 0 1-25.08 36.045v-.133ZM686.575 596.498a180.575 180.575 0 0 0-48.34-3.862 694.213 694.213 0 0 0 1.908-10.165c.843-4.439 1.687-9.233 2.619-13.85a180.2 180.2 0 0 1 2.308-10.609 207.96 207.96 0 0 1 44.657-1.998c-.311 2.841-.533 5.549-.755 8.124-.355 4.439-.665 8.878-.976 13.317-.222 6.569-.844 12.873-1.421 19.043ZM527.569 729.667c-1.066 6.792-2.353 13.805-4.128 20.686a640.044 640.044 0 0 1-1.598-34.269c2.175-5.86 3.995-11.941 5.681-17.756a408.772 408.772 0 0 0 .045 31.294v.045Zm-220.22-41.727a120.779 120.779 0 0 1 18.822-18.998c13.849 5.46 27.432 11.896 40.661 18.466a256.46 256.46 0 0 0-10.431 26.634c-15.848-9.322-32.228-18.2-49.052-26.146v.044Zm48.563 27.522a112.876 112.876 0 0 0-5.016 28.853 547.396 547.396 0 0 0-54.201-31.339 55.087 55.087 0 0 1 9.722-23.792c16.558 7.679 32.937 16.601 49.495 26.234v.044Zm-200.822-56.02h-2.929a133.69 133.69 0 0 1 22.772-20.374l22.195 2.929c7.946 1.021 16.113 2.042 24.237 3.196a113.183 113.183 0 0 0-27.122 13.317c-13.317-.355-26.502.311-39.153.932Zm36.933.577a53.273 53.273 0 0 0-17.756 23.083 234.952 234.952 0 0 0-38.619 8.124 76.97 76.97 0 0 1 15.225-30.052h4.439c11.853-.844 24.282-1.421 36.622-1.155h.089Zm-120.12-45.366a466.666 466.666 0 0 0 51.182 15.137 155.906 155.906 0 0 0-17.756 30.008 226.35 226.35 0 0 1-46.565-8.346 170.118 170.118 0 0 1 13.05-36.799h.089Zm-14.516 36.133A249.244 249.244 0 0 1 4.12 627.215a159.799 159.799 0 0 1 10.387-38.53 398.972 398.972 0 0 0 56.02 25.436 170.847 170.847 0 0 0-13.094 36.665h-.045Zm90.556-203.26v-3.019l6.703-.399c3.862-.267 7.769-.488 11.675-.666a128.16 128.16 0 0 0 2.131 22.861 201.95 201.95 0 0 0 1.997 9.81c-7.102-.71-14.249-1.154-21.307-1.598h-.71c0-9.011-.311-18.067-.577-26.989h.088Zm0-34.802c7.901-1.021 15.714-2.397 23.483-3.862a124.245 124.245 0 0 0-5.06 33.071l-11.765.621-6.658.4c-.533-10.077-.754-20.286-.221-30.23h.221Zm1.643-20.863c9.411-1.687 19.132-3.951 29.386-6.836a140.885 140.885 0 0 1-3.373 10.92c-1.287 3.64-2.619 7.591-3.685 11.231-7.901 1.509-15.848 2.929-23.882 3.995 0-3.152.445-6.259.844-9.322.4-3.063.399-6.658.488-9.988h.222Zm-30.008-85.894c-4.173-6.836-8.256-13.317-12.03-20.375a124.562 124.562 0 0 0 19.088-9.366 173.503 173.503 0 0 0 18.111-12.873c3.107 4.927 6.481 9.766 9.854 14.693 2.131 3.063 4.44 6.17 6.393 9.366a219.757 219.757 0 0 1-19.221 13.317 150.78 150.78 0 0 1-19.487 9.81l-2.708-4.572Zm1.287 5.061a166.015 166.015 0 0 1-51.226 11.097 197.905 197.905 0 0 1-13.894-27.788h.532a140.765 140.765 0 0 0 49.806-8.212c3.818 6.925 7.946 13.716 12.208 20.641l2.574 4.262ZM91.08 241.913a105.028 105.028 0 0 1-.889-28.632 95.82 95.82 0 0 0 17.313-4.039 99.281 99.281 0 0 0 19.931-9.455 83.294 83.294 0 0 0 .843 24.592c.4 2.175.888 4.439 1.421 6.259a120.047 120.047 0 0 1-17.401 10.076 103.29 103.29 0 0 1-20.02 7.058 47.016 47.016 0 0 1-1.42-5.859h.222Zm54.111-77.416a173.076 173.076 0 0 0 22.861-16.513 93.199 93.199 0 0 0-8.256 27.699l-6.614 4.439c-3.152 2.131-6.215 4.439-9.189 6.437-4.928 3.507-9.722 6.924-14.694 10.076a87.372 87.372 0 0 1 9.988-28.986c1.731-.888 3.729-1.953 5.682-3.152h.222Zm-4.439.799a126.634 126.634 0 0 1 16.869-22.417 82.515 82.515 0 0 0 21.44-13.627 123.57 123.57 0 0 0-9.233 15.27 176.47 176.47 0 0 1-25.302 18.643c-1.554.755-2.753 1.465-4.085 2.131h.311ZM254.657 53.168c0-9.677 0-19.665-.222-29.475a120.215 120.215 0 0 1 32.939-16.557v12.517c0 8.878-.001 18.023.354 27.123A151.248 151.248 0 0 0 254.524 62.4l.133-9.233Zm33.204-4.706c.311 13.317.755 26.634 1.688 39.596a200.127 200.127 0 0 0-33.96 15.048c-.71-13.006-.887-26.012-.932-38.885a149.538 149.538 0 0 1 32.894-15.759h.31Zm71.602-4.172a756.937 756.937 0 0 0 3.152 35.511 157.402 157.402 0 0 0-35.112 0c-.977-12.784-1.599-25.524-1.999-38.22 11.33-.578 22.688.333 33.782 2.709h.177Zm-34.003-4.44c-.355-12.872-.444-25.7-.444-38.308a110.979 110.979 0 0 1 33.249 5.505c0 11.94.355 23.837 1.109 35.512a128.728 128.728 0 0 0-34.224-2.797l.31.089Zm365.421 93.574a103.596 103.596 0 0 0 12.696 24.725 248.838 248.838 0 0 1-41.461-4.439 179.273 179.273 0 0 1-4.439-26.633 110.631 110.631 0 0 0 33.204 7.102v-.755Zm-30.451 20.153a318.123 318.123 0 0 1-37.999-9.81c.844-9.144 1.909-18.244 3.019-27.166.222-1.776.4-3.507.622-5.283a181.605 181.605 0 0 0 29.919 15.448 189.741 189.741 0 0 0 4.128 26.722l.311.089Zm144.934 144.8c-14.738 1.864-29.298 4.439-43.592 6.924a101.16 101.16 0 0 0-19.887-22.195c15.537-2.663 31.296-5.238 47.099-7.368a94.961 94.961 0 0 1 16.069 22.55l.311.089Zm-14.472-22.728c15.404-2.042 31.073-3.684 46.343-4.439a94.966 94.966 0 0 1 12.474 23.793c-14.338.399-28.631 1.598-42.747 3.329a93.21 93.21 0 0 0-16.381-22.772l.311.089ZM657.721 522.767a308.781 308.781 0 0 0-16.557 5.016 284.375 284.375 0 0 0-22.64 8.878c7.058-10.876 14.916-21.352 23.04-31.961a428.689 428.689 0 0 1 41.016-14.56c-.621.755-1.243 1.465-1.82 2.219a282.529 282.529 0 0 0-22.55 29.697l-.489.711ZM522.775 676.533c3.152-5.815 5.993-11.808 8.878-17.756a434.077 434.077 0 0 0-3.151 32.138c-1.82 6.88-3.774 13.894-6.127 20.774a400.39 400.39 0 0 1-.044-35.245l.444.089ZM185.409 538.924a150.096 150.096 0 0 0-4.439-27.921c7.946 1.82 15.803 3.862 23.483 6.17l10.075 3.108a267.76 267.76 0 0 1 15.005 32.626c.311.888.621 1.776.887 2.664a400.408 400.408 0 0 1-10.343-3.063c-11.541-3.596-23.171-7.058-34.846-10.476-.177-1.332-.177-2.353-.222-3.418l.4.31ZM183.5 341.79c-.311-2.619-.754-5.194-1.242-7.724 6.614-3.196 13.317-6.481 19.886-9.81l7.68-3.818c2.175-1.11 4.439-2.131 6.525-3.152.852 9.482.598 19.031-.755 28.454l-15.093 5.726c-5.371 2.042-10.742 4.084-16.202 6.082a116.764 116.764 0 0 0-1.198-16.069l.399.311Zm-53.534-117.367a82.32 82.32 0 0 1-.756-25.302c5.372-3.374 10.566-7.058 15.848-10.831 2.974-2.086 6.037-4.439 9.145-6.436l5.548-3.818a83.226 83.226 0 0 0 .755 22.994 97.819 97.819 0 0 0 1.287 6.037 297.043 297.043 0 0 0-7.501 5.593l-6.703 5.149c-5.505 4.439-10.876 8.39-16.38 12.252-.844-2.175-1.288-4.04-1.643-5.949l.4.311Zm379.537-119.852 2.84.4a104.609 104.609 0 0 0-1.509 3.195c-4.439 9.677-9.145 19.665-13.318 29.386-1.464 3.463-3.106 6.97-4.793 10.699l-1.997-.578c-5.238-1.42-10.521-2.929-15.803-4.439 1.198-2.974 2.352-5.859 3.418-8.877 3.862-10.299 8.255-20.775 12.517-31.073 6.094-.051 12.187.26 18.245.932l.4.355Zm110.087 66.584v4.839a553.985 553.985 0 0 1-36.71-5.149c-3.951-.666-7.858-1.421-11.809-2.22.711-2.352 1.376-4.439 1.998-6.791 2.93-10.21 6.304-20.641 9.678-30.807l7.101 2.974c10.876 4.439 21.175 8.079 31.074 11.275-.622 7.236-1.066 14.516-1.199 21.751-.488.888-.488 2.264-.532 3.64l.399.488Zm4.439 38.531c4.439 10.165 14.56 16.335 23.927 21.662-12.962 1.642-26.013 3.107-38.975 4.128-6.392.488-12.651.888-18.733 1.154-10.786-6.303-21.796-13.672-25.036-25.835h15.226c14.472 0 29.031-.399 43.546-1.198l.045.089Zm137.654 166.55c-11.068 2.959-22.253 6.392-33.558 10.298l-6.792 2.353a96.586 96.586 0 0 0 9.41-39.285c3.241-1.021 6.482-1.953 9.723-2.885a648.835 648.835 0 0 1 30.051-7.635 95.934 95.934 0 0 1-8.834 37.154ZM539.288 615.94c-2.841 3.729-5.682 7.636-8.434 11.364-1.598 2.22-3.196 4.439-4.883 6.659a493.164 493.164 0 0 1 6.081-36.844l.8-.71c5.416-5.061 11.009-10.298 16.735-15.137l.799-.666a360.436 360.436 0 0 0-10.787 34.979l-.311.355Zm-308.734-63.876a265.272 265.272 0 0 0-14.383-31.473l.755.222c11.408 3.552 22.55 6.969 33.826 9.855l2.707 3.551c7.946 10.387 16.202 21.13 23.305 32.405-15.848-3.196-30.674-6.792-44.967-10.876a13.91 13.91 0 0 0-1.243-3.684Zm-41.682-127.399a79.402 79.402 0 0 1 7.235-20.685c7.235-1.332 14.515-2.575 21.84-3.552a85.143 85.143 0 0 0-8.879 27.256 78.167 78.167 0 0 0-.354 16.468c-6.88-.754-13.851-1.465-20.864-1.953a78.66 78.66 0 0 1 1.198-17.534h-.176Zm29.03-99.522c0-2.974-.266-5.992-.532-8.878a306.89 306.89 0 0 1 34.314-13.316c.199 3.755.199 7.519 0 11.275a94.209 94.209 0 0 1-3.463 20.33c-10.742 3.019-21.262 6.658-31.605 10.476a123.396 123.396 0 0 0 1.464-19.887h-.178Zm-43.058-89.844a102.95 102.95 0 0 1-11.897-27.921c9.367-6.881 18.955-13.584 28.587-20.109a88.787 88.787 0 0 0 10.787 26.989c.3.519.627 1.023.978 1.509a285.813 285.813 0 0 0-28.411 19.621l-.044-.089Zm332.927-81.544 8.878 2.441c-7.502 14.294-15.936 30.452-15.226 46.121a124.054 124.054 0 0 1-21.75-7.324v-.755c0-15.004 6.924-30.096 13.627-44.7l14.471 4.217Zm54.778 51.803c.076 1.059.224 2.112.443 3.151a287.221 287.221 0 0 1-60.148-5.815v-.666c-.71-15.359 7.724-31.383 15.181-45.588 16.558 4.439 33.47 9.144 50.605 12.696-3.551 11.896-7.058 24.192-6.081 36.222Zm116.347 199.221c-15.226 5.948-30.852 11.94-46.699 17.134 1.998-5.016 3.817-10.121 5.371-15.27a109.724 109.724 0 0 0 4.795-26.634c13.317-4.439 26.323-9.144 39.108-13.85l7.279-2.663a101.031 101.031 0 0 1-9.854 41.283ZM500.003 621.667a84.38 84.38 0 0 1-12.695 7.013c-1.243-12.651-2.931-25.258-5.373-37.553a134 134 0 0 0 20.287-7.902 169.642 169.642 0 0 0 9.721-5.149c-.31 2.796-.621 5.637-.932 8.39-1.021 9.41-2.086 19.132-2.219 28.809a114.945 114.945 0 0 1-8.789 6.392Zm-214.05-10.165c7.191-14.116 1.331-30.452-5.86-42.748 12.562 2.486 25.791 4.75 39.951 6.792 9.544 12.562 17.979 29.12 12.563 44.39a460.24 460.24 0 0 1-46.654-8.434Zm-7.591-45.589c-7.191-11.408-15.492-22.195-23.482-32.671l-1.555-1.997a249.34 249.34 0 0 0 33.205 6.037c3.64 4.143 7.28 8.227 10.92 12.251 6.304 6.97 12.785 14.205 18.911 21.485l2.263 2.797c-13.982-2.087-27.123-4.439-39.596-6.836l-.666-1.066Zm-67.606-138.096a86.063 86.063 0 0 1 9.189-27.655 199.501 199.501 0 0 1 27.744-1.687 89.599 89.599 0 0 0-9.944 30.008 80.772 80.772 0 0 0 0 18.244c-8.878-.533-17.756-1.465-26.634-2.397h-.488a77.76 77.76 0 0 1 .133-16.469v-.044Zm42.569-125.623a294.57 294.57 0 0 1 34.536-8.878 90.785 90.785 0 0 1 0 14.338 86.326 86.326 0 0 1-4.172 19.443 221.106 221.106 0 0 0-33.293 6.702 91.794 91.794 0 0 0 3.285-19.797 87.343 87.343 0 0 0-.356-11.764v-.044Zm50.961-130.151a165.088 165.088 0 0 0 17.757 34.802 464.743 464.743 0 0 0-29.654 8.035l-3.551-4.75a149.907 149.907 0 0 1-17.09-26.634c11.009-4.321 21.855-8.138 32.538-11.453Zm156.786 14.027v1.465c.577 13.584 9.278 24.415 18.378 33.959-3.329-1.643-6.614-3.374-9.899-5.105-2.263-1.155-4.439-2.397-6.925-3.552-7.946-11.141-15.537-23.482-15.981-37.376l4.884 3.64c3.151 2.353 6.303 4.75 9.543 7.014v-.045Zm128.155 84.607 11.63 6.215a142.698 142.698 0 0 0-16.867 3.063c-3.995.888-8.079 1.82-12.208 2.486-7.679-5.771-15.448-11.32-23.083-16.78l-8.878-6.525c4.439 0 8.878 0 13.317-.399 4.439-.4 8.878-.444 13.317-.4 7.502 4.261 15.182 8.345 22.772 12.385v-.045Zm51.581 108.4-6.569 2.086-10.653 3.196c-8.523 2.531-16.736 4.928-24.859 8.168a84.33 84.33 0 0 0-.444-21.973 104.963 104.963 0 0 0-4.839-19.043c6.348-2.353 12.784-4.128 19.443-5.993l10.743-3.107c2.131-.666 4.217-1.332 6.303-2.086a76.816 76.816 0 0 1 8.302 17.756 64.46 64.46 0 0 1 2.573 21.04v-.044ZM568.674 538.88l-4.172 2.486c-7.502 4.439-14.826 9.499-21.973 14.471l.799-2.575c3.64-11.408 7.635-22.772 11.764-34.047 8.878-4.927 18.244-9.854 27.61-14.027l6.081-2.708-.266.489c-6.126 10.964-12.474 22.195-18.555 33.47l-1.288 2.441Zm-148.529 52.291c-6.393-13.583-11.675-25.169-16.158-37.598l-1.599-4.439a514.09 514.09 0 0 1 13.984 2.708 131.514 131.514 0 0 0 17.134 2.53c.533 2.101 1.11 4.187 1.732 6.259a329.452 329.452 0 0 0 12.473 33.781 102.18 102.18 0 0 1-15.181-1.155c-4.129-.532-8.257-1.198-12.385-1.864v-.222ZM239.432 428.705a90.236 90.236 0 0 1 10.121-30.141h1.953c7.635.311 15.403 1.11 22.905 1.864a554.422 554.422 0 0 0 15.226 1.421 111.282 111.282 0 0 0-9.765 28.543 92.781 92.781 0 0 0-1.243 17.755l-16.602-.532-17.756-.577-4.928-.222a79.546 79.546 0 0 1 .089-18.111Zm50.161-135.611 2.929-.532c9.988-1.776 20.11-3.374 30.275-4.972a123.462 123.462 0 0 1 1.154 14.204 96.175 96.175 0 0 1-2.264 22.195c-11.408.888-23.216 1.82-34.847 2.93h-1.508a91.211 91.211 0 0 0 4.039-19.132c.368-4.89.383-9.8.044-14.693h.178ZM502 232.191l3.685 3.063 1.154.888c8.878 7.369 18.511 14.427 27.966 21.307h-2.22c-4.794-.488-9.766-1.11-15.137-1.82l-2.885-2.663a782.756 782.756 0 0 1-27.789-26.19 115.042 115.042 0 0 0 13.317 5.016l1.909.399Zm95.262 161.002a210.42 210.42 0 0 0-9.811 4.439l-8.389 4.439c-9.588 5.016-19.398 10.121-29.564 14.293a140.036 140.036 0 0 0 2.264-23.482 159.544 159.544 0 0 0-1.509-21.795c8.878-3.374 17.179-7.502 25.435-11.542l7.502-3.64a132.959 132.959 0 0 1 8.878-3.773 106.253 106.253 0 0 1 4.75 18.733 81.968 81.968 0 0 1 .267 22.328h.177ZM281.38 430.747a111.391 111.391 0 0 1 9.899-28.676l8.08.399c8.611.222 17.312 0 25.746-.754a126.086 126.086 0 0 0-8.479 24.725 112.499 112.499 0 0 0-2.307 22.195c-11.453.222-22.729 0-34.182-.311a90.57 90.57 0 0 1 1.066-17.578h.177Zm44.08-128.997a122.516 122.516 0 0 0-1.153-14.382 1587.106 1587.106 0 0 1 30.584-4.439c.834 4.64 1.411 9.323 1.731 14.027.482 8.105.021 16.238-1.376 24.237-10.698 1.021-21.441 1.864-31.961 2.663a95.194 95.194 0 0 0 1.998-22.106h.177Zm190.257-12.74c-3.68.477-7.387.729-11.098.755-5.77 0-12.607 0-20.109-.489a433.263 433.263 0 0 0-19.043-41.237c5.238.887 10.476 1.864 15.67 2.841l9.278 1.731c8.611 11.896 17.267 23.97 25.124 36.399h.178Zm-23.127-36a699.154 699.154 0 0 0 24.192 3.906c9.544 8.878 19.399 17.756 28.721 27.3-2.353.222-4.705.488-7.102.888l-6.171 1.154c-5.061.977-9.943 1.909-14.826 2.53-7.901-12.207-16.336-24.103-24.948-35.778h.134Zm57.707 139.828a134.892 134.892 0 0 1-2.397 24.148 128.479 128.479 0 0 1-19.177 6.126 232.736 232.736 0 0 1-39.596 5.593c1.998-8.346 3.906-16.868 5.505-25.436 1.331-7.457 2.352-14.737 3.018-21.839a231.942 231.942 0 0 0 34.713-4.839 124.348 124.348 0 0 0 16.513-4.971 150.829 150.829 0 0 1 1.288 21.218h.133ZM358.22 296.734a129.845 129.845 0 0 0-1.73-14.16l2.929-.4 9.632-1.42c5.99-.881 12.02-1.459 18.067-1.732a127.818 127.818 0 0 1 2.398 39.374c-6.987.064-13.966.494-20.908 1.288-3.906.443-7.769.843-11.675 1.198a106.595 106.595 0 0 0 1.021-24.148h.266Zm138.01 83.186a157.426 157.426 0 0 1-41.95-2.752 162.872 162.872 0 0 0 6.792-42.614v-1.42a165.14 165.14 0 0 0 34.403 2.53 200.766 200.766 0 0 1 .488 44.256h.267Zm-105.338-59.97a167.587 167.587 0 0 1 35.068 3.64v2.663a148.765 148.765 0 0 1-8.878 38.175 162.592 162.592 0 0 0-36.311-6.037 158.807 158.807 0 0 0 10.253-37.021c-.666-.488-.443-.976-.399-1.42h.267Zm68.627 14.604a162.51 162.51 0 0 1-6.703 42.259 86.383 86.383 0 0 1-14.382-4.439 169.596 169.596 0 0 0-20.198-7.28 148.894 148.894 0 0 0 8.878-38.486v-2.485a181.55 181.55 0 0 1 19.133 5.415 106.624 106.624 0 0 0 12.917 3.507l.355 1.509Zm-7.147 43.768c-3.285 11.453-7.369 22.772-11.453 33.825-1.421 3.729-2.663 7.369-3.862 10.965a91.49 91.49 0 0 1-14.96-6.171 159.885 159.885 0 0 0-21.085-9.233c1.332-3.551 2.752-7.146 4.439-10.831a166.73 166.73 0 0 0 1.776-4.217c3.685-8.878 7.413-17.445 10.654-26.367a178.811 178.811 0 0 1 20.064 7.28 94.803 94.803 0 0 0 14.16 4.749h.267Zm-36.133-12.473c-3.196 8.878-6.881 17.756-10.521 26.19a71.211 71.211 0 0 0-1.776 4.439c-1.598 3.728-3.018 7.413-4.439 10.964a150.698 150.698 0 0 0-36.933-7.458 190.84 190.84 0 0 1 4.128-9.854 72.464 72.464 0 0 0 1.954-4.439c3.729-8.212 7.635-16.868 11.186-25.746a162.824 162.824 0 0 1 36.134 5.904h.267Zm-17.224 42.836a191.956 191.956 0 0 0-11.053 44.922 193.088 193.088 0 0 0-36.622-5.415 154.681 154.681 0 0 1 10.654-46.965 150.933 150.933 0 0 1 36.754 7.458h.267Zm1.465.488a156.95 156.95 0 0 1 20.908 9.1 91.463 91.463 0 0 0 15.181 6.303 225.073 225.073 0 0 0-9.544 41.238 133.46 133.46 0 0 1-17.002-5.193 187.926 187.926 0 0 0-20.552-6.659 189.775 189.775 0 0 1 10.742-44.789h.267Zm37.554 15.847a139.741 139.741 0 0 0 36.444 5.416H486.997l-2.131 8.878c-2.442 10.076-4.928 20.33-7.014 30.718a184.273 184.273 0 0 1-49.495-3.685 225.26 225.26 0 0 1 9.41-41.282l.267-.045Zm.489-1.42a247.089 247.089 0 0 1 3.817-10.92c4.128-11.097 8.212-22.506 11.542-34.003a146.067 146.067 0 0 0 31.073 3.152h.443c3.684 0 7.325 0 10.832-.311a250.735 250.735 0 0 1-2.975 21.441c-1.598 8.878-3.551 17.356-5.593 25.835a148.142 148.142 0 0 1-49.406-5.194h.267Zm22.505-92.064a181.986 181.986 0 0 0-6.437-44.079 266.344 266.344 0 0 0 28.943 3.284c1.82 4.75 3.506 9.5 5.06 14.294a179.938 179.938 0 0 1 6.659 29.12 163.778 163.778 0 0 1-34.491-2.619h.266Zm-1.509-.311a98.637 98.637 0 0 1-12.429-3.329 178.823 178.823 0 0 0-19.533-5.549 147.222 147.222 0 0 0-4.439-41.238 207.122 207.122 0 0 1 17.047 3.418c4.439 1.021 8.479 1.909 12.651 2.663a180.293 180.293 0 0 1 6.437 44.035h.266Zm-33.47-9.189a170.12 170.12 0 0 0-34.98-3.64c1.2-13.185.393-26.475-2.397-39.418a179.291 179.291 0 0 1 32.893 1.865 147.418 147.418 0 0 1 4.306 41.193h.178Zm-57.264-.843a192.316 192.316 0 0 1 20.553-1.243v1.199a156.839 156.839 0 0 1-10.343 37.154 189.376 189.376 0 0 0-22.196.31c-3.684.222-7.413.533-11.097.888a191.435 191.435 0 0 0 11.275-37.021c3.463-.399 7.503-.799 11.542-1.287h.266Zm-12.208 38.93a187.398 187.398 0 0 1 21.708-.311c-3.418 8.523-7.236 16.912-11.009 25.213l-1.908 4.439a250.008 250.008 0 0 0-4.439 10.343 192.007 192.007 0 0 0-22.196 0l-11.23.621c1.109-2.485 2.264-4.971 3.418-7.457 1.864-3.995 3.817-8.168 5.593-12.296l1.286-3.063c2.309-5.327 4.439-10.698 6.792-16.113 3.773-.755 7.813-1.11 11.72-1.376h.265Zm-29.119 41.46 11.452-.622c7.155-.424 14.33-.424 21.485 0a155.363 155.363 0 0 0-10.564 46.965c-7.458-.356-15.183-.356-23.217 0-3.596 0-7.147.266-10.698.31.064-7.264.837-14.504 2.309-21.618a126.885 126.885 0 0 1 8.878-25.169l.355.134Zm-.8 48.029c7.991-.355 15.671-.355 23.084 0a143.311 143.311 0 0 0 .399 18.511 186.301 186.301 0 0 0 4.706 28.143 298.16 298.16 0 0 0-20.021-.533h-10.564c-1.82-5.327-3.418-10.742-4.706-16.246a130.613 130.613 0 0 1-3.64-29.52c3.418-.089 6.881-.177 10.477-.355h.265Zm24.993 18.377c-.54-6.08-.659-12.191-.356-18.288a193.137 193.137 0 0 1 36.533 5.416c-.658 6.28-.94 12.595-.843 18.91.151 8.915.877 17.812 2.175 26.634a250.64 250.64 0 0 0-32.715-4.439 189.968 189.968 0 0 1-5.061-28.233h.267Zm36.888 6.038c-.104-6.18.148-12.36.754-18.511a180.697 180.697 0 0 1 20.154 6.525 129.666 129.666 0 0 0 17.356 5.327c-.666 5.682-1.11 11.275-1.287 16.913a226.44 226.44 0 0 0 .355 25.124 147.698 147.698 0 0 1-17.223-3.773c-6.081-1.731-12.074-3.24-18.067-4.439a213.853 213.853 0 0 1-2.308-27.3l.266.134Zm38.486 10.298c0-5.549.622-11.053 1.288-16.602a172.849 172.849 0 0 0 35.955 3.951h2.309c3.684 0 7.413 0 11.142-.311a252.085 252.085 0 0 0-3.684 25.347 295.736 295.736 0 0 0-.978 13.982 190.884 190.884 0 0 1-45.455-1.109 229.464 229.464 0 0 1-.843-25.258h.266Zm48.519 12.562c.799-8.611 2.131-17.134 3.773-25.568 13.62-.81 27.14-2.845 40.395-6.082a154.151 154.151 0 0 0 16.514-5.104l-.533 1.775c-2.575 8.123-5.283 16.557-7.502 24.681a622.746 622.746 0 0 0-3.152 12.118 161.302 161.302 0 0 1-15.981 5.46 209.017 209.017 0 0 1-34.447 6.392c.089-4.527.089-9.1.666-13.672h.267Zm43.813-33.115a225.104 225.104 0 0 1-39.729 5.949c2.042-10.254 4.438-20.331 6.924-30.274.755-3.019 1.465-6.081 2.22-9.189a229.125 229.125 0 0 0 40.262-5.637 128.018 128.018 0 0 0 18.51-5.86 365.903 365.903 0 0 1-10.697 39.507 156.5 156.5 0 0 1-17.756 5.504h.266Zm12.695-88.779a237.09 237.09 0 0 1-34.269 4.75 200.349 200.349 0 0 0-.754-44.39 223.802 223.802 0 0 0 27.921-2.53 98.654 98.654 0 0 0 12.518-2.885 171.355 171.355 0 0 1 11.186 39.95 121.055 121.055 0 0 1-16.867 5.194l.265-.089Zm-7.324-43.502a224.581 224.581 0 0 1-27.921 2.53 179.08 179.08 0 0 0-6.748-29.519c-1.465-4.439-3.106-9.188-4.838-13.761 7.236.4 13.85.533 19.487.489 4.008-.056 8.009-.337 11.985-.844a265.393 265.393 0 0 1 20.198 38.309 102.724 102.724 0 0 1-12.429 2.885l.266-.089Zm-41.815-42.392a263.168 263.168 0 0 1-28.765-3.374c-2.397-8.67-5.356-17.681-8.878-27.033a343.983 343.983 0 0 0-6.215-15.004c8.168 1.243 16.424 2.531 24.681 3.951a428.142 428.142 0 0 1 18.91 41.549l.267-.089Zm-39.153-29.874c3.463 9.1 6.393 17.756 8.879 26.234a186.788 186.788 0 0 1-11.808-2.53c-6.081-1.465-12.03-2.619-17.756-3.551a228.756 228.756 0 0 0-9.367-28.498 356.225 356.225 0 0 0-4.839-11.231c5.194.355 10.388.932 15.626 1.731l7.325 1.154 5.593.844c1.776 5.326 4.039 10.609 6.214 15.935l.133-.088Zm-31.739-7.768a226.318 226.318 0 0 1 9.144 27.699 178.048 178.048 0 0 0-32.804-1.82 183.103 183.103 0 0 0-7.058-24.326 280.602 280.602 0 0 0-5.46-13.317 225.649 225.649 0 0 1 31.073 0c1.465 3.862 3.197 7.813 4.839 11.852l.266-.088Zm-32.183 2.086a183.625 183.625 0 0 1 6.969 23.881c-5.944.281-11.87.859-17.756 1.732l-9.632 1.376-2.974.444a165.048 165.048 0 0 0-11.853-37.376c9.855-1.687 19.798-3.019 29.83-3.773 1.554 4.527 3.463 9.144 5.15 13.805l.266-.089Zm-25.125 27.655c-10.076 1.465-20.33 2.974-30.584 4.439a140.891 140.891 0 0 0-10.743-35.778c9.721-2.264 19.532-4.44 29.431-6.082a166.861 166.861 0 0 1 11.63 37.509l.266-.088Zm-31.65 44.034c10.521-.843 21.263-1.686 32.006-2.707a191.851 191.851 0 0 1-11.409 37.02h-.799c-8.389.711-17.09 1.51-25.657 1.643h-6.792a196.434 196.434 0 0 0 12.385-35.867l.266-.089Zm-5.859 37.598c8.656 0 17.357-.932 25.791-1.687-2.131 5.15-4.439 10.299-6.526 15.404l-1.287 3.018c-1.776 4.128-3.684 8.257-5.549 12.296a350.697 350.697 0 0 0-3.773 8.212c-8.878.533-17.757 1.021-26.635.755-2.441 0-4.927 0-7.412-.355 1.109-2.353 2.264-4.661 3.373-6.925 1.998-3.995 3.995-8.123 5.859-12.251 1.11-2.486 2.264-4.972 3.418-7.458a831.185 831.185 0 0 0 5.017-11.009h7.724Zm-2.797 87.093a133.11 133.11 0 0 0 3.64 29.83c1.287 5.371 2.796 10.698 4.439 15.891-10.387 0-20.775-.488-31.073-.932a152.176 152.176 0 0 1-5.905-15.359 111.508 111.508 0 0 1-5.415-29.741c11.364.4 22.595.577 34.048.4l.266-.089Zm8.878 47.231a260.81 260.81 0 0 0 20.064 42.969 2056.907 2056.907 0 0 0-25.879-2.042 261.646 261.646 0 0 1-24.992-41.815c9.766.532 20.065.888 30.408.976l.399-.088Zm1.643 0h10.032c6.969 0 13.761 0 20.42.532a274.278 274.278 0 0 0 16.024 45.189c-8.878-1.021-17.489-1.864-26.19-2.663a259.125 259.125 0 0 1-20.686-42.925l.4-.133Zm32.049.666a248.509 248.509 0 0 1 32.539 4.438 268.185 268.185 0 0 0 10.964 44.79 526.699 526.699 0 0 0-27.301-3.995 275.582 275.582 0 0 1-16.602-45.1l.4-.133Zm34.136 4.793c5.771 1.243 11.587 2.664 17.402 4.439a142.029 142.029 0 0 0 17.756 3.863 250.243 250.243 0 0 0 7.146 41.859 138.56 138.56 0 0 1-16.38-2.397 336.279 336.279 0 0 0-14.871-2.885 270.238 270.238 0 0 1-11.452-44.745l.399-.134Zm36.755 8.479a181.086 181.086 0 0 0 26.635 1.909c6.17 0 12.34-.311 18.599-.888a289.456 289.456 0 0 0 1.11 38.752 160.126 160.126 0 0 1-39.152 1.953 245.21 245.21 0 0 1-7.59-41.593l.398-.133Zm46.832.888a209.794 209.794 0 0 0 34.892-6.481 150.662 150.662 0 0 0 15.092-5.061c-3.241 13.051-5.815 25.347-7.724 37.243a178.668 178.668 0 0 1-12.118 5.016 173.757 173.757 0 0 1-29.076 7.902 280.741 280.741 0 0 1-1.466-38.486l.4-.133Zm51.759-12.252c9.366-3.773 18.467-8.256 27.39-12.651 1.198-.577 2.396-1.154 3.55-1.775a260.73 260.73 0 0 1 11.453-5.238c-4.927 12.562-9.899 25.302-14.605 38.175l-5.237 2.885c-9.899 5.46-19.976 11.009-30.408 15.803 1.598-11.719 4.173-24.015 7.458-37.066l.399-.133Zm30.275-15.802-3.552 1.775c-8.567 4.217-17.312 8.523-26.279 12.163.933-3.596 1.909-7.28 2.93-11.009 2.219-8.123 4.883-16.513 7.458-24.592l.932-2.974c9.81-3.728 19.354-8.256 28.676-12.651l4.839-2.308a189.78 189.78 0 0 1 13.317-5.638c-1.82 4.839-3.729 9.633-5.593 14.338-1.066 2.664-2.132 5.327-3.153 7.946-1.465 3.684-2.885 7.324-4.439 11.009-.799 1.997-1.597 4.039-2.44 6.081a322.14 322.14 0 0 0-13.096 5.993l.4-.133Zm14.382-40.972-4.882 2.308c-8.878 4.217-18.068 8.523-27.434 12.163a342.813 342.813 0 0 0 10.565-39.463c10.565-4.439 20.686-9.543 30.629-14.693l8.39-4.438a120.747 120.747 0 0 1 8.878-4.085 190.575 190.575 0 0 1-11.453 41.949c-5.282 2.042-10.166 4.084-15.093 6.392l.4-.133Zm11.631-88.78-7.503 3.64c-8.124 3.995-16.424 8.035-24.991 11.364a174.026 174.026 0 0 0-11.142-39.951c6.436-2.042 12.74-4.439 18.91-6.969l8.035-3.107c2.575-1.021 5.194-1.82 7.813-2.575a145.775 145.775 0 0 1 18.021 33.514c-3.462 1.687-6.48 2.93-9.543 4.395l.4-.311Zm-17.269-36.266-8.035 3.152c-6.17 2.441-12.473 4.971-18.91 6.969a266.265 266.265 0 0 0-20.019-38.087c4.705-.665 9.366-1.553 14.205-2.485l6.214-1.155c2.708-.488 5.46-.754 8.213-.976a265.391 265.391 0 0 1 25.746 30.185c-2.841.977-5.327 1.775-7.813 2.708l.399-.311Zm-16.335-32.715 6.881-.267c4.217 0 8.567-.266 12.917-.799l2.841-.355a1354.7 1354.7 0 0 1 11.852 8.878c6.481 5.105 12.874 10.343 18.955 15.758l-3.907 1.066c-3.64.888-7.324 1.642-10.92 2.397-4.439.888-8.878 1.82-13.317 3.018a267.144 267.144 0 0 0-25.702-29.386l.4-.31Zm19.62-2.575c-4.439.488-8.611.622-12.784.755l-8.257.399c-9.1-9.322-18.688-18.244-28.055-26.634 4.439.577 8.879 1.11 12.963 1.51 1.554 0 3.107.266 4.706.31l10.875 7.857c7.191 5.149 14.56 10.432 21.84 15.803h-1.288Zm-83.853-56.286.311.311c8.878 8.878 18.333 17.756 28.543 26.989l1.243 1.109c-7.147-1.021-14.915-2.308-23.527-3.861l-9.632-12.918c-4.439-5.993-9.101-12.163-13.584-18.244l-1.11-1.554-2.086-2.885 4.439 2.219c4.439 2.353 8.877 4.75 13.76 6.97l1.643 1.864Zm-18.999-7.236 1.11 1.51c4.439 6.081 9.1 12.296 13.584 18.288l8.878 11.586-7.635-1.421a748.736 748.736 0 0 0-16.869-3.018c-4.439-8.212-8.878-16.291-13.095-24.281l-7.636-14.16c-.399-.711-.799-1.421-1.154-2.131a100.307 100.307 0 0 1 12.164 4.838c2.308 1.11 4.66 2.264 6.968 3.463.711 2.086 2.042 3.861 3.285 5.637l.4-.311Zm-23.216-10.742c2.53 4.705 5.149 9.499 7.68 14.116 4.172 7.679 8.39 15.403 12.518 23.216-8.212-1.376-16.425-2.663-24.548-3.906-2.353-5.416-4.839-10.743-7.281-15.981l-2.485-5.415c-1.598-3.418-3.419-6.881-5.327-10.565-1.909-3.684-3.196-6.17-4.705-9.278 7.527.743 14.962 2.23 22.195 4.439l1.953 3.374Zm-20.774 2.175c1.909 3.684 3.684 7.102 5.282 10.52a292.495 292.495 0 0 0 2.486 5.372c2.264 4.971 4.438 9.988 6.88 15.092l-4.66-.71-7.325-1.154a193.317 193.317 0 0 0-16.602-1.82c-2.93-6.437-6.126-12.784-9.366-19.221-1.776-3.507-3.774-7.013-5.904-10.742-1.598-2.797-3.197-5.638-4.706-8.479h15.848c4.439 0 8.877.444 12.917.844 1.198 3.862 2.974 7.324 4.661 10.609l.489-.311Zm-30.541-1.909c2.13 3.729 4.128 7.192 5.86 10.698 3.107 6.171 6.17 12.252 8.878 18.378a239.565 239.565 0 0 0-31.074.266c-3.151-6.88-6.481-13.317-9.589-19.221-2.13-3.995-4.438-7.99-7.057-11.896l-3.063-4.927a288.345 288.345 0 0 1 30.674-2.486c1.509 3.418 3.24 6.481 4.971 9.499l.4-.311Zm-34.003-.976c2.397 3.862 4.882 7.901 6.969 11.808 3.018 5.681 6.259 11.985 9.322 18.643-10.032.799-19.976 2.131-29.83 3.862a247.816 247.816 0 0 0-16.602-30.407c-.843-1.331-1.687-2.619-2.486-3.95 9.455-2.131 19.221-3.996 29.209-5.416a37.28 37.28 0 0 0 3.018 5.771l.4-.311Zm-31.473 4.705a247.717 247.717 0 0 1 16.335 29.83c-9.899 1.731-19.664 3.862-29.43 6.126a177.517 177.517 0 0 0-16.291-28.276c-.976-1.421-1.998-2.797-2.975-4.129a428.62 428.62 0 0 1 29.565-7.99l2.796 4.439Zm-30.629 8.567a179.806 179.806 0 0 1 16.069 27.788c-8.479 1.954-16.868 4.084-25.214 6.126l-5.148 1.376a123.94 123.94 0 0 0-16.47-27.788c-.577-.754-1.198-1.464-1.82-2.175l2.309-.843c8.656-3.063 17.756-6.126 27.034-8.878.666 1.687 1.775 3.196 2.84 4.705l.4-.311Zm-8.878 35.512c8.434-2.086 16.913-4.217 25.436-6.214a139.33 139.33 0 0 1 10.831 35.511c-10.166 1.554-20.332 3.196-30.319 4.972l-2.796.488a109.708 109.708 0 0 0-8.124-33.603l4.972-1.154Zm.665 71.689c11.498-1.109 23.128-2.041 34.403-2.929a195.912 195.912 0 0 1-12.739 35.955c-4.972 0-9.9-.31-14.783-.532-7.546-.355-15.314-.71-23.038-.577h-.622a208.262 208.262 0 0 0 14.604-31.739l2.175-.178Zm-16.113 33.47c7.635 0 15.403 0 22.95.533 4.661 0 9.41.444 14.16.533-1.554 3.507-3.152 6.969-4.75 10.431l-3.374 7.458c-1.864 4.084-3.905 8.212-5.858 12.163-1.199 2.486-2.442 5.016-3.641 7.546-5.327-.4-10.609-.932-15.759-1.465-7.546-.799-15.314-1.598-23.038-1.909h-1.243c1.687-3.196 3.418-6.392 5.193-9.677 1.776-3.285 2.975-5.415 4.439-8.212 1.998-3.773 4.085-7.546 6.26-11.541l3.152-5.771 1.509-.089Zm-26.634 86.738 17.756.577 16.691.533a113.106 113.106 0 0 0 5.504 30.229 153.563 153.563 0 0 0 5.681 14.871l-6.835-.311c-7.857-.311-15.981-.666-24.016-.932h-3.284a159.114 159.114 0 0 1-7.769-15.27 108.48 108.48 0 0 1-8.478-29.786l4.75.089Zm14.781 46.52c8.035.267 16.115.577 23.972.932l7.59.311a257.054 257.054 0 0 0 24.726 41.682l-4.439-.31-18.821-1.421-4.706-.4a276.971 276.971 0 0 1-30.807-40.882l2.485.088Zm33.115 42.748 18.778 1.42 5.549.4c4.439 6.125 8.878 12.118 13.317 18.111 4.439 5.992 9.277 12.429 13.716 18.732.355.444.666.932.977 1.376a898.574 898.574 0 0 0-21.929-3.462h-1.465a76.928 76.928 0 0 0-3.285-4.084c-6.126-7.324-12.607-14.515-18.91-21.529l-9.855-11.009 3.107.045Zm52.603 37.775c-4.439-6.303-9.233-12.651-13.761-18.777-4.528-6.125-8.389-11.275-12.517-17.045 8.523.621 17.046 1.287 25.657 2.042 6.126 10.742 12.695 21.174 19.221 31.516l4.439 7.28.976 1.598c-7.413-1.331-14.871-2.707-22.195-3.995l-1.82-2.619Zm24.459 4.439-4.439-7.28c-6.303-10.032-12.695-20.152-18.643-30.54 8.671.74 17.326 1.628 25.967 2.664l2.931 6.436c3.817 8.079 8.123 16.069 12.296 23.749 2.086 3.906 4.439 7.901 6.347 11.94l-15.403-2.841-7.236-1.331c-.977-.932-1.554-1.865-2.131-2.797h.311Zm19.311-5.682c-4.129-7.679-8.435-15.669-12.208-23.704-.888-1.864-1.731-3.729-2.575-5.548a587.651 587.651 0 0 1 27.167 3.995c.621 1.82 1.243 3.64 1.909 5.46 4.439 12.207 9.544 23.526 15.714 36.799a1173.752 1173.752 0 0 1-23.083-4.04c-2.575-4.35-4.927-8.745-7.235-12.962h.311Zm48.429-13.894c-.577-1.908-1.066-3.817-1.598-5.682 3.595.222 7.236.356 10.876.356 9.388-.01 18.757-.812 28.009-2.397a313.295 313.295 0 0 0 5.46 34.224l.667 3.285a115.999 115.999 0 0 1-30.718 4.439 331.745 331.745 0 0 1-13.007-34.225h.311Zm44.39 26.146a309.94 309.94 0 0 1-5.46-34.136 170.236 170.236 0 0 0 29.475-7.99c3.818-1.42 7.547-2.974 11.275-4.439a363.054 363.054 0 0 0-3.551 29.919c0 2.219-.355 4.439-.577 6.614-3.462 1.997-6.969 3.906-10.565 5.682a132.269 132.269 0 0 1-19.931 7.768l-.666-3.418Zm33.249-16.691a368.231 368.231 0 0 1 3.729-30.806c10.742-4.927 21.218-10.654 31.383-16.291l3.729-2.042c-3.951 10.742-7.724 21.573-11.186 32.493-.489 1.465-.933 2.93-1.377 4.439l-1.287.888c-8.257 5.726-16.691 11.63-25.48 16.868-.267-1.864-.089-3.684.044-5.549h.445Zm67.873-65.652c-8.879 3.951-17.757 8.567-26.191 13.317 4.705-12.784 9.632-25.435 14.515-37.864 10.876-4.439 21.885-8.479 33.337-12.474l2.931-1.021 3.063-1.11c-6.437 12.03-13.317 23.971-19.665 35.512l-7.99 3.64Zm24.059-39.596-2.93 1.021c-10.964 3.862-21.529 7.591-32.005 11.941l1.864-4.75c1.421-3.64 2.886-7.324 4.439-11.008l3.152-7.946a763.854 763.854 0 0 0 6.082-15.581c9.766-3.64 19.531-6.614 29.741-9.677l7.057-2.13 6.171-1.909c-4.439 10.52-9.233 19.931-12.961 27.211-1.909 3.728-3.863 7.457-5.816 11.186l-4.794 1.642Zm16.824-39.595-7.059 2.13c-9.766 2.93-19.22 5.771-28.542 9.234a186.482 186.482 0 0 0 11.186-41.904 267.443 267.443 0 0 1 25.48-8.434l10.653-3.196 6.038-1.909a132.447 132.447 0 0 1-10.388 41.77l-7.368 2.309Zm0-83.852-10.698 3.062c-6.703 1.909-13.318 3.729-19.577 6.037a144.309 144.309 0 0 0-17.756-33.38c4.173-1.11 8.346-1.954 12.652-2.841 3.595-.755 7.28-1.51 11.009-2.442a96.746 96.746 0 0 0 4.838-1.332 151.847 151.847 0 0 1 25.569 28.942c-2.308.711-4.262 1.332-6.259 1.954h.222Zm-17.756-31.384c3.507-1.065 6.925-2.264 10.299-3.418a136.615 136.615 0 0 1 24.059-6.703h.887a152.149 152.149 0 0 1 31.385 24.992 228.25 228.25 0 0 0-28.365 9.41c-4.173 1.598-8.435 3.241-12.741 4.75a148.184 148.184 0 0 0-25.969-28.987l.445-.044Zm9.81-4.883c-3.64 1.243-7.369 2.53-11.098 3.684-6.303-5.681-13.006-11.141-19.709-16.468-3.551-2.752-7.102-5.504-10.698-8.212 3.64-.622 7.28-1.421 10.831-2.22a126.25 126.25 0 0 1 17.312-3.107h1.688c4.039 2.175 8.079 4.439 12.118 6.614 7.147 3.951 15.048 8.345 22.994 13.317a139.344 139.344 0 0 0-23.881 6.392h.443Zm-62.147-47.452c-5.105 0-10.343.488-15.536.31-10.077-7.28-20.198-14.782-29.875-22.639l-1.11-.887-1.243-1.021a140.201 140.201 0 0 0 15.892 2.042l7.191.71 3.153 2.042 2.086 1.332c9.766 6.259 19.798 12.074 29.919 17.755-3.818 0-7.37.178-10.788.356h.311Zm-31.738-23.705a113.345 113.345 0 0 1-18.733-2.752c-10.964-8.878-21.929-19.442-22.906-33.914a124.225 124.225 0 0 0 21.796 7.236c1.554 13.317 12.962 22.461 24.06 29.83l-4.217-.4Zm-22.195-3.817a132.067 132.067 0 0 1-15.315-6.259c-9.854-10.076-20.287-21.485-20.909-36v-.266a115.22 115.22 0 0 0 12.474 7.546l2.931 1.42c.089 14.294 9.854 24.681 20.285 33.559h.534Zm-39.064-18.333-4.439-2.175a107.637 107.637 0 0 0-13.806-5.371 97.98 97.98 0 0 1-11.896-39.019 75.76 75.76 0 0 1 10.697 6.082l4.795 3.418c-.488 13.849 6.436 26.056 14.116 37.065h.533Zm-20.287-8.168a124.328 124.328 0 0 0-22.195-4.039 63.616 63.616 0 0 1-6.036-18.955 1784.318 1784.318 0 0 1-2.486-21.307 74.944 74.944 0 0 1 19.221 5.194 97.658 97.658 0 0 0 10.964 38.974l.532.133Zm-29.741-22.816a63.472 63.472 0 0 0 5.86 18.644c-3.907-.355-7.902-.577-12.074-.755-5.638 0-11.231-.266-16.735 0a67.158 67.158 0 0 1-6.926-18.333c-1.376-7.058-2.663-14.205-3.994-21.396a256.861 256.861 0 0 1 16.424-.533h.799c4.732.018 9.459.3 14.16.844.311 7.235 1.11 14.471 1.954 21.529h.532Zm-31.384-.311a67.842 67.842 0 0 0 6.703 18.111 289.501 289.501 0 0 0-30.718 2.575 79.915 79.915 0 0 1-7.724-15.98c-2.353-7.192-4.439-14.472-6.303-21.751a281.31 281.31 0 0 1 34.003-4.439c.799 7.191 2.175 14.382 3.507 21.484h.532Zm-33.204 5.194a80.913 80.913 0 0 0 7.546 15.714c-9.988 1.42-19.753 3.285-29.252 5.46a160.893 160.893 0 0 1-17.757-34.846 330.556 330.556 0 0 1 33.071-8.301 186.106 186.106 0 0 0 5.86 22.017l.532-.044Zm-57.707 25.746 3.24 4.439c-9.189 2.841-18.067 5.859-26.634 8.878l-2.841 1.065c-2.486-2.885-5.149-5.593-7.768-8.212a95.68 95.68 0 0 1-14.516-17.312l-.665-1.154 5.46-2.664c8.878-4.438 17.756-8.167 26.634-11.718a150.121 150.121 0 0 0 16.513 26.678h.577Zm-49.762-10.521a95.822 95.822 0 0 0 14.738 17.756c2.442 2.486 4.927 5.017 7.28 7.68a280.745 280.745 0 0 0-32.139 14.249c-2.797-3.152-5.726-6.082-8.611-8.878a111.67 111.67 0 0 1-13.317-14.871c10.92-6.569 21.573-12.162 31.073-16.956l.976 1.02Zm23.127 26.634 2.087 2.575a121.396 121.396 0 0 1 16.203 27.255 294.7 294.7 0 0 0-33.96 11.63 111.753 111.753 0 0 0-14.115-24.192c-.755-1.065-1.599-2.086-2.442-3.063a281.856 281.856 0 0 1 31.651-14.293l.576.088Zm18.866 31.073a109.142 109.142 0 0 1 8.124 33.514 298.38 298.38 0 0 0-34.536 8.878 104.919 104.919 0 0 0-7.546-30.673 297.374 297.374 0 0 1 33.382-11.63l.576-.089Zm3.285 70.402a211.877 211.877 0 0 1-14.692 31.606 149.277 149.277 0 0 0-30.186 4.439 191.349 191.349 0 0 0 11.674-29.253 219.086 219.086 0 0 1 32.628-6.703l.576-.089Zm-15.537 33.159-2.707 5.016c-2.086 3.774-4.439 7.724-6.259 11.542a686.276 686.276 0 0 1-4.44 8.212 476.315 476.315 0 0 0-5.548 10.343 198.01 198.01 0 0 0-27.655 1.553c1.331-2.663 2.753-5.326 4.173-7.99l4.173-7.946 1.553-3.063c2.13-4.172 4.438-8.522 6.525-12.917a152.229 152.229 0 0 1 29.609-4.661l.576-.089Zm-56.642 83.986c8.878.932 17.757 1.909 26.99 2.397a109.607 109.607 0 0 0 8.611 30.451 160.563 160.563 0 0 0 7.37 14.604 138.546 138.546 0 0 1-28.854-3.906 146.554 146.554 0 0 1-7.28-15.581 104.593 104.593 0 0 1-7.014-27.965h.177Zm43.903 48.828a269.972 269.972 0 0 0 30.362 40.661 245.04 245.04 0 0 1-33.204-6.259 319.654 319.654 0 0 1-25.967-38.086 142.546 142.546 0 0 0 28.231 3.995l.578-.311Zm67.473 80.967a1111.56 1111.56 0 0 1 23.26 3.729c9.9 15.092 13.939 30.185 12.119 43.946-6.792-1.243-13.627-2.308-20.463-3.063l-2.975-.355c4.661-14.96-3.197-31.295-12.519-43.857l.578-.4Zm37.287 40.617a71.021 71.021 0 0 0-11.985-36.533 2141.886 2141.886 0 0 1 22.195 3.995 97.033 97.033 0 0 1 13.318 44.39l-3.33-.666c-6.747-1.376-13.583-2.752-20.463-3.995a49.93 49.93 0 0 0-.444-6.88l.709-.311Zm12.208-32.183 5.993 1.11 16.557 3.018c.489.933.977 1.865 1.421 2.797a127.803 127.803 0 0 1 11.32 40.572v1.243c-7.68-1.243-15.227-2.752-22.773-4.439a96.95 96.95 0 0 0-13.095-43.99l.577-.311Zm36.799 47.275a129.8 129.8 0 0 0-11.451-41.016c-.311-.621-.578-1.198-.889-1.775a1437.03 1437.03 0 0 0 22.995 3.995l.399.843a157.399 157.399 0 0 1 11.186 41.549v.755c-7.413-.533-14.782-1.465-22.195-2.62-.444-.266-.532-.843-.621-1.42l.576-.311Zm23.75 3.33a160.715 160.715 0 0 0-11.276-41.86l11.409 1.776c5.322.764 10.692 1.15 16.069 1.154l.976 2.352a146.059 146.059 0 0 1 8.302 34.225l.311 2.086c0 .4-.001.755.221 1.154-4.75.4-9.588.533-14.604.577-3.684 0-7.325 0-10.965-.399-.888 0-.932-.399-1.021-.755l.578-.31Zm27.344-.444-.356-2.131a148.116 148.116 0 0 0-8.389-34.535l-.71-1.776a117.377 117.377 0 0 0 30.407-4.439 378.317 378.317 0 0 1 5.415 37.82 88.036 88.036 0 0 1-26.145 6.348c-.666-.177-.754-.577-.799-.977l.577-.31Zm53.268-47.852c.311-3.152.666-6.348.977-9.544 9.1-5.327 17.756-11.364 26.235-17.268-3.507 11.719-6.57 23.837-8.878 36.311-6.57 6.081-13.318 12.251-20.331 17.756-.799-8.745.177-17.978 1.198-26.945l.799-.31Zm29.209-28.232c7.635-5.327 15.493-10.743 23.527-15.537l1.998-1.154a332.953 332.953 0 0 0-15.848 35.734l-2.84 2.397c-5.505 4.439-10.832 9.632-16.026 14.471a322.976 322.976 0 0 1 8.391-35.778l.798-.133Zm28.055-18.2a693.555 693.555 0 0 1 28.41-15.714c-7.932 11.453-15.196 22.964-21.796 34.535-7.724 5.105-15.27 10.565-22.506 16.424a317.45 317.45 0 0 1 15.092-34.934l.8-.311Zm1.375-2.575v-.222c6.082-11.23 12.431-22.55 18.556-33.469l1.287-2.309c7.901-3.595 15.803-7.324 23.482-10.92l13.318-6.17c-1.643 2.175-3.285 4.439-4.883 6.481-6.214 8.168-12.606 16.646-18.732 25.08l-4.085 5.682a493.105 493.105 0 0 0-29.741 16.158l.798-.311Zm42.749-48.296-21.53 10.032c6.526-11.63 13.096-23.437 19.444-35.511 14.648-5.372 29.12-11.409 43.236-17.401-8.035 12.074-16.691 23.793-25.347 35.29l-15.803 7.59Zm42.703-45.011c-14.249 6.037-28.898 12.207-43.724 17.756 1.687-3.196 3.418-6.436 5.06-9.677 4.439-8.878 9.411-18.688 13.317-28.543 15.803-5.104 31.384-11.097 46.565-17.045a230.2 230.2 0 0 1-14.515 26.9c-3.019 3.818-5.149 7.369-7.457 10.92l.754-.311Zm24.281-79.369c-12.607 4.439-25.524 9.367-38.53 13.628a65.564 65.564 0 0 0-2.708-20.774 77.88 77.88 0 0 0-8.257-17.756c4.439-1.509 8.39-3.107 12.474-4.439a224.572 224.572 0 0 1 28.143-9.322h.978a68.945 68.945 0 0 1 11.053 16.602 52.24 52.24 0 0 1 4.439 19.842l-7.592 2.219Zm4.439-23.304a70.618 70.618 0 0 0-10.786-16.38c12.651-2.93 26.944-6.215 41.815-9.411a61.667 61.667 0 0 1 8.878 14.826 50.197 50.197 0 0 1 3.64 17.756c-13.317 4.04-26.235 8.878-39.063 13.317a53.282 53.282 0 0 0-5.149-19.797l.665-.311Zm-11.941-17.756a150.061 150.061 0 0 0-30.806-24.947l9.233-1.332c12.208-1.776 24.725-3.595 37.154-5.593a123.796 123.796 0 0 1 26.324 22.417c-15.626 3.64-29.963 6.925-42.57 9.854l.665-.399Zm-21.795-27.788-10.964 1.598c-8.479-5.327-17.002-10.032-24.637-14.294l-10.077-5.504 13.006-1.065c12.43-1.021 25.214-2.042 37.999-3.507 3.551 1.909 7.102 3.817 10.609 5.771 6.658 3.728 13.317 7.59 19.532 11.674-12.562 2.264-24.46 3.995-36.134 5.86l.666-.533Zm-32.805-20.774-15.314 1.242-13.716-7.324a2338.674 2338.674 0 0 1-20.331-10.875 432.893 432.893 0 0 0 54.2-2.131l9.988 5.06c6.88 3.507 13.894 7.058 20.863 10.743-12.651 1.731-24.636 2.707-36.355 3.684l.665-.399Zm-50.293-18.511h-1.998c-10.92-6.037-21.795-12.296-32.316-18.999l-2.086-1.331-.533-.356a395.41 395.41 0 0 0 57.707 1.51l3.196 1.82 1.643.976c8.878 5.061 17.755 9.899 26.9 14.516a411.207 411.207 0 0 1-53.18 2.263l.667-.399Zm-39.952-22.594c-11.452-7.369-23.971-16.513-25.835-29.786a295.324 295.324 0 0 0 60.282 5.726c3.019 12.208 13.317 19.709 23.793 26.013a386.974 386.974 0 0 1-58.773-1.687l.533-.266Zm-50.871-39.951a24.885 24.885 0 0 1-2.175-1.065 110.03 110.03 0 0 1-13.317-8.079c0-13.317 5.638-27.078 11.053-40.351l.31-.71a392.642 392.642 0 0 0 15.937 4.439l1.775.488c-6.881 14.471-13.938 30.452-14.116 45.544l.533-.266Zm-5.771-49.983c-5.326 13.051-10.831 26.634-11.142 39.951-2.929-2.087-5.77-4.439-8.611-6.348l-5.815-4.439v-.311a120.415 120.415 0 0 1 7.99-34.268v-.489l5.992 1.82 11.675 3.462-.089.622Zm-18.999-5.859a123.659 123.659 0 0 0-8.079 33.958c-1.287-.932-2.619-1.909-3.95-2.797a75.449 75.449 0 0 0-11.631-6.569v-2.708a161.227 161.227 0 0 1 3.418-28.188c6.836 1.909 13.673 3.907 20.42 5.904l-.178.4Zm-21.795-6.57a167.81 167.81 0 0 0-3.463 28.454v2.042a76.377 76.377 0 0 0-19.354-5.061 1509.088 1509.088 0 0 1-3.196-31.916c8.878 1.776 17.357 3.951 26.013 6.303v.178Zm-24.327 25.213a124.644 124.644 0 0 0-13.982-.754h-.799c-5.504 0-11.053 0-16.691.532a1499.11 1499.11 0 0 1-6.126-36.088c5.77 0 11.497.665 17.135 1.42a275.065 275.065 0 0 1 17.267 2.885c.444 11.32 1.51 22.018 2.664 32.405l.532-.4Zm-33.026 0a293.213 293.213 0 0 0-34.136 4.439 415.891 415.891 0 0 1-7.768-38.574 208.107 208.107 0 0 1 35.779-2.175c1.376 12.562 3.462 24.636 5.593 36.577l.532-.267Zm-35.512 4.839a335.207 335.207 0 0 0-33.16 8.301 262.75 262.75 0 0 1-9.454-38.886 240.913 240.913 0 0 1 34.845-8.079 316.49 316.49 0 0 0 7.103 38.93l.666-.266Zm-34.625 8.878a405.894 405.894 0 0 0-32.848 11.674 29.956 29.956 0 0 1-.755-1.775 176.245 176.245 0 0 1-10.165-35.201 262.02 262.02 0 0 1 34.269-13.584 269.578 269.578 0 0 0 8.834 39.019l.665-.133Zm-35.023 10.476c0 .621.488 1.198.754 1.775a434.39 434.39 0 0 0-26.634 11.719l-5.549 2.708a110.396 110.396 0 0 1-11.363-32.76l.888-.577.887-.577a274.072 274.072 0 0 1 30.673-17.401 176.19 176.19 0 0 0 9.678 35.068l.666.045Zm-32.628 16.868c-9.721 4.794-20.418 10.431-31.383 17.001l-.933-1.509a88.214 88.214 0 0 1-10.786-27.078c10.609-7.147 21.219-14.116 31.695-20.952a110.963 110.963 0 0 0 10.742 32.671l.665-.133Zm-31.827 19.087a113.179 113.179 0 0 0 13.317 15.137c2.797 2.797 5.638 5.638 8.301 8.878a260.768 260.768 0 0 0-31.073 19.31c-2.441-3.063-5.017-5.949-7.547-8.878a117.327 117.327 0 0 1-11.763-14.738 285.917 285.917 0 0 1 28.099-19.575l.666-.134Zm22.86 24.947a95.188 95.188 0 0 1 2.62 3.285 111.313 111.313 0 0 1 13.895 23.838 291.79 291.79 0 0 0-33.56 16.734 107.954 107.954 0 0 0-12.607-22.594l-1.376-1.864a259.383 259.383 0 0 1 30.363-19.265l.665-.134Zm17.136 28.543a104.46 104.46 0 0 1 7.412 30.584 311.537 311.537 0 0 0-34.358 13.317 106.518 106.518 0 0 0-6.658-27.299 282.255 282.255 0 0 1 32.938-16.469l.666-.133Zm3.64 65.519a198.496 198.496 0 0 1-11.809 29.253c-8.878 2.264-17.755 5.06-26.145 7.99a148.141 148.141 0 0 0 6.614-26.634c9.633-3.773 20.064-7.413 30.673-10.254l.667-.355Zm-12.696 31.073a1441.85 1441.85 0 0 1-5.948 11.763l-1.554 3.019-4.128 7.901c-1.598 3.019-3.196 5.993-4.661 8.878-7.369.932-14.649 2.175-21.84 3.507a69.146 69.146 0 0 1 2.263-4.439c1.376-2.752 2.798-5.593 4.174-8.523 2.13-4.439 4.084-9.322 5.771-14.027 7.857-2.841 16.468-5.638 25.257-7.724l.666-.355Zm-26.234 78.57a106.514 106.514 0 0 0 7.146 28.72 157.896 157.896 0 0 0 6.658 14.427c-4.439-1.199-8.878-2.752-13.317-4.439-4.439-1.687-8.3-2.797-12.562-3.995a164.88 164.88 0 0 1-4.217-12.208 109.854 109.854 0 0 1-4.439-24.68c6.081.843 13.184 1.553 20.064 2.308l.667-.133Zm0 40.394c4.838 1.643 9.853 3.33 14.825 4.439a294.612 294.612 0 0 0 25.569 37.998c-10.609-2.796-21.085-6.037-31.872-9.366l-2.175-.666-2.353-4.439c-5.371-10.254-10.875-20.774-15.314-31.739 3.151 1.376 6.924 2.619 10.653 3.907l.667-.134Zm69.027 82.299c7.368 12.163 13.716 28.72 6.347 42.792-20.641-4.839-39.952-10.654-57.22-16.336.173-.236.322-.489.445-.754a46.17 46.17 0 0 0 4.839-36.622c13.805 4.217 28.853 7.813 44.922 11.053l.667-.133Zm5.593 44.39-.711 1.109a53.527 53.527 0 0 1-24.193 18.2 1137.168 1137.168 0 0 1-55.043-12.695 89.727 89.727 0 0 0 22.683-23.039c16.557 5.682 35.912 11.497 56.775 16.38l.489.045Zm.576 1.953c.356-.533.666-1.065.977-1.598a461.208 461.208 0 0 0 46.743 8.478 40.349 40.349 0 0 1-21.53 19.887 1190.061 1190.061 0 0 1-49.095-8.878 52.736 52.736 0 0 0 22.24-17.934l.665.045Zm49.141 7.457v-.399l3.373.399c6.792.755 13.628 1.82 20.419 3.063a48.825 48.825 0 0 1-11.407 24.015 267.414 267.414 0 0 0-31.073-7.102h-1.599a40.347 40.347 0 0 0 19.62-20.02l.667.044Zm25.435 3.33c6.836 1.242 13.672 2.619 20.375 3.995l3.64.754a89.975 89.975 0 0 1-4.439 29.608c-10.21-3.64-20.508-7.102-31.073-10.165a50.075 50.075 0 0 0 10.831-24.237l.666.045Zm25.569 5.06c7.591 1.509 15.226 3.019 22.95 4.439a200.53 200.53 0 0 1 .843 35.512c-5.327-1.687-10.653-3.552-15.98-5.46l-1.288-.444-10.964-3.951a91.191 91.191 0 0 0 3.773-30.14l.666.044Zm24.504 4.439c7.368 1.154 14.737 2.086 22.195 2.574 2.175 12.918 3.595 25.969 4.439 39.019a153.901 153.901 0 0 1-25.969-5.993 202.942 202.942 0 0 0-1.332-35.556l.667-.044Zm23.792 2.663c3.552 0 7.103.355 10.699.355 5.105 0 10.032 0 14.826-.577a1086.22 1086.22 0 0 1 5.415 39.418c-4.496.491-9.015.742-13.538.755h-.355a109.844 109.844 0 0 1-12.741-.799c-1.42-13.051-2.885-26.146-4.971-39.107l.665-.045Zm27.257-.355a89.406 89.406 0 0 0 26.101-6.303c1.198 12.917 2.042 25.879 2.752 38.752A71.299 71.299 0 0 1 466 676.577c-2.264-13.45-4.04-26.501-6.082-39.33l.667-.044Zm27.566-6.925a89.08 89.08 0 0 0 13.317-7.368 143.034 143.034 0 0 0 7.901-5.726v37.331c-2.397 2.397-4.839 4.705-7.413 6.836a68.027 68.027 0 0 1-11.009 7.502c-1.421-12.74-2.22-25.702-3.463-38.53l.667-.045Zm22.771 7.502v-21.84c6.925-5.459 13.318-11.408 19.799-17.312a469.993 469.993 0 0 0-5.948 37.51 179.898 179.898 0 0 1-13.939 16.735c-.622-5.016-.621-10.077-.621-15.048l.709-.045Zm42.616-59.526c7.102-5.815 14.426-11.32 21.972-16.38-6.081 10.875-11.541 21.84-16.29 32.715a152.381 152.381 0 0 0-16.469 17.756 355.334 355.334 0 0 1 10.121-34.047l.666-.044Zm24.77-18.244a271.709 271.709 0 0 1 36.488-20.242 197.91 197.91 0 0 0-15.403 29.519 138.074 138.074 0 0 0-37.333 22.816c4.128-10.698 9.588-21.396 15.581-32.049l.667-.044Zm1.642-2.841c6.569-11.453 13.893-22.861 21.839-34.225 12.548-6.392 24.948-12.163 37.2-17.312-8.079 10.565-15.847 20.996-22.816 31.916a282.527 282.527 0 0 0-36.889 19.665l.666-.044Zm23.793-36.888 2.353-3.33c6.126-8.389 12.518-16.868 18.688-25.08 2.22-2.885 4.439-5.815 6.614-8.878 12.518-5.77 25.258-11.452 38.086-16.557l-9.276 11.763c-4.44 5.815-9.323 11.852-13.895 17.756l-.577.755-4.928 6.392a509.399 509.399 0 0 0-37.731 17.223l.666-.044Zm29.608-39.951c8.567-11.408 17.091-23.083 24.992-35.024h.577c12.296-5.238 24.947-10.564 37.732-15.447-7.99 11.719-16.602 23.127-25.302 34.313-13.495 5.282-26.191 10.654-38.664 16.424l.665-.266Zm26.634-37.332c1.909-2.93 3.818-5.859 5.638-8.878a230.48 230.48 0 0 0 15.226-28.498l3.373-1.287c11.453-4.439 23.217-8.878 35.069-13.317a234.782 234.782 0 0 1-13.317 24.37 373.236 373.236 0 0 1-7.724 11.985c-13.716 5.194-26.545 10.609-39.063 15.891l.798-.266Zm23.661-39.951-1.954.755a135.442 135.442 0 0 0 5.194-14.16 85.969 85.969 0 0 0 4.084-26.634c12.828-4.439 25.879-9.277 39.019-13.317a97.34 97.34 0 0 1-9.81 39.551c-13.14 4.75-25.392 9.189-37.333 13.983l.8-.178Zm56.375-57.884c-3.107.888-6.215 1.776-9.322 2.752a52.052 52.052 0 0 0-3.728-17.756 63.092 63.092 0 0 0-8.878-14.604l9.277-1.953c10.875-2.308 22.195-4.439 33.203-6.658a70.178 70.178 0 0 1 6.97 14.338 52.581 52.581 0 0 1 2.842 16.024 532.16 532.16 0 0 0-30.364 7.857Zm-12.829-32.981-10.031 2.13a121.573 121.573 0 0 0-25.791-22.195l10.21-1.642 22.195-3.862 15.624-2.708a100.522 100.522 0 0 1 20.242 22.195c-10.875 1.465-21.751 3.551-32.449 5.948v.134Zm-3.462-27.3-22.195 3.862-11.808 1.909c-6.748-4.439-13.85-8.878-21.041-12.651l-8.878-4.75 10.076-1.332c14.205-1.997 28.588-4.439 42.66-6.703a200.375 200.375 0 0 1 25.524 17.179l-14.338 2.486Zm-54.112-14.471c-4.084.577-8.168 1.11-12.252 1.554-7.635-4.04-15.359-7.946-22.905-11.808l-7.813-3.995 7.768-.799c15.759-1.731 31.65-3.951 47.365-6.392 9.455 4.749 19.221 9.677 28.632 15.048-13.494 2.13-27.079 4.35-40.795 6.259v.133Zm-35.513-16.557-10.121 1.02c-9.677-4.971-19.486-10.12-28.986-15.58l-1.643-.977-1.109-.621a556.485 556.485 0 0 0 16.424-1.066c13.672-1.065 27.433-2.619 41.105-4.439l2.975 1.687c7.946 4.439 16.824 8.878 26.235 13.717h.311c-14.871 2.352-30.009 4.35-45.057 6.126l-.134.133Zm-54.111-44.834h-15.803a26.088 26.088 0 0 1-.443-3.329c-1.021-11.763 2.485-23.971 6.036-35.823 3.995.799 7.991 1.598 11.986 2.264 12.03 2.131 24.325 3.818 36.932 5.194-.6 10.37.756 20.76 3.996 30.629-13.939.532-28.144 1.021-42.571.932l-.133.133Zm-8.878-47.941-2.042 6.881c-17.001-3.552-33.87-8.035-50.339-12.607a262.207 262.207 0 0 0 3.996-7.768 971.628 971.628 0 0 1 13.849-26.634 303.327 303.327 0 0 1 4.439-8.168c8.878 3.418 17.756 7.369 26.634 11.275 4.439 1.998 8.878 4.039 13.317 5.993-3.506 10.12-6.924 20.596-9.854 30.895v.133Zm-35.912-40.794c-4.883 9.189-9.499 17.756-13.849 26.634a493.428 493.428 0 0 1-4.128 8.034l-8.878-2.53-14.383-3.995c1.643-3.64 3.24-7.102 4.705-10.52 4.128-9.677 8.878-19.665 13.317-29.297l1.687-3.596a146.869 146.869 0 0 1 25.968 7.28l-4.439 7.99Zm-58.684 13.317c-1.065 2.885-2.264 5.771-3.463 8.878l-11.807-3.507-5.949-1.775c1.021-2.975 1.954-5.816 2.842-8.878 2.53-8.39 5.459-16.824 8.478-25.125h22.195c-4.217 9.988-8.523 20.286-12.296 30.407Zm-19.842-5.593a325.847 325.847 0 0 1-2.841 8.656c-6.836-2.042-13.717-4.084-20.642-5.993.533-3.018 1.11-6.081 1.554-8.878 1.065-6.925 2.398-13.805 3.863-20.685 6.392 1.021 12.606 1.731 18.599 2.13 2.574 0 5.149.267 7.768.311-2.93 7.946-5.816 16.202-8.301 24.459Zm-23.439-6.703c-.443 2.974-.975 5.993-1.508 8.878-8.878-2.397-17.756-4.439-26.634-6.392-.888-10.521-1.687-21.263-2.264-32.183a184.037 184.037 0 0 0 22.195 6.703c3.995.888 7.945 1.598 11.807 2.264-1.198 6.925-2.53 13.761-3.596 20.73Zm-29.474 2.264c-5.638-1.11-11.276-2.086-16.913-2.797-5.638-.71-11.675-1.243-17.756-1.465a1033.945 1033.945 0 0 1-5.194-37.908 128.744 128.744 0 0 1 16.114 2.974c7.013 1.73 14.028 4.439 20.775 6.57h.576a2056.439 2056.439 0 0 0 2.309 32.626h.089Zm-36.09-4.439a208.27 208.27 0 0 0-35.512 2.219c-2.042-13.317-3.552-26.633-4.439-40.217a157.853 157.853 0 0 1 35.157 0c1.066 12.873 2.841 25.569 4.794 38.131v-.133Zm-37.288 2.441a244.35 244.35 0 0 0-26.945 5.815c-2.619.711-5.282 1.51-7.901 2.309a276.51 276.51 0 0 1-1.464-9.677c-1.465-10.254-2.486-20.597-3.241-31.073a183.548 183.548 0 0 1 34.979-7.724c1.066 13.672 2.397 27.122 4.572 40.483v-.133Zm-37.865-1.331a471.664 471.664 0 0 0 1.555 9.898 273.977 273.977 0 0 0-34.314 13.317 306.788 306.788 0 0 1-1.465-8.878c-1.421-9.898-2.353-19.886-2.93-29.918a194.64 194.64 0 0 1 33.958-15.181c.755 10.476 1.776 20.729 3.374 30.895l-.178-.133Zm-35.734 14.604c.444 3.285.977 6.436 1.554 9.544a269.566 269.566 0 0 0-31.073 17.756l-.888.577-.355.221c-.4-2.175-.755-4.438-1.065-6.614a249.396 249.396 0 0 1-2.087-28.232l4.439-3.639a182.207 182.207 0 0 1 26.635-18.733c.532 9.766 1.42 19.576 2.84 29.253v-.133Zm-33.514 21.484c.355 2.516.754 4.957 1.198 7.325-10.521 6.88-21.174 13.849-31.739 20.952-.444-1.998-.799-4.084-1.11-6.171a123.347 123.347 0 0 1-1.021-24.148c10.121-7.99 20.153-16.335 30.585-24.991.158 9.089.856 18.16 2.087 27.167v-.134Zm-33.16 22.195c.355 2.353.754 4.439 1.243 6.881-9.677 6.525-19.265 13.317-28.632 20.064-.399-1.731-.799-3.507-1.11-5.282a81.601 81.601 0 0 1-.576-23.927c9.588-6.747 18.821-13.716 28.009-20.952a127.347 127.347 0 0 0 1.066 23.483v-.267Zm-41.993 39.951 6.703-5.149 6.969-5.194a104.718 104.718 0 0 0 11.897 27.744v.266a194.267 194.267 0 0 0-7.547 6.259l-5.948 5.194c-5.061 4.439-10.166 8.878-15.492 13.317a112.785 112.785 0 0 1-13.672-29.742c6.037-3.906 11.63-8.212 17.09-12.473v-.222Zm13.317 30.274 5.948-5.194c2.398-2.131 4.883-4.128 7.324-6.126a126.205 126.205 0 0 0 11.853 14.782c2.486 2.797 5.061 5.638 7.458 8.656-3.196 2.308-6.304 4.75-9.412 7.236l-6.214 5.06c-5.371 4.439-10.786 8.878-16.335 13.095-2.131-3.196-4.44-6.259-6.349-9.322-3.418-4.927-6.791-9.81-9.943-14.782 5.327-4.128 10.52-8.7 15.625-13.183l.045-.222Zm17.756 25.613 6.26-5.061a239.852 239.852 0 0 1 9.365-7.235l1.377 1.864a103.677 103.677 0 0 1 12.429 22.55l-5.86 3.507c-5.77 3.595-11.542 7.413-17.135 11.097-3.773 2.486-7.545 5.016-11.407 7.502a124.068 124.068 0 0 0-10.299-19.31l-1.154-1.775c5.637-4.084 11.142-8.523 16.513-12.918l-.089-.221Zm7.28 28.009c5.549-3.684 11.319-7.501 17.09-11.097l5.638-3.374a108.58 108.58 0 0 1 6.481 27.256c-2.353 1.065-4.705 2.219-7.013 3.373l-7.724 3.818c-6.526 3.285-13.007 6.525-19.488 9.633a119.412 119.412 0 0 0-6.659-22.195c4.04-2.087 7.947-4.573 11.764-7.192l-.089-.222Zm14.072 49.983c4.75-1.82 9.499-3.639 14.338-5.415a147.3 147.3 0 0 1-6.836 26.634l-6.437 2.263a439.147 439.147 0 0 1-20.863 6.659 120.98 120.98 0 0 0 3.063-23.97c5.726-1.687 11.231-3.818 16.824-5.949l-.089-.222Zm1.554 25.036 5.282-1.82a167.35 167.35 0 0 1-5.326 12.784c-1.332 2.886-2.753 5.727-4.13 8.479l-2.884 6.037-12.784 2.441-8.878 1.776a217.502 217.502 0 0 1 3.417-10.432 108.143 108.143 0 0 0 3.595-11.896c7.014-2.22 14.25-4.528 21.797-7.147l-.089-.222Zm-19.444 28.987 11.676-2.264a77.09 77.09 0 0 0-6.881 20.064 82.746 82.746 0 0 0-1.065 17.756l-3.907-.267h-14.87a123.66 123.66 0 0 1 5.193-33.336l9.854-1.953Zm-.266 36.799h4.084a112.509 112.509 0 0 0 4.705 25.258c1.11 3.817 2.442 7.546 3.863 11.23a100.012 100.012 0 0 0-7.015-1.598c-5.282-.977-10.742-1.687-16.246-2.264-.799-3.418-1.509-6.791-2.086-10.209a130.219 130.219 0 0 1-2.086-22.639c5.238.266 9.987.222 14.87.444l-.089-.222Zm5.372 36.621c2.663.489 5.326 1.154 7.989 1.865a352.583 352.583 0 0 0 15.804 32.981l1.687 3.196-8.657-2.663c-7.946-2.397-16.114-4.439-24.326-6.348a537.524 537.524 0 0 0-3.95-15.093c-1.376-4.971-2.841-10.697-4.172-16.113 5.371.71 10.608 1.465 15.713 2.397l-.088-.222Zm31.561 73.643a420.02 420.02 0 0 0 11.32 3.329 45.414 45.414 0 0 1-4.973 37.42c-5.282-1.775-10.431-3.506-15.27-5.238-12.163-4.439-24.947-8.877-38.087-13.316a62.148 62.148 0 0 0 12.563-32.538c11.586 3.596 23.127 7.014 34.536 10.698l-.089-.355Zm-9.455 36.976 15.004 5.105a90.576 90.576 0 0 1-23.172 22.994c-18.348-4.764-36.208-9.928-53.579-15.492l1.065-1.065a230.523 230.523 0 0 0 22.195-25.036c13.406 4.927 26.28 9.455 38.576 13.716l-.089-.222Zm-39.951 20.997c9.81 2.885 19.843 5.682 30.052 8.301a132.322 132.322 0 0 1-4.439 3.062l-4.173 2.841c-5.86 3.907-11.585 7.769-17.09 11.764-15.048-2.087-30.186-4.439-45.057-7.857l-3.772-.888a237.44 237.44 0 0 1 17.045-19.887l4.439-4.439c7.68 2.753 15.359 5.061 23.172 7.192l-.177-.089Zm22.195 15.447 4.217-2.796a224.298 224.298 0 0 0 5.46-3.818c17.756 4.439 35.512 8.878 54.2 12.518a128.566 128.566 0 0 1-5.771 2.264c-5.016 1.909-10.432 3.684-15.67 5.416-3.506 1.154-7.057 2.308-10.608 3.551-8.878-1.287-18.245-2.486-27.123-3.64l-20.464-2.663c5.372-3.463 10.653-7.014 16.025-10.61l-.266-.222Zm42.925 15.004c5.238-1.731 10.654-3.507 15.759-5.415 2.619-.977 5.238-1.998 7.813-3.152a1115.86 1115.86 0 0 0 48.829 8.878 57.922 57.922 0 0 1-4.439 1.731c-5.682 2.175-11.764 4.084-18.156 6.037l-8.523 2.663c-16.468-3.373-33.071-5.815-49.362-8.212l8.079-2.53Zm50.56 9.633c6.437-1.998 12.519-3.862 18.245-6.082 2.086-.799 4.439-1.686 6.525-2.707l3.73.621a258.776 258.776 0 0 1 30.362 6.792c-1.11 1.198-2.263 2.397-3.551 3.551-3.773 3.507-7.768 6.88-11.586 10.121l-3.729 3.107a173.194 173.194 0 0 0-6.703-2.53 294.068 294.068 0 0 0-39.24-11.009l5.947-1.864Zm44.702 13.317c3.862-3.241 7.857-6.615 11.675-10.166 1.465-1.332 2.84-2.752 4.128-4.172 10.698 3.063 21.262 6.658 31.65 10.298a73.514 73.514 0 0 1-2.264 5.904c-2.087 4.972-4.439 9.854-6.392 14.604-.622 1.465-1.287 2.885-1.909 4.439-13.006-6.437-26.323-12.784-39.951-18.2l3.063-2.707Zm40.217 17.09c2.131-4.75 4.439-9.677 6.392-14.649a74.214 74.214 0 0 0 2.264-5.948l10.965 3.906 1.243.488c5.504 1.954 10.919 3.862 16.379 5.593-.665 10.965-1.997 21.885-3.462 32.671-5.46-2.53-10.565-5.06-15.27-7.413l-9.321-4.705-11.142-5.549c.887-1.11 1.553-2.574 2.219-4.039l-.267-.355Zm38.753-10.166a156.961 156.961 0 0 0 26.234 5.993c.888 12.784 1.377 25.568 1.643 38.353a178.068 178.068 0 0 1-31.384-11.453c1.731-10.476 3.063-21.484 3.774-32.537l-.267-.356Zm27.788 6.215c4.184.498 8.394.751 12.608.755h.399a120.33 120.33 0 0 0 13.672-.755 1371.732 1371.732 0 0 1 3.995 40.439 82.362 82.362 0 0 1-29.032-1.953c0-12.474-.487-25.302-1.375-38.131l-.267-.355Zm28.189 0a72.677 72.677 0 0 0 23.392-6.792c0 1.865.001 3.729.311 5.593l.311 6.171c.563 9.499 1.11 18.658 1.642 27.477l-.398.266a57.707 57.707 0 0 1-21.264 7.68 916.643 916.643 0 0 0-3.729-40.262l-.265-.133Zm25.568 4.883-.355-6.17c0-2.087-.222-4.173-.355-6.259A68.035 68.035 0 0 0 502 662.416a99.985 99.985 0 0 0 6.393-5.859v38.042a71.347 71.347 0 0 1-15.937 14.871c-.384-8.464-.843-17.283-1.376-26.457l-.266-.177Zm19.043-17.401v-10.432a178.858 178.858 0 0 0 13.584-15.935 544.74 544.74 0 0 0-2.974 36.754 132.15 132.15 0 0 1-10.699 16.868c.444-8.789.445-17.844.445-27.077l-.356-.178Zm15.492-28.765c2.22-2.974 4.44-5.903 6.482-8.878 2.042-2.974 4.439-5.948 6.57-8.877a293.648 293.648 0 0 0-2.575 11.186 633.26 633.26 0 0 0-4.439 23.083c-2.93 6.392-5.949 12.961-9.323 19.442 1.11-11.985 2.131-24.015 3.552-35.778l-.267-.178Zm15.937-20.73a158.261 158.261 0 0 1 15.892-17.755 323.346 323.346 0 0 0-2.442 5.859c-3.329 8.257-6.348 16.602-8.878 24.947a60.004 60.004 0 0 0-8.213 12.474l-3.062 6.569c1.553-10.831 3.817-21.573 6.703-32.094Zm18.777-20.419a136.055 136.055 0 0 1 37.998-24.104 151.785 151.785 0 0 0-1.821 4.75c-3.24 8.878-6.037 17.756-8.878 26.634a98.19 98.19 0 0 0-39.151 23.26c3.344-10.18 7.235-20.374 11.674-30.584l.178.044Zm37.598-18.821a147.233 147.233 0 0 1 2.397-6.126 161.511 161.511 0 0 1 9.811-3.729 204.225 204.225 0 0 1 33.514-8.611 249.344 249.344 0 0 0-2.175 10.032c-.932 4.661-1.776 9.366-2.619 13.894-.666 3.507-1.287 7.014-1.953 10.52a166.854 166.854 0 0 0-20.952 2.664 205.512 205.512 0 0 0-26.634 6.836c2.619-8.434 5.504-17.312 8.433-25.524l.178.044Zm11.72-11.319a187.385 187.385 0 0 0-8.479 3.196 204.47 204.47 0 0 1 15.936-29.875 271.728 271.728 0 0 1 39.596-14.249 123.55 123.55 0 0 0-12.43 32.271 210.124 210.124 0 0 0-34.801 8.612l.178.045Zm56.198-71.69c-7.547 2.575-15.094 5.416-22.729 8.479l3.374-4.439.533-.71c4.439-5.949 9.322-11.941 13.894-17.756 3.64-4.439 7.281-9.189 10.876-13.85a521.375 521.375 0 0 1 10.698-3.995 440.491 440.491 0 0 1 30.718-9.766c-5.86 7.458-11.808 14.782-17.756 22.195l-7.502 9.278-3.995 4.882c-5.904 1.687-11.941 3.64-18.111 5.682Zm16.113-33.647-8.345 3.107c8.656-11.142 17.178-22.506 25.08-34.224 4.439-1.643 8.879-3.241 13.052-4.75 9.455-3.285 18.865-6.215 28.231-8.878-7.857 11.808-16.424 23.216-25.169 34.402a470.21 470.21 0 0 0-32.76 10.343h-.089Zm29.298-37.332c-3.729 1.287-7.413 2.663-11.142 4.04a308.399 308.399 0 0 0 6.569-10.254 220.101 220.101 0 0 0 13.984-25.924l8.123-2.841c10.875-3.684 21.662-7.014 32.272-9.899a209.166 209.166 0 0 1-12.075 23.172 357.579 357.579 0 0 1-7.723 12.34 586.853 586.853 0 0 0-29.919 9.366h-.089Zm39.019-20.907a210.063 210.063 0 0 0 12.695-24.504c14.072-3.773 27.922-6.88 41.461-9.277a201.881 201.881 0 0 1-11.053 22.594c-2.353 4.439-4.883 8.39-7.457 12.518-14.028 2.486-28.174 5.682-42.438 9.588 2.397-3.61 4.632-7.25 6.703-10.919h.089Zm13.317-26.279a96.27 96.27 0 0 0 8.523-37.021c14.205-3.241 27.744-5.727 40.751-7.547a102.11 102.11 0 0 1-7.857 35.512c-13.318 2.264-27.167 5.327-41.195 9.056h-.222Zm8.478-38.619a53.25 53.25 0 0 0-2.885-16.158 72.95 72.95 0 0 0-6.792-14.16c14.25-2.619 28.721-5.016 43.414-6.836a72.398 72.398 0 0 1 5.105 13.938 63.04 63.04 0 0 1 1.954 15.714c-12.873 1.835-26.369 4.335-40.485 7.502h-.311Zm-32.005-54.999a200.38 200.38 0 0 0-25.125-17.223l7.991-1.332c14.027-2.308 28.276-4.705 42.658-6.88a165.374 165.374 0 0 1 21.752 17.977c-15.625 2.176-31.428 4.794-47.054 7.458h-.222Zm-17.401-20.064-9.81 1.642c-9.322-5.371-18.999-10.343-28.455-15.092 9.766-1.51 19.399-3.108 28.943-4.661l25.391-4.129c8.434 4.928 16.913 10.032 25.037 15.581-13.584 2.131-27.344 4.395-40.883 6.659h-.223Zm-9.589-19.621-31.073 5.017-2.219-1.11c-9.367-4.706-18.244-9.189-26.146-13.672l-1.198-.666c15.536-2.086 31.072-4.439 46.21-6.747l11.675-1.776 2.486 1.465c4.794 2.841 9.721 5.637 14.914 8.612l8.878 5.06-23.527 3.817Zm-14.603-18.688c-15.847 2.397-32.006 4.839-48.253 6.97-9.499-5.327-20.154-11.364-24.859-21.441 19.798-1.154 39.508-2.929 58.951-4.794l.844.932a96.29 96.29 0 0 0 23.083 16.824l-9.766 1.509Zm11.319-2.397a97.628 97.628 0 0 1-23.526-16.957l9.987-.976c16.114-1.598 32.76-3.196 49.184-4.439 7.591 5.504 15.36 10.654 22.906 15.536-19.221 2.087-38.575 4.883-57.707 7.724l-.844-.888Zm-13.761-19.575-11.097 1.109a97.055 97.055 0 0 1-13.317-22.195c16.069.489 32.937.444 50.782 0v-.799a238.658 238.658 0 0 0 21.307 17.49c-15.714 1.509-31.827 2.885-47.453 4.395h-.222Zm-12.918 1.287c-19.265 1.82-38.797 3.595-58.373 4.75a78.352 78.352 0 0 1-4.083-30.363c15.714 1.642 32.004 2.708 49.228 3.24a102.062 102.062 0 0 0 13.45 22.373h-.222Zm-62.456-27.167v-9.1c0-7.102.577-14.249 1.198-21.351a320.953 320.953 0 0 0 38.575 9.899 133.084 133.084 0 0 0 6.792 19.753l1.775 4.04a687.23 687.23 0 0 1-48.118-3.241h-.222Zm3.018-59.349c-1.11 8.878-2.175 17.756-3.018 26.634-9.766-3.152-19.977-6.836-30.719-11.142a186.977 186.977 0 0 1-7.146-2.974c0-.621.399-1.243.62-1.908 4.04-12.163 8.124-24.504 11.631-37.022l6.214 4.44c7.591 5.326 15.226 10.697 23.128 15.713 0 2.264-.266 4.262-.488 6.259h-.222Zm-41.727 10.387c0 .577-.4 1.155-.577 1.776-4.439-1.909-8.878-3.951-13.317-5.904-8.878-3.906-17.49-7.857-26.635-11.275 7.325-13.894 14.516-28.01 20.376-42.436a249.53 249.53 0 0 1 31.65 20.286c-3.063 12.695-7.192 25.169-11.276 37.553h-.221Zm-41.727-15.935a146.467 146.467 0 0 0-26.012-7.369c6.614-14.25 13.317-28.765 18.732-43.547a78.658 78.658 0 0 1 27.744 8.346c-5.815 14.426-12.873 28.631-20.242 42.57h-.222Zm-27.566-7.636-3.33-.488a155.888 155.888 0 0 0-18.2-1.021c5.46-12.917 10.965-26.1 15.714-39.462a106.804 106.804 0 0 1 20.908-2.53h3.374c-5.061 14.737-11.763 29.297-18.244 43.501h-.222Zm-22.95-2.041v.532h-22.284c.888-2.486 1.775-4.971 2.707-7.457 3.063-8.434 6.171-17.002 8.878-25.702 5.017-.977 9.944-2.22 14.783-3.418 3.729-.888 7.546-1.82 11.364-2.663-4.528 13.228-9.899 26.056-15.226 38.619l-.222.089Zm-21.263-7.28c-.932 2.663-1.909 5.282-2.886 7.945-2.752 0-5.504 0-8.211-.31-5.904-.356-12.031-1.066-18.334-2.042 1.287-6.126 2.708-12.163 4.084-18.111a640.522 640.522 0 0 0 2.485-10.787c6.97.644 13.984.644 20.954 0 3.551-.355 7.146-.888 10.653-1.553-2.53 8.434-5.549 16.69-8.523 24.858h-.222Zm-26.634-12.873c-1.421 5.992-2.841 12.074-4.128 18.2a198.174 198.174 0 0 1-11.853-2.264 185.162 185.162 0 0 1-22.638-6.836 693.31 693.31 0 0 1-.932-30.585 173.11 173.11 0 0 0 41.993 10.876 4028.35 4028.35 0 0 1-2.398 10.609h-.044Zm-40.174 8.567c-6.791-2.397-13.805-4.883-20.907-6.659a144.949 144.949 0 0 0-16.647-3.063 721.606 721.606 0 0 1-3.151-35.156 121.526 121.526 0 0 1 15.137 4.66l11.008 4.44 13.628 5.282c.119 10.24.444 20.404.977 30.496h-.045Zm-75.73-9.677a182.953 182.953 0 0 0-26.944 5.327 237.668 237.668 0 0 0-7.99 2.397c-.932-13.317-1.377-26.634-1.643-39.596a140.585 140.585 0 0 1 34.58-6.436 841.14 841.14 0 0 0 2.042 38.308h-.045Zm-71.912 24.103a191.1 191.1 0 0 0-27.61 19.266l-3.418 2.885c0-11.852.266-23.704.754-35.512l1.865-2.086a143.893 143.893 0 0 1 27.522-23.438 631.486 631.486 0 0 0 .932 38.885h-.045Zm-32.583 23.438c-10.342 8.612-20.374 16.913-30.451 24.858a200.107 200.107 0 0 1 4.439-30.673c7.014-7.413 13.762-14.959 20.243-22.195l6.214-6.924c-.222 11.541-.622 23.26-.4 34.934h-.045Zm-32.049 26.146c-9.145 7.235-18.333 14.16-27.833 20.907a95.542 95.542 0 0 1 9.411-28.942c7.857-6.791 15.404-14.204 22.64-21.795a193.761 193.761 0 0 0-4.174 29.83h-.044Zm-57.086 26.101a83.695 83.695 0 0 0-4.439 18.2 98.586 98.586 0 0 1-20.642 9.943 92.544 92.544 0 0 1-16.646 3.951 110.969 110.969 0 0 1 9.19-32.494 92.726 92.726 0 0 0 37.42-10.254 93.731 93.731 0 0 0-4.838 10.654h-.045Zm-19.31 62.456a121 121 0 0 0 17.135-9.899 113.02 113.02 0 0 0 13.805 29.83 162.324 162.324 0 0 1-18.066 12.873 118.09 118.09 0 0 1-19.043 9.322 141.427 141.427 0 0 1-14.16-34.934 106.55 106.55 0 0 0 20.374-7.192h-.045Zm29.609 59.838a205.812 205.812 0 0 0 19.265-13.317l1.11 1.687a122.034 122.034 0 0 1 10.165 19.353c-6.791 4.439-13.805 8.568-20.996 12.252a181.965 181.965 0 0 1-18.866 8.212 215.69 215.69 0 0 0-8.878-15.891l-1.465-2.397a148.071 148.071 0 0 0 19.709-9.899h-.044Zm10.343 21.262c7.191-3.64 14.16-7.812 20.952-12.118a122.558 122.558 0 0 1 6.569 21.751 341.547 341.547 0 0 1-38.752 16.113 175.455 175.455 0 0 0-7.591-17.489 172.851 172.851 0 0 0 18.866-8.257h-.044Zm27.788 11.187a115.415 115.415 0 0 1 1.953 23.437c-11.497 4.217-23.216 8.168-35.157 11.364a127.362 127.362 0 0 0-5.282-18.777 341.864 341.864 0 0 0 38.53-16.024h-.044Zm-34.669 35.201a198.004 198.004 0 0 1-39.951 6.347c-3.241-5.415-6.747-10.698-10.343-15.891a190.854 190.854 0 0 0 45.189-9.145 130.303 130.303 0 0 1 5.149 18.689h-.044Zm.266 1.509a101.353 101.353 0 0 1 1.777 19.487 220.451 220.451 0 0 1-32.85 3.24 142.573 142.573 0 0 0-8.433-16.379 201.577 201.577 0 0 0 39.684-6.348h-.178Zm1.51-.4c11.808-3.151 23.393-7.058 34.801-11.23a118.36 118.36 0 0 1-3.24 23.881c-10.387 2.93-20.242 5.238-29.786 6.969.053-6.58-.526-13.15-1.73-19.62h-.045Zm1.288 105.381c7.191.444 14.515.888 21.75 1.598 1.332 5.638 2.841 11.231 4.439 16.691 1.288 4.75 2.575 9.5 3.73 14.294-10.92-2.442-21.93-4.44-32.805-6.57a174.55 174.55 0 0 0 2.397-26.057l.489.044Zm30.184 34.269a151.322 151.322 0 0 1 4.439 28.365v2.575c-15.492-4.439-31.073-8.878-46.076-13.051.532-1.065 1.065-2.13 1.509-3.196a95.884 95.884 0 0 0 6.614-21.44c11.142 2.086 22.417 4.217 33.559 6.747h-.045Zm4.439 32.538a61.205 61.205 0 0 1-12.562 32.449c-17.267-6.082-35.246-12.562-53.579-19.265a131.94 131.94 0 0 0 19.399-26.634c15.359 4.439 31.028 8.878 46.742 13.45Zm-13.317 33.736a234.591 234.591 0 0 1-21.795 24.503l-1.598 1.598c-18.703-5.918-36.785-12.399-54.246-19.442 4.706-5.549 9.811-10.965 14.827-16.291 3.019-3.197 6.082-6.393 8.878-9.677 18.378 6.747 36.401 13.183 53.757 19.309h.177ZM145.502 604l-3.773 3.95a244.346 244.346 0 0 0-17.756 20.508 468.28 468.28 0 0 1-51.45-15.181c3.751-7.396 8.07-14.49 12.92-21.218 1.82-2.53 3.773-5.016 5.814-7.502 17.49 6.984 35.512 13.465 54.068 19.443h.177Zm-20.686 26.19 4.439 1.021c14.382 3.284 29.031 5.637 43.591 7.723a125.117 125.117 0 0 0-22.684 20.775 389.678 389.678 0 0 1-39.462.399l-3.551-.222a152.919 152.919 0 0 1 17.489-29.696h.178Zm99.745 15.58 2.619.4c15.492 2.264 31.073 4.439 46.876 7.724a109.224 109.224 0 0 0-26.634 12.162 250.31 250.31 0 0 0-49.939-7.413h-.711a124.31 124.31 0 0 1 27.612-12.873h.177Zm52.558 8.878a301.81 301.81 0 0 1 41.682 11.497c1.998.71 3.951 1.465 5.904 2.264a119.33 119.33 0 0 0-18.643 18.955l-10.344-4.439a324.101 324.101 0 0 0-46.254-16.025 118.813 118.813 0 0 1 27.477-12.385l.178.133Zm91.267 33.515 11.053 5.548 9.321 4.706c4.839 2.397 10.166 5.06 15.759 7.635-.355 2.619-.71 5.282-1.11 7.901-1.154 8.612-2.397 17.356-3.373 26.145-4.129-2.441-8.168-4.927-12.074-7.279l-2.974-1.82c-8.878-5.372-17.757-10.831-27.034-16.203a243.005 243.005 0 0 1 10.21-26.767l.222.134Zm36.577 25.968c.311-2.442.666-4.928 1.021-7.413a179.559 179.559 0 0 0 31.65 11.452c0 12.474 0 24.947.267 37.287v2.531a193.75 193.75 0 0 1-36.4-17.313c.799-8.877 2.175-17.844 3.285-26.678l.177.134Zm34.492 41.326c0-12.207-.001-24.547-.311-36.932a93.164 93.164 0 0 0 20.331 2.441 73.186 73.186 0 0 0 8.878-.532 1364.147 1364.147 0 0 1 2.707 41.682 72.841 72.841 0 0 1-31.561-3.374l-.044-3.285Zm30.362-35.245a58.792 58.792 0 0 0 21.663-7.768 4287.87 4287.87 0 0 0 2.707 40.705l-1.286.843a53.272 53.272 0 0 1-20.331 7.902c-.932-14.56-1.864-28.409-2.93-41.815l.177.133Zm23.128-8.878a70.029 70.029 0 0 0 15.847-14.205c.222 13.317.666 26.634 1.332 39.463a61.002 61.002 0 0 1-14.472 15.359c-1.109-12.873-1.997-26.324-2.885-40.573l.178-.044Zm17.356-16.069a119.862 119.862 0 0 0 10.565-15.847 589.404 589.404 0 0 0-.399 36.31 104.41 104.41 0 0 1-8.878 18.644c-.843-12.784-1.376-25.79-1.376-39.063l.088-.044Zm10.255 24.459a692.59 692.59 0 0 0 1.864 34.757 87.294 87.294 0 0 1-8.079 19.398c-1.155-12.163-2.042-24.414-2.708-36.888a95.906 95.906 0 0 0 8.745-17.223l.178-.044Zm13.006-66.052c1.864-4.04 3.595-7.857 5.415-11.586a52.37 52.37 0 0 1 5.549-9.144 316.153 316.153 0 0 0-8.256 34.18 50.498 50.498 0 0 0-5.372 12.873c0 .888-.443 1.776-.71 2.663a366.786 366.786 0 0 1 3.196-28.942l.178-.044Zm13.672-24.059a91.534 91.534 0 0 1 39.73-24.992c-1.066 3.551-2.131 7.058-3.152 10.565-2.042 7.014-4.129 14.16-6.393 21.263-14.738 5.415-29.652 13.894-38.929 27.21a316.926 316.926 0 0 1 8.567-34.002l.177-.044Zm38.042-13.983 3.463-11.675a205.082 205.082 0 0 1 27.434-7.102 175.173 175.173 0 0 1 20.374-2.619 225.436 225.436 0 0 1-8.478 32.848c-7.271.128-14.525.766-21.707 1.909a164.803 164.803 0 0 0-27.122 6.836c1.997-6.57 3.906-13.494 5.859-20.153l.177-.044Zm43.903 13.006a148.961 148.961 0 0 1 49.14 8.301 84.346 84.346 0 0 1-21.396 31.65l.976 1.065a98.763 98.763 0 0 0-44.39-11.852 110.303 110.303 0 0 0 15.492-29.12l.178-.044Zm40.439 3.906a150.178 150.178 0 0 0-39.952-5.46 235.362 235.362 0 0 0 8.435-32.937 178.155 178.155 0 0 1 48.474 3.862 150.93 150.93 0 0 1-7.724 37.465c-3.24-1.021-6.303-1.776-9.41-2.885l.177-.045Zm2.619-78.436c-8.918.206-17.814.977-26.634 2.308a119.243 119.243 0 0 1 12.917-32.627 286.889 286.889 0 0 1 42.038-7.901 118.842 118.842 0 0 0-10.52 38.619 261.694 261.694 0 0 0-17.979-.355l.178-.044Zm-12.607-32.05a290.656 290.656 0 0 1 22.195-28.942l3.285-3.951a385.484 385.484 0 0 1 42.882-9.898l-3.152 3.64a175.445 175.445 0 0 0-23.26 31.427 287.249 287.249 0 0 0-42.127 7.769l.177-.045Zm26.945-34.935 2.62-3.151c2.485-3.107 4.971-6.215 7.501-9.278 6.304-7.812 12.696-15.669 18.999-23.659a428.068 428.068 0 0 1 42.748-9.411c-7.813 10.076-15.936 19.887-23.882 29.608l-1.643 1.997a2078.732 2078.732 0 0 0-3.594 4.439 386.095 386.095 0 0 0-42.927 9.544l.178-.089Zm30.673-38.13c8.878-11.142 17.224-22.594 24.948-34.358 14.324-3.995 28.529-7.25 42.615-9.766-7.679 12.03-16.158 23.66-24.947 34.98a435.05 435.05 0 0 0-42.792 9.188l.176-.044Zm113.818-51.404a420.258 420.258 0 0 0-43.103 5.15c2.308-3.774 4.439-7.546 6.747-11.408a193.818 193.818 0 0 0 11.497-23.616 394.06 394.06 0 0 1 41.905-5.016 189.85 189.85 0 0 1-16.957 35.867l-.089-.977Zm17.756-36.444c-14 .899-27.942 2.529-41.771 4.883a102.479 102.479 0 0 0 7.679-35.511 369.968 369.968 0 0 1 39.952-3.285 115.414 115.414 0 0 1-6.216 33.958l.356-.045Zm5.992-35.245a359.02 359.02 0 0 0-39.951 3.285 66.586 66.586 0 0 0-1.998-15.936 73.179 73.179 0 0 0-5.015-13.717c14.071-1.731 28.276-2.885 42.569-3.284a88.705 88.705 0 0 1 3.374 14.116c.619 5.169.842 10.377.666 15.58l.355-.044Zm-18.954-56.197c-15.581.932-31.073 2.574-46.61 4.439a157.526 157.526 0 0 0-21.574-17.756c16.691-2.486 33.471-4.661 50.206-6.126a136.87 136.87 0 0 1 17.978 19.443Zm-69.915-14.649c-8.034-5.593-16.469-10.742-24.859-15.625 17.757-2.797 36.001-5.415 54.023-7.324a253.875 253.875 0 0 1 21.263 16.69c-16.824 1.332-33.691 3.551-50.427 6.081v.178Zm27.3-24.281A965.038 965.038 0 0 0 739 238.184l-10.521-5.993c-5.193-2.974-10.12-5.77-14.87-8.567l-.887-.532c18.954-2.841 38.308-5.593 57.707-7.635l4.439 2.885a527.74 527.74 0 0 1 18.377 12.251v.178Zm-71.69-51.581c-17.756.444-34.669.444-50.739 0l-2.041-4.439a132.133 132.133 0 0 1-6.57-18.866 250.095 250.095 0 0 0 41.194 4.129v-1.332a133.41 133.41 0 0 0 10.698 13.317c2.397 2.086 4.75 4.483 7.458 7.014v.177Zm-31.073-46.21a108.63 108.63 0 0 1-33.248-7.235c-.977-10.432-1.288-20.996-1.421-31.694a69.43 69.43 0 0 0 29.252 9.499 102.11 102.11 0 0 0 5.284 29.253l.133.177Zm-36.045-39.684c0 10.698.444 21.307 1.376 31.827a182.692 182.692 0 0 1-29.52-15.403c1.465-12.162 2.796-24.592 3.285-36.932a133.882 133.882 0 0 0 24.725 20.33l.134.178Zm-37.865-34.047c3.728 4.04 7.502 8.079 11.364 12.03-.444 12.517-1.776 25.169-3.285 37.509-7.635-4.883-15.049-10.12-22.417-15.314a205.812 205.812 0 0 1-6.659-4.75 248.861 248.861 0 0 0 8.213-43.058l6.392 6.703 6.392 6.88Zm-14.205-15.048a238.44 238.44 0 0 1-8.124 43.59 247.132 247.132 0 0 0-31.516-20.152 178.192 178.192 0 0 0 12.472-46.432 145.43 145.43 0 0 1 27.035 22.816l.133.178ZM573.78 20.319a176.22 176.22 0 0 1-12.43 46.654 79.587 79.587 0 0 0-27.788-8.39 210.2 210.2 0 0 0 11.807-46.343 52.868 52.868 0 0 1 28.277 7.902l.134.177Zm-33.071-7.723 3.107-.311a208.814 208.814 0 0 1-11.853 46.165h-3.905a104.21 104.21 0 0 0-20.332 2.353 231.392 231.392 0 0 0 10.699-41.194h-.444a89.67 89.67 0 0 1 22.595-7.369l.133.356Zm-35.823 12.74a351.09 351.09 0 0 1 11.719-5.416 238.791 238.791 0 0 1-10.831 41.15c-4.173.887-8.302 1.908-12.341 2.929-4.04 1.02-9.188 2.264-13.849 3.24a269.607 269.607 0 0 0 8.878-34.58c5.593-2.44 10.964-4.971 16.291-7.501l.133.177Zm-30.63 11.896c4.324-1 8.568-2.321 12.696-3.951a272.15 272.15 0 0 1-9.1 34.225c-3.771.76-7.579 1.323-11.409 1.686a108.16 108.16 0 0 1-20.419 0c2.22-9.81 4.44-19.753 5.727-29.74a93.228 93.228 0 0 0 22.373-2.398l.132.178Zm-24.059 2.175c-1.465 9.943-3.507 19.842-5.727 29.608a173.112 173.112 0 0 1-42.348-11.009c0-10.12.178-20.271.533-30.451a185.128 185.128 0 0 0 19.753 7.191 113.029 113.029 0 0 0 27.656 4.483l.133.178ZM401.812 27.2h-.711a738.411 738.411 0 0 0-.532 30.274l-13.006-5.061-11.055-4.439a124.232 124.232 0 0 0-15.757-4.883 546.935 546.935 0 0 1-1.154-35.511 104.611 104.611 0 0 1 14.781 6.258c9.055 4.661 18.156 9.234 27.301 13.184l.133.178ZM323.285 1.587c0 12.695 0 25.524.488 38.441-9.894.579-19.7 2.2-29.253 4.839l-5.327 1.553c0-8.877-.267-17.755-.355-26.633V6.825a117.502 117.502 0 0 1 34.314-5.416l.133.178Zm-94.862 47.009a126.334 126.334 0 0 1 24.326-23.66v38.619a147.638 147.638 0 0 0-28.676 24.237l-.622.71v-.8c.444-11.185.933-22.727.933-34.046 1.332-1.776 2.574-3.507 3.906-5.238l.133.178Zm-19.665 34.979a247.331 247.331 0 0 1 14.338-27.389c0 10.565-.488 21.307-.932 31.694v2.398l-7.458 8.3a2091.065 2091.065 0 0 1-18.377 20.198c1.642-6.969 3.551-13.894 5.504-20.686 2.087-4.972 4.528-9.854 6.792-14.826l.133.31Zm-14.604 37.42c-6.836 7.191-13.894 14.249-21.219 20.819a137.932 137.932 0 0 1 14.383-20.952 112.588 112.588 0 0 0 11.097-16.469c-1.687 5.505-3.151 10.832-4.394 16.425l.133.177Zm-39.951 23.438a123.874 123.874 0 0 0-15.981 22.195 92.95 92.95 0 0 1-37.954 11.008 139.854 139.854 0 0 1 17.756-28.009l-.532-.444a80.914 80.914 0 0 0 36.488-4.928l.223.178Zm-77.817-10.254a88.029 88.029 0 0 0 39.952 15.048 141.296 141.296 0 0 0-17.756 28.676 90.03 90.03 0 0 1-42.038-9.366 181.168 181.168 0 0 1 19.62-34.536l.222.178Zm-20.508 35.778a92.7 92.7 0 0 0 39.95 9.544h2.088a114.83 114.83 0 0 0-8.878 32.626 106.52 106.52 0 0 1-43.725-4.439 160.078 160.078 0 0 1 10.343-37.909l.221.178Zm-11.054 39.152a115.108 115.108 0 0 0 32.983 5.193 97.507 97.507 0 0 0 10.831-.621 107.248 107.248 0 0 0 .932 28.676c.355 2.042.755 3.995 1.199 5.948a125.34 125.34 0 0 1-46.655 1.021 156.294 156.294 0 0 1 .49-40.395l.22.178Zm20.997 43.457c8.51.026 16.998-.897 25.303-2.752a144.84 144.84 0 0 0 14.205 35.157 139.44 139.44 0 0 1-50.206 7.99 168.938 168.938 0 0 1-10.786-42.037c7.045.982 14.15 1.471 21.263 1.465l.22.177Zm4.706 71.024a166.762 166.762 0 0 0 51.137-11.231l1.599 2.619c3.196 5.327 6.081 10.52 8.656 15.625a191.48 191.48 0 0 1-49.895 10.299c-3.596-5.061-7.103-10.21-10.343-15.403l-1.154-1.909Zm12.518 18.732a191.698 191.698 0 0 0 49.583-10.342 181.293 181.293 0 0 1 7.635 17.445 186.445 186.445 0 0 1-45.72 9.144 498.698 498.698 0 0 0-6.793-9.588c-1.82-2.22-3.374-4.395-4.927-6.659h.222Zm32.848 53.002a222.657 222.657 0 0 0 32.139-3.196c0 3.196-.311 6.392-.666 9.543-.355 3.152-.71 6.437-.887 9.722a219.112 219.112 0 0 1-24.681 1.82c-.8-3.152-1.732-6.304-2.753-9.455-1.021-3.152-2.219-5.638-3.373-8.434h.221Zm6.26 19.398a210.392 210.392 0 0 0 24.237-1.776c-.533 9.899-.311 20.064 0 30.096a196.19 196.19 0 0 1-20.464 0 127.755 127.755 0 0 0-3.995-28.32h.222Zm3.773 30.052c6.831.355 13.677.355 20.508 0v2.974c.311 8.878.577 17.756.444 26.634-8.257-.489-16.69-1.066-24.769-1.998v1.509c8.167.977 16.645 1.51 24.902 2.042a166.53 166.53 0 0 1-2.353 25.879l-2.618-.488c-10.254-1.909-20.908-3.906-31.073-6.081a82.976 82.976 0 0 0 13.317-31.961 96.64 96.64 0 0 0 1.419-18.51h.223Zm-32.317 68.582a86.083 86.083 0 0 0 16.514-17.179v.444c10.432 2.264 21.218 4.439 31.65 6.215l2.575.488a94.978 94.978 0 0 1-6.481 21.085 78.615 78.615 0 0 1-1.643 3.374c-15.492-4.439-30.673-8.435-45.144-12.385l2.53-2.042Zm-23.926 16.646c6.57-4.217 13.317-8.567 19.754-13.317 14.737 4.04 30.186 8.257 45.989 12.651a136.526 136.526 0 0 1-19.399 26.279c-17.757-6.57-36-13.317-54.068-20.419l7.724-5.194Zm-9.322 6.081c18.244 7.103 36.533 13.983 54.511 20.641-2.841 3.108-5.726 6.171-8.611 9.234-5.149 5.415-10.387 11.008-15.226 16.735-19.709-7.843-38.62-16.277-56.73-25.303a143.928 143.928 0 0 1 25.835-21.351l.221.044Zm-32.982 29.742a95.261 95.261 0 0 1 5.86-7.28C51.35 567.6 70.261 576.078 89.97 583.98a119.579 119.579 0 0 0-5.549 7.191 162.719 162.719 0 0 0-13.317 21.574 390.76 390.76 0 0 1-56.11-25.48 115.786 115.786 0 0 1 12.164-21.44h.221ZM1.411 679.64c-.405-16.967.44-33.94 2.53-50.782a252.082 252.082 0 0 0 53.268 23.438 238.144 238.144 0 0 0-5.548 47.674 167.762 167.762 0 0 1-50.472-20.33h.222Zm51.582 20.641a237 237 0 0 1 5.46-47.542 226.88 226.88 0 0 0 46.298 8.523 138.012 138.012 0 0 0-10.164 39.951 122.381 122.381 0 0 1-41.594-.932Zm77.327-7.546c-9.633 2.707-19.531 5.504-29.519 7.457l-4.661.843a137.101 137.101 0 0 1 10.21-39.639l4.128.266c12.74.666 25.658.222 38.22-.355a78.247 78.247 0 0 0-14.826 30.407l-3.552 1.021Zm57.353-10.299c-3.906 0-7.769 0-11.542.489h-.222a53.27 53.27 0 0 1 18.599-22.861h2.753a246.354 246.354 0 0 1 48.429 6.969 46.52 46.52 0 0 0-16.424 20.553 177.938 177.938 0 0 0-41.637-5.061l.044-.089Zm43.103 5.682a45.581 45.581 0 0 1 16.913-20.463 328.908 328.908 0 0 1 57.352 20.818 56.633 56.633 0 0 0-9.766 23.749 268.071 268.071 0 0 0-7.192-3.418 324.75 324.75 0 0 0-57.529-20.686h.222Zm149.417 75.463c-9.144-6.126-18.377-12.296-27.744-18.378a110.093 110.093 0 0 1 4.884-29.03c8.878 5.104 17.756 10.475 26.634 15.935l2.974 1.82a733.586 733.586 0 0 0 12.696 7.68 269.38 269.38 0 0 0-1.732 33.825l-13.051-8.878-4.661-2.974Zm19.355 12.828a263.494 263.494 0 0 1 1.642-33.958 190.842 190.842 0 0 0 36.577 17.223c0 12.163.001 24.548.356 36.799a190.864 190.864 0 0 1-38.62-20.019l.045-.045Zm39.951 20.597c-.266-12.252-.355-24.681-.355-36.843a80.635 80.635 0 0 0 23.616 3.862 59.823 59.823 0 0 0 8.035-.533 1965.714 1965.714 0 0 1 1.553 37.687 74.627 74.627 0 0 1-32.716-4.129l-.133-.044Zm56.376-4.128a58.778 58.778 0 0 1-22.196 8.079 2209.556 2209.556 0 0 0-1.509-37.687 56.045 56.045 0 0 0 21.085-8.123l.578-.4c.932 12.918 1.864 25.347 2.885 37.509l-.843.622Zm2.486-1.598c-1.021-12.163-1.954-24.592-2.886-37.51a60.624 60.624 0 0 0 14.471-14.692c.71 12.473 1.599 24.813 2.753 37.021a52.394 52.394 0 0 1-14.205 15.225l-.133-.044Zm30.54-71.867v1.42c0-9.943 0-19.93.577-29.874.444-1.642.887-3.329 1.287-4.927a372.86 372.86 0 0 1 1.465-5.638 52.983 52.983 0 0 1 3.018-8.345 317.189 317.189 0 0 0-3.417 30.23h.666a110.94 110.94 0 0 0-3.463 17.178l-.133-.044Zm14.471-35.512a42.36 42.36 0 0 0-9.988 15.359 295.148 295.148 0 0 1 4.039-31.561c8.612-14.471 23.838-23.571 39.108-29.342a314.7 314.7 0 0 1-11.097 30.185 83.178 83.178 0 0 0-21.929 15.359h-.133Zm46.743-23.571a110.937 110.937 0 0 0-22.639 7.458c4.172-9.766 7.636-19.798 10.832-29.875a156.29 156.29 0 0 1 27.92-7.102 144.692 144.692 0 0 1 20.953-1.909 108.473 108.473 0 0 1-15.981 29.12 98.24 98.24 0 0 0-21.085 2.308Zm105.56 38.087a163.242 163.242 0 0 0-38.042-28.454 85.508 85.508 0 0 0 21.796-32.227 200.369 200.369 0 0 1 44.7 22.728 89.045 89.045 0 0 1-28.276 37.731l-.178.222Zm-15.67-62.146a150.555 150.555 0 0 0 7.769-37.598 217.472 217.472 0 0 1 45.233 15.714 151.975 151.975 0 0 1-8.3 44.656 202.567 202.567 0 0 0-44.524-23.038l-.178.266Zm7.902-39.152c.621-6.259 1.021-12.651 1.465-19.087.311-4.439.577-8.878.977-13.317 0-2.575.443-5.327.754-8.124a232.444 232.444 0 0 1 43.147 7.236c-.222 4.439-.311 8.878-.4 13.317v7.724c0 9.499.001 18.954-.665 28.143a219.497 219.497 0 0 0-45.1-16.158l-.178.266Zm54.955-79.102a139.404 139.404 0 0 0-8.523 44.079 236.4 236.4 0 0 0-43.058-7.191 115.674 115.674 0 0 1 10.475-38.353l.311-.533a303.827 303.827 0 0 1 42.304-1.465c-.355.844-.843 1.998-1.332 3.196l-.177.267Zm27.832-40.217a165.344 165.344 0 0 0-25.657 35.245 302.039 302.039 0 0 0-42.127 1.376 178.164 178.164 0 0 1 22.551-30.185c1.465-1.642 2.885-3.329 4.439-5.06a368.994 368.994 0 0 1 43.592-4.439c-.799.754-1.688 1.775-2.62 2.796l-.178.267Zm14.25-16.868-4.439 5.415c-1.865 2.264-3.773 4.439-5.726 6.747a365.896 365.896 0 0 0-43.458 4.439l2.442-2.885 1.597-1.998c8.345-10.165 16.78-20.419 24.992-31.072a410.932 410.932 0 0 1 43.991-4.75c-6.348 8.079-12.918 16.113-19.222 23.748l-.177.356Z"
              opacity=".25"
            />
          </svg>{' '}
        </div>
      </section>

      <section data-el="bic-sales-сontents-cards" id="content-cards" className="pb-6 lg:pb-16 ">
        <div className="grid grid-cols-2 gap-2 lg:gap-x-4 lg:gap-y-0 lg:grid-cols-5">
          <a
            href="#block_64ef012ac95a3"
            title="Giải pháp"
            className="flex py-4 px-3.5 border rounded-md no-underline s2 leading-6 items-center justify-between min-h-16
  hover:no-underline
  bg-dark-grey-500 border-dark-grey-700 text-white
  lg:rounded-xl lg:py-4 lg:pl-6 lg:pr-4 lg:h4 lg:leading-9 lg:min-h-40 lg:flex-col lg:justify-between lg:items-start
  lg:border-grey-700
  "
          >
            <span>Giải pháp</span>
            <span className="items-center uppercase text-lime-600 hover:text-lime-700 lg:flex lg:rtl:flex-row-reverse">
              <span className="text-3.5 font-bold font-sans uppercase hidden lg:inline">Xem thêm</span>
              <svg
                className="bic-svg-icon w-5 h-5 lg:w-4 lg:h-4 lg:rtl:mr-2.5 lg:ml-2.5"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                  fill="currentColor"
                />
              </svg>{' '}
            </span>
          </a>
          <a
            href="#block_64f83c9662654-metrics"
            title="Tăng trưởng vượt trội"
            className="flex py-4 px-3.5 border rounded-md no-underline s2 leading-6 items-center justify-between min-h-16
  hover:no-underline
  bg-dark-grey-500 border-dark-grey-700 text-white
  lg:rounded-xl lg:py-4 lg:pl-6 lg:pr-4 lg:h4 lg:leading-9 lg:min-h-40 lg:flex-col lg:justify-between lg:items-start
  lg:border-grey-700
  "
          >
            <span>Tăng trưởng vượt trội</span>
            <span className="items-center uppercase text-lime-600 hover:text-lime-700 lg:flex lg:rtl:flex-row-reverse">
              <span className="text-3.5 font-bold font-sans uppercase hidden lg:inline">Xem thêm</span>
              <svg
                className="bic-svg-icon w-5 h-5 lg:w-4 lg:h-4 lg:rtl:mr-2.5 lg:ml-2.5"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                  fill="currentColor"
                />
              </svg>{' '}
            </span>
          </a>
          <a
            href="#block_64f83c9662654-case-studies"
            title="Case studies"
            className="flex py-4 px-3.5 border rounded-md no-underline s2 leading-6 items-center justify-between min-h-16
  hover:no-underline
  bg-dark-grey-500 border-dark-grey-700 text-white
  lg:rounded-xl lg:py-4 lg:pl-6 lg:pr-4 lg:h4 lg:leading-9 lg:min-h-40 lg:flex-col lg:justify-between lg:items-start
  lg:border-grey-700
  "
          >
            <span>Case studies</span>
            <span className="items-center uppercase text-lime-600 hover:text-lime-700 lg:flex lg:rtl:flex-row-reverse">
              <span className="text-3.5 font-bold font-sans uppercase hidden lg:inline">Xem thêm</span>
              <svg
                className="bic-svg-icon w-5 h-5 lg:w-4 lg:h-4 lg:rtl:mr-2.5 lg:ml-2.5"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                  fill="currentColor"
                />
              </svg>{' '}
            </span>
          </a>
          <a
            href="#"
            title="Media Kit"
            className="flex py-4 px-3.5 border rounded-md no-underline s2 leading-6 items-center justify-between min-h-16
  hover:no-underline
  bg-dark-grey-500 border-dark-grey-700 text-white
  lg:rounded-xl lg:py-4 lg:pl-6 lg:pr-4 lg:h4 lg:leading-9 lg:min-h-40 lg:flex-col lg:justify-between lg:items-start
  lg:border-grey-700
  "
            data-el="bic-c-modal-trigger"
            data-bic-modal-target="bic-modal-block_64edb64a21b8f_3"
          >
            <span>Media Kit</span>
            <span className="items-center uppercase text-lime-600 hover:text-lime-700 lg:flex lg:rtl:flex-row-reverse">
              <span className="text-3.5 font-bold font-sans uppercase hidden lg:inline">Tải ngay</span>
              <svg
                className="bic-svg-icon w-5 h-5 lg:w-4 lg:h-4 lg:rtl:mr-2.5 lg:ml-2.5"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.142 5.46305L10.3029 10.3021C10.1941 10.4072 10.0379 10.4471 9.89191 10.4071C9.74594 10.3672 9.63192 10.2531 9.59193 10.1072C9.55195 9.96119 9.59184 9.80498 9.69697 9.69613L14.536 4.85708H11.2852C11.1321 4.85708 10.9906 4.77539 10.9141 4.64281C10.8376 4.51023 10.8376 4.34685 10.9141 4.21427C10.9906 4.08169 11.1321 4 11.2852 4H15.5706C15.6843 4 15.7933 4.04515 15.8737 4.1255C15.954 4.20585 15.9992 4.3149 15.9992 4.42854V8.71392C15.9992 8.86707 15.9175 9.00853 15.7849 9.08506C15.6523 9.16158 15.4889 9.16158 15.3564 9.08506C15.2238 9.00853 15.1421 8.86706 15.1421 8.71392L15.142 5.46305ZM7.42831 5.71415H5.28476C4.5751 5.71415 4 6.28751 4 6.99631V14.7178C4 15.4249 4.58198 16 5.28733 16H12.9966C13.3382 16.0005 13.6659 15.8649 13.9074 15.6234C14.1489 15.382 14.2844 15.0543 14.2839 14.7127V12.5717C14.2839 12.4185 14.2022 12.2771 14.0697 12.2006C13.9371 12.124 13.7737 12.124 13.6411 12.2006C13.5086 12.2771 13.4269 12.4186 13.4269 12.5717V14.7127C13.4273 14.8269 13.3821 14.9366 13.3014 15.0174C13.2205 15.0982 13.1109 15.1434 12.9966 15.1429H5.28733C5.17426 15.1424 5.06579 15.0977 4.98534 15.0182C4.9049 14.9388 4.85889 14.8309 4.85707 14.7178V6.99629C4.85707 6.76146 5.04819 6.57121 5.28475 6.57121H7.4283C7.58144 6.57121 7.72291 6.48952 7.79944 6.35694C7.87596 6.22436 7.87596 6.06098 7.79944 5.9284C7.72291 5.79582 7.58144 5.71413 7.4283 5.71413L7.42831 5.71415Z"
                  fill="currentColor"
                />
              </svg>{' '}
            </span>
          </a>
          <a
            href="#"
            title="Agency Kit"
            className="flex py-4 px-3.5 border rounded-md no-underline s2 leading-6 items-center justify-between min-h-16
  hover:no-underline
  bg-dark-grey-500 border-dark-grey-700 text-white
  lg:rounded-xl lg:py-4 lg:pl-6 lg:pr-4 lg:h4 lg:leading-9 lg:min-h-40 lg:flex-col lg:justify-between lg:items-start
  lg:border-grey-700
   col-span-2 lg:col-span-1 "
            data-el="bic-c-modal-trigger"
            data-bic-modal-target="bic-modal-block_64edb64a21b8f_4"
          >
            <span>Agency Kit</span>
            <span className="items-center uppercase text-lime-600 hover:text-lime-700 lg:flex lg:rtl:flex-row-reverse">
              <span className="text-3.5 font-bold font-sans uppercase hidden lg:inline">Tải ngay</span>
              <svg
                className="bic-svg-icon w-5 h-5 lg:w-4 lg:h-4 lg:rtl:mr-2.5 lg:ml-2.5"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.142 5.46305L10.3029 10.3021C10.1941 10.4072 10.0379 10.4471 9.89191 10.4071C9.74594 10.3672 9.63192 10.2531 9.59193 10.1072C9.55195 9.96119 9.59184 9.80498 9.69697 9.69613L14.536 4.85708H11.2852C11.1321 4.85708 10.9906 4.77539 10.9141 4.64281C10.8376 4.51023 10.8376 4.34685 10.9141 4.21427C10.9906 4.08169 11.1321 4 11.2852 4H15.5706C15.6843 4 15.7933 4.04515 15.8737 4.1255C15.954 4.20585 15.9992 4.3149 15.9992 4.42854V8.71392C15.9992 8.86707 15.9175 9.00853 15.7849 9.08506C15.6523 9.16158 15.4889 9.16158 15.3564 9.08506C15.2238 9.00853 15.1421 8.86706 15.1421 8.71392L15.142 5.46305ZM7.42831 5.71415H5.28476C4.5751 5.71415 4 6.28751 4 6.99631V14.7178C4 15.4249 4.58198 16 5.28733 16H12.9966C13.3382 16.0005 13.6659 15.8649 13.9074 15.6234C14.1489 15.382 14.2844 15.0543 14.2839 14.7127V12.5717C14.2839 12.4185 14.2022 12.2771 14.0697 12.2006C13.9371 12.124 13.7737 12.124 13.6411 12.2006C13.5086 12.2771 13.4269 12.4186 13.4269 12.5717V14.7127C13.4273 14.8269 13.3821 14.9366 13.3014 15.0174C13.2205 15.0982 13.1109 15.1434 12.9966 15.1429H5.28733C5.17426 15.1424 5.06579 15.0977 4.98534 15.0182C4.9049 14.9388 4.85889 14.8309 4.85707 14.7178V6.99629C4.85707 6.76146 5.04819 6.57121 5.28475 6.57121H7.4283C7.58144 6.57121 7.72291 6.48952 7.79944 6.35694C7.87596 6.22436 7.87596 6.06098 7.79944 5.9284C7.72291 5.79582 7.58144 5.71413 7.4283 5.71413L7.42831 5.71415Z"
                  fill="currentColor"
                />
              </svg>{' '}
            </span>
          </a>
        </div>
        <section id="block_64edb64a21b8f_3" data-el="bic-block-modal">
          <div
            className="fixed top-0 left-0 right-0 z-overlap hidden h-[calc(100%-1rem)] w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full mb-20 justify-center items-center"
            id="bic-modal-block_64edb64a21b8f_3"
            tabIndex={-1}
            data-bic-modal-placement="center"
            data-bic-modal-backdrop-classes="bg-dark-grey-700 bg-opacity-50 fixed inset-0 z-backdrop"
            data-bic-modal-closable={1}
            data-bic-modal-backdrop="dynamic"
          >
            <div className="relative w-full max-w-4xl h-full text-white z-backdrop">
              <div className="relative rounded-lg bg-dark-grey-500 text-white   shadow top-4">
                <div className="relative flex items-center p-6 border-b border-dark-grey-700 rounded-t">
                  <h3 className=" text-center w-full max-w-[calc(100%-36px)] text-white s2 s2--medium !mb-0">
                    Media Kit
                  </h3>
                  <button
                    className="absolute inline-flex items-center ml-auto -translate-y-1/2 bg-transparent right-6 rounded-lg top-1/2 text-white text-3 hover:opacity-90"
                    data-bic-modal-hide="bic-modal-block_64edb64a21b8f_3"
                    type="button"
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
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-6 p4 p4--ns">
                    <div className="wpcf7 js" id="wpcf7-f95992-p95991-o2" lang="vi" dir="ltr">
                      <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true" />
                        <ul />
                      </div>
                      <form
                        action="/beincrypto-sales/#wpcf7-f95992-p95991-o2"
                        method="post"
                        className="wpcf7-form resetting"
                        aria-label="Contact form"
                        noValidate="novalidate"
                        data-status="resetting"
                      >
                        <div style={{ display: 'none' }}>
                          <input type="hidden" name="_wpcf7" defaultValue={95992} />
                          <input type="hidden" name="_wpcf7_version" defaultValue="5.7.4" />
                          <input type="hidden" name="_wpcf7_locale" defaultValue="vi" />
                          <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f95992-p95991-o2" />
                          <input type="hidden" name="_wpcf7_container_post" defaultValue={95991} />
                          <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
                          <input
                            type="hidden"
                            name="_wpcf7_recaptcha_response"
                            defaultValue="HFcWJ2YhtQbTMzYGNDX0hSXgUQCTMgXDV1AQo7ewUPNAc1KjE-LUwUdWZFcjlfei5hIycgFRF0FREGTVx2ZX81dmIMNxcECVNUaC51eWV1VSY5ZnwvE2UgfzAzU0FSWU1UQU9McWk1ZDdbS2VgFG4kFycxIkw9Lhd5N3NUMV8lI1JOUndGalZEZVpoDXNlfkJnAg8nd3E"
                          />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-x-3.5 gap-y-4 md:mt-10 mt-8">
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Tên của bạn*</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-name">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Tên*"
                                defaultValue=""
                                type="text"
                                name="your-name"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Địa chỉ email*</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Địa chỉ Email*"
                                defaultValue=""
                                type="email"
                                name="your-email"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Công ty*</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-company-name">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Tên Công Ty*"
                                defaultValue=""
                                type="text"
                                name="your-company-name"
                              />
                            </span>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-x-3.5 gap-y-4">
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Telegram</span>
                            <span className="wpcf7-form-control-wrap" data-name="text-telegram-username">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text w-full"
                                aria-invalid="false"
                                placeholder="Telegram: ví dụ @tennguoidung"
                                defaultValue=""
                                type="text"
                                name="text-telegram-username"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Trang web</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-website">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url w-full"
                                aria-invalid="false"
                                placeholder="Trang web: ví dụ https://beincrypto.com"
                                defaultValue=""
                                type="url"
                                name="your-website"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Loại công ty*</span>
                            <span className="wpcf7-form-control-wrap" data-name="yout-type-of-organization">
                              <select
                                className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                name="yout-type-of-organization"
                              >
                                <option value="">Chọn loại tổ chức*</option>
                                <option value="Sàn Giao Dịch">Sàn Giao Dịch</option>
                                <option value="Dự Án Tiền Tệ/Đồng Tiền">Dự Án Tiền Tệ/Đồng Tiền</option>
                                <option value="Đào Tiền Ảo">Đào Tiền Ảo</option>
                                <option value="Tài Chính/Đầu Tư">Tài Chính/Đầu Tư</option>
                                <option value="Trò Chơi/Đánh Bạc">Trò Chơi/Đánh Bạc</option>
                                <option value="Mạng Quảng Cáo">Mạng Quảng Cáo</option>
                                <option value="Công Ty Môi Giới/Trung Gian">Công Ty Môi Giới/Trung Gian</option>
                                <option value="Hội Nghị/Sự Kiện">Hội Nghị/Sự Kiện</option>
                                <option value="Công Nghệ Chung">Công Nghệ Chung</option>
                                <option value="Nền Tảng Tin Tức">Nền Tảng Tin Tức</option>
                                <option value="Khác (Liên quan đến Tiền Ảo)">Khác (Liên quan đến Tiền Ảo)</option>
                                <option value="Khác (Không liên quan đến Tiền Ảo)">
                                  Khác (Không liên quan đến Tiền Ảo)
                                </option>
                              </select>
                            </span>
                          </label>
                        </div>
                        <div className="mb-6">
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Nhiệm vụ</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-message">
                              <textarea
                                cols={5}
                                rows={5}
                                className="wpcf7-form-control wpcf7-textarea w-full"
                                aria-invalid="false"
                                placeholder="Mô tả nhiệm vụ của bạn"
                                name="your-message"
                                defaultValue=""
                              />
                            </span>{' '}
                          </label>
                        </div>
                        <div className="text-left">
                          <button
                            type="submit"
                            className="wpcf7-form-control wpcf7-submit md:max-w-44 w-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 dark:disabled:bg-grey-300 dark:disabled:border-grey-300 dark:disabled:text-grey-100 bic-c-button-primary-lime dark:bg-lime-600 dark:border-lime-600 dark:text-dark-grey-700 dark:hover:bg-lime-700 gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium"
                          >
                            Gửi
                          </button>
                        </div>
                        <div className="wpcf7-response-output" aria-hidden="true" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="block_64edb64a21b8f_4" data-el="bic-block-modal">
          <div
            className="fixed top-0 left-0 right-0 z-overlap hidden h-[calc(100%-1rem)] w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full mb-20 justify-center items-center"
            id="bic-modal-block_64edb64a21b8f_4"
            tabIndex={-1}
            data-bic-modal-placement="center"
            data-bic-modal-backdrop-classes="bg-dark-grey-700 bg-opacity-50 fixed inset-0 z-backdrop"
            data-bic-modal-closable={1}
            data-bic-modal-backdrop="dynamic"
          >
            <div className="relative w-full max-w-4xl h-full text-white z-backdrop">
              <div className="relative rounded-lg bg-dark-grey-500 text-white   shadow top-4">
                <div className="relative flex items-center p-6 border-b border-dark-grey-700 rounded-t">
                  <h3 className=" text-center w-full max-w-[calc(100%-36px)] text-white s2 s2--medium !mb-0">
                    Agency Kit
                  </h3>
                  <button
                    className="absolute inline-flex items-center ml-auto -translate-y-1/2 bg-transparent right-6 rounded-lg top-1/2 text-white text-3 hover:opacity-90"
                    data-bic-modal-hide="bic-modal-block_64edb64a21b8f_4"
                    type="button"
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
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-6 p4 p4--ns">
                    <div className="wpcf7 js" id="wpcf7-f95992-p95991-o3" lang="vi" dir="ltr">
                      <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true" />
                        <ul />
                      </div>
                      <form
                        action="/beincrypto-sales/#wpcf7-f95992-p95991-o3"
                        method="post"
                        className="wpcf7-form resetting"
                        aria-label="Contact form"
                        noValidate="novalidate"
                        data-status="resetting"
                      >
                        <div style={{ display: 'none' }}>
                          <input type="hidden" name="_wpcf7" defaultValue={95992} />
                          <input type="hidden" name="_wpcf7_version" defaultValue="5.7.4" />
                          <input type="hidden" name="_wpcf7_locale" defaultValue="vi" />
                          <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f95992-p95991-o3" />
                          <input type="hidden" name="_wpcf7_container_post" defaultValue={95991} />
                          <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
                          <input
                            type="hidden"
                            name="_wpcf7_recaptcha_response"
                            defaultValue="HFcWJ2YhtQbTMzYGNDX0hSXgUQCTMgXDV1AQo7ewUPNAc1KjE-LUwUdWZFcjlfei5hIycgFRF0FREGTVx2ZX81dmIMNxcECVNUaC51eWV1VSY5ZnwvE2UgfzAzU0FSWU1UQU9McWk1ZDdbS2VgFG4kFycxIkw9Lhd5N3NUMV8lI1JOUndGalZEZVpoDXNlfkJnAg8nd3E"
                          />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-x-3.5 gap-y-4 md:mt-10 mt-8">
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Tên của bạn*</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-name">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Tên*"
                                defaultValue=""
                                type="text"
                                name="your-name"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Địa chỉ email*</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Địa chỉ Email*"
                                defaultValue=""
                                type="email"
                                name="your-email"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Công ty*</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-company-name">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Tên Công Ty*"
                                defaultValue=""
                                type="text"
                                name="your-company-name"
                              />
                            </span>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-x-3.5 gap-y-4">
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Telegram</span>
                            <span className="wpcf7-form-control-wrap" data-name="text-telegram-username">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text w-full"
                                aria-invalid="false"
                                placeholder="Telegram: ví dụ @tennguoidung"
                                defaultValue=""
                                type="text"
                                name="text-telegram-username"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Trang web</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-website">
                              <input
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url w-full"
                                aria-invalid="false"
                                placeholder="Trang web: ví dụ https://beincrypto.com"
                                defaultValue=""
                                type="url"
                                name="your-website"
                              />
                            </span>
                          </label>
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Loại công ty*</span>
                            <span className="wpcf7-form-control-wrap" data-name="yout-type-of-organization">
                              <select
                                className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required w-full"
                                required=""
                                aria-required="true"
                                aria-invalid="false"
                                name="yout-type-of-organization"
                              >
                                <option value="">Chọn loại tổ chức*</option>
                                <option value="Sàn Giao Dịch">Sàn Giao Dịch</option>
                                <option value="Dự Án Tiền Tệ/Đồng Tiền">Dự Án Tiền Tệ/Đồng Tiền</option>
                                <option value="Đào Tiền Ảo">Đào Tiền Ảo</option>
                                <option value="Tài Chính/Đầu Tư">Tài Chính/Đầu Tư</option>
                                <option value="Trò Chơi/Đánh Bạc">Trò Chơi/Đánh Bạc</option>
                                <option value="Mạng Quảng Cáo">Mạng Quảng Cáo</option>
                                <option value="Công Ty Môi Giới/Trung Gian">Công Ty Môi Giới/Trung Gian</option>
                                <option value="Hội Nghị/Sự Kiện">Hội Nghị/Sự Kiện</option>
                                <option value="Công Nghệ Chung">Công Nghệ Chung</option>
                                <option value="Nền Tảng Tin Tức">Nền Tảng Tin Tức</option>
                                <option value="Khác (Liên quan đến Tiền Ảo)">Khác (Liên quan đến Tiền Ảo)</option>
                                <option value="Khác (Không liên quan đến Tiền Ảo)">
                                  Khác (Không liên quan đến Tiền Ảo)
                                </option>
                              </select>
                            </span>
                          </label>
                        </div>
                        <div className="mb-6">
                          <label className="!mb-0">
                            <span className="block lg:hidden mb-2.5 p2 font-medium">Nhiệm vụ</span>
                            <span className="wpcf7-form-control-wrap" data-name="your-message">
                              <textarea
                                cols={5}
                                rows={5}
                                className="wpcf7-form-control wpcf7-textarea w-full"
                                aria-invalid="false"
                                placeholder="Mô tả nhiệm vụ của bạn"
                                name="your-message"
                                defaultValue=""
                              />
                            </span>{' '}
                          </label>
                        </div>
                        <div className="text-left">
                          <button
                            type="submit"
                            className="wpcf7-form-control wpcf7-submit md:max-w-44 w-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 dark:disabled:bg-grey-300 dark:disabled:border-grey-300 dark:disabled:text-grey-100 bic-c-button-primary-lime dark:bg-lime-600 dark:border-lime-600 dark:text-dark-grey-700 dark:hover:bg-lime-700 gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium"
                          >
                            Gửi
                          </button>
                        </div>
                        <div className="wpcf7-response-output" aria-hidden="true" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section data-el="bic-sales-solutions" id="solutions-anchor" className="relative mb-6 lg:mb-16 ">
        <div className="pb-0 pt-3 bg-dark-grey-700 relative z-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:py-0">
          <div className="container flex flex-col lg:flex-row lg:gap-20">
            <div className="lg:min-w-96">
              <span className="inline-block h8 mb-2 text-grey-600 lg:mb-3.5">Giải pháp</span>
              <h2 className="mb-5 h4 uppercase leading-9 lg:leading-11 lg:h2 lg:mb-8 text-white [&_span]:text-lime-600">
                Chinh phục <span>thử thách</span> &amp; Chạm đến <span>mục tiêu</span>
              </h2>
              <a
                className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime hidden lg:inline-flex"
                href="#sales contact"
                target=""
              >
                <span>Bắt đầu với Be[IN]Crypto</span>
              </a>
            </div>
            <div className="grid col-span-2 gap-y-5 lg:grid-cols-2 lg:col-span-1 lg:gap-y-9 lg:gap-x-7">
              <div className="relative pb-8 text-white border border-grey-500 bg-dark-grey-500 rounded-xl px-7 pt-30 lg:pt-8 lg:pb-20 lg:px-7">
                <img
                  decoding="async"
                  className="lazy absolute z-0 lazy top-4 left-6 max-w-28 lg:hidden"
                  loading="lazy"
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/1-360x211.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1-850x499.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1-768x451.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/1.png"
                  alt="Performance Marketing"
                  width={900}
                  height={528}
                />
                <h4 className="h7 font-bold text-5.5 mb-3 lg:h5">Performance Marketing</h4>
                <div className="p3 p3--ns">
                  Với kinh nghiệm chạy hơn 1000 chiến dịch thành công bằng cách sử dụng dữ liệu thông minh nâng cao,
                  chúng tôi giúp bạn chuyển đổi những người đam mê Web3 thành khách hàng.
                </div>
                <img
                  decoding="async"
                  className="lazy absolute bottom-0 z-0 hidden right-9 max-w-40 lg:block entered loaded"
                  loading="lazy"
                  src="https://s32697.pcdn.co/wp-content/uploads/2023/11/1.png"
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/1-360x211.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1-850x499.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1-768x451.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/1.png"
                  alt="Performance Marketing"
                  width={900}
                  height={528}
                  data-ll-status="loaded"
                  srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/11/1-360x211.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1-850x499.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1-768x451.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/1.png 900w"
                />
              </div>
              <div className="relative pb-8 text-white border border-grey-500 bg-dark-grey-500 rounded-xl px-7 pt-30 lg:pt-8 lg:pb-20 lg:px-7">
                <img
                  decoding="async"
                  className="lazy absolute z-0 lazy top-4 left-6 max-w-28 lg:hidden"
                  loading="lazy"
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/2-360x245.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2-850x578.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2-768x522.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/2.png"
                  alt="Branding"
                  width={900}
                  height={612}
                />
                <h4 className="h7 font-bold text-5.5 mb-3 lg:h5">Branding</h4>
                <div className="p3 p3--ns">
                  Lòng tin. Cộng đồng. Nhận thức. Giáo dục. Mọi thứ bạn cần để tạo nền tảng vững chắc cho dự án Web3 của
                  mình.
                </div>
                <img
                  decoding="async"
                  className="lazy absolute bottom-0 z-0 hidden right-9 max-w-40 lg:block entered loaded"
                  loading="lazy"
                  src="https://s32697.pcdn.co/wp-content/uploads/2023/11/2.png"
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/2-360x245.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2-850x578.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2-768x522.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/2.png"
                  alt="Branding"
                  width={900}
                  height={612}
                  data-ll-status="loaded"
                  srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/11/2-360x245.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2-850x578.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2-768x522.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/2.png 900w"
                />
              </div>
              <div className="relative pb-8 text-white border border-grey-500 bg-dark-grey-500 rounded-xl px-7 pt-30 lg:pt-8 lg:pb-20 lg:px-7">
                <img
                  decoding="async"
                  className="lazy absolute z-0 lazy top-4 left-6 max-w-28 lg:hidden"
                  loading="lazy"
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/3-360x240.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3-850x567.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3-768x512.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/3.png"
                  alt="Dịch vụ Marketing"
                  width={900}
                  height={600}
                />
                <h4 className="h7 font-bold text-5.5 mb-3 lg:h5">Dịch vụ Marketing</h4>
                <div className="p3 p3--ns">
                  Tận dụng sự hiểu biết sâu sắc của BeInCrypto về Ngành để giúp phân tích và lập chiến lược cho thương
                  hiệu của bạn.
                </div>
                <img
                  decoding="async"
                  className="lazy absolute bottom-0 z-0 hidden right-9 max-w-40 lg:block entered loaded"
                  loading="lazy"
                  src="https://s32697.pcdn.co/wp-content/uploads/2023/11/3.png"
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/3-360x240.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3-850x567.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3-768x512.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/3.png"
                  alt="Dịch vụ Marketing"
                  width={900}
                  height={600}
                  data-ll-status="loaded"
                  srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/11/3-360x240.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3-850x567.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3-768x512.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/3.png 900w"
                />
              </div>
              <div className="relative pb-8 text-white border border-grey-500 bg-dark-grey-500 rounded-xl px-7 pt-30 lg:pt-8 lg:pb-20 lg:px-7">
                <img
                  decoding="async"
                  className="lazy absolute z-0 lazy top-4 left-6 max-w-28 lg:hidden"
                  loading="lazy"
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/4-360x211.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4-850x499.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4-768x451.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/4.png"
                  alt="Impact Marketing"
                  width={900}
                  height={528}
                />
                <h4 className="h7 font-bold text-5.5 mb-3 lg:h5">Impact Marketing</h4>
                <div className="p3 p3--ns">
                  Các giải pháp được may đo riêng tập trung vào từng bước trong quá trình phát triển hoạt động kinh
                  doanh tiền điện tử của bạn từ khi ra mắt.
                </div>
                <img
                  decoding="async"
                  className="lazy absolute bottom-0 z-0 hidden right-9 max-w-40 lg:block entered loaded"
                  loading="lazy"
                  src="https://s32697.pcdn.co/wp-content/uploads/2023/11/4.png"
                  data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/11/4-360x211.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4-850x499.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4-768x451.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4.png 900w"
                  data-src="https://s32697.pcdn.co/wp-content/uploads/2023/11/4.png"
                  alt="Impact Marketing"
                  width={900}
                  height={528}
                  data-ll-status="loaded"
                  srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/11/4-360x211.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4-850x499.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4-768x451.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/11/4.png 900w"
                />
              </div>
            </div>
            <a
              className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime block mt-5 lg:hidden"
              href="#sales contact"
              target=""
            >
              <span>Bắt đầu với Be[IN]Crypto</span>
            </a>
          </div>
        </div>
      </section>

      <section id="block_64ae5e636b60f" className="md:container mb-13 lg:mb-14" data-el="hr-tg-cta">
        <div className="@container">
          <div
            className=" relative before:block before:absolute before:w-[calc(100%-0.5rem)] before:h-full before:rounded-xl before:-bottom-2
          before:right-px
          @lg:before:w-[calc(100%-0.5rem)]  before:bg-lime-600"
          >
            <div className="relative z-10 rounded-xl border p-5 border-dark-grey-700 @lg:px-10 @lg:py-11 @lg:mr-2 bg-dark-grey-500 border-dark-grey-500">
              <div className="flex flex-col @4xl:gap-5 @4xl:flex-row">
                <div className="w-full">
                  <span className="mb-5 h3 block text-white h8 h8--normal-case leading-6.5 @md:h3 @md:leading-10 @md:mb-7">
                    Bạn có muốn tìm hiểu sâu hơn về thế giới blockchain và tiền điện tử?
                  </span>
                  <div className="flex flex-col justify-between gap-5 items-center @md:flex-row">
                    <div className="w-full text-white s3 leading-5 @md:h8 @md:leading-6.5 ">
                      Chúng tôi ở đây và luôn sẵn sàng để hỗ trợ bạn 😎 XEM THÊM VỀ HOẠT ĐỘNG THÔNG CÁO BÁO CHÍ CÙNG
                      CHÚNG TÔI
                    </div>
                    <div className="hidden mr-9 relative min-w-20 max-w-20 @5xl:block">
                      <img
                        decoding="async"
                        className="absolute w-full h-auto -translate-y-2/4"
                        alt="Đăng bài PR lên BeInCrypto"
                        title="Đăng bài PR lên BeInCrypto"
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <div className="w-full @md:w-min">
                      <a
                        className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime   w-full whitespace-nowrap @md:w-min @md:px-5"
                        href="https://beincrypto.com/press-releases-submission/"
                        target=""
                      >
                        <span>Đăng bài PR lên BeInCrypto</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden @5xl:block min-w-40">
                  <svg
                    className="absolute -top-px"
                    width={154}
                    height={182}
                    viewBox="0 0 154 182"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 31.2563C1.79086 31.2563 2.49057e-07 33.0472 5.56284e-07 35.2563L3.8538e-06 58.9674C4.16103e-06 61.1765 1.79087 62.9674 4 62.9674L27.7111 62.9674C29.9202 62.9674 31.7111 61.1765 31.7111 58.9674L31.7111 35.2563C31.7111 33.0472 29.9202 31.2563 27.711 31.2563L4 31.2563Z"
                      className="fill-lime-600"
                    />
                    <path
                      d="M126 149.503C123.791 149.503 122 151.294 122 153.503L122 177.214C122 179.424 123.791 181.214 126 181.214L149.711 181.214C151.92 181.214 153.711 179.424 153.711 177.214L153.711 153.503C153.711 151.294 151.92 149.503 149.711 149.503L126 149.503Z"
                      className="fill-lime-600"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M78.5842 6.50341C78.5842 3.1897 81.2705 0.503412 84.5842 0.503412L111.153 0.503414C114.467 0.503415 117.153 3.18971 117.153 6.50341L117.153 28.6744C117.153 31.9881 119.84 34.6744 123.153 34.6744L145.324 34.6744C148.638 34.6744 151.324 37.3607 151.324 40.6744L151.324 67.2437C151.324 70.5574 148.638 73.2437 145.324 73.2437L123.153 73.2437C119.84 73.2437 117.153 75.9299 117.153 79.2437L117.153 101.753C117.153 105.067 114.467 107.753 111.153 107.753L88.9823 107.753C85.6685 107.753 82.9823 110.439 82.9823 113.753L82.9822 135.586C82.9822 138.899 80.2959 141.586 76.9822 141.586L50.413 141.586C47.0993 141.586 44.413 138.899 44.413 135.586L44.413 109.016C44.413 105.703 47.0993 103.016 50.413 103.016L72.5842 103.016C75.8979 103.016 78.5842 100.33 78.5842 97.0165L78.5842 75.1837C78.5842 71.87 81.2705 69.1837 84.5842 69.1837L106.755 69.1837C110.069 69.1837 112.755 66.4974 112.755 63.1837L112.755 45.0727C112.755 41.759 110.069 39.0727 106.755 39.0727L84.5842 39.0727C81.2705 39.0727 78.5842 36.3864 78.5842 33.0727L78.5842 6.50341Z"
                      className="fill-lime-600"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-el="bic-b-accelerate-growth" id="block_64f83c9662654" className="relative ">
        <img
          decoding="async"
          loading="lazy"
          className="hidden lg:block absolute h-min -z-10 top-28 lg:w-min -left-[45%] xl:-left-[28%]"
          src="https://s32697.pcdn.co/wp-content/themes/beincrypto-new/resources/assets/images/sales/web2.svg"
          alt=""
          width={474}
          height={687}
        />
        <section data-el="bic-b-sales-metrics" id="block_64f83c9662654-metrics" className="mb-6 md:mb-16 ">
          <h4 className="unstyled-content-h h5 md:uppercase md:h4 text-white [&_span]:text-lime-600 mb-3">
            Gia tăng <span>tốc độ tăng trưởng của bạn</span>
          </h4>
          <p className="md:mb-7 md:s1 md:s1--medium text-white s2 s2--medium mb-5">
            BE[IN]CRYPTO sẽ là cầu nối quan trọng giữa bạn và khách hàng
          </p>
          <div className="flex flex-wrap items-start justify-center p-5 gap-y-8 xl:flex-nowrap rounded-3xl md:py-13 md:px-7 sm:px-6 bg-dark-grey-500">
            <div className="w-1/2 text-center md:w-1/3 lg:w-1/6">
              <div className="text-lime-600 h2 md:hrt6 lg:h2 xl:hrt6 [&_span]:text-6 md:[&_span]:text-8">+5M</div>
              <div className="px-4 mx-auto s3 s3--medium s3--normal-case md:s1 md:s1--medium text-grey-500">
                Người dùng hoạt động hàng tháng
              </div>
            </div>
            <div className="w-1/2 text-center md:w-1/3 lg:w-1/6">
              <div className="text-lime-600 h2 md:hrt6 lg:h2 xl:hrt6 [&_span]:text-6 md:[&_span]:text-8">20M</div>
              <div className="px-4 mx-auto s3 s3--medium s3--normal-case md:s1 md:s1--medium text-grey-500">
                Cộng đồng đa kênh
              </div>
            </div>
            <div className="w-1/2 text-center md:w-1/3 lg:w-1/6">
              <div className="text-lime-600 h2 md:hrt6 lg:h2 xl:hrt6 [&_span]:text-6 md:[&_span]:text-8">+540K</div>
              <div className="px-4 mx-auto s3 s3--medium s3--normal-case md:s1 md:s1--medium text-grey-500">
                Độc giả trong lĩnh vực B2B
              </div>
            </div>
            <div className="w-1/2 text-center md:w-1/3 lg:w-1/6">
              <div className="text-lime-600 h2 md:hrt6 lg:h2 xl:hrt6 [&_span]:text-6 md:[&_span]:text-8">2M</div>
              <div className="px-4 mx-auto s3 s3--medium s3--normal-case md:s1 md:s1--medium text-grey-500">
                Người theo dõi trên Social Media
              </div>
            </div>
            <div className="w-1/2 text-center md:w-1/3 lg:w-1/6">
              <div className="text-lime-600 h2 md:hrt6 lg:h2 xl:hrt6 [&_span]:text-6 md:[&_span]:text-8">+40K</div>
              <div className="px-4 mx-auto s3 s3--medium s3--normal-case md:s1 md:s1--medium text-grey-500">
                Người đăng ký email trong lĩnh vực B2B
              </div>
            </div>
            <div className="w-1/2 text-center md:w-1/3 lg:w-1/6">
              <div className="text-lime-600 h2 md:hrt6 lg:h2 xl:hrt6 [&_span]:text-6 md:[&_span]:text-8">14</div>
              <div className="px-4 mx-auto s3 s3--medium s3--normal-case md:s1 md:s1--medium text-grey-500">
                Ngôn ngữ &amp; Tên miền
              </div>
            </div>
          </div>
        </section>
        <section
          id="block_64f83c9662654-case-studies"
          className="md:overflow-hidden flex md:justify-between flex-wrap md:flex-nowrap pt-6 md:pt-0 mb-6 md:mb-16 md:gap-x-20 "
        >
          <div className="md:mr-5 md:min-w-96 md:flex-1">
            <h5 className="unstyled-content-h h8 text-grey-600 mb-2 md:mb-3.5">Case Studies</h5>
            <h4 className="unstyled-content-h h4 md:h2 mb-5 md:mb-8 [&_span]:text-lime-600 text-white">
              HIỆU QUẢ <span>ĐÃ ĐƯỢC CHỨNG MINH</span>
            </h4>
            <a
              className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
                    disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime hidden md:inline-flex rtl:flex-row-reverse"
              data-el="case-studies-link"
              target="_self"
              href="#sales-contact"
            >
              <span>Bắt đầu với Be[IN]Crypto</span>
              <svg
                className="bic-svg-icon"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="relative min-w-0 overflow-hidden w-full md:w-8/12">
            <div
              className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-backface-hidden"
              data-el="bic-b-sales-case-studies"
            >
              <div
                className="swiper-wrapper"
                style={{
                  height: 440,
                  transform: 'translate3d(-816px, 0px, 0px)',
                  transitionDuration: '0ms',
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  style={{ width: 816 }}
                  data-swiper-slide-index={2}
                >
                  <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                    <img
                      decoding="async"
                      className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                      loading="lazy"
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-360x91.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-850x215.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-768x194.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png 854w"
                      data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png"
                      alt=""
                      width={854}
                      height={216}
                    />
                    <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                      <div className="hidden mb-4 md:mb-3 md:block">
                        <img
                          decoding="async"
                          className="lazy h-9 object-contain w-auto"
                          loading="lazy"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-360x91.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-850x215.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-768x194.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png 854w"
                          data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png"
                          alt=""
                          width={854}
                          height={216}
                        />
                      </div>
                      <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                        Trong bối cảnh cơ sở hạ tầng AI đang mở rộng nhanh chóng trong lĩnh vực Web3, chúng tôi đã kiếm
                        tìm một đối tác chuyên về PR để có thể lan tỏa những tin tức của chúng tôi đến những người đam
                        mê lĩnh vực này một cách hiệu quả. Xuất sắc vượt qua nhiều tên tuổi lớn, BeInCrypto đã được
                        chứng minh mình là đối tác lý tưởng của chúng tôi trong lĩnh vực PR và quảng cáo. Hợp tác với họ
                        thực sự là một trải nghiệm thú vị!
                      </p>
                    </div>
                    <div className="flex flex-col justify-end order-3 h-full min-w-0 md:h-auto md:pr-3 basis-0 md:basis-1/3 md:shrink-0 md:order-2 md:block">
                      <div className="h-auto md:h-60 xl:h-56 flex flex-col md:justify-between gap-3 xl:gap-4 p-0 md:px-6 md:py-5 rounded-xl s2 s2--medium bg-dark-grey-500 text-grey-400 [&_span]:text-lime-600">
                        <div>
                          <span className="block hrt6 md:h1">1,600</span>
                          Lượt Click (trong tháng 6 &amp; 7, 2023)
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-3 overflow-hidden basis-48 shrink-0 md:basis-2/3 md:h-60 xl:h-56 md:shrink-1 rounded-xl bg-dark-grey-500">
                      <img
                        decoding="async"
                        className="lazy object-cover w-full md:h-full aspect-video rounded-xl md:rounded-none"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT-360x142.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT-850x336.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT-768x303.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT.png 1200w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT.png"
                        alt=""
                        width={1200}
                        height={474}
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-active" style={{ width: 816 }} data-swiper-slide-index={0}>
                  <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                    <img
                      decoding="async"
                      className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                      loading="lazy"
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-360x82.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-850x193.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-768x175.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png 1450w"
                      data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                      alt=""
                      width={1450}
                      height={330}
                    />
                    <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                      <div className="hidden mb-4 md:mb-3 md:block">
                        <img
                          decoding="async"
                          className="lazy h-9 object-contain w-auto entered loaded"
                          loading="lazy"
                          src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                          data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-360x82.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-850x193.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-768x175.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png 1450w"
                          data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                          alt=""
                          width={1450}
                          height={330}
                          data-ll-status="loaded"
                          srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-360x82.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-850x193.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-768x175.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png 1450w"
                        />
                      </div>
                      <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                        Với sự trợ giúp của BeInCrypto, YouHodler đã thu hút được hàng nghìn lượt đăng ký mới và chuyển
                        đổi một lượng lớn trong số họ thành khách hàng đang hoạt động. Trên một số khu vực địa lý, CR từ
                        việc đăng ký thành khách hàng đang hoạt động mới cao hơn mức chuẩn trung bình. Đội ngũ
                        BeInCrypto đã cho thấy sự chuyên nghiệp, tính hiệu quả và là người bạn đồng hành đáng tin cậy
                        trong lĩnh vực tiền điện tử.
                      </p>
                    </div>
                    <div className="flex flex-col justify-end order-3 h-full min-w-0 md:h-auto md:pr-3 basis-0 md:basis-1/3 md:shrink-0 md:order-2 md:block">
                      <div className="h-auto md:h-60 xl:h-56 flex flex-col md:justify-between gap-3 xl:gap-4 p-0 md:px-6 md:py-5 rounded-xl s2 s2--medium bg-dark-grey-500 text-grey-400 [&_span]:text-lime-600">
                        <div>
                          <span className="block hrt6 md:h1">2,900</span>
                          Số lượt đăng ký mới
                        </div>
                        <div>
                          <span className="block hrt6 md:hrt4 md:hrt6">10 USD</span>
                          Mỗi đăng ký đủ điều kiện
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-3 overflow-hidden basis-48 shrink-0 md:basis-2/3 md:h-60 xl:h-56 md:shrink-1 rounded-xl bg-dark-grey-500">
                      <img
                        decoding="async"
                        className="lazy object-cover w-full md:h-full aspect-video rounded-xl md:rounded-none entered loaded"
                        loading="lazy"
                        src="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png"
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-360x191.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-850x450.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-768x407.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-1536x813.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png 1800w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png"
                        alt=""
                        width={1800}
                        height={953}
                        data-ll-status="loaded"
                        srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-360x191.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-850x450.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-768x407.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-1536x813.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png 1800w"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" style={{ width: 816 }} data-swiper-slide-index={1}>
                  <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                    <img
                      decoding="async"
                      className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                      loading="lazy"
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-360x90.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-850x212.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-768x192.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-1536x383.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1.png 2004w"
                      data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1.png"
                      alt=""
                      width={2004}
                      height={500}
                    />
                    <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                      <div className="hidden mb-4 md:mb-3 md:block">
                        <img
                          decoding="async"
                          className="lazy h-9 object-contain w-auto"
                          loading="lazy"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-360x90.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-850x212.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-768x192.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1-1536x383.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1.png 2004w"
                          data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi.white-1.png"
                          alt=""
                          width={2004}
                          height={500}
                        />
                      </div>
                      <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                        Đội ngũ BeInCrypto luôn xuất sắc trong việc tạo ra giá trị và mang lại lợi ích cho người dùng.
                        Theo sát những biến động của thị trường, họ luôn chủ động trong việc hỗ trợ đối tác. Với những
                        nỗ lực không ngừng nghỉ từ cả hai phía, sự thành công trong việc chuyển đổi lưu lượng truy cập
                        cũng như phát triển hơn nữa mối quan hệ hợp tác bền chặt là minh chứng cho sự thành công của
                        BeInCrypto.
                      </p>
                    </div>
                    <div className="flex flex-col justify-end order-3 h-full min-w-0 md:h-auto md:pr-3 basis-0 md:basis-1/3 md:shrink-0 md:order-2 md:block">
                      <div className="h-auto md:h-60 xl:h-56 flex flex-col md:justify-between gap-3 xl:gap-4 p-0 md:px-6 md:py-5 rounded-xl s2 s2--medium bg-dark-grey-500 text-grey-400 [&_span]:text-lime-600">
                        <div>
                          <span className="block hrt6 md:h1">245</span>
                          Người dùng mới
                        </div>
                        <div>
                          <span className="block h3 md:h4">21,338,750 USD</span>
                          Khối lượng giao dịch
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-3 overflow-hidden basis-48 shrink-0 md:basis-2/3 md:h-60 xl:h-56 md:shrink-1 rounded-xl bg-dark-grey-500">
                      <img
                        decoding="async"
                        className="lazy object-cover w-full md:h-full aspect-video rounded-xl md:rounded-none"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi-review-and-copy-trade-e1694180210852-360x129.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi-review-and-copy-trade-e1694180210852-850x305.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi-review-and-copy-trade-e1694180210852-768x276.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi-review-and-copy-trade-e1694180210852.png 1358w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/BYDFi-review-and-copy-trade-e1694180210852.png"
                        alt=""
                        width={1358}
                        height={488}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-prev"
                  style={{ width: 816 }}
                  data-swiper-slide-index={2}
                >
                  <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                    <img
                      decoding="async"
                      className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                      loading="lazy"
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-360x91.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-850x215.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-768x194.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png 854w"
                      data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png"
                      alt=""
                      width={854}
                      height={216}
                    />
                    <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                      <div className="hidden mb-4 md:mb-3 md:block">
                        <img
                          decoding="async"
                          className="lazy h-9 object-contain w-auto"
                          loading="lazy"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-360x91.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-850x215.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1-768x194.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png 854w"
                          data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain-GPT-logo-1.png"
                          alt=""
                          width={854}
                          height={216}
                        />
                      </div>
                      <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                        Trong bối cảnh cơ sở hạ tầng AI đang mở rộng nhanh chóng trong lĩnh vực Web3, chúng tôi đã kiếm
                        tìm một đối tác chuyên về PR để có thể lan tỏa những tin tức của chúng tôi đến những người đam
                        mê lĩnh vực này một cách hiệu quả. Xuất sắc vượt qua nhiều tên tuổi lớn, BeInCrypto đã được
                        chứng minh mình là đối tác lý tưởng của chúng tôi trong lĩnh vực PR và quảng cáo. Hợp tác với họ
                        thực sự là một trải nghiệm thú vị!
                      </p>
                    </div>
                    <div className="flex flex-col justify-end order-3 h-full min-w-0 md:h-auto md:pr-3 basis-0 md:basis-1/3 md:shrink-0 md:order-2 md:block">
                      <div className="h-auto md:h-60 xl:h-56 flex flex-col md:justify-between gap-3 xl:gap-4 p-0 md:px-6 md:py-5 rounded-xl s2 s2--medium bg-dark-grey-500 text-grey-400 [&_span]:text-lime-600">
                        <div>
                          <span className="block hrt6 md:h1">1,600</span>
                          Lượt Click (trong tháng 6 &amp; 7, 2023)
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-3 overflow-hidden basis-48 shrink-0 md:basis-2/3 md:h-60 xl:h-56 md:shrink-1 rounded-xl bg-dark-grey-500">
                      <img
                        decoding="async"
                        className="lazy object-cover w-full md:h-full aspect-video rounded-xl md:rounded-none"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT-360x142.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT-850x336.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT-768x303.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT.png 1200w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Chain_GPT.png"
                        alt=""
                        width={1200}
                        height={474}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  style={{ width: 816 }}
                  data-swiper-slide-index={0}
                >
                  <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                    <img
                      decoding="async"
                      className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                      loading="lazy"
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-360x82.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-850x193.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-768x175.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png 1450w"
                      data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                      alt=""
                      width={1450}
                      height={330}
                    />
                    <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                      <div className="hidden mb-4 md:mb-3 md:block">
                        <img
                          decoding="async"
                          className="lazy h-9 object-contain w-auto entered loaded"
                          loading="lazy"
                          src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                          data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-360x82.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-850x193.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-768x175.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png 1450w"
                          data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                          alt=""
                          width={1450}
                          height={330}
                          data-ll-status="loaded"
                          srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-360x82.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-850x193.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1-768x175.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png 1450w"
                        />
                      </div>
                      <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                        Với sự trợ giúp của BeInCrypto, YouHodler đã thu hút được hàng nghìn lượt đăng ký mới và chuyển
                        đổi một lượng lớn trong số họ thành khách hàng đang hoạt động. Trên một số khu vực địa lý, CR từ
                        việc đăng ký thành khách hàng đang hoạt động mới cao hơn mức chuẩn trung bình. Đội ngũ
                        BeInCrypto đã cho thấy sự chuyên nghiệp, tính hiệu quả và là người bạn đồng hành đáng tin cậy
                        trong lĩnh vực tiền điện tử.
                      </p>
                    </div>
                    <div className="flex flex-col justify-end order-3 h-full min-w-0 md:h-auto md:pr-3 basis-0 md:basis-1/3 md:shrink-0 md:order-2 md:block">
                      <div className="h-auto md:h-60 xl:h-56 flex flex-col md:justify-between gap-3 xl:gap-4 p-0 md:px-6 md:py-5 rounded-xl s2 s2--medium bg-dark-grey-500 text-grey-400 [&_span]:text-lime-600">
                        <div>
                          <span className="block hrt6 md:h1">2,900</span>
                          Số lượt đăng ký mới
                        </div>
                        <div>
                          <span className="block hrt6 md:hrt4 md:hrt6">10 USD</span>
                          Mỗi đăng ký đủ điều kiện
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-3 overflow-hidden basis-48 shrink-0 md:basis-2/3 md:h-60 xl:h-56 md:shrink-1 rounded-xl bg-dark-grey-500">
                      <img
                        decoding="async"
                        className="lazy object-cover w-full md:h-full aspect-video rounded-xl md:rounded-none entered loaded"
                        loading="lazy"
                        src="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png"
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-360x191.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-850x450.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-768x407.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-1536x813.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png 1800w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png"
                        alt=""
                        width={1800}
                        height={953}
                        data-ll-status="loaded"
                        srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-360x191.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-850x450.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-768x407.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110-1536x813.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/scrnli_12-08-46-23_9_2023-e1695446052110.png 1800w"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div data-el="slider-controllers">
                <div
                  data-el="case-studies-prev"
                  className="absolute z-10 hidden cursor-pointer md:block top-24 rtl:right-6 rtl:left-auto left-6 text-lime-600"
                >
                  <svg
                    className="bic-svg-icon rotate-180 w-8 h-8"
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
                <div
                  data-el="case-studies-next"
                  className="absolute z-10 hidden cursor-pointer rtl:left-6 rtl:right-auto md:block top-24 right-6 text-lime-600"
                >
                  <svg
                    className="bic-svg-icon w-8 h-8"
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
          <a
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
                    disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime md:hidden w-full mt-5 rtl:flex-row-reverse"
            data-el="case-studies-link"
            target="_blank"
            href="#sales-contact"
          >
            <span>Bắt đầu với Be[IN]Crypto</span>
            <svg
              className="bic-svg-icon"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </section>
      </section>

      <section data-el="bic-logos-list-wrapper" className="pt-5 md:pt-0 mb-11 md:mb-17.5 " id="block_64f73ad45c36b">
        <div className="mb-5 md:mb-11">
          <div className="flex flex-col mx-auto md:items-center md:gap-x-3 md:flex-row">
            <h2 className="mb-2 text-white hrt6 md:hrt4 md:mb-0">13,000+</h2>
            <div className="s2 s2--medium md:h7 text-lime-600  ">
              THAM GIA HỆ SINH THÁI VỚI 14 NGÔN NGỮ
              <br />
              CÙNG BE[IN]]CRYPTO
            </div>
          </div>
        </div>
        <div
          className="relative swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          data-el="bic-logos-list-container"
        >
          <ul
            className="unstyled-content-list  grid items-center grid-cols-2 gap-5 md:grid-cols-5 md:gap-10"
            data-el="bic-logos-list"
          >
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-YouHodler-white-1.png"
                alt=""
                data-ll-status="loaded"
              />
            </li>
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-OKX-logo-white.png"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-OKX-logo-white.png"
                alt=""
                data-ll-status="loaded"
              />
            </li>
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-logo-dark_900x300.png"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-logo-dark_900x300.png"
                alt=""
                data-ll-status="loaded"
              />
            </li>
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-CoinEx-logo-vertical-version-default-color.png"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-CoinEx-logo-vertical-version-default-color.png"
                alt=""
                data-ll-status="loaded"
              />
            </li>
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo.png"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo.png"
                alt=""
                data-ll-status="loaded"
              />
            </li>
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-bitget.jpeg.optimal.jpeg"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-bitget.jpeg.optimal.jpeg"
                alt=""
                data-ll-status="loaded"
              />
            </li>
            <li className="overflow-hidden rounded-xl md:rounded-2xxl swiper-slide">
              <img
                decoding="async"
                loading="lazy"
                className="block object-contain w-full h-14 md:h-17.5 max-w-full lazy rounded-xl md:rounded-2xxl entered loaded"
                width={228}
                height={73}
                data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-3Commas-dark.png"
                src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-3Commas-dark.png"
                alt=""
                data-ll-status="loaded"
              />
            </li>
          </ul>
          <div className="">
            <button
              className="logo-slider-button-prev swiper-button-disabled swiper-button-lock"
              type="button"
              disabled=""
            >
              &nbsp;
            </button>
            <button
              className="logo-slider-button-next swiper-button-disabled swiper-button-lock"
              type="button"
              disabled=""
            >
              &nbsp;
            </button>
          </div>
        </div>
      </section>

      <section
        id="block_64f89888c5f88"
        className="md:overflow-hidden flex md:justify-between flex-wrap md:flex-nowrap pt-6 md:pt-0 mb-6 md:mb-16 md:gap-x-20 "
      >
        <div className="md:mr-5 md:min-w-96 md:flex-1">
          <h5 className="unstyled-content-h h8 text-grey-600 mb-2 md:mb-3.5">Chứng thực</h5>
          <h4 className="unstyled-content-h h4 md:h2 mb-5 md:mb-8 [&_span]:text-lime-600 text-white">
            <span>TIÊN PHONG</span> VỀ CRYPTO MARKETING
          </h4>
          <a
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime hidden md:inline-flex rtl:flex-row-reverse"
            data-el="case-studies-link"
            target="_self"
            href="#sales-contact"
          >
            <span>Bắt đầu với Be[IN]Crypto</span>
            <svg
              className="bic-svg-icon"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <div className="relative min-w-0 overflow-hidden w-full md:w-8/12">
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-backface-hidden"
            data-el="bic-b-sales-case-studies"
          >
            <div
              className="swiper-wrapper"
              style={{
                height: 184,
                transform: 'translate3d(-816px, 0px, 0px)',
                transitionDuration: '0ms',
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                style={{ width: 816 }}
                data-swiper-slide-index={3}
              >
                <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                  <img
                    decoding="async"
                    className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                    loading="lazy"
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                    data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png 153w, https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0-150x40.png 150w"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png"
                    alt=""
                    width={153}
                    height={40}
                  />
                  <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                    <div className="hidden mb-4 md:mb-3 md:block">
                      <img
                        decoding="async"
                        className="lazy h-9 object-contain w-auto"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png 153w, https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0-150x40.png 150w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png"
                        alt=""
                        width={153}
                        height={40}
                      />
                    </div>
                    <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                      “Chúng tôi đã và đang hợp tác với BeInCrypto được vài tháng gần đây và chúng tôi không có ý định
                      dừng việc hơp tác này. Cách mà đội ngũ BeInCrypto làm việc với đối tác là một ví dụ xuất sắc của
                      việc hợp tác trong kinh doanh – đây là một mối quan hệ chủ động cùng nhau hướng đến mục tiêu lớn
                      cho cả hai bên. Kinh nghiệm sâu rộng của họ trong nền công nghiệp cryptocurrency, sự cầu tiến của
                      họ để đạt đuợc mục tiêu cho chiến dịch marketing cùng với niềm đam mê với những gì họ làm, tất cả
                      tạo nên một trải nghiệm tuyệt với khi làm việc với BeInCrypto”
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-active" style={{ width: 816 }} data-swiper-slide-index={0}>
                <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                  <img
                    decoding="async"
                    className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left entered"
                    loading="lazy"
                    src="https://s32697.pcdn.co/wp-content/themes/beincrypto-new/dist/images/bic-default-image.jpg"
                    data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-360x96.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-850x227.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-768x205.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-1536x410.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-2048x547.png 2048w"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1.png"
                    alt=""
                    width={2537}
                    height={677}
                    style={{ objectFit: 'cover', maxHeight: 'inherit' }}
                  />
                  <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                    <div className="hidden mb-4 md:mb-3 md:block">
                      <img
                        decoding="async"
                        className="lazy h-9 object-contain w-auto entered loaded"
                        loading="lazy"
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-360x96.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-850x227.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-768x205.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-1536x410.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-2048x547.png 2048w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1.png"
                        alt=""
                        width={2537}
                        height={677}
                        style={{ objectFit: 'cover', maxHeight: 'inherit' }}
                        src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1.png"
                        data-ll-status="loaded"
                        srcSet="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-360x96.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-850x227.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-768x205.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-1536x410.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-2048x547.png 2048w"
                      />
                    </div>
                    <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                      “BeInCrypto là một nền tảng truyền thông thiết yếu của thị trường và được tin tưởng bởi lượng độc
                      giả đa dạng trên toàn thế giới. Họ chia sẻ chung tầm nhìn với cộng đồng crypto và phấn đấu vì mục
                      tiêu cung cấp các phân tích minh bạch và không tiên vị. Đó là một vinh dự của chúng tôi khi có
                      BeInCrypto là một đối tác truyền thông”
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-next" style={{ width: 816 }} data-swiper-slide-index={1}>
                <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                  <img
                    decoding="async"
                    className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left entered"
                    loading="lazy"
                    src="https://s32697.pcdn.co/wp-content/themes/beincrypto-new/dist/images/bic-default-image.jpg"
                    data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/official-fpm-white-1-360x119.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/official-fpm-white-1.png 527w"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/official-fpm-white-1.png"
                    alt=""
                    width={527}
                    height={174}
                    style={{ objectFit: 'cover', maxHeight: 'inherit' }}
                  />
                  <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                    <div className="hidden mb-4 md:mb-3 md:block">
                      <img
                        decoding="async"
                        className="lazy h-9 object-contain w-auto"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/official-fpm-white-1-360x119.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/official-fpm-white-1.png 527w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/official-fpm-white-1.png"
                        alt=""
                        width={527}
                        height={174}
                      />
                    </div>
                    <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                      “BeInCrypto đang hợp tác cùng FPM.global trong vài năm vừa qua và đã mang lại rất nhiều khách hàng
                      thường xuyên cho các sản phẩm Crypto/Fintech/Forex của chúng tôi. Chúng tôi đánh giá BeInCrypto là
                      một đối tác đáng tin cậy với các tiêu chuẩn làm việc rất cao”
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: 816 }} data-swiper-slide-index={2}>
                <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                  <img
                    decoding="async"
                    className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                    loading="lazy"
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                    data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1-360x209.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1-850x493.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1-768x445.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1.png 1200w"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1.png"
                    alt=""
                    width={1200}
                    height={696}
                  />
                  <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                    <div className="hidden mb-4 md:mb-3 md:block">
                      <img
                        decoding="async"
                        className="lazy h-9 object-contain w-auto"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1-360x209.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1-850x493.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1-768x445.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1.png 1200w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/bic-sales-Bybit_Logotype_Darkmode-Duo-1.png"
                        alt=""
                        width={1200}
                        height={696}
                      />
                    </div>
                    <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                      “Hợp tác với BeInCrypto từ tháng 7 năm 2022 là một trải nghiệm tuyệt vời. Họ lúc nào cũng dẫn đầu
                      trong việc giúp chúng tôi đạt được những mục tiêu. Đội ngũ của BeInCrypto lúc nào cũng phản hồi
                      một các nhanh chóng và làm việc với nhau một cách trơn tru trong việc cập nhật các dự án của chúng
                      tôi. Việc hợp tác với BeInCrypto thật sự là một sự khích lệ với chúng tôi. Cam kết về sự xuất sắc
                      và kiến thức chuyên sâu trong lĩnh vực thật sự đã giúp chúng tôi thành công cùng nhau. Tôi rất
                      mong đợi quan hệ hợp tác này sẽ tiếp tục phát triển hơn nữa để cùng nhau đạt được những thành tựu
                      lớn hơn. BeInCrypto là một ví dụ của việc hợp tác cùng nhau phát triển” Mark Dreev – ByBit
                      Business Development Manager.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-prev"
                style={{ width: 816 }}
                data-swiper-slide-index={3}
              >
                <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                  <img
                    decoding="async"
                    className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left"
                    loading="lazy"
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                    data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png 153w, https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0-150x40.png 150w"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png"
                    alt=""
                    width={153}
                    height={40}
                  />
                  <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                    <div className="hidden mb-4 md:mb-3 md:block">
                      <img
                        decoding="async"
                        className="lazy h-9 object-contain w-auto"
                        loading="lazy"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png 153w, https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0-150x40.png 150w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/logo_changelly_2.0.png"
                        alt=""
                        width={153}
                        height={40}
                      />
                    </div>
                    <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                      “Chúng tôi đã và đang hợp tác với BeInCrypto được vài tháng gần đây và chúng tôi không có ý định
                      dừng việc hơp tác này. Cách mà đội ngũ BeInCrypto làm việc với đối tác là một ví dụ xuất sắc của
                      việc hợp tác trong kinh doanh – đây là một mối quan hệ chủ động cùng nhau hướng đến mục tiêu lớn
                      cho cả hai bên. Kinh nghiệm sâu rộng của họ trong nền công nghiệp cryptocurrency, sự cầu tiến của
                      họ để đạt đuợc mục tiêu cho chiến dịch marketing cùng với niềm đam mê với những gì họ làm, tất cả
                      tạo nên một trải nghiệm tuyệt với khi làm việc với BeInCrypto”
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                style={{ width: 816 }}
                data-swiper-slide-index={0}
              >
                <div className="grid grid-rows-[min-content_min-content_minmax(min-content,_1fr)] md:flex h-full flex-nowrap md:flex-wrap gap-y-4 md:gap-y-3 md:flex-row px-4 py-5 md:px-0 md:py-0 bg-dark-grey-500 md:bg-transparent md:rounded-none rounded-xl">
                  <img
                    decoding="async"
                    className="lazy h-9 order-1 block md:hidden object-contain w-auto object-left entered"
                    loading="lazy"
                    src="https://s32697.pcdn.co/wp-content/themes/beincrypto-new/dist/images/bic-default-image.jpg"
                    data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-360x96.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-850x227.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-768x205.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-1536x410.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-2048x547.png 2048w"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1.png"
                    alt=""
                    width={2537}
                    height={677}
                    style={{ objectFit: 'cover', maxHeight: 'inherit' }}
                  />
                  <div className="order-2 px-0 py-0 md:order-1 md:basis-full rounded-xl md:py-7 md:px-20 bg-dark-grey-500">
                    <div className="hidden mb-4 md:mb-3 md:block">
                      <img
                        decoding="async"
                        className="lazy h-9 object-contain w-auto entered"
                        loading="lazy"
                        data-srcset="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-360x96.png 360w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-850x227.png 850w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-768x205.png 768w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-1536x410.png 1536w, https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1-2048x547.png 2048w"
                        data-src="https://s32697.pcdn.co/wp-content/uploads/2023/09/Binance-Logo.wine-1.png"
                        alt=""
                        width={2537}
                        height={677}
                        style={{ objectFit: 'cover', maxHeight: 'inherit' }}
                        src="https://s32697.pcdn.co/wp-content/themes/beincrypto-new/dist/images/bic-default-image.jpg"
                      />
                    </div>
                    <p className="p3 p3--ns md:p4 md:p4--ns mb-0 md:mb-3 last-of-type:mb-0 text-grey-400">
                      “BeInCrypto là một nền tảng truyền thông thiết yếu của thị trường và được tin tưởng bởi lượng độc
                      giả đa dạng trên toàn thế giới. Họ chia sẻ chung tầm nhìn với cộng đồng crypto và phấn đấu vì mục
                      tiêu cung cấp các phân tích minh bạch và không tiên vị. Đó là một vinh dự của chúng tôi khi có
                      BeInCrypto là một đối tác truyền thông”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-el="slider-controllers">
              <div
                data-el="case-studies-prev"
                className="absolute z-10 hidden cursor-pointer md:block top-24 rtl:right-6 rtl:left-auto left-6 text-lime-600"
              >
                <svg
                  className="bic-svg-icon rotate-180 w-8 h-8"
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
              <div
                data-el="case-studies-next"
                className="absolute z-10 hidden cursor-pointer rtl:left-6 rtl:right-auto md:block top-24 right-6 text-lime-600"
              >
                <svg
                  className="bic-svg-icon w-8 h-8"
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
        <a
          className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime md:hidden w-full mt-5 rtl:flex-row-reverse"
          data-el="case-studies-link"
          target="_blank"
          href="#sales-contact"
        >
          <span>Bắt đầu với Be[IN]Crypto</span>
          <svg
            className="bic-svg-icon"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </section>
    </div>
  );
};
