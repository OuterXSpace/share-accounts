import { Fragment, useCallback, useMemo, useState } from 'react';
import { ProductVideoListProps } from './product-video-list.type';

export const ProductVideoList: React.FC<ProductVideoListProps> = (props) => {
  const { data, className } = props;

  const [isTypeVideo, setTypeVideo] = useState(data?.object?.defaultFilter);

  const changeTypeVideo = useCallback((type: 'SORTS' | 'VIDEO' | 'TIKTOK') => {
    setTypeVideo(type);
  }, []);

  const dataFilterVideo = useMemo(() => data?.object?.object?.[isTypeVideo] ?? [], [data?.object?.object, isTypeVideo]);

  return (
    <section className={`section-01 ${className}`}>
      <div className="container pt-[100px] py-[20px]">
        <div className="row">
          <div className="col-sm-12 w-full">
            <div className="pb-[80px] flex items-center justify-center w-full">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[32px] md:text-[44px] lg:text-[3.75rem] font-bold font-montserrat">
                {data?.object?.title}
              </h2>
            </div>
          </div>
          <div className="col-sm-12 mb-[50px]">
            <div className=" flex justify-center aligns-center pt-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
              {data?.object?.filter?.map((item) => {
                const { id, label, sort } = item;
                return (
                  <button
                    onClick={() => changeTypeVideo(sort)}
                    key={id}
                    className="mr-5 border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
                  >
                    <span className="flex justify-center">
                      <span className="flex-grow order-10 inline-block">{label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="container">
            <div className="row justify-center ">
              {dataFilterVideo?.map((item) => {
                const { id, video, title, link } = item;
                return (
                  <Fragment key={id}>
                    {isTypeVideo === 'SHORTS' && (
                      <div key={id} className="col-6 sm:col-12 md:col-6 md:p-[10px] lg:p-[20px]">
                        <div className="video mb-[20px]">
                          <iframe
                            width="100%"
                            height="671"
                            src={video}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                        <div className="content pb-[30px] min-w-full">
                          <a
                            href={link}
                            className="leading-1 text-15 font-medium fill-[#ffffffbf] text-[#ffffffbf] bg-[#02010100] border-[none] p-0"
                          >
                            <span className="elementor-button-text">{title}</span>
                          </a>
                        </div>
                      </div>
                    )}
                    {isTypeVideo === 'TIKTOK' && (
                      <div key={id} className="col-6 sm:col-12 md:col-6 md:p-[10px] lg:p-[20px]">
                        <div className="video mb-[20px]">
                          <blockquote className="tiktok-embed w-full" cite={video} />
                          <script async src="https://www.tiktok.com/embed.js" />
                        </div>
                        <div className="content pb-[30px] min-w-full">
                          <a
                            href={link}
                            className="leading-1 text-15 font-medium fill-[#ffffffbf] text-[#ffffffbf] bg-[#02010100] border-[none] p-0"
                          >
                            <span className="elementor-button-text">{title}</span>
                          </a>
                        </div>
                      </div>
                    )}
                    {isTypeVideo === 'VIDEO' && (
                      <div key={id} className="col-4 sm:col-12 md:col-4 md:p-[10px] lg:p-[20px]">
                        <div className="video mb-[20px]">
                          <iframe
                            width="100%"
                            height="250px"
                            src={video}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                        <div className="content pb-[30px] min-w-full">
                          <a
                            href={link}
                            className="leading-1 text-15 font-medium fill-[#ffffffbf] text-[#ffffffbf] bg-[#02010100] border-[none] p-0"
                          >
                            <span className="elementor-button-text">{title}</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {!data?.object?.button?.hidden && (
          <div className="col-sm-12">
            <div className=" flex justify-center aligns-center pt-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
              <a
                href={data?.object?.button?.link}
                className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
              >
                <span className="flex justify-center">
                  <span className="flex-grow order-10 inline-block">{data?.object?.button?.label}</span>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
