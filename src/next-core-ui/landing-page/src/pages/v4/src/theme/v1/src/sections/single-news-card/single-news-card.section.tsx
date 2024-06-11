import Link from 'next/link';
import { SingleNewsCardV4Props } from './single-news-card.type';

export const SingleNewsCardV4: React.FC<SingleNewsCardV4Props> = (props) => {
  const { data, className } = props;

  return (
    <section className={`mt-2 mb-5 mt-md-4 ${className}`}>
      <div className="flex flex-wrap -mx-4">
        {/* hot */}
        <div className="hot-article w-full px-5 md:w-6/12">
          <div className="mb-5 -mr-5 lg:mb-0 lg:-ml-5  lg:px-5 lg:py-5">
            <figure className="w-full">
              <Link
                href={data?.object?.hotArticle?.link ?? ''}
                className="hover:no-underline"
                title={data?.object?.hotArticle?.title ?? ''}
              >
                <img
                  decoding="async"
                  className="w-full lazy entered loaded"
                  src={data?.object?.hotArticle?.image ?? ''}
                  alt={data?.object?.hotArticle?.title ?? ''}
                  width={546}
                  height={328}
                  sizes="75vw"
                  data-ll-status="loaded"
                />
              </Link>
            </figure>
            <div className="relative bg-dark-grey-700 ">
              <div className="relative px-4 pt-5 pb-3 -ml-2 bg-lime-600 -left-2 -top-2 lg:-left-4 lg:-top-4 lg:py-6 lg:pl-4 lg:pr-6 lg:-ml-0">
                <h2 className="mb-2 text-[38px] font-bold leading-2 lg:h2 ">
                  <Link href={data?.object?.hotArticle?.link ?? ''} className="hover:no-underline" target="_blank">
                    {data?.object?.hotArticle?.title ?? ''}{' '}
                  </Link>
                </h2>
                <div className="flex gap-2 meta  p5">
                  <div className="flex items-center mr-6 whitespace-nowrap gap-x-1.5">
                    <svg
                      className="bic-svg-icon"
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
                    2 mins
                  </div>{' '}
                  <span className="hidden date lg:inline">8 Tháng Sáu 2024, 01:00 +07</span>
                  <span className="date lg:hidden">Th6 8, 2024</span>
                  <span className="ago">33 phút trước</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* featured */}
        <div className="featured-article w-full px-5 md:w-3/12">
          <ul className="unstyled-content-list">
            {data?.object?.featuredArticle?.array?.map((item) => {
              const { id, title, link, createAt, updateAt } = item;
              return (
                <li key={id} className="pb-2 mb-5 list-none border-b border-grey-300  lg:mb-0 lg:mt-5">
                  <Link
                    href={link}
                    className="block mb-1 font-semibold text-dark-grey-700  s2 s2--medium lg:s1 lg:s1--medium"
                  >
                    {title}
                  </Link>
                  <div className="flex items-center text-grey-500 p5">
                    <div className="flex items-center mr-6 whitespace-nowrap gap-x-1.5">
                      <svg
                        className="bic-svg-icon"
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
                      </svg>
                      3 mins
                    </div>{' '}
                    <div>5 giờ trước</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* most */}
        <div className="most-read w-full px-5 md:w-3/12 lg:pr-5 lg:pl-7">
          <div className="most-read-content rounded-md py-4.5 bg-dark-grey-500 pr-3 ">
            <div className="most-read-content-title pl-3 pb-2.5">
              <span className="block h7 md:text-[26px] md:font-bold md:leading-8 text-white pt-4">Đọc nhiều nhất</span>
            </div>
            <ul className="!pl-0 !mb-0">
              {data?.object?.mostReadArticle?.array?.map((item) => {
                const { id, title, link } = item;
                return (
                  <li key={id} className=" p-3 before:!hidden">
                    <Link className="block s3 s3--medium s3--normal-case  !text-white " href={link}>
                      {title}
                    </Link>
                    <div className="p5  text-grey-500   mb-2 mt-1 flex items-center">
                      <div className="mr-6 flex items-center gap-x-1.5 whitespace-nowrap">
                        <svg
                          className="bic-svg-icon"
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
                        3 mins
                      </div>
                      <span className="ago block">4 ngày trước</span>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
