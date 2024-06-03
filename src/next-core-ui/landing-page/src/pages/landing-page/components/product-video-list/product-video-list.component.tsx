import { ProductVideoListProps } from './product-video-list.type';

export const ProductVideoList: React.FC<ProductVideoListProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="pb-[80px] flex aligns-center justify-center">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[3.75rem] font-bold font-montserrat">
                {data?.object?.title}
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {data?.object?.array?.map((item) => {
                const { id, video, title, link } = item;
                return (
                  <div key={id} className="col-sm-4 sm:col-sm-12 md:col-sm-12 lg:col-sm-4">
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
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className=" flex justify-center aligns-center pt-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
            <a
              href={data?.object?.button?.link}
              className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat font-bold leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
            >
              <span className="flex justify-center">
                <span className="flex-grow order-10 inline-block">{data?.object?.button?.label}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
