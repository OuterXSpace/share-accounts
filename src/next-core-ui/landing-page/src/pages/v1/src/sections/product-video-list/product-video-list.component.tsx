import { Fragment, useMemo, useState } from 'react';
import { ProductVideoListProps } from './product-video-list.type';
import { LandingPageButtonV1 } from '../../common';

export const ProductVideoList: React.FC<ProductVideoListProps> = (props) => {
  const { data, className } = props;

  const [idSelected, setSelectedId] = useState(data?.object?.defaultFilter);

  const dataFilter = useMemo(() => {
    return {
      data: data?.object?.object?.[idSelected]?.array ?? [],
      type: data?.object?.object?.[idSelected]?.type,
    };
  }, [data?.object?.object, idSelected]);

  return (
    <section className={`section-01 ${className}`}>
      <div className="container pt-0 lg:pt-[100px] pb-0 lg:pb-[20px]">
        <div className="row">
          <div className="col-12 w-full">
            <div className="pb-0 flex items-center justify-center w-full">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[44px] lg:text-[3.75rem] font-bold font-montserrat">
                {data?.object?.title}
              </h2>
            </div>
          </div>
          <div className="col-12 mb-[50px]">
            <div className=" flex justify-center aligns-center pt-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
              {data?.object?.filter?.map((item) => {
                const { id, label } = item;
                return (
                  <LandingPageButtonV1
                    type="button"
                    onClick={() => setSelectedId(id)}
                    key={id}
                    className={idSelected === id ? 'border-2 bg-transparent text-white' : ''}
                  >
                    <span className="flex justify-center">
                      <span className="flex-grow order-10 inline-block">{label}</span>
                    </span>
                  </LandingPageButtonV1>
                );
              })}
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-center ">
              {dataFilter?.data?.map((item) => {
                const { id, video, title, link, image } = item;
                return (
                  <Fragment key={id}>
                    {dataFilter?.type === 'SHORTS' && (
                      <div
                        key={id}
                        className="col-12 md:col-6  lg:col-3 md:pr-[10px] lg:pr-[20px] last:pr-0 last:md:pr-[10px] last:lg:pr-[20px]"
                      >
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

                    {dataFilter?.type === 'VIDEO' && (
                      <div
                        key={id}
                        className="col-12 md:col-6 lg:col-4 md:pr-[10px] lg:pr-[20px] last:pr-0 last:md:pr-[10px] last:lg:pr-[20px]"
                      >
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

                    {dataFilter?.type === 'IMAGE' && (
                      <div
                        key={id}
                        className="col-12 md:col-6  lg:col-3 md:pr-[10px] lg:pr-[20px] last:pr-0 last:md:pr-[10px] last:lg:pr-[20px]"
                      >
                        <div className="video mb-[20px]">
                          <img width="100%" height="671" src={image} alt={title} />
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
          <div className="col-12">
            <div className=" flex justify-center aligns-center pt-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
              <LandingPageButtonV1 link={data?.object?.button?.link}>
                <span className="flex justify-center">
                  <span className="flex-grow order-10 inline-block">{data?.object?.button?.label}</span>
                </span>
              </LandingPageButtonV1>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
