import Link from 'next/link';
import { CtaBlockSectionV4Props } from './learn.type';

export const LearnSectionV4: React.FC<CtaBlockSectionV4Props> = (props) => {
  const { data, className } = props;

  return (
    <section className="pb-5 mb-5 border-b border-grey-300">
      <div className="flex flex-wrap">
        <div className="mb-4 lg:w-4/12">
          <h3 className="font-bold text-blue-600 uppercase ">/ Kinh nghiệm</h3>
          <h1 className="mb-4 font-sans font-black leading-tight">
            BeInCrypto E-Book mới, Tính bền vững &amp; Tiền điện tử: một phân tích.
          </h1>
          <div className="mb-3" />
          <Link
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
                disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary   btn btn-primary"
            href="https://beincrypto.com/wp-content/uploads/2022/07/1-merged-compressed.pdf"
            target="_blank"
          >
            <span>Tải xuống ngay bây giờ (Miễn phí!)</span>
          </Link>
        </div>
        <div className="flex flex-wrap items-center mb-4 -mx-2 lg:w-8/12">
          <div className="flex justify-center w-6/12 px-2 mb-4 lg:w-3/12 lg:even:-mt-10">
            <Link
              href="/archive/?topics%5B%5D=tien-dien-tu"
              className="w-full px-5 py-5 text-white lg:w-3/4 rounded-xl bg-dark-grey-700   hover:bg-lime-600 hover:text-dark-grey-700 hover:no-underline"
            >
              <div className="mb-10 font-bold truncate text-5">Kiến thức</div>
              <div className="flex justify-end text-right">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  className="fill-currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2214 0.514607L24.5667 24.5555L0.525475 24.2339L0.499264 22.3809L21.3872 22.6558L0.209131 1.49857L1.49616 0.210272L22.6689 21.3622L22.3789 0.49036L24.2214 0.514607Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex justify-center w-6/12 px-2 mb-4 lg:w-3/12 lg:even:-mt-10">
            <Link
              href="/archive/?topics%5B%5D=noi-bat"
              className="w-full px-5 py-5 text-white lg:w-3/4 rounded-xl bg-dark-grey-700   hover:bg-lime-600 hover:text-dark-grey-700 hover:no-underline"
            >
              <div className="mb-10 font-bold truncate text-5">Trade coin</div>
              <div className="flex justify-end text-right">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  className="fill-currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2214 0.514607L24.5667 24.5555L0.525475 24.2339L0.499264 22.3809L21.3872 22.6558L0.209131 1.49857L1.49616 0.210272L22.6689 21.3622L22.3789 0.49036L24.2214 0.514607Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex justify-center w-6/12 px-2 mb-4 lg:w-3/12 lg:even:-mt-10">
            <Link
              href="/archive/?topics%5B%5D=defi"
              className="w-full px-5 py-5 text-white lg:w-3/4 rounded-xl bg-dark-grey-700   hover:bg-lime-600 hover:text-dark-grey-700 hover:no-underline"
            >
              <div className="mb-10 font-bold truncate text-5">DeFi</div>
              <div className="flex justify-end text-right">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  className="fill-currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2214 0.514607L24.5667 24.5555L0.525475 24.2339L0.499264 22.3809L21.3872 22.6558L0.209131 1.49857L1.49616 0.210272L22.6689 21.3622L22.3789 0.49036L24.2214 0.514607Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex justify-center w-6/12 px-2 mb-4 lg:w-3/12 lg:even:-mt-10">
            <Link
              href="/archive/?topics%5B%5D=du-an"
              className="w-full px-5 py-5 text-white lg:w-3/4 rounded-xl bg-dark-grey-700   hover:bg-lime-600 hover:text-dark-grey-700 hover:no-underline"
            >
              <div className="mb-10 font-bold truncate text-5">Dự án</div>
              <div className="flex justify-end text-right">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  className="fill-currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2214 0.514607L24.5667 24.5555L0.525475 24.2339L0.499264 22.3809L21.3872 22.6558L0.209131 1.49857L1.49616 0.210272L22.6689 21.3622L22.3789 0.49036L24.2214 0.514607Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
