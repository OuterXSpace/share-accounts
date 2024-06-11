import Link from 'next/link';
import { FooterV4Props } from './footer.type';
import IonIcon from '@reacticons/ionicons';

export const FooterV4: React.FC<FooterV4Props> = (props) => {
  const { data, className } = props;

  return (
    <div className="relative z-20 footer [.dark_&]:text-white text-dark-grey-700">
      <footer className="px-6 pt-10 pb-10 mt-10 lg:mt-12 rounded-2xl lg:pt-11 lg:pb-15 lg:px-12 bg-grey-100 [.dark_&]:bg-dark-grey-500">
        <Link href="https://vn.beincrypto.com" className="inline-block pb-12 m-0 bic-logo lg:pb-13">
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
          </svg>
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
              </svg>
              Cập nhật tin tức nóng hổi nhất về Crypto
            </p>
            <div className="">
              <h3 className="mb-4 lg:mb-6 text-[3.25rem] font-bold leading-1 lg:hrt6 block">
                Đăng ký nhận bảng tin của chúng tôi
              </h3>
              <Link
                className="pt-[0.8125rem] pb-[0.8125rem] transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 dark:bg-lime-600 dark:hover:bg-lime-700 bic-c-button-primary-lime dark:text-dark-grey-700 dark:border-lime-600 dark:hover:border-lime-700 w-full md:max-w-60"
                href="https://beincrypto.com/newsletters/"
                target="_blank"
              >
                <span>Đăng ký</span>
              </Link>
            </div>
          </div>
          <div className="w-full footer-menu mt-15 lg:mt-0 lg:max-w-[490px]">
            <div className="menu-footer-main-menu-container">
              <ul id="menu-footer-main-menu" className="footer-menu flex flex-wrap lg:flex-nowrap lg:justify-between">
                <li
                  id="menu-item-83631"
                  className="w-1/2 last:w-full lg:w-auto lg:last:w-auto last:mt-9 lg:last:mt-0 [&:last-child>.sub-menu]:grid [&:last-child>.sub-menu]:grid-cols-2 lg:[&:last-child>.sub-menu]:block"
                >
                  <h2 className="menu-title s3 text-grey-600  mb-5 lg:mb-6 ">Công ty</h2>
                  <nav className="sub-menu">
                    <Link
                      href="/about/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Về chúng tôi
                      </span>
                    </Link>
                    <Link
                      href="https://beincrypto.com/careers/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Nghề nghiệp 🚀
                      </span>
                    </Link>
                    <Link
                      href="/our-team/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Đội ngũ
                      </span>
                    </Link>
                    <Link
                      href="https://vn.beincrypto.com/cac-tac-gia-cua-chung-toi/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Các Tác Giả Của Chúng Tôi
                      </span>
                    </Link>
                  </nav>
                </li>
                <li
                  id="menu-item-83632"
                  className="w-1/2 last:w-full lg:w-auto lg:last:w-auto last:mt-9 lg:last:mt-0 [&:last-child>.sub-menu]:grid [&:last-child>.sub-menu]:grid-cols-2 lg:[&:last-child>.sub-menu]:block"
                >
                  <h2 className="menu-title s3 text-grey-600  mb-5 lg:mb-6 ">Sản phẩm</h2>
                  <nav className="sub-menu">
                    <Link
                      href="/tin-moi/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Tin Tức
                      </span>
                    </Link>
                    <Link
                      href="/price/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Tiền điện tử
                      </span>
                    </Link>
                    <Link
                      href="/exchanges/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Sàn giao dịch
                      </span>
                    </Link>
                    <Link
                      href="/learn/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Kinh nghiệm
                      </span>
                    </Link>
                  </nav>
                </li>
                <li
                  id="menu-item-83633"
                  className="w-1/2 last:w-full lg:w-auto lg:last:w-auto last:mt-9 lg:last:mt-0 [&:last-child>.sub-menu]:grid [&:last-child>.sub-menu]:grid-cols-2 lg:[&:last-child>.sub-menu]:block"
                >
                  <h2 className="menu-title s3 text-grey-600  mb-5 lg:mb-6 ">Nguồn lực</h2>
                  <nav className="sub-menu">
                    <Link
                      href="/beincrypto-sales/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Quảng cáo
                      </span>
                    </Link>
                    <Link
                      href="https://beincrypto.com/jobs/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Việc làm từ xa
                      </span>
                    </Link>
                    <Link
                      href="/lien-he-voi-chung-toi/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Liên hệ
                      </span>
                    </Link>
                    <Link
                      href="/the-trust-project/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Dự Án Trust
                      </span>
                    </Link>
                    <Link
                      href="https://vn.beincrypto.com/methodology/"
                      className="flex items-center mb-3 no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600 hover:no-underline gap-x-2 "
                    >
                      <span className="flex items-center text-3.5 font-medium leading-5 normal-case lg:text-4 lg:leading-6">
                        Phương pháp xác minh
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
          <ul className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-x-7 lg:gap-x-5">
            <li className="">
              <Link href="/terms-conditions/">
                <span className="flex items-center text-3 font-medium leading-5 normal-case lg:text-3.5">
                  Điều khoản
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/privacy-policy/">
                <span className="flex items-center text-3 font-medium leading-5 normal-case lg:text-3.5">Riêng tư</span>
              </Link>
            </li>
            <li className="">
              <Link href="/disclaimer/">
                <span className="flex items-center text-3 font-medium leading-5 normal-case lg:text-3.5">
                  Tuyên bố miễn trừ trách nhiệm
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center order-1 w-full pl-0 ml-0 gap-x-5 lg:gap-x-4 lg:order-3 lg:justify-end">
          <Link
            href="https://twitter.com/Beincrypto_vnm"
            className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
            target="_blank"
          >
            <i className="icon-twitter" />
          </Link>
          <Link
            href="https://www.facebook.com/beincrypto.vn"
            className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
            target="_blank"
          >
            <IonIcon name="logo-facebook" />
          </Link>
          <Link
            href="https://t.me/beincrypto_vn"
            className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
            target="_blank"
          >
            <IonIcon name="logo-pinterest" />
          </Link>
          <Link
            href="https://www.tiktok.com/@beincrypto_vn"
            className="text-4 hover:no-underline hover:text-blue-600 [.dark_&]:hover:text-lime-600"
            target="_blank"
          >
            <IonIcon name="logo-tiktok" />
          </Link>
        </div>
      </div>
    </div>
  );
};