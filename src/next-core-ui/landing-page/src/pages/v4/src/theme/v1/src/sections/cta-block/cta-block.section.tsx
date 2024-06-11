import Link from 'next/link';
import { LearnSectionV4Props } from './cta-block.type';

export const CtaBlockSectionV4: React.FC<LearnSectionV4Props> = (props) => {
  const { data, className } = props;

  return (
    <section data-el="bic-b-cta-blocks" className="cta-block bg-dark-grey-700 mx-[calc(50%-50vw)] py-10">
      <div className="container border-b border-grey-300">
        <div className="max-w-screen-lg pb-10 mx-auto lg:w-8/12">
          <div className="flex flex-wrap">
            <div className="px-4 mb-3 lg:w-6/12">
              <div
                className="h-full px-5 py-10 bg-no-repeat bg-cover border rounded-lg border-grey-300"
                style={{
                  backgroundImage: 'url(https://s32697.pcdn.co/wp-content/uploads/2022/09/aboutus.png)',
                }}
              >
                <div className="flex flex-col justify-between h-full text-center">
                  <h6 className="mb-5 text-center text-white">
                    Ưu tiên của chúng tôi là cung cấp cho bạn những thông tin chi tiết chính xác và minh bạch nhất.
                  </h6>
                  <div className="btn-wrapper">
                    <Link
                      className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
                disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary   btn btn-primary"
                      href="/about/"
                      target=""
                    >
                      <span>Về chúng tôi</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mb-3 lg:w-6/12">
              <div
                className="h-full px-5 py-10 bg-no-repeat bg-cover border rounded-lg border-grey-300"
                style={{
                  backgroundImage: 'url(https://s32697.pcdn.co/wp-content/uploads/2022/09/team.png)',
                }}
              >
                <div className="flex flex-col justify-between h-full text-center">
                  <h6 className="mb-5 text-white">Tìm hiểu về Đội ngũ chuyên viên của chúng tôi trên toàn cầu!</h6>
                  <div className="btn-wrapper">
                    <a
                      className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
                disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary   btn btn-primary"
                      href="/editorial-team/"
                      target=""
                    >
                      <span>Đội ngũ biên tập</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
