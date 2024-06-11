import React from 'react';
import { ILandingPageMenuDesktopV4Props } from './menu-desktop.type';
import Link from 'next/link';

export const LandingPageMenuDesktopV4: React.FC<ILandingPageMenuDesktopV4Props> = (props) => {
  const { data, className } = props;

  return (
    <nav
      className={`${className} relative pb-5.5 mb-8 max-w-full lg:pb-10 lg:mb-10 [&_.bgweb]:-top-1/4 [&_.bgweb]:lg:-top-2/4 `}
    >
      <div className="relative z-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:mb-16 bg-dark-grey-700 border-dark-grey-700">
        <div className="container flex items-center justify-between py-4">
          <Link data-el="main-logo" href="https://vn.beincrypto.com/" title="BeInCrypto Việt Nam">
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
            </svg>
          </Link>
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
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//beincrypto.com/sales/"
                      target="_self"
                    >
                      English
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"br.beincrypto.com\/beincrypto-vendas\/\r","iso":"pt_BR","native_name":"Portugu\u00eas"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link className="inline-block w-full p-2 p4 p4--ns hover:no-underline" href="/" target="_self">
                      Português
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"es.beincrypto.com\/beincrypto-ventas\/\r","iso":"es_ES","native_name":"Espa\u00f1ol"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//es.beincrypto.com/beincrypto-ventas/"
                      target="_self"
                    >
                      Español
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"ru.beincrypto.com\/beincrypto-sales-marketing\/\r","iso":"ru_RU","native_name":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link className="inline-block w-full p-2 p4 p4--ns hover:no-underline" href="/" target="_self">
                      Русский
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"tr.beincrypto.com\/beincrypto-satis-ve-pazarlama\/\r","iso":"tr_TR","native_name":"T\u00fcrk\u00e7e"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//tr.beincrypto.com/beincrypto-satis-ve-pazarlama/"
                      target="_self"
                    >
                      Türkçe
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"kr.beincrypto.com\/consulting\/\r","iso":"ko_KR","native_name":"\ud55c\uad6d\uc5b4"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//kr.beincrypto.com/consulting/"
                      target="_self"
                    >
                      한국어
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"de.beincrypto.com\/verkaufsseite\/\r","iso":"de_DE","native_name":"Deutsch"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//de.beincrypto.com/verkaufsseite/"
                      target="_self"
                    >
                      Deutsch
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"fr.beincrypto.com\/beincrypto-publicite\/\r","iso":"fr_FR","native_name":"Fran\u00e7ais"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//fr.beincrypto.com/beincrypto-publicite/"
                      target="_self"
                    >
                      Français
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"pl.beincrypto.com\/wspolpraca-beincrypto\/\r","iso":"pl_PL","native_name":"Polski"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//pl.beincrypto.com/wspolpraca-beincrypto/"
                      target="_self"
                    >
                      Polski
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"id.beincrypto.com\/pasang-iklan\/\r","iso":"id_ID","native_name":"Bahasa Indonesia"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//id.beincrypto.com/pasang-iklan/"
                      target="_self"
                    >
                      Bahasa Indonesia
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"th.beincrypto.com\/sales\/\r","iso":"th","native_name":"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//th.beincrypto.com/sales/"
                      target="_self"
                    >
                      ภาษาไทย
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"ar.beincrypto.com\/sales\/","iso":"ar","native_name":"\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//ar.beincrypto.com/sales/"
                      target="_self"
                    >
                      اَلْعَرَبِيَّةُ
                    </Link>
                  </li>
                  <li
                    data-el="bic-c-language-selector-item"
                    data-lang='{"url":"jp.beincrypto.com\/beincrypto%e3%82%bb%e3%83%bc%e3%83%ab%e3%82%b9\/\r","iso":"ja","native_name":"\u65e5\u672c\u8a9e"}'
                    className="mb-2 rounded-md cursor-pointer last:mb-0  hover:bg-dark-grey-700"
                  >
                    <Link
                      className="inline-block w-full p-2 p4 p4--ns hover:no-underline"
                      href="//jp.beincrypto.com/beincrypto%e3%82%bb%e3%83%bc%e3%83%ab%e3%82%b9/"
                      target="_self"
                    >
                      日本語
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime hidden lg:block"
              href="#sales-contact"
              target=""
            >
              <span>Yêu cầu trải nghiệm</span>
            </Link>
            <Link
              className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-small gap-x-2 btn-3 px-3 py-1.5 rounded-md btn-small bg-lime-600 hover:bg-lime-700 border-dark-grey-700 text-dark-grey-700
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-lime lg:hidden"
              href="#sales-contact"
              target=""
            >
              <span>Yêu cầu trải nghiệm</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
