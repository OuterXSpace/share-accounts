import Link from 'next/link';
import { NewsAndTopReadV4Props } from './news-and-top-read.type';

export const NewsAndTopReadV4: React.FC<NewsAndTopReadV4Props> = (props) => {
  const { data, className } = props;

  return (
    <section className={`py-4 mt-5 mb-5 lg:px-5 ${className}`}>
      <div className="flex items-center mb-5 ">
        <h3 className="text-2xl font-bold leading-2.5 text-dark-grey-700 mb-0">{data?.object?.title}</h3>
        <Link
          className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-medium gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary ml-auto md:flex"
          href={data?.object?.button?.link ?? ''}
        >
          <span>{data?.object?.button?.label}</span>
        </Link>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 lg:pr-4">
          <div className="flex flex-wrap -mx-3">
            {data?.object?.array?.map((item) => {
              const { id, title, imageUrl, link } = item;

              return (
                <div key={id} className="flex flex-col h-auto w-full md:w-6/12 px-3 mb-5">
                  <div className="shrink-0 rounded-lg md:rounded-xl mb-2.5 md:mb-3 max-w-full overflow-hidden">
                    <Link href={link ?? ''}>
                      <img
                        decoding="async"
                        loading="lazy"
                        className="lazy object-cover aspect-video w-full entered loaded"
                        data-sizes="75vw"
                        src={imageUrl}
                        alt={title}
                        width={310}
                        height={196}
                        data-ll-status="loaded"
                        sizes="75vw"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between w-full lg:h-full">
                    <div className="flex flex-wrap gap-y-0.5 text-dark-grey-700 p4  mb-1 gap-x-3" />
                    <h5 className="h-full s2 s2--medium mb-2 lg:s1 lg:s1--medium">
                      <Link href={link ?? ''} className="hover:no-underline">
                        {title}
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
                        <span className="font-normal body">15 mins</span>
                      </span>
                      <time className="date whitespace-nowrap" dateTime="2023-01-18T11:00:00+07:00">
                        1 ngày trước
                      </time>{' '}
                      <time className="ago whitespace-nowrap" dateTime="2023-01-18T11:00:00+07:00">
                        Th1 18, 2023
                      </time>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mt-5 lg:w-4/12 lg:mt-0 lg:px-7">
          <div className="most-read-content rounded-md py-4.5 bg-dark-grey-500 pr-3 ">
            <div className="most-read-content-title pl-3 pb-2.5">
              <span className="block h7 md:h5 text-white">{data?.object?.object?.title}</span>
            </div>
            <ul className="!pl-0 !mb-0">
              {data?.object?.object?.array?.map((item) => {
                const { id, title, link } = item;

                return (
                  <li key={id} className=" p-3 before:!hidden">
                    <Link className="block s3 s3--medium s3--normal-case  !text-white " href={link ?? ''}>
                      {title}{' '}
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
                        29 mins
                      </div>
                      <span className="ago block">2 ngày trước</span>
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
